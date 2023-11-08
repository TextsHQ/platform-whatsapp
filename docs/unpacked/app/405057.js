var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrayBufferToHexPadded = function (e) {
  return Array.from(new Uint8Array(e)).map(e => e.toString(16).padStart(2, "0")).join("");
};
exports.combine = function (e) {
  if (e.length === 0) {
    throw (0, a.default)("buffers length is zero");
  }
  if (e.length === 1) {
    return e[0];
  }
  const t = e.map(e => e.byteLength).reduce((e, t) => e + t);
  const n = new Uint8Array(t);
  let r;
  let i = 0;
  for (r = 0; r < e.length; r++) {
    n.set(new Uint8Array(e[r]), i);
    i += e[r].byteLength;
  }
  return n.buffer;
};
exports.hexToUint8Array = function (e) {
  return Uint8Array.from(e.split(" ").map(e => parseInt(e, 16)));
};
exports.split = function (e, t, n) {
  if (t < 0 || n < 0) {
    throw (0, a.default)("buffers length is zero");
  }
  const r = new Array(3);
  const i = new Uint8Array(e);
  r[0] = i.slice(0, t).buffer;
  r[1] = i.slice(t, t + n).buffer;
  r[2] = i.slice(t + n).buffer;
  return r;
};
exports.syncKeyIdToHex = function (e) {
  return Array.from(new Uint8Array((0, o.fromSyncKeyId)(e))).map(e => e.toString(16)).toString().replace(/,/g, " ");
};
exports.syncKeyIdsEqual = function (e, t) {
  return (0, i.arrayBuffersEqual)((0, o.fromSyncKeyId)(e), (0, o.fromSyncKeyId)(t));
};
exports.to64BitNetworkOrder = function (e) {
  const t = new ArrayBuffer(8);
  new DataView(t).setUint32(4, e, false);
  return t;
};
exports.toUtf8 = function (e) {
  return s.encode(e);
};
var i = require("./31549.js");
var a = r(require("./415227.js"));
var o = require("./347197.js");
const s = new TextEncoder();