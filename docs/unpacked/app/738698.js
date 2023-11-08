Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeNewsletterReactionOrReactionRevokeOrPollVoteMixinGroup = function (e, t) {
  if (t.newsletterReaction) {
    return (0, a.mergeNewsletterReactionMixin)(e, t.newsletterReaction);
  }
  if (t.isNewsletterReactionRevoke) {
    return (0, o.mergeNewsletterReactionRevokeMixin)(e);
  }
  if (t.newsletterPollVote) {
    return (0, i.mergeNewsletterPollVoteMixin)(e, t.newsletterPollVote);
  }
  throw new r.SmaxMixinGroupExhaustiveError();
};
var r = require("./715626.js");
var i = require("./630410.js");
var a = require("./131312.js");
var o = require("./284723.js");