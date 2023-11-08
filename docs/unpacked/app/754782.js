Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseThreadTypeVanishModeMixin = function (e) {
  const t = (0, i.assertTag)(e, "chatstate");
  if (!t.success) {
    return t;
  }
  const n = (0, i.flattenedChildWithTag)(e, "meta");
  if (!n.success) {
    return n;
  }
  const a = (0, i.literal)(i.attrString, n.value, "thread_type", "vm");
  if (!a.success) {
    return a;
  }
  return (0, r.makeResult)({
    metaThreadType: a.value
  });
};
var r = require("./135781.js");
var i = require("./686310.js");