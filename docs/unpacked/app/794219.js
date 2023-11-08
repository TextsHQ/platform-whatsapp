Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t, n) {
  const a = Math.ceil(e / 16) * 16;
  const o = t.slice(0, i.IV_LENGTH + a);
  return (0, r.hmacSha256)(n, o, i.HMAC_LENGTH);
};
var r = require("./301055.js");
var i = require("./186884.js");