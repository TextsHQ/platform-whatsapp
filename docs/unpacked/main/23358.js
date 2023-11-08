Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : a;
  return e.peek(o, t);
};
const n = 3988292384;
const a = 4294967295;
let r;
function o(e, t) {
  let a = t;
  for (r || (r = function () {
    const e = new Uint32Array(256);
    for (let t = 0, a = 0, r = 0; t < 256; a = ++t) {
      for (r = 0; r < 8; ++r) {
        a = a & 1 ? a >>> 1 ^ n : a >>> 1;
      }
      e[t] = a;
    }
    return e;
  }()); e.size();) {
    a = r[(a ^ e.readUint8()) & 255] ^ a >>> 8;
  }
  return ~a >>> 0;
}