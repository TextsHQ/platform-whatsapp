Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseNewsletterMessageOriginalTimestampMixin = function (e) {
  const t = (0, i.assertTag)(e, "message");
  if (!t.success) {
    return t;
  }
  const n = (0, i.flattenedChildWithTag)(e, "meta");
  if (!n.success) {
    return n;
  }
  const a = (0, i.optional)(i.attrIntRange, n.value, "original_msg_t", 0, undefined);
  if (!a.success) {
    return a;
  }
  return (0, r.makeResult)({
    metaOriginalMsgT: a.value
  });
};
var r = require("./135781.js");
var i = require("./686310.js");