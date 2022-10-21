import { keccakF1600 } from "./keccakF1600";

export class Keccak256 {
  private count = 0;
  private state = Array(25).fill(0);

  // keccak256 では 1block = 136 byte
  private size = 136;

  // keccak256 は 32 byte の hash
  private cap = 32;

  private absorbedLastFewBits = false;

  public constructor(value: string) {
    const buf = Buffer.from(value);

    this.absorb(buf);
  }

  private absorb(buffer: Buffer) {
    for (let i = 0; i < buffer.length; ++i) {
      const index = ~~(this.count / 4);
      this.state[index] ^= buffer[i] << (8 * (this.count % 4));
      this.count += 1;

      if (this.count === this.size) {
        this.state = keccakF1600(this.state);
        this.count = 0;
      }
    }
  }

  private absorbLastFewBits(bits: number) {
    this.state[~~(this.count / 4)] ^= bits << (8 * (this.count % 4));

    if ((bits & 0x80) !== 0 && this.count === this.size - 1) {
      this.state = keccakF1600(this.state);
    }

    this.state[~~((this.size - 1) / 4)] ^= 0x80 << (8 * (this.count % 4));
    this.state = keccakF1600(this.state);

    this.count = 0;
    this.absorbedLastFewBits = true;
  }

  private squeeze() {
    if (!this.absorbedLastFewBits) this.absorbLastFewBits(0x01);

    const buffer = Buffer.alloc(this.cap);

    for (let i = 0; i < this.cap; ++i) {
      buffer[i] =
        (this.state[~~(this.count / 4)] >>> (8 * (this.count % 4))) & 0xff;
      this.count += 1;

      if (this.count === this.size) {
        this.state = keccakF1600(this.state);
        this.count = 0;
      }
    }

    return buffer;
  }

  public digest() {
    const result = this.squeeze();

    this.count = 0;
    this.state = Array(25).fill(0);
    this.absorbedLastFewBits = false;

    return result.toString("hex");
  }
}
