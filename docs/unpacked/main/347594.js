Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseIQErrorNoticeRequiredMixin = function (e) {
  const t = (0, r.assertTag)(e, "error");
  if (!t.success) {
    return t;
  }
  const n = (0, r.literal)(r.attrString, e, "text", "notice-required");
  if (!n.success) {
    return n;
  }
  const o = (0, r.literal)(r.attrInt, e, "code", 475);
  if (!o.success) {
    return o;
  }
  const l = (0, r.attrIntRange)(e, "tos_version", 1, 65535);
  if (!l.success) {
    return l;
  }
  return (0, a.makeResult)({
    text: n.value,
    code: o.value,
    tosVersion: l.value
  });
};
var a = require("../app/135781.js");
var r = require("../app/686310.js");