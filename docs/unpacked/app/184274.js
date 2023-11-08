Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.writeEvent = function (e, t, n, r) {
  return i(e, t, n, r ? 1 : 5);
};
exports.writeField = function (e, t, n, r) {
  return i(e, t, n, r ? 2 : 6);
};
exports.writeGlobalAttribute = function (e, t, n) {
  return i(e, t, n, 0);
};
var r = require("./904704.js");
function i(e, t, n, i) {
  if (n == null) {
    if (i === 0) {
      a(e, t, i);
    }
  } else if (typeof n == "number" && n === (n | 0)) {
    if (n === 0) {
      a(e, t, i | 16);
    } else if (n === 1) {
      a(e, t, i | 32);
    } else if (n >= -128 && n < 128) {
      a(e, t, i | 48);
      e.writeInt8(n);
    } else if (n >= -32768 && n < 32768) {
      a(e, t, i | 64);
      e.writeInt16(n);
    } else {
      a(e, t, i | 80);
      e.writeInt32(n);
    }
  } else if (typeof n == "number") {
    a(e, t, i | 112);
    e.writeFloat64(n);
  } else if (typeof n == "string") {
    const o = (0, r.numUtf8Bytes)(n);
    if (o < 256) {
      a(e, t, i | 128);
      e.writeUint8(o);
    } else if (o < 65536) {
      a(e, t, i | 144);
      e.writeUint16(o);
    } else {
      a(e, t, i | 160);
      e.writeUint32(o);
    }
    e.writeString(n);
  }
}
function a(e, t, n) {
  if (t < 256) {
    e.writeUint8(n);
    e.writeUint8(t);
  } else {
    e.writeUint8(n | 8);
    e.writeUint16(t);
  }
}