var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendGetExperimentConfigRPC = function () {
  return p.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
var a = require("./250281.js");
var o = require("./894087.js");
var s = require("./967713.js");
var l = require("./381259.js");
var u = require("./265168.js");
var c = require("./590062.js");
var d = require("./216342.js");
function p() {
  return (p = (0, i.default)(function* (e, t) {
    const n = (0, u.makeGetExperimentConfigRequest)(e);
    const r = yield (0, a.sendSmaxStanza)(n, t);
    const i = (0, l.parseGetExperimentConfigResponseSuccess)(r, n);
    if (i.success) {
      return {
        name: "GetExperimentConfigResponseSuccess",
        value: i.value
      };
    }
    const p = (0, o.parseGetExperimentConfigResponseErrorNoRetry)(r, n);
    if (p.success) {
      return {
        name: "GetExperimentConfigResponseErrorNoRetry",
        value: p.value
      };
    }
    const f = (0, s.parseGetExperimentConfigResponseErrorRetry)(r, n);
    if (f.success) {
      return {
        name: "GetExperimentConfigResponseErrorRetry",
        value: f.value
      };
    }
    throw new c.SmaxParsingFailure((0, d.errorMessageRpcParsing)("GetExperimentConfig", {
      Success: i,
      ErrorNoRetry: p,
      ErrorRetry: f
    }));
  })).apply(this, arguments);
}