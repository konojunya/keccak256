import { Keccak256 } from "./";
import { keccak256 } from "@ethersproject/keccak256";

describe("keccak256", () => {
  test.each(["Hello World"])("keccak256(%p)", (input) => {
    const instance = new Keccak256(input);
    const expected = keccak256(Buffer.from(input));
    expect(`0x${instance.digest()}`).toBe(expected);
  });
});
