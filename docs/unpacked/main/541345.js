var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactionBubbleContainer = undefined;
var r = a(require("../vendor/618446.js"));
var o = a(require("../vendor/385564.js"));
var l = require("./980518.js");
var i = require("../app/356097.js");
var u = require("../app/664149.js");
var s = require("../app/702206.js");
var c = a(require("./191289.js"));
var d = require("../app/163755.js");
var f = require("./111529.js");
var p = require("../app/803328.js");
var m = require("../app/61113.js");
var h = a(require("../app/565754.js"));
var g = require("../app/73225.js");
var E = require("./97195.js");
var v = require("./974232.js");
var _ = require("./882487.js");
var y = require("../app/911600.js");
var C = require("./548155.js");
var b = require("./474474.js");
var M = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = w(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var a = {};
  var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e) {
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
      if (l && (l.get || l.set)) {
        Object.defineProperty(a, o, l);
      } else {
        a[o] = e[o];
      }
    }
  }
  a.default = e;
  if (n) {
    n.set(e, a);
  }
  return a;
}(require("../vendor/667294.js"));
var S = require("./462708.js");
var T = a(require("./154731.js"));
function w(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (w = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function A(e) {
  const t = function (e) {
    const t = e.map(e => m.MsgCollection.get(e)).filter(Boolean);
    if (t.length > 0 && t.every(e => e.id.remote.isNewsletter())) {
      return t;
    } else {
      return null;
    }
  }(e.msgIds);
  if (t != null) {
    if ((0, g.isNewsletterReactionEnabled)()) {
      return M.default.createElement(E.NewsletterReactionBubbleContainer, {
        reactionBubbleVisible: true,
        msgs: t,
        onDetailsPaneClosed: e.onDetailsPaneClosed,
        reactionBubbleType: e.reactionBubbleType
      });
    } else {
      return null;
    }
  } else {
    return M.default.createElement(P, e);
  }
}
function P(e) {
  let {
    msgIds: t,
    isOutgoingMsg: n,
    displayType: a,
    reactionBubbleType: r,
    reactionBubbleVisible: g = true,
    hasReaction: E,
    onDetailsPaneClosed: w
  } = e;
  const [A, P] = (0, M.useState)();
  const O = (0, f.useMarkAddOnsAsRead)();
  const {
    reactionArrayEmojis: k,
    numberOfSenderReactions: D,
    reactionsModels: I,
    isFirstData: R
  } = (0, T.default)(t, e => {
    const n = (0, o.default)(e.map(e => e.unreadSenders()));
    O({
      addOnType: p.MessageAddOnType.Reaction,
      addOns: n.map(e => ({
        msgKey: h.default.from(e.msgKey),
        sender: e.senderUserJid
      }))
    });
    if (r !== l.AddOnBubbleType.MEDIA_VIEWER) {
      (0, b.lastMessageReactionChange)(t);
    }
  }, E);
  const {
    reactionArrayEmojis: N,
    numberOfSenderReactions: x
  } = (0, S.useReactionEmojiAndSum)(Array.from(t, e => h.default.from(e)));
  if (t.length === 1) {
    const e = m.MsgCollection.get(t[0]);
    if (e != null && !(0, y.canHaveReactions)(e.type, e.subtype)) {
      return null;
    }
  }
  const L = () => {
    if (!(w == null)) {
      w();
    }
    P(null);
  };
  const j = e => {
    var r;
    e.preventDefault();
    e.stopPropagation();
    const o = (0, s.isFlattenedReactionsEnabled)() ? M.default.createElement(c.default, {
      msgIds: t,
      isAggregated: t.length > 1,
      onEmpty: L,
      onCloseDetailsPane: L
    }) : M.default.createElement(_.ReactionDetailsPane, {
      onCloseDetailsPane: L,
      onEmpty: L,
      msgIds: t,
      reactionsModels: I,
      isAggregated: t.length > 1
    });
    const l = m.MsgCollection.get(t[0]);
    const f = l != null ? (0, d.getChat)(l) : null;
    if (f && ((r = f.groupMetadata) === null || r === undefined ? undefined : r.isIncognitoCag)) {
      var p;
      const e = (p = f.groupMetadata) === null || p === undefined ? undefined : p.parentGroup;
      if (e) {
        (0, v.incrementPnhDailyCount)(e, v.PnhCagDailyMetricsType.REACTION_OPEN_TRAY_COUNT);
      }
    }
    P({
      menu: o,
      dirY: u.DirY.BOTTOM,
      dirX: n && !(0, i.isWideDisplay)(a) ? u.DirX.LEFT : u.DirX.RIGHT,
      type: u.MenuType.ReactionDetailsPane,
      anchor: e.target,
      flipOnRtl: true
    });
  };
  return M.default.createElement(C.ReactionsBubbleWrapper, {
    handlers: {
      enter: j,
      space: j
    },
    isFirstData: R,
    openDetailsPane: j,
    detailsPane: A,
    closeDetailsPane: L,
    hasReaction: !!E,
    numberOfSenderReactions: (0, s.isFlattenedReactionsEnabled)() ? x : D,
    reactionBubbleVisible: g,
    reactionArrayEmojis: (0, s.isFlattenedReactionsEnabled)() ? N : k
  });
}
function O(e, t) {
  return (0, r.default)(e, t);
}
const k = (0, M.memo)(A, O);
exports.ReactionBubbleContainer = k;
k.displayName = "ReactionBubbleContainer";