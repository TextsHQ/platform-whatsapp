var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.existsReaction = function (e) {
  return (0, u.getReactionsTable)().get([e.parentMsgKey, e.senderUserJid]);
};
exports.getAllReactionsFromParentMsgs = function (e) {
  return (0, o.getStorage)().lock(["reactions"], t => {
    let [n] = t;
    return n.anyOf(["parentMsgKey"], e);
  });
};
exports.getFilteredReactionsFromParentMsgs = function () {
  return d.apply(this, arguments);
};
exports.getReactions = function () {
  return c.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./70354.js");
var o = require("./732011.js");
var s = r(require("./24778.js"));
var l = require("./911600.js");
var u = require("./603635.js");
function c() {
  return (c = (0, i.default)(function* (e) {
    const t = yield (0, u.getReactionsTable)().equals(["parentMsgKey"], e);
    const n = {
      reactions: [],
      reactionByMe: null
    };
    const r = new Map();
    t.forEach(e => {
      const {
        reactionText: t,
        orphan: i
      } = e;
      if (t !== l.REVOKED_REACTION_TEXT && i !== 1) {
        var o;
        const i = a.EmojiUtil.getEmojiAggregate(t);
        const l = (o = r.get(i)) !== null && o !== undefined ? o : [];
        r.set(i, [...l, e]);
        if ((0, s.default)(e.msgKey).fromMe) {
          n.reactionByMe = e;
        }
      }
    });
    const i = n.reactionByMe ? a.EmojiUtil.getEmojiAggregate(n.reactionByMe.reactionText) : "";
    r.forEach((e, t) => {
      let r = false;
      if (t === i) {
        r = true;
      }
      n.reactions.push({
        aggregateEmoji: t,
        senders: e,
        hasReactionByMe: r
      });
    });
    return n;
  })).apply(this, arguments);
}
function d() {
  return (d = (0, i.default)(function* (e) {
    const t = new Map();
    yield (0, o.getStorage)().lock(["reactions"], function () {
      var n = (0, i.default)(function* (n) {
        let [r] = n;
        (yield r.anyOf(["parentMsgKey"], e)).forEach(e => {
          const {
            reactionText: n,
            orphan: r
          } = e;
          if (n !== l.REVOKED_REACTION_TEXT && r !== 1) {
            var i;
            const n = (i = t.get(e.parentMsgKey)) !== null && i !== undefined ? i : [];
            n.push(e);
            t.set(e.parentMsgKey, n);
          }
        });
      });
      return function () {
        return n.apply(this, arguments);
      };
    }());
    return t;
  })).apply(this, arguments);
}