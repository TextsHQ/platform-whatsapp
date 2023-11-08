Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseSamplingConfigMixin = function (e) {
  const t = (0, i.assertTag)(e, "prop");
  if (!t.success) {
    return t;
  }
  const n = (0, i.attrIntRange)(e, "event_code", 1, undefined);
  if (!n.success) {
    return n;
  }
  const a = (0, i.attrIntRange)(e, "sampling_weight", -10000, 10000);
  if (!a.success) {
    return a;
  }
  return (0, r.makeResult)({
    eventCode: n.value,
    samplingWeight: a.value
  });
};
var r = require("./135781.js");
var i = require("./686310.js");