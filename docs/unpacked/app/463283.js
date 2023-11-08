Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseExperimentOrSamplingConfigMixinGroup = function (e) {
  const t = (0, i.parseExperimentConfigMixin)(e);
  if (t.success) {
    return (0, r.makeResult)({
      name: "ExperimentConfig",
      value: t.value
    });
  }
  const n = (0, a.parseSamplingConfigMixin)(e);
  if (n.success) {
    return (0, r.makeResult)({
      name: "SamplingConfig",
      value: n.value
    });
  }
  return (0, o.errorMixinDisjunction)(e, ["ExperimentConfig", "SamplingConfig"], [t, n]);
};
var r = require("./135781.js");
var i = require("./681076.js");
var a = require("./200396.js");
var o = require("./686310.js");