var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bufferToHex = function (e) {
  return (0, a.toHex)(e);
};
exports.getPollOptionHash = function () {
  return o.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./390934.js");
function o() {
  return (o = (0, i.default)(function* (e) {
    const t = yield self.crypto.subtle.digest("SHA-256", new TextEncoder().encode(e));
    return (0, a.toHex)(new Uint8Array(t));
  })).apply(this, arguments);
}