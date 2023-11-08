Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseNewsletterPollVotesMixin = function (e) {
  const t = (0, i.assertTag)(e, "message");
  if (!t.success) {
    return t;
  }
  const n = (0, i.flattenedChildWithTag)(e, "votes");
  if (!n.success) {
    return n;
  }
  const o = (0, i.mapChildrenWithTag)(n.value, "vote", 0, 1000, a);
  if (!o.success) {
    return o;
  }
  return (0, r.makeResult)({
    votesVote: o.value
  });
};
exports.parseNewsletterPollVotesVotesVote = a;
var r = require("./135781.js");
var i = require("./686310.js");
function a(e) {
  const t = (0, i.assertTag)(e, "vote");
  if (!t.success) {
    return t;
  }
  const n = (0, i.attrIntRange)(e, "count", 1, undefined);
  if (!n.success) {
    return n;
  }
  const a = (0, i.contentBytesRange)(e, 32, 32);
  if (a.success) {
    return (0, r.makeResult)({
      count: n.value,
      elementValue: a.value
    });
  } else {
    return a;
  }
}