Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseContentTypePollVoteMixin = function (e) {
  const t = (0, i.assertTag)(e, "message");
  if (!t.success) {
    return t;
  }
  const n = (0, i.flattenedChildWithTag)(e, "meta");
  if (!n.success) {
    return n;
  }
  const a = (0, i.literal)(i.attrString, e, "type", "poll");
  if (!a.success) {
    return a;
  }
  const o = (0, i.literal)(i.attrString, n.value, "polltype", "vote");
  if (!o.success) {
    return o;
  }
  return (0, r.makeResult)({
    type: a.value,
    metaPolltype: o.value
  });
};
var r = require("./135781.js");
var i = require("./686310.js");