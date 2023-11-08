var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseNewsletterReactionMixin = function (e) {
  const t = (0, s.assertTag)(e, "message");
  if (!t.success) {
    return t;
  }
  const n = (0, s.flattenedChildWithTag)(e, "reaction");
  if (!n.success) {
    return n;
  }
  const r = (0, s.attrString)(n.value, "code");
  if (!r.success) {
    return r;
  }
  const l = (0, o.parseContentTypeReactionMixin)(e);
  if (!l.success) {
    return l;
  }
  return (0, a.makeResult)((0, i.default)({
    reactionCode: r.value
  }, l.value));
};
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./952738.js");
var s = require("./686310.js");