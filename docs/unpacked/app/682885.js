var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendCompanionHelloRPC = function () {
  return d.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
var a = require("./250281.js");
var o = require("./118899.js");
var s = require("./842907.js");
var l = require("./581125.js");
var u = require("./590062.js");
var c = require("./216342.js");
function d() {
  return (d = (0, i.default)(function* (e, t) {
    const n = (0, l.makeCompanionHelloRequest)(e);
    const r = yield (0, a.sendSmaxStanza)(n, t);
    const i = (0, s.parseCompanionHelloResponseNotifyCompanion)(r, n);
    if (i.success) {
      return {
        name: "CompanionHelloResponseNotifyCompanion",
        value: i.value
      };
    }
    const d = (0, o.parseCompanionHelloResponseError)(r, n);
    if (d.success) {
      return {
        name: "CompanionHelloResponseError",
        value: d.value
      };
    }
    throw new u.SmaxParsingFailure((0, c.errorMessageRpcParsing)("CompanionHello", {
      NotifyCompanion: i,
      Error: d
    }));
  })).apply(this, arguments);
}