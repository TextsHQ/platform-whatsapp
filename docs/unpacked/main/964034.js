var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useNewsletterPollsResults = function (e) {
  const {
    id: t,
    pollOptions: n
  } = (0, s.useModelValues)(e, ["id", "pollOptions"]);
  (0, i.useEffect)(() => {
    (0, r.default)(function* () {
      yield l.NewsletterPollVotesModelCollection.find(t).catch(() => null);
    })().catch(() => {
      __LOG__(4, undefined, new Error(), true)`[useWAWebNewsletterPollVotes] Failed to load polls from collection`;
      SEND_LOGS("newsletter-hook-failed-to-load-polls-from-collection");
    });
  });
  const a = (0, u.default)(l.NewsletterPollVotesModelCollection, ["add", "remove", "reset", "change"], () => l.NewsletterPollVotesModelCollection.get(t));
  return (0, u.default)(a, ["change:myVote", "change:pollVotesCountMapTs", "remove"], () => (0, o.aggregateNewsletterVotes)(a, n));
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/330434.js");
var l = require("../app/531898.js");
var i = require("../vendor/667294.js");
var u = a(require("../app/524578.js"));
var s = require("../app/655241.js");