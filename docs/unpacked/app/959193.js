Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseNewsletterReactionsBlocklistMixin = function (e) {
  const t = (0, i.assertTag)(e, "reactions");
  if (!t.success) {
    return t;
  }
  const n = (0, i.literal)(i.attrString, e, "mode", "blocklist");
  if (!n.success) {
    return n;
  }
  const o = (0, i.mapChildrenWithTag)(e, "reaction", 1, 1000, a);
  if (!o.success) {
    return o;
  }
  return (0, r.makeResult)({
    mode: n.value,
    reaction: o.value
  });
};
exports.parseNewsletterReactionsBlocklistReaction = a;
var r = require("./135781.js");
var i = require("./686310.js");
function a(e) {
  const t = (0, i.assertTag)(e, "reaction");
  if (!t.success) {
    return t;
  }
  const n = (0, i.attrString)(e, "code");
  if (n.success) {
    return (0, r.makeResult)({
      code: n.value
    });
  } else {
    return n;
  }
}