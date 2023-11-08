Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseStageMixin = function (e) {
  const t = (0, i.assertTag)(e, "notice");
  if (!t.success) {
    return t;
  }
  const n = (0, i.attrIntRange)(e, "id", 0, undefined);
  if (!n.success) {
    return n;
  }
  const a = (0, i.attrIntRange)(e, "stage", 0, 1000);
  if (!a.success) {
    return a;
  }
  return (0, r.makeResult)({
    id: n.value,
    stage: a.value
  });
};
var r = require("./135781.js");
var i = require("./686310.js");