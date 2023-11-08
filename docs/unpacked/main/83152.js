var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("./190643.js"));
var o = require("./980518.js");
var l = a(require("./362842.js"));
var i = require("../app/396574.js");
var u = require("../app/356097.js");
var s = require("../app/690495.js");
var c = require("../app/163755.js");
var d = a(require("./599664.js"));
var f = require("./789955.js");
var p = require("./48794.js");
var m = a(require("./873158.js"));
var h = require("../app/787742.js");
var g = require("./541345.js");
var E = require("./414493.js");
var v = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = b(t);
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
var _ = a(require("../app/156720.js"));
var y = require("./871210.js");
var C = require("./884561.js");
function b(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (b = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function M(e, t) {
  const n = (0, v.useRef)(null);
  const a = (0, v.useRef)(null);
  const {
    msg: b,
    msgContent: M,
    displayType: S,
    isGroupedSticker: T = false
  } = e;
  const [w, A, P, O, k, D] = (0, y.useMsgValues)(e.msg.id, [h.getId, h.getIsSentByMe, h.getIsGroupMsg, c.getSenderObj, h.getHasReaction, c.getIsTransparentMsg]);
  (0, v.useImperativeHandle)(t, () => ({
    getAnchorRef: () => n,
    getMetaRef: () => a
  }));
  const I = (0, C.useSendViewCount)(b.id, {
    mediaData: e.mediaData,
    displayType: e.displayType
  });
  const R = (0, u.isWideDisplay)(S);
  const N = e.displayAuthor ? v.default.createElement("div", {
    ref: n,
    className: m.default.author
  }, v.default.createElement(d.default, {
    msg: b,
    contact: O,
    displayType: S
  })) : null;
  const x = e.displayCtwaContext === true ? v.default.createElement(l.default, {
    msg: b.unsafe(),
    wrapperClass: m.default.ctwaContext
  }) : null;
  const L = (0, i.classnamesConvertMeToStylexPlease)({
    [m.default.quote]: true,
    [m.default.quoteMaxWidth]: !R
  });
  const j = e.quotedMsg ? v.default.createElement("div", {
    className: L
  }, e.quotedMsg) : null;
  const B = (0, i.classnamesConvertMeToStylexPlease)({
    [m.default.hasAuthor]: e.displayAuthor,
    [m.default.isFirst]: !R && (e.position === p.MsgPosition.FRONT || e.position === p.MsgPosition.SINGLE),
    [m.default.isTransparent]: D,
    [m.default.bubble]: true,
    [m.default.announcement]: R && !T
  });
  const F = (0, i.classnamesConvertMeToStylexPlease)({
    [m.default.body]: true,
    [m.default.announcementBody]: R,
    [m.default.wideBody]: R
  });
  let G = null;
  if (D && (S === u.DISPLAY_TYPE.CONVERSATION || R)) {
    G = v.default.createElement("div", {
      className: R ? m.default.wideReactionBubbleContainer : m.default.reactionBubbleContainer
    }, v.default.createElement(r.default, {
      isOutgoingMsg: A,
      displayType: S,
      bubbleType: o.AddOnBubbleType.STICKER_LIKE_MSG
    }, v.default.createElement(g.ReactionBubbleContainer, {
      msgIds: [w.toString()],
      isOutgoingMsg: A,
      displayType: S,
      reactionBubbleType: o.AddOnBubbleType.STICKER_LIKE_MSG,
      hasReaction: k,
      onDetailsPaneClosed: e.onDetailsPaneClosed
    })));
  }
  return v.default.createElement("div", {
    className: (0, i.classnamesConvertMeToStylexPlease)(B, (0, _.default)(e.bubbleStyle)),
    onClick: E.stopPropagation,
    ref: I
  }, N, j, x, v.default.createElement("div", {
    className: F
  }, M, v.default.createElement(s.FlexColumn, null, v.default.createElement(f.MetaWrapper, {
    isSentByMe: A,
    isTransparent: D,
    ref: a
  }, v.default.createElement(f.Meta, {
    msg: b
  })), G)));
}
var S = (0, v.forwardRef)(M);
exports.default = S;