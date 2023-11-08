var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canReactToMessage = function (e) {
  if (!(0, M.canHaveReactions)(e.type, e.subtype)) {
    return false;
  }
  if (e.isCarouselCard) {
    return false;
  }
  const t = (0, f.getChat)(e);
  if (t.isNewsletter) {
    return function (e, t) {
      var n;
      return (0, E.isNewsletterMsgOnServer)(e) && (0, C.isNewsletterReactionSendingEnabled)() && ((n = t.newsletterMetadata) === null || n === undefined ? undefined : n.reactionCodesSetting) !== c.NewsletterReactionCodesSetting.None;
    }(e, t);
  }
  if (e.isExpiredAndNotKept()) {
    return false;
  }
  const {
    groupMetadata: n
  } = t;
  if (n == null ? undefined : n.announce) {
    if (n != null && n.groupType === p.GroupType.LINKED_ANNOUNCEMENT_GROUP) {
      const t = (0, u.getGroupParticipantsCount)(n);
      return (0, g.cagReactionsSend)(t) && n.incognito === true && e.messageSecret != null;
    }
    return (0, _.replyChecks)(e);
  }
  return (0, _.canReplyMsg)(e);
};
exports.createReactionsRow = function () {
  return k.apply(this, arguments);
};
exports.getMaxReactionsInBubble = D;
exports.getReactionAggregates = O;
exports.getReactionEmojisAndSum = function (e) {
  let t = [];
  let n = 0;
  if (e.length === 0) {
    return {
      numberOfSenderReactions: n,
      reactionArrayEmojis: t
    };
  }
  if (e.length !== 1) {
    return function (e) {
      let t = [];
      let n = 0;
      const a = O(e);
      const r = D();
      const o = a.slice(0, r);
      t = o.map(e => e);
      n = a.reduce((e, t) => e + t.reactionSenders.length, 0);
      return {
        numberOfSenderReactions: n,
        reactionArrayEmojis: t
      };
    }(e);
  }
  {
    const a = e[0];
    const r = (0, g.fourReactionsInBubbleEnabled)() ? 4 : 3;
    const o = a.reactions.slice(0, r);
    t = o.map(e => {
      if (e.hasReactionByMe) {
        a.reactionByMe;
      }
      return {
        reactionByMe: e.hasReactionByMe ? a.reactionByMe : null,
        reactionAggregate: e.aggregateEmoji,
        reactionSenders: e.senders.toArray()
      };
    });
    n = a.reactions.reduce((e, t) => e + t.senders.length, 0);
  }
  return {
    numberOfSenderReactions: n,
    reactionArrayEmojis: t
  };
};
exports.getReactionForDisplay = function (e) {
  var t;
  var n;
  var a;
  e.reactionSenders.length;
  const r = (t = (n = e.reactionByMe) === null || n === undefined ? undefined : n.reactionText) !== null && t !== undefined ? t : (a = e.reactionSenders[0]) === null || a === undefined ? undefined : a.reactionText;
  return d.EmojiUtil.getNormalizedOrTofu(r);
};
exports.getReactionsForTray = function (e, t) {
  const n = [];
  const a = e.map(e => d.EmojiUtil.getEmojiAggregate(e));
  const r = t != null ? d.EmojiUtil.getEmojiAggregate(t) : null;
  a.forEach((a, o) => {
    const l = S.RecentReactionsCollection.get(a);
    if (t != null && a === r) {
      n.push(t);
    } else if (l != null) {
      n.push(l.reactionText);
    } else {
      n.push(e[o]);
    }
  });
  if (!(t == null || a.includes(r))) {
    n.push(t);
  }
  return n;
};
exports.isReactionsEnabledInCAG = function (e) {
  var t;
  return (0, g.cagReactionsReceive)() && Boolean((t = e.groupMetadata) === null || t === undefined ? undefined : t.isIncognitoCag);
};
exports.lastMessageReactionChange = function (e) {
  const t = require("../app/61113.js").MsgCollection;
  e.forEach(e => {
    const n = t.get(e);
    if (n == null ? undefined : n.isLastMessage()) {
      s.Cmd.reactionChangeLastMessage();
    }
  });
};
exports.reactionBubbleAriaLabelOneReaction = function (e, t) {
  return P.fbt._("{name} reacted with {reactionContent}", [P.fbt._param("name", e), P.fbt._param("reactionContent", t)], {
    hk: "2Vcjyz"
  });
};
exports.reactionBubbleAriaLabelString = function (e, t) {
  const n = t.map(e => e.reactionByMe ? e.reactionByMe.reactionText : e.reactionAggregate).join(m.default.t(54));
  if (e === 1) {
    return P.fbt._("reaction {reactions_content}", [P.fbt._param("reactions_content", n)], {
      hk: "2ksvWq"
    });
  }
  return P.fbt._({
    "*": "Reactions {reactions_content} {num_sender_reactions} in total",
    _1: "Reactions {reactions_content} 1 in total"
  }, [P.fbt._plural(e, "num_sender_reactions"), P.fbt._param("reactions_content", n)], {
    hk: "3KYY1f"
  });
};
exports.reactionSenderToReactionUpdate = function (e) {
  const {
    id: t,
    parentMsgKey: n,
    reactionText: a,
    senderUserJid: r
  } = e;
  return {
    parentMsgKey: v.default.fromString(n),
    msgKey: t,
    reactionText: a,
    senderUserJid: r
  };
};
exports.shouldShowReactionBubble = function (e, t) {
  if (!(0, M.canHaveReactions)(e.type, e.subtype)) {
    return false;
  }
  if (t === i.AddOnBubbleType.MEDIA_VIEWER && e.type === y.MSG_TYPE.STICKER) {
    return false;
  }
  const {
    groupMetadata: n
  } = (0, f.getChat)(e);
  if ((n == null ? undefined : n.announce) === true && (n == null ? undefined : n.groupType) === p.GroupType.LINKED_ANNOUNCEMENT_GROUP) {
    return (0, g.cagReactionsReceive)() && (n == null ? undefined : n.incognito) === true && e.messageSecret != null;
  }
  return true;
};
exports.updateRecentReaction = function (e, t) {
  const n = d.EmojiUtil.getEmojiAggregate(e);
  S.RecentReactionsCollection.add({
    id: n,
    reactionText: e,
    timestamp: t
  }, {
    merge: true
  });
};
var r = a(require("../vendor/348926.js"));
var o = a(require("../vendor/81109.js"));
var l = a(require("../app/670983.js"));
var i = require("./980518.js");
var u = require("../app/374660.js");
var s = require("../app/780549.js");
var c = require("../app/927531.js");
var d = require("../app/70354.js");
var f = require("../app/163755.js");
var p = require("../app/862159.js");
var m = a(require("../app/932325.js"));
var h = require("../app/420213.js");
var g = require("../app/97858.js");
var E = require("../app/939716.js");
var v = a(require("../app/565754.js"));
var _ = require("./722119.js");
var y = require("../app/373070.js");
var C = require("../app/73225.js");
var b = require("../app/525119.js");
var M = require("../app/911600.js");
var S = require("../app/370308.js");
var T = require("../app/916667.js");
var w = require("../app/459857.js");
var A = require("../app/669050.js");
var P = require("../vendor/548360.js");
a(require("../vendor/667294.js"));
function O(e) {
  const t = new Map();
  e.forEach(e => {
    let n = null;
    if (e.reactionByMe) {
      const o = e.reactionByMe.reactionText;
      n = d.EmojiUtil.getEmojiAggregate(o);
      const l = t.get(n);
      if (l) {
        var a;
        var r;
        const t = ((a = l.reactionByMe) === null || a === undefined ? undefined : a.timestamp) || 0;
        const n = ((r = e.reactionByMe) === null || r === undefined ? undefined : r.timestamp) || 0;
        if (l.reactionByMe && t < n || !l.reactionByMe) {
          l.reactionByMe = e.reactionByMe;
        }
      }
    }
    e.reactions.forEach(n => {
      const a = n.aggregateEmoji;
      const r = n.senders.toArray();
      const o = t.get(a);
      if (o) {
        const e = o.reactionSenders.concat(r);
        o.reactionSenders = e;
        t.set(a, o);
      } else {
        const o = n.hasReactionByMe ? e.reactionByMe : null;
        t.set(a, {
          reactionByMe: o,
          reactionSenders: r,
          reactionAggregate: a
        });
      }
    });
  });
  return Array.from(t.values()).map(e => {
    const t = e.reactionSenders.sort((e, t) => (0, w.isSerializedWidMe)(e.senderUserJid) && !(0, w.isSerializedWidMe)(t.senderUserJid) ? -1 : (0, w.isSerializedWidMe)(t.senderUserJid) && !(0, w.isSerializedWidMe)(e.senderUserJid) ? 1 : t.timestamp - e.timestamp);
    return (0, o.default)((0, o.default)({}, e), {}, {
      reactionSenders: t
    });
  }).sort((e, t) => e.reactionByMe && t.reactionByMe ? t.reactionSenders.length === e.reactionSenders.length ? t.reactionByMe.timestamp - e.reactionByMe.timestamp : t.reactionSenders.length - e.reactionSenders.length : e.reactionByMe ? -1 : t.reactionByMe ? 1 : t.reactionSenders.length === e.reactionSenders.length ? t.reactionSenders[0].timestamp - e.reactionSenders[0].timestamp : t.reactionSenders.length - e.reactionSenders.length);
}
function k() {
  return (k = (0, r.default)(function* (e) {
    var t;
    var n;
    const a = yield (0, h.getMsgByMsgKey)(e.reactionParentKey);
    let r;
    let o = 0;
    const i = (0, l.default)((t = e.author) !== null && t !== undefined ? t : e.from, "msg.author ?? msg.from");
    const u = e.from;
    if (a) {
      if ((a == null ? undefined : a.type) === y.MSG_TYPE.CIPHERTEXT) {
        o = 1;
        r = T.OrphanReactionsReasonType.ParentMsgPlaceholder;
      } else if ((a == null ? undefined : a.type) === y.MSG_TYPE.UNKNOWN) {
        o = 1;
        r = T.OrphanReactionsReasonType.ParentMsgFutureproof;
      } else if (!(0, M.canHaveReactions)(a.type, a.subtype)) {
        __LOG__(3)`createReactionsRow: reactions not allowed for this message type ${a.type}`;
        return Promise.resolve();
      }
    } else {
      o = 1;
      r = T.OrphanReactionsReasonType.ParentMsgMissing;
    }
    let s = (0, A.toUserWid)(i);
    if ((0, b.isMatFullyEnabled)() && u != null && u.isUser() && u !== s) {
      s = (0, A.toUserWid)(u);
    }
    return {
      msgKey: e.id.toString(),
      parentMsgKey: e.reactionParentKey.toString(),
      senderUserJid: s.toString(),
      reactionText: (n = e.reactionText) !== null && n !== undefined ? n : M.REVOKED_REACTION_TEXT,
      timestamp: e.reactionTimestamp,
      orphan: o,
      orphanReason: r,
      read: false
    };
  })).apply(this, arguments);
}
function D() {
  if ((0, g.fourReactionsInBubbleEnabled)()) {
    return 4;
  } else {
    return 3;
  }
}