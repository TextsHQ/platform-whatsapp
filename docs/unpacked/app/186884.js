var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IV_LENGTH = exports.HMAC_LENGTH = undefined;
exports.calculateStreamingSidecar = function () {
  return u.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = r(require("../vendor/498913.js"));
var o = require("./145335.js");
var s = require("./301055.js");
const l = 65536;
exports.IV_LENGTH = 16;
function u() {
  return (u = (0, i.default)(function* (e, t) {
    const n = e instanceof ArrayBuffer ? e.byteLength : e.buffer.byteLength;
    const r = Math.ceil((n - 16) / l);
    const i = (0, a.default)(r, n => {
      const r = n * l;
      const i = e.slice(r, r + 16 + l);
      return (0, s.hmacSha256)(t, i, 10);
    });
    const u = yield Promise.all(i);
    return (0, o.concatArrayBuffers)(...u);
  })).apply(this, arguments);
}
exports.HMAC_LENGTH = 10;