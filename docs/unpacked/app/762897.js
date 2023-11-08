var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactionsCollectionImpl = exports.ReactionsCollection = undefined;
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./724976.js");
var s = require("./402994.js");
var l = require("./392125.js");
var u = require("./70354.js");
var c = r(require("./565754.js"));
var d = require("./412513.js");
var p = require("./911600.js");
var f = require("./359126.js");
var _ = require("./459857.js");
class g extends l.BaseCollection {
  constructor() {
    super(...arguments);
    this.findImpl = function () {
      var e = (0, a.default)(function* (e) {
        const t = require("./61113.js").MsgCollection;
        const [r] = yield t.hydrateOrGetMessages([e]);
        return (0, d.sendQueryReactions)(r);
      });
      return function () {
        return e.apply(this, arguments);
      };
    }();
  }
  addOrUpdateReaction(e) {
    if (e.reactionText === p.REVOKED_REACTION_TEXT) {
      return this.removeReaction(e);
    }
    const t = this.get(e.parentMsgKey);
    if (t) {
      const {
        reactionSenderModel: n,
        reactionAggregateWithSender: r
      } = this.getAggregateEmojiAndSender(t, e.senderUserJid);
      if (r && n) {
        if (e.timestamp > n.timestamp) {
          if ((0, _.isSerializedWidMe)(e.senderUserJid)) {
            n.trigger("revoked");
            r.set({
              hasReactionByMe: false
            });
          }
          this._addNewReactionToAggregate(e, t);
          return void (r.aggregateEmoji === u.EmojiUtil.getEmojiAggregate(e.reactionText) ? (r.senders.remove(n.id), t.reactions.trigger("change:senders")) : this._removeAggregateEmojiAndSender(t, n, r));
        } else {
          return undefined;
        }
      }
      this._addNewReactionToAggregate(e, t);
    }
  }
  removeReaction(e) {
    if ((0, _.isSerializedWidMe)(e.senderUserJid)) {
      return this._removeSelfReaction(e);
    }
    const t = this.get(e.parentMsgKey);
    if (t) {
      const {
        reactionAggregateWithSender: n,
        reactionSenderModel: r
      } = this.getAggregateEmojiAndSender(t, e.senderUserJid);
      if (n && r) {
        this._removeAggregateEmojiAndSender(t, r, n);
        r.trigger("revoked");
      }
    } else {
      __LOG__(3)`reactions_collection:removeReaction no reactions model found`;
    }
  }
  _addNewReactionToAggregate(e, t) {
    const n = u.EmojiUtil.getEmojiAggregate(e.reactionText);
    const r = t.reactions.get(n);
    const a = c.default.fromString(e.msgKey);
    const o = (0, i.default)((0, i.default)({}, e), {}, {
      id: a
    });
    const s = (0, _.isSerializedWidMe)(e.senderUserJid);
    if (r) {
      if (s) {
        r.set({
          hasReactionByMe: true
        });
        t.set({
          reactionByMe: e
        });
      }
      r.senders.add(o);
      t.reactions.sort();
      r.trigger("change:senders");
    } else {
      if (s) {
        t.set({
          reactionByMe: e
        });
      }
      t.reactions.add({
        aggregateEmoji: n,
        hasReactionByMe: s,
        id: n,
        senders: [o]
      });
    }
  }
  _removeAggregateEmojiAndSender(e, t, n) {
    n.senders.remove(t.id);
    if (n.senders.length === 0) {
      e.reactions.remove(n.id);
    } else {
      e.reactions.sort();
    }
    n.trigger("change:senders");
  }
  getAggregateEmojiAndSender(e, t) {
    let n = null;
    let r = null;
    for (let i = 0; i < e.reactions.length; i++) {
      const a = e.reactions.at(i);
      const o = a == null ? undefined : a.senders.findFirst(e => e.senderUserJid === t);
      if (o) {
        n = o;
        r = a;
        break;
      }
    }
    return {
      reactionSenderModel: n,
      reactionAggregateWithSender: r
    };
  }
  _removeSelfReaction(e) {
    const t = this.get(e.parentMsgKey);
    if (!(t == null)) {
      t.set({
        reactionByMe: null
      });
    }
    if (t) {
      const {
        reactionAggregateWithSender: n,
        reactionSenderModel: r
      } = this.getAggregateEmojiAndSender(t, e.senderUserJid);
      if (!(n == null)) {
        n.set({
          hasReactionByMe: false
        });
      }
      if (n && r) {
        this._removeAggregateEmojiAndSender(t, r, n);
        r.trigger("revoked");
      }
    }
  }
  markReactionsAsRead(e) {
    for (const t of this._getSendersByMsgKeys(e)) {
      t.read = true;
    }
  }
  _getSendersByMsgKeys(e) {
    if (e.length === 0) {
      return [];
    }
    const t = new Set(e);
    const n = [];
    for (const e of this.toArray()) {
      for (const r of e.reactions.toArray()) {
        for (const e of t) {
          const i = r.senders.get(e);
          if (i != null && (n.push(i), t.delete(e), t.size === 0)) {
            return n;
          }
        }
      }
    }
    __LOG__(3)`reactions_collection:markReactionsAsRead Reaction sender model not found`;
    return n;
  }
  getSenderByMsgKey(e) {
    for (const t of this.toArray()) {
      for (const n of t.reactions.toArray()) {
        const t = n.senders.get(e);
        if (t != null) {
          return t;
        }
      }
    }
  }
  getExistingSenderModelFromReactionDetails(e) {
    const {
      parentMsgKey: t,
      msgKey: n,
      reactionText: r
    } = e;
    const i = u.EmojiUtil.getEmojiAggregate(r);
    const a = this.get(t);
    if (a) {
      const e = a.reactions.get(i);
      if (e == null) {
        return undefined;
      } else {
        return e.senders.get(n);
      }
    }
    __LOG__(3)`reactions_collection:getExistingSenderModelFromReactionDetails Reactions sender model not found for this message id`;
  }
  shouldUpdateAck(e, t) {
    const n = this.getExistingSenderModelFromReactionDetails(e);
    if (n) {
      const e = n.ack;
      return !(!(0, o.isNumber)(t) || !(e === undefined || e == null || t > e || t === s.ACK.FAILED));
    }
    __LOG__(3)`reactions_collection:shouldUpdateAck Reaction sender model not found`;
    return false;
  }
  deleteReactionsByParentMessageKey(e) {
    this.remove(e);
  }
}
exports.ReactionsCollectionImpl = g;
g.model = f.Reactions;
const m = new g();
exports.ReactionsCollection = m;