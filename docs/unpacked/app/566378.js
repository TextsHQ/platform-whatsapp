var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendCompanionFinishRPC = function () {
  return d.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
var a = require("./250281.js");
var o = require("./178324.js");
var s = require("./579882.js");
var l = require("./878008.js");
var u = require("./590062.js");
var c = require("./216342.js");
function d() {
  return (d = (0, i.default)(function* (e, t) {
    const n = (0, l.makeCompanionFinishRequest)(e);
    const r = yield (0, a.sendSmaxStanza)(n, t);
    const i = (0, s.parseCompanionFinishResponseSuccess)(r, n);
    if (i.success) {
      return {
        name: "CompanionFinishResponseSuccess",
        value: i.value
      };
    }
    const d = (0, o.parseCompanionFinishResponseError)(r, n);
    if (d.success) {
      return {
        name: "CompanionFinishResponseError",
        value: d.value
      };
    }
    throw new u.SmaxParsingFailure((0, c.errorMessageRpcParsing)("CompanionFinish", {
      Success: i,
      Error: d
    }));
  })).apply(this, arguments);
}