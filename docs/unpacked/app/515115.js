Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseNewsletterMyReactionMixin = function (e) {
  const t = (0, i.assertTag)(e, "message");
  if (!t.success) {
    return t;
  }
  const n = (0, i.flattenedChildWithTag)(e, "reaction");
  if (!n.success) {
    return n;
  }
  const a = (0, i.attrString)(n.value, "code");
  if (!a.success) {
    return a;
  }
  const o = (0, i.attrIntRange)(n.value, "t", 0, undefined);
  if (!o.success) {
    return o;
  }
  return (0, r.makeResult)({
    reactionCode: a.value,
    reactionT: o.value
  });
};
var r = require("./135781.js");
var i = require("./686310.js");