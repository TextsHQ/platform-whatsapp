var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseNewsletterPollVoteMixin = function (e) {
  const t = (0, s.assertTag)(e, "message");
  if (!t.success) {
    return t;
  }
  const n = (0, s.flattenedChildWithTag)(e, "votes");
  if (!n.success) {
    return n;
  }
  const r = (0, o.parseContentTypePollVoteMixin)(e);
  if (!r.success) {
    return r;
  }
  const u = (0, s.mapChildrenWithTag)(n.value, "vote", 0, 1000, l);
  if (!u.success) {
    return u;
  }
  return (0, a.makeResult)((0, i.default)((0, i.default)({}, r.value), {}, {
    votesVote: u.value
  }));
};
exports.parseNewsletterPollVoteVotesVote = l;
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./441276.js");
var s = require("./686310.js");
function l(e) {
  const t = (0, s.assertTag)(e, "vote");
  if (!t.success) {
    return t;
  }
  const n = (0, s.contentBytesRange)(e, 32, 32);
  if (n.success) {
    return (0, a.makeResult)({
      elementValue: n.value
    });
  } else {
    return n;
  }
}