var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NUM_HEX_IN_LONG = exports.HEX_LOWER = undefined;
exports.bytesToBuffer = function (e) {
  const t = e.buffer;
  if (e.byteOffset === 0 && e.length === t.byteLength) {
    return t;
  } else {
    return t.slice(e.byteOffset, e.byteOffset + e.length);
  }
};
exports.bytesToDebugString = function (e) {
  let t = true;
  let n = e.length;
  for (; t && n;) {
    const r = e[--n];
    t = r >= 32 && r < 127;
  }
  if (t) {
    return JSON.stringify(String.fromCharCode.apply(String, e));
  } else {
    return s(e);
  }
};
exports.createHexLong = c;
exports.createHexLongFrom32Bits = function (e, t) {
  let n = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
  const r = g(e);
  const i = g(t);
  return `${n ? "-" : ""}0x${r}${i}`;
};
exports.hexAt = l;
exports.hexLongFromNumber = function (e) {
  const t = e < 0;
  return c(t ? (-e).toString(16) : e.toString(16), t);
};
exports.hexLongIsNegative = f;
exports.hexLongToHex = p;
exports.hexOrThrow = u;
exports.isBiggerHexLong = function (e, t) {
  const n = f(e);
  const r = f(t);
  if (n !== r) {
    return !n;
  }
  const i = p(e) > p(t);
  if (n) {
    return !i;
  } else {
    return i;
  }
};
exports.negateHexLong = function (e) {
  if (f(e)) {
    return e.slice(1);
  } else {
    return "-" + e;
  }
};
exports.parseHex = function (e) {
  const t = u(e);
  if (t.length % 2 != 0) {
    throw (0, i.default)(`parseHex given hex "${t}" which is not a multiple of 8-bits.`);
  }
  const n = new Uint8Array(t.length >> 1);
  for (let e = 0, r = 0; e < t.length; e += 2, r++) {
    n[r] = l(t, e) << 4 | l(t, e + 1);
  }
  return n.buffer;
};
exports.randomHex = function (e) {
  const t = new Uint8Array(e);
  self.crypto.getRandomValues(t);
  return s(t);
};
exports.toHex = s;
exports.toLowerCaseHex = function (e) {
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    t.push(o[r >> 4], o[r & 15]);
  }
  return String.fromCharCode.apply(String, t);
};
var i = r(require("./415227.js"));
exports.NUM_HEX_IN_LONG = 16;
const a = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70];
const o = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 97, 98, 99, 100, 101, 102];
function s(e) {
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    t.push(a[r >> 4], a[r & 15]);
  }
  return String.fromCharCode.apply(String, t);
}
function l(e, t) {
  const n = e.charCodeAt(t);
  if (n <= 57) {
    return n - 48;
  } else if (n <= 70) {
    return 10 + n - 65;
  } else {
    return 10 + n - 97;
  }
}
function u(e) {
  if (/[^0-9a-fA-F]/.test(e)) {
    throw (0, i.default)(`"${e}" is not a valid hex`);
  }
  return e;
}
function c(e) {
  let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
  const n = u(e);
  _(n, 16);
  return `${t ? "-" : ""}0x${d(n, 16)}`;
}
function d(e, t) {
  const n = t - e.length;
  let r = e;
  for (let e = 0; e < n; e++) {
    r = "0" + r;
  }
  return r;
}
function p(e) {
  return e.substring(e.indexOf("0x") + 2);
}
function f(e) {
  return e[0] === "-";
}
function _(e, t) {
  if (e.length > t) {
    throw (0, i.default)(`"${e}" is longer than ${t * 4} bits.`);
  }
}
function g(e) {
  if (e > 4294967295 || e < -4294967296) {
    throw (0, i.default)("uint32ToLowerCaseHex given number over 32 bits");
  }
  return d((e >= 0 ? e : 4294967296 + e).toString(16), 8);
}
exports.HEX_LOWER = o;