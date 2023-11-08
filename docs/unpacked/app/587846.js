var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewsletterPollVotes = undefined;
var i = require("./29797.js");
var a = require("./632157.js");
var o = require("./626596.js");
var s = require("./481173.js");
var l = require("./382849.js");
var u = r(require("./565754.js"));
class c extends o.AddOnBaseModel {
  constructor() {
    super(...arguments);
    this.id = (0, l.prop)();
    this.pollVotesCountMap = (0, l.prop)();
    this.pollVotesCountMapTs = (0, l.prop)();
    this.myVote = (0, l.prop)();
    this.myVoteTs = (0, l.prop)();
    this.isUnvote = (0, l.prop)(false);
    this.msgKey = (0, l.prop)();
    this.isFailed = (0, l.derived)(function () {
      return this.ack != null && this.ack < i.ACK.CLOCK || Boolean(this.isSendFailure);
    }, ["ack", "isSendFailure"]);
  }
  initialize() {
    var e;
    var t;
    super.initialize();
    this.myVote = (e = this.myVote) !== null && e !== undefined ? e : new Set();
    this.pollVotesCountMap = (t = this.pollVotesCountMap) !== null && t !== undefined ? t : new Map();
  }
  updateMyVote(e, t, n) {
    var r;
    var i;
    var o;
    if (t < ((r = this.myVoteTs) !== null && r !== undefined ? r : 0)) {
      return;
    }
    const s = (i = this.myVote) !== null && i !== undefined ? i : new Set();
    const l = (o = this.pollVotesCountMap) !== null && o !== undefined ? o : new Map();
    Array.from(s).forEach(e => {
      var t;
      const n = (t = l.get(e)) !== null && t !== undefined ? t : 0;
      l.set(e, Math.max(n - 1, 0));
    });
    Array.from(e).forEach(e => {
      var t;
      const n = (t = l.get(e)) !== null && t !== undefined ? t : 0;
      l.set(e, n + 1);
    });
    this.msgKey = n;
    this.pollVotesCountMap = l;
    this.myVote = e;
    this.myVoteTs = (0, a.castToMillisTime)(t);
  }
}
c.Proxy = "newsletterPollVote";
c.idClass = u.default;
const d = (0, s.defineModel)(c);
exports.NewsletterPollVotes = d;