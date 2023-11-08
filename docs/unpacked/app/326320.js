Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseServerNotificationMixin = function (e) {
  const t = (0, i.assertTag)(e, "notification");
  if (!t.success) {
    return t;
  }
  const n = (0, i.attrIntRange)(e, "t", 0, undefined);
  if (!n.success) {
    return n;
  }
  const a = (0, i.attrStanzaId)(e, "id");
  if (!a.success) {
    return a;
  }
  const o = (0, i.optional)(i.attrIntRange, e, "offline", 0, 1024);
  if (!o.success) {
    return o;
  }
  return (0, r.makeResult)({
    t: n.value,
    id: a.value,
    offline: o.value
  });
};
var r = require("./135781.js");
var i = require("./686310.js");