var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMyVote = function (e) {
  var t;
  var n;
  const {
    pollCreationMsg: a,
    includeUnvote: c
  } = e;
  const d = (t = (0, s.useOptionalModelValues)(a, ["id"])) === null || t === undefined ? undefined : t.id;
  const f = function (e) {
    if (e == null) {
      return null;
    }
    if (i.default.isNewsletter(e == null ? undefined : e.remote)) {
      return r.NewsletterPollVotesModelCollection;
    }
    return o.PollVoteCollection.getForParent([e])[0];
  }(d);
  const p = (0, l.getMeUser)();
  const m = (0, u.default)(f, "add remove reset", () => f instanceof o.GroupedPollVoteCollection ? f.getVoteFromSender(p) : d != null ? f == null ? undefined : f.get(d) : undefined);
  const h = (n = (0, s.useOptionalModelValues)(m, ["isUnvote"])) === null || n === undefined ? undefined : n.isUnvote;
  if (m == null) {
    return null;
  }
  if (h !== true || c) {
    return m;
  } else {
    return null;
  }
};
var r = require("../app/531898.js");
var o = require("../app/344400.js");
var l = require("../app/459857.js");
var i = a(require("../app/124928.js"));
var u = a(require("../app/524578.js"));
var s = require("../app/655241.js");