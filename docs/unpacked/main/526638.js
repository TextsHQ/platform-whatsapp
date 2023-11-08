var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInitialCursorAndFocusContext = function (e, t) {
  const {
    focusCtx: n,
    chat: a,
    msgCollection: r
  } = e;
  const o = s(n) || c(e, t);
  const l = o == null ? undefined : o.msg;
  const i = l == null ? undefined : l.id;
  return {
    cursor: u.RenderCursor.create({
      msgCollection: r,
      focusedMsgKey: i,
      type: a.isGroup ? u.RENDER_CURSOR.GROUP_CONVERSATION : u.RENDER_CURSOR.CONVERSATION
    }),
    focusCtx: o
  };
};
exports.getMsgLoadState = function (e) {
  const {
    msgLoadState: t
  } = e;
  return {
    noEarlierMsgs: t.noEarlierMsgs,
    isLoadingEarlierMsgs: t.isLoadingEarlierMsgs,
    isLoadingRecentMsgs: t.isLoadingRecentMsgs,
    isLoadingAroundMsgs: t.isLoadingAroundMsgs,
    contextLoaded: t.contextLoaded,
    isRepairingMsgHistory: t.isRepairingMsgHistory
  };
};
exports.getUnreadFocusCtx = c;
exports.isMostRecentCMC = d;
exports.noEarlierMsgStateIsIncorrect = function (e, t, n) {
  const a = n.noEarlierMsgs && e.shouldAppearInList && t && e.msgChunks.filter(e => e.filter(t => t.msgChunk === e).length > 0).length > 0;
  if (a) {
    __LOG__(4, undefined, new Error(), true)`MRM noEarlierMsgs on chat ${String(e.id)} is true but chat.msgChunks has length: ${e.msgChunks.length},
and chat.msgs.length: ${e.msgs.length}`;
    SEND_LOGS("noEarlierMsgs-error");
  }
  return a;
};
exports.validateFocusCtx = s;
var r = a(require("../vendor/81109.js"));
var o = require("../app/163755.js");
var l = require("../app/61113.js");
var i = require("../app/787742.js");
var u = require("./276051.js");
function s(e) {
  if (e == null) {
    return null;
  } else if (e.key != null) {
    return (0, r.default)((0, r.default)({}, e), {}, {
      msg: l.MsgCollection.get(e.key)
    });
  } else {
    return e;
  }
}
function c(e, t) {
  const {
    chat: n,
    msgCollection: a,
    focusCtx: r
  } = e;
  let l;
  l = n.unreadCount ? n.unreadCount : t;
  if (r && !d(e) || !l) {
    return;
  }
  const u = a.filter(e => (0, i.getIsUnreadType)(e)).reverse().slice(0, l);
  let s;
  if (u.length !== l) {
    return;
  }
  s = u[u.length - 1];
  const {
    unreadDividerOffset: c
  } = n;
  if (c > 0) {
    const e = a.filter(Boolean).reverse();
    const t = e.indexOf(s);
    if (e.slice(t + 1, t + c + 1).every(e => Boolean((0, o.getAsRevoked)(e)))) {
      s = e[t + c];
    } else {
      __LOG__(4, undefined, new Error(), true)`invalid unreadDividerOffset: ${c}`;
      SEND_LOGS("invalid-unread-divider-offset", 0.001);
    }
  }
  return {
    msg: s,
    isUnreadDivider: n.shouldShowUnreadDivider,
    highlightMsg: false
  };
}
function d(e) {
  return e.chat.msgs === e.msgCollection;
}