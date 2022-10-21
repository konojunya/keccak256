// ref: https://github.com/cryptocoinjs/keccak/blob/af2f2926dd629b2bd6fce7214881b9c3c1a1aed8/lib/keccak-state-unroll.js#L1
const P1600_ROUND_CONSTANTS = [
  1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0,
  2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0,
  2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905,
  2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0,
  2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649,
  0, 2147516424, 2147483648,
];

export function keccakF1600(state: number[]) {
  // keccak-f関数
  // 124ラウンド処理する
  // theta -> rho -> pi -> chi -> iota
  for (let round = 0; round < 24; ++round) {
    // theta
    const lo0 = state[0] ^ state[10] ^ state[20] ^ state[30] ^ state[40];
    const hi0 = state[1] ^ state[11] ^ state[21] ^ state[31] ^ state[41];
    const lo1 = state[2] ^ state[12] ^ state[22] ^ state[32] ^ state[42];
    const hi1 = state[3] ^ state[13] ^ state[23] ^ state[33] ^ state[43];
    const lo2 = state[4] ^ state[14] ^ state[24] ^ state[34] ^ state[44];
    const hi2 = state[5] ^ state[15] ^ state[25] ^ state[35] ^ state[45];
    const lo3 = state[6] ^ state[16] ^ state[26] ^ state[36] ^ state[46];
    const hi3 = state[7] ^ state[17] ^ state[27] ^ state[37] ^ state[47];
    const lo4 = state[8] ^ state[18] ^ state[28] ^ state[38] ^ state[48];
    const hi4 = state[9] ^ state[19] ^ state[29] ^ state[39] ^ state[49];

    let lo = lo4 ^ ((lo1 << 1) | (hi1 >>> 31));
    let hi = hi4 ^ ((hi1 << 1) | (lo1 >>> 31));
    const t1slo0 = state[0] ^ lo;
    const t1shi0 = state[1] ^ hi;
    const t1slo5 = state[10] ^ lo;
    const t1shi5 = state[11] ^ hi;
    const t1slo10 = state[20] ^ lo;
    const t1shi10 = state[21] ^ hi;
    const t1slo15 = state[30] ^ lo;
    const t1shi15 = state[31] ^ hi;
    const t1slo20 = state[40] ^ lo;
    const t1shi20 = state[41] ^ hi;
    lo = lo0 ^ ((lo2 << 1) | (hi2 >>> 31));
    hi = hi0 ^ ((hi2 << 1) | (lo2 >>> 31));
    const t1slo1 = state[2] ^ lo;
    const t1shi1 = state[3] ^ hi;
    const t1slo6 = state[12] ^ lo;
    const t1shi6 = state[13] ^ hi;
    const t1slo11 = state[22] ^ lo;
    const t1shi11 = state[23] ^ hi;
    const t1slo16 = state[32] ^ lo;
    const t1shi16 = state[33] ^ hi;
    const t1slo21 = state[42] ^ lo;
    const t1shi21 = state[43] ^ hi;
    lo = lo1 ^ ((lo3 << 1) | (hi3 >>> 31));
    hi = hi1 ^ ((hi3 << 1) | (lo3 >>> 31));
    const t1slo2 = state[4] ^ lo;
    const t1shi2 = state[5] ^ hi;
    const t1slo7 = state[14] ^ lo;
    const t1shi7 = state[15] ^ hi;
    const t1slo12 = state[24] ^ lo;
    const t1shi12 = state[25] ^ hi;
    const t1slo17 = state[34] ^ lo;
    const t1shi17 = state[35] ^ hi;
    const t1slo22 = state[44] ^ lo;
    const t1shi22 = state[45] ^ hi;
    lo = lo2 ^ ((lo4 << 1) | (hi4 >>> 31));
    hi = hi2 ^ ((hi4 << 1) | (lo4 >>> 31));
    const t1slo3 = state[6] ^ lo;
    const t1shi3 = state[7] ^ hi;
    const t1slo8 = state[16] ^ lo;
    const t1shi8 = state[17] ^ hi;
    const t1slo13 = state[26] ^ lo;
    const t1shi13 = state[27] ^ hi;
    const t1slo18 = state[36] ^ lo;
    const t1shi18 = state[37] ^ hi;
    const t1slo23 = state[46] ^ lo;
    const t1shi23 = state[47] ^ hi;
    lo = lo3 ^ ((lo0 << 1) | (hi0 >>> 31));
    hi = hi3 ^ ((hi0 << 1) | (lo0 >>> 31));
    const t1slo4 = state[8] ^ lo;
    const t1shi4 = state[9] ^ hi;
    const t1slo9 = state[18] ^ lo;
    const t1shi9 = state[19] ^ hi;
    const t1slo14 = state[28] ^ lo;
    const t1shi14 = state[29] ^ hi;
    const t1slo19 = state[38] ^ lo;
    const t1shi19 = state[39] ^ hi;
    const t1slo24 = state[48] ^ lo;
    const t1shi24 = state[49] ^ hi;

    // rho & pi
    const t2slo0 = t1slo0;
    const t2shi0 = t1shi0;
    const t2slo16 = (t1shi5 << 4) | (t1slo5 >>> 28);
    const t2shi16 = (t1slo5 << 4) | (t1shi5 >>> 28);
    const t2slo7 = (t1slo10 << 3) | (t1shi10 >>> 29);
    const t2shi7 = (t1shi10 << 3) | (t1slo10 >>> 29);
    const t2slo23 = (t1shi15 << 9) | (t1slo15 >>> 23);
    const t2shi23 = (t1slo15 << 9) | (t1shi15 >>> 23);
    const t2slo14 = (t1slo20 << 18) | (t1shi20 >>> 14);
    const t2shi14 = (t1shi20 << 18) | (t1slo20 >>> 14);
    const t2slo10 = (t1slo1 << 1) | (t1shi1 >>> 31);
    const t2shi10 = (t1shi1 << 1) | (t1slo1 >>> 31);
    const t2slo1 = (t1shi6 << 12) | (t1slo6 >>> 20);
    const t2shi1 = (t1slo6 << 12) | (t1shi6 >>> 20);
    const t2slo17 = (t1slo11 << 10) | (t1shi11 >>> 22);
    const t2shi17 = (t1shi11 << 10) | (t1slo11 >>> 22);
    const t2slo8 = (t1shi16 << 13) | (t1slo16 >>> 19);
    const t2shi8 = (t1slo16 << 13) | (t1shi16 >>> 19);
    const t2slo24 = (t1slo21 << 2) | (t1shi21 >>> 30);
    const t2shi24 = (t1shi21 << 2) | (t1slo21 >>> 30);
    const t2slo20 = (t1shi2 << 30) | (t1slo2 >>> 2);
    const t2shi20 = (t1slo2 << 30) | (t1shi2 >>> 2);
    const t2slo11 = (t1slo7 << 6) | (t1shi7 >>> 26);
    const t2shi11 = (t1shi7 << 6) | (t1slo7 >>> 26);
    const t2slo2 = (t1shi12 << 11) | (t1slo12 >>> 21);
    const t2shi2 = (t1slo12 << 11) | (t1shi12 >>> 21);
    const t2slo18 = (t1slo17 << 15) | (t1shi17 >>> 17);
    const t2shi18 = (t1shi17 << 15) | (t1slo17 >>> 17);
    const t2slo9 = (t1shi22 << 29) | (t1slo22 >>> 3);
    const t2shi9 = (t1slo22 << 29) | (t1shi22 >>> 3);
    const t2slo5 = (t1slo3 << 28) | (t1shi3 >>> 4);
    const t2shi5 = (t1shi3 << 28) | (t1slo3 >>> 4);
    const t2slo21 = (t1shi8 << 23) | (t1slo8 >>> 9);
    const t2shi21 = (t1slo8 << 23) | (t1shi8 >>> 9);
    const t2slo12 = (t1slo13 << 25) | (t1shi13 >>> 7);
    const t2shi12 = (t1shi13 << 25) | (t1slo13 >>> 7);
    const t2slo3 = (t1slo18 << 21) | (t1shi18 >>> 11);
    const t2shi3 = (t1shi18 << 21) | (t1slo18 >>> 11);
    const t2slo19 = (t1shi23 << 24) | (t1slo23 >>> 8);
    const t2shi19 = (t1slo23 << 24) | (t1shi23 >>> 8);
    const t2slo15 = (t1slo4 << 27) | (t1shi4 >>> 5);
    const t2shi15 = (t1shi4 << 27) | (t1slo4 >>> 5);
    const t2slo6 = (t1slo9 << 20) | (t1shi9 >>> 12);
    const t2shi6 = (t1shi9 << 20) | (t1slo9 >>> 12);
    const t2slo22 = (t1shi14 << 7) | (t1slo14 >>> 25);
    const t2shi22 = (t1slo14 << 7) | (t1shi14 >>> 25);
    const t2slo13 = (t1slo19 << 8) | (t1shi19 >>> 24);
    const t2shi13 = (t1shi19 << 8) | (t1slo19 >>> 24);
    const t2slo4 = (t1slo24 << 14) | (t1shi24 >>> 18);
    const t2shi4 = (t1shi24 << 14) | (t1slo24 >>> 18);

    // chi
    state[0] = t2slo0 ^ (~t2slo1 & t2slo2);
    state[1] = t2shi0 ^ (~t2shi1 & t2shi2);
    state[10] = t2slo5 ^ (~t2slo6 & t2slo7);
    state[11] = t2shi5 ^ (~t2shi6 & t2shi7);
    state[20] = t2slo10 ^ (~t2slo11 & t2slo12);
    state[21] = t2shi10 ^ (~t2shi11 & t2shi12);
    state[30] = t2slo15 ^ (~t2slo16 & t2slo17);
    state[31] = t2shi15 ^ (~t2shi16 & t2shi17);
    state[40] = t2slo20 ^ (~t2slo21 & t2slo22);
    state[41] = t2shi20 ^ (~t2shi21 & t2shi22);
    state[2] = t2slo1 ^ (~t2slo2 & t2slo3);
    state[3] = t2shi1 ^ (~t2shi2 & t2shi3);
    state[12] = t2slo6 ^ (~t2slo7 & t2slo8);
    state[13] = t2shi6 ^ (~t2shi7 & t2shi8);
    state[22] = t2slo11 ^ (~t2slo12 & t2slo13);
    state[23] = t2shi11 ^ (~t2shi12 & t2shi13);
    state[32] = t2slo16 ^ (~t2slo17 & t2slo18);
    state[33] = t2shi16 ^ (~t2shi17 & t2shi18);
    state[42] = t2slo21 ^ (~t2slo22 & t2slo23);
    state[43] = t2shi21 ^ (~t2shi22 & t2shi23);
    state[4] = t2slo2 ^ (~t2slo3 & t2slo4);
    state[5] = t2shi2 ^ (~t2shi3 & t2shi4);
    state[14] = t2slo7 ^ (~t2slo8 & t2slo9);
    state[15] = t2shi7 ^ (~t2shi8 & t2shi9);
    state[24] = t2slo12 ^ (~t2slo13 & t2slo14);
    state[25] = t2shi12 ^ (~t2shi13 & t2shi14);
    state[34] = t2slo17 ^ (~t2slo18 & t2slo19);
    state[35] = t2shi17 ^ (~t2shi18 & t2shi19);
    state[44] = t2slo22 ^ (~t2slo23 & t2slo24);
    state[45] = t2shi22 ^ (~t2shi23 & t2shi24);
    state[6] = t2slo3 ^ (~t2slo4 & t2slo0);
    state[7] = t2shi3 ^ (~t2shi4 & t2shi0);
    state[16] = t2slo8 ^ (~t2slo9 & t2slo5);
    state[17] = t2shi8 ^ (~t2shi9 & t2shi5);
    state[26] = t2slo13 ^ (~t2slo14 & t2slo10);
    state[27] = t2shi13 ^ (~t2shi14 & t2shi10);
    state[36] = t2slo18 ^ (~t2slo19 & t2slo15);
    state[37] = t2shi18 ^ (~t2shi19 & t2shi15);
    state[46] = t2slo23 ^ (~t2slo24 & t2slo20);
    state[47] = t2shi23 ^ (~t2shi24 & t2shi20);
    state[8] = t2slo4 ^ (~t2slo0 & t2slo1);
    state[9] = t2shi4 ^ (~t2shi0 & t2shi1);
    state[18] = t2slo9 ^ (~t2slo5 & t2slo6);
    state[19] = t2shi9 ^ (~t2shi5 & t2shi6);
    state[28] = t2slo14 ^ (~t2slo10 & t2slo11);
    state[29] = t2shi14 ^ (~t2shi10 & t2shi11);
    state[38] = t2slo19 ^ (~t2slo15 & t2slo16);
    state[39] = t2shi19 ^ (~t2shi15 & t2shi16);
    state[48] = t2slo24 ^ (~t2slo20 & t2slo21);
    state[49] = t2shi24 ^ (~t2shi20 & t2shi21);

    // iota
    state[0] ^= P1600_ROUND_CONSTANTS[round * 2];
    state[1] ^= P1600_ROUND_CONSTANTS[round * 2 + 1];
  }

  return state;
}
