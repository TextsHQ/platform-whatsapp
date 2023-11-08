var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewsletterMessageReactionsCollection = undefined;
exports.updateOrCreateMessageReaction = function (e) {
  let {
    parentMsg: t,
    reactionCode: n,
    reactionMsg: r
  } = e;
  const i = m.gadd({
    id: t.id,
    myReactionMsgKey: r.id
  });
  i.updateMyReaction(n);
  return i;
};
var i = r(require("../vendor/348926.js"));
var a = require("./632157.js");
var o = require("./392125.js");
var s = require("./978925.js");
var l = require("./364622.js");
var u = require("./288057.js");
var c = r(require("./565754.js"));
var d = require("./727615.js");
var p = require("./129525.js");
var f = require("./911600.js");
var _ = require("./459857.js");
class g extends o.BaseCollection {
  constructor() {
    super(...arguments);
    this.findImpl = function () {
      var e = (0, i.default)(function* (e) {
        const t = yield (0, s.getNewsletterReaction)(e);
        const r = require("./61113.js").MsgCollection;
        const [i] = yield r.hydrateOrGetMessages([e]);
        if (i == null) {
          throw new u.NotFoundError("No reactions found");
        }
        const o = i.id.remote.toJid();
        const {
          serverId: p
        } = i;
        const g = p != null ? yield (0, d.craftNewsletterMsgKeyFromServerId)(p, o) : null;
        const m = g != null ? yield (0, l.existsReaction)({
          parentMsgKey: g.toString(),
          senderUserJid: (0, _.getMeUser)().toString()
        }) : null;
        if (t == null && m == null) {
          throw new u.NotFoundError("No reactions to display");
        }
        const h = {
          id: c.default.fromString(e)
        };
        if (p != null) {
          h.parentMsgServerId = p;
        }
        if (t != null) {
          h.reactionCountMap = t.emojiCountMap;
          h.reactionCountMapTs = (0, a.castToUnixTime)(t.serverTimestamp);
        }
        if (m != null && m.reactionText !== f.REVOKED_REACTION_TEXT) {
          h.myReactionMsgKey = c.default.from(m.msgKey);
          h.myReaction = m.reactionText;
          h.myReactionTs = (0, a.castToUnixTime)(m.timestamp);
        }
        return h;
      });
      return function () {
        return e.apply(this, arguments);
      };
    }();
  }
}
g.model = p.NewsletterMessageReactions;
const m = new g();
exports.NewsletterMessageReactionsCollection = m;