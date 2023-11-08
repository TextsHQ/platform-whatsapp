var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendMuteRPC = function () {
  return p.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
var a = require("./250281.js");
var o = require("./301570.js");
var s = require("./932393.js");
var l = require("./455930.js");
var u = require("./504874.js");
var c = require("./590062.js");
var d = require("./216342.js");
function p() {
  return (p = (0, i.default)(function* (e, t) {
    const n = (0, u.makeMuteRequest)(e);
    const r = yield (0, a.sendSmaxStanza)(n, t);
    const i = (0, l.parseMuteResponseSuccess)(r, n);
    if (i.success) {
      return {
        name: "MuteResponseSuccess",
        value: i.value
      };
    }
    const p = (0, o.parseMuteResponseClientError)(r, n);
    if (p.success) {
      return {
        name: "MuteResponseClientError",
        value: p.value
      };
    }
    const f = (0, s.parseMuteResponseServerError)(r, n);
    if (f.success) {
      return {
        name: "MuteResponseServerError",
        value: f.value
      };
    }
    throw new c.SmaxParsingFailure((0, d.errorMessageRpcParsing)("Mute", {
      Success: i,
      ClientError: p,
      ServerError: f
    }));
  })).apply(this, arguments);
}