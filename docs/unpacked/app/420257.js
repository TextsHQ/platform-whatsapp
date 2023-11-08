Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseNewsletterMyPollVoteMixin = function (e) {
  const t = (0, i.assertTag)(e, "message");
  if (!t.success) {
    return t;
  }
  const n = (0, i.flattenedChildWithTag)(e, "votes");
  if (!n.success) {
    return n;
  }
  const o = (0, i.attrIntRange)(n.value, "t", 0, undefined);
  if (!o.success) {
    return o;
  }
  const s = (0, i.mapChildrenWithTag)(n.value, "vote", 0, 1000, a);
  if (!s.success) {
    return s;
  }
  return (0, r.makeResult)({
    votesT: o.value,
    votesVote: s.value
  });
};
exports.parseNewsletterMyPollVoteVotesVote = a;
var r = require("./135781.js");
var i = require("./686310.js");
function a(e) {
  const t = (0, i.assertTag)(e, "vote");
  if (!t.success) {
    return t;
  }
  const n = (0, i.contentBytesRange)(e, 32, 32);
  if (n.success) {
    return (0, r.makeResult)({
      elementValue: n.value
    });
  } else {
    return n;
  }
}