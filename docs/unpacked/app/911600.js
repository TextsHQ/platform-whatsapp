var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.REVOKED_REACTION_TEXT = undefined;
exports.canHaveReactions = y;
exports.createReactionsRowFromMsg = function () {
  return E.apply(this, arguments);
};
exports.updateHasReactionFromParent = function () {
  return S.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./229079.js");
var o = r(require("./670983.js"));
var s = require("./169571.js");
var l = require("./364622.js");
var u = require("./817690.js");
var c = require("./787742.js");
var d = r(require("./565754.js"));
var p = require("./373070.js");
var f = require("./525119.js");
var _ = require("./851698.js");
var g = require("./916667.js");
var m = r(require("./124928.js"));
var h = require("./669050.js");
function y(e, t) {
  return e !== p.MSG_TYPE.UNKNOWN && e !== p.MSG_TYPE.CIPHERTEXT && e !== p.MSG_TYPE.REVOKED && e !== p.MSG_TYPE.DEBUG && e !== p.MSG_TYPE.GP2 && e !== p.MSG_TYPE.NOTIFICATION && e !== p.MSG_TYPE.NEWSLETTER_NOTIFICATION && e !== p.MSG_TYPE.NOTIFICATION_TEMPLATE && e !== p.MSG_TYPE.E2E_NOTIFICATION && e !== p.MSG_TYPE.CALL_LOG && (e !== p.MSG_TYPE.CHAT || t !== s.BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE);
}
function E() {
  return (E = (0, i.default)(function* (e) {
    const t = [];
    const n = [];
    e.forEach(e => {
      if (e) {
        n.push(e.reactionParentKey.toString());
      }
    });
    const r = new Map();
    if ((0, f.isMatFullyEnabled)()) {
      e.forEach(e => {
        const t = e.reactionParentKey;
        const i = (0, c.getOriginalSender)(e);
        if (t != null && i != null && t.remote.isUser() && !m.default.equals(i, t.remote)) {
          const a = d.default.from({
            fromMe: t.fromMe,
            id: t.id,
            participant: t.participant,
            remote: i
          });
          n.push(a.toString());
          r.set(e.reactionParentKey.remote, a.toString());
        }
      });
    }
    const i = yield (0, u.getMsgsByMsgKey)(n);
    const s = new Map();
    i.forEach(e => {
      s.set(e.id.toString(), e);
    });
    e.forEach(e => {
      var n;
      var i;
      var l;
      var u;
      const c = (n = e.author) !== null && n !== undefined ? n : e.from;
      if (!c || !e) {
        return void __LOG__(3)`createReactionsRowFromMsg: sender or reactionMsg are null`;
      }
      let d = s.get(e.reactionParentKey.toString());
      if ((0, f.isMatFullyEnabled)() && !d) {
        const t = r.get(e.reactionParentKey.remote);
        if (t != null) {
          d = s.get(t);
        }
      }
      let _;
      let m = 0;
      if (d) {
        if (((i = d) === null || i === undefined ? undefined : i.type) === p.MSG_TYPE.CIPHERTEXT) {
          m = 1;
          _ = g.OrphanReactionsReasonType.ParentMsgPlaceholder;
        } else if (((l = d) === null || l === undefined ? undefined : l.type) === p.MSG_TYPE.UNKNOWN) {
          m = 1;
          _ = g.OrphanReactionsReasonType.ParentMsgFutureproof;
        } else if (!y(d.type, d.subtype)) {
          return void __LOG__(3)`createReactionsRowFromMsg: reactions not allowed for this message type ${d.type}`;
        }
      } else {
        m = 1;
        _ = g.OrphanReactionsReasonType.ParentMsgMissing;
      }
      const E = (0, h.toUserWid)(c);
      const S = {
        msgKey: e.id.toString(),
        parentMsgKey: e.reactionParentKey.toString(),
        senderUserJid: E.toString(),
        reactionText: (u = e.reactionText) !== null && u !== undefined ? u : "",
        timestamp: e.reactionTimestamp,
        orphan: m,
        orphanReason: _,
        read: false,
        t: (0, o.default)((0, a.maybeNumberOrThrowIfTooLarge)(e.t), "maybeNumberOrThrowIfTooLarge(reactionMsg.t)")
      };
      t.push(S);
    });
    return t;
  })).apply(this, arguments);
}
function S() {
  return (S = (0, i.default)(function* (e) {
    const t = [];
    const n = [];
    e.forEach(e => {
      const {
        parentMsgKey: r,
        orphan: i,
        reactionText: a
      } = e;
      if (i !== 1) {
        if (a !== "") {
          n.push({
            id: r,
            hasReaction: true
          });
        } else {
          t.push(r);
        }
      }
    });
    const r = yield (0, l.getFilteredReactionsFromParentMsgs)(t);
    t.forEach(e => {
      const t = r.get(e);
      const i = t && t.length > 0 || false;
      n.push({
        id: e,
        hasReaction: i
      });
    });
    return (0, _.getMessageTable)().bulkCreateOrMerge(n);
  })).apply(this, arguments);
}
exports.REVOKED_REACTION_TEXT = "";