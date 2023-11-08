var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlattenedReactionsCollectionImpl = exports.FlattenedReactionsCollection = undefined;
exports.createFlattenedReactionModel = function (e) {
  return new c.FlattenedReaction((0, i.default)({
    id: l.default.fromString(e.msgKey),
    aggregatedEmoji: s.EmojiUtil.getEmojiAggregate(e.reactionText)
  }, e));
};
var i = r(require("../vendor/81109.js"));
var a = require("./392125.js");
var o = require("./818454.js");
var s = require("./70354.js");
var l = r(require("./565754.js"));
var u = require("./911600.js");
var c = require("./359126.js");
class d extends a.BaseCollection {
  constructor() {
    super(...arguments);
    this.byParentAndSender = (0, o.aggregated)(e => [e.parentMsgKey, e.senderUserJid]);
    this.byParent = (0, o.aggregated)(e => e.parentMsgKey);
    this.byParents = (0, o.aggregated)(e => [e.parentMsgKey]);
    this.hydratedReactions = new Set();
  }
  addOrUpdateReaction(e) {
    for (const t of e) {
      const e = this.byParentAndSender([t.parentMsgKey, t.senderUserJid]).toArray();
      if (e.length > 0) {
        if (!(t.timestamp >= e[0].timestamp)) {
          continue;
        }
        this.remove(e[0]);
      }
      if (t.reactionText !== u.REVOKED_REACTION_TEXT) {
        this.add(t);
      }
    }
  }
  getReactionsByMsgKeys(e) {
    if (e.length === 0) {
      return [];
    }
    const t = [];
    for (const n of e) {
      const e = this.get(n);
      if (e != null) {
        t.push(e);
      }
    }
    return t;
  }
  deleteReactionsByParentMessageKey(e) {
    const t = this.byParent(e.toString()).toArray();
    for (const e of t) {
      this.remove(e);
    }
  }
  getReactionsByParentMsgKeys(e) {
    let t = [];
    for (const n of e) {
      t = t.concat(this.byParent(n.toString()).toArray());
    }
    return t;
  }
}
exports.FlattenedReactionsCollectionImpl = d;
d.model = c.FlattenedReaction;
const p = new d();
exports.FlattenedReactionsCollection = p;