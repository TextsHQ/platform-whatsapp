Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseExperimentConfigMixin = function (e) {
  const t = (0, i.assertTag)(e, "prop");
  if (!t.success) {
    return t;
  }
  const n = (0, i.attrIntRange)(e, "config_code", 1, undefined);
  if (!n.success) {
    return n;
  }
  const a = (0, i.attrString)(e, "config_value");
  if (!a.success) {
    return a;
  }
  const o = (0, i.optional)(i.attrIntRange, e, "config_expo_key", 0, undefined);
  if (!o.success) {
    return o;
  }
  return (0, r.makeResult)({
    configCode: n.value,
    configValue: a.value,
    configExpoKey: o.value
  });
};
var r = require("./135781.js");
var i = require("./686310.js");