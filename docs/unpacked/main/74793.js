Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateStreamingSidecar = function (e, t) {
  let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  const i = t.buffer.byteLength;
  const u = Math.ceil((i - 16) / l);
  const s = new Uint8Array(o * u);
  return (0, a.concurrentIterate)(u, n => {
    const a = n * l;
    const i = t.subarray(a, a + 16 + l);
    return (0, r.sign)(e, i).then(e => {
      const t = new Uint8Array(e, 0, o);
      s.set(t, n * o);
    });
  }, n).then(() => s.buffer);
};
exports.castToStreamingSidecar = function (e) {
  return e;
};
exports.shouldHaveStreamingSidecar = function (e) {
  return e === "video";
};
var a = require("./595701.js");
var r = require("../app/301055.js");
const o = 10;
const l = 65536;