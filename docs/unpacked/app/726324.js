Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseQueryDescriptionResponseMixin = function (e) {
  const t = (0, i.assertTag)(e, "description");
  if (!t.success) {
    return t;
  }
  const n = (0, i.attrString)(e, "id");
  if (!n.success) {
    return n;
  }
  const a = (0, i.attrIntRange)(e, "update_time", 0, undefined);
  if (!a.success) {
    return a;
  }
  const o = (0, i.contentString)(e);
  if (!o.success) {
    return o;
  }
  return (0, r.makeResult)({
    id: n.value,
    updateTime: a.value,
    elementValue: o.value
  });
};
var r = require("./135781.js");
var i = require("./686310.js");