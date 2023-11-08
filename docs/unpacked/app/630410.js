Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeNewsletterPollVoteVotesVote = s;
exports.mergeNewsletterPollVoteMixin = function (e, t) {
  const n = function (e) {
    const {
      voteArgs: t
    } = e;
    return (0, o.mergeContentTypePollVoteMixin)((0, i.smax)("message", null, (0, i.smax)("votes", null, (0, r.REPEATED_CHILD)(s, t, 0, 1000))));
  }(t);
  return (0, a.mergeStanzas)(e, n);
};
var r = require("./974339.js");
var i = require("./758616.js");
var a = require("./770006.js");
var o = require("./829634.js");
function s(e) {
  const {
    voteElementValue: t
  } = e;
  return (0, i.smax)("vote", null, t);
}