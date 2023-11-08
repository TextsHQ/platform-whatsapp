Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseNewsletterReactionsMixin = function (e) {
  const t = (0, i.assertTag)(e, "message");
  if (!t.success) {
    return t;
  }
  const n = (0, i.flattenedChildWithTag)(e, "reactions");
  if (!n.success) {
    return n;
  }
  const o = (0, i.mapChildrenWithTag)(n.value, "reaction", 0, 1000, a);
  if (!o.success) {
    return o;
  }
  return (0, r.makeResult)({
    reactionsReaction: o.value
  });
};
exports.parseNewsletterReactionsReactionsReaction = a;
var r = require("./135781.js");
var i = require("./686310.js");
function a(e) {
  const t = (0, i.assertTag)(e, "reaction");
  if (!t.success) {
    return t;
  }
  const n = (0, i.attrString)(e, "code");
  if (!n.success) {
    return n;
  }
  const a = (0, i.attrIntRange)(e, "count", 1, undefined);
  if (a.success) {
    return (0, r.makeResult)({
      code: n.value,
      count: a.value
    });
  } else {
    return a;
  }
}