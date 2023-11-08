Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decimalStringToLongInt = function (e) {
  if (!/^-?\d+$/.test(e)) {
    __LOG__(2)`"${e}" is not a valid decimal string`;
    throw new Error("decimalStringToLongInt is given an invalid decimal string");
  }
  const t = e[0] === "-";
  const n = e.replace(/^-?0*/, "");
  const i = n.length;
  if (i < 16 || i === 16 && n <= "9007199254740991") {
    if (t) {
      return -Number(n);
    } else {
      return Number(n);
    }
  }
  if (i > 20 || i === 20 && n > "18446744073709551615" || t && (i > 19 || i === 19 && n > "9223372036854775807")) {
    __LOG__(2)`"${e}" is over 64 bits`;
    throw new Error("decimalStringToHexLong is given value over 64 bits");
  }
  let a = 0;
  let o = 0;
  for (let e = 0; e < i; e++) {
    a = a * 10 + Number(n[e]);
    o = o * 10 + Math.floor(a / 4294967296);
    a %= 4294967296;
  }
  return (0, r.createHexLongFrom32Bits)(o, a, t);
};
exports.isBiggerLongInt = function (e, t) {
  if (typeof e == "number" && typeof t == "number") {
    return e > t;
  }
  const n = typeof e == "number" ? (0, r.hexLongFromNumber)(e) : e;
  const i = typeof t == "number" ? (0, r.hexLongFromNumber)(t) : t;
  return (0, r.isBiggerHexLong)(n, i);
};
exports.longIntToDecimalString = function (e) {
  if (typeof e == "number") {
    return e.toString(10);
  }
  const t = (0, r.hexLongToHex)(e);
  const n = [0];
  let i = 0;
  for (let e = 0; e < t.length; e++) {
    i = (0, r.hexAt)(t, e);
    for (let e = 0; e < n.length; e++) {
      n[e] = n[e] * 16 + i;
      i = n[e] / 10 | 0;
      n[e] %= 10;
    }
    for (; i > 0;) {
      n.push(i % 10);
      i = i / 10 | 0;
    }
  }
  const a = n.reverse().join("");
  if ((0, r.hexLongIsNegative)(e)) {
    return "-" + a;
  } else {
    return a;
  }
};
exports.maybeNumberOrThrowIfTooLarge = undefined;
exports.numberOrThrowIfTooLarge = i;
var r = require("./390934.js");
function i(e) {
  if (typeof e != "number") {
    __LOG__(2)`${e} is not a safe integer`;
    throw new Error("numberOrThrowIfTooLarge is given a non-safe integer");
  }
  return e;
}
exports.maybeNumberOrThrowIfTooLarge = e => e == null ? e : i(e);