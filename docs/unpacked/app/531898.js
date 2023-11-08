var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewsletterPollVotesModelCollection = undefined;
exports.updateOrCreatePollVote = function (e) {
  let {
    msgKey: t,
    parentMsgKey: n,
    selectedOptionLocalIds: r,
    timestamp: i
  } = e;
  const a = _.gadd({
    id: n
  });
  a.updateMyVote(r, i, t);
  return a;
};
var i = r(require("../vendor/348926.js"));
var a = require("./632157.js");
var o = require("./392125.js");
var s = require("./523172.js");
var l = require("./766693.js");
var u = require("./288057.js");
var c = r(require("./565754.js"));
var d = require("./587846.js");
var p = require("./823980.js");
class f extends o.BaseCollection {
  constructor() {
    super(...arguments);
    this.findImpl = function () {
      var e = (0, i.default)(function* (e) {
        const t = e.toString();
        const r = yield (0, l.getVote)(t);
        const i = require("./61113.js").MsgCollection;
        const [o] = yield i.hydrateOrGetMessages([t]);
        if (o == null) {
          throw new u.NotFoundError("No votes found");
        }
        const d = o.id.remote.toJid();
        const {
          serverId: f,
          pollOptions: _
        } = o;
        const g = f != null ? yield (0, s.getMyVote)(d, f) : null;
        if (_ == null) {
          throw new u.NotFoundError("No pollOptions found");
        }
        if (r == null && g == null) {
          throw new u.NotFoundError("No polls to display");
        }
        const m = {
          id: c.default.fromString(t),
          pollVotesCountMap: new Map()
        };
        const h = yield (0, p.createOptionLocalIdMap)(_);
        if (r != null) {
          m.pollVotesCountMap = new Map(Array.from(r.votesMap.entries()).map(e => {
            let [t, n] = e;
            return [h.getLocalIdForHexHash(t), n];
          }));
          m.pollVotesCountMapTs = (0, a.castToUnixTime)(r.serverTimestamp);
        }
        if (g != null) {
          m.myVote = new Set(g.votes.map(e => h.getLocalIdForHexHash(e)));
          const {
            pollVotesCountMap: e
          } = m;
          m.myVote.forEach(t => {
            if (!(e == null || e.has(t))) {
              e.set(t, 1);
            }
          });
          m.myVoteTs = (0, a.castToMillisTime)(g.serverTimestampMs);
          m.ack = g.ack;
        }
        return m;
      });
      return function () {
        return e.apply(this, arguments);
      };
    }();
  }
}
f.model = d.NewsletterPollVotes;
const _ = new f();
exports.NewsletterPollVotesModelCollection = _;