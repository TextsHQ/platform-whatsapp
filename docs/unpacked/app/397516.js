var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearUnreadMentions = function (e) {
  var t;
  if (e.isGroup) {
    if (!((t = e.groupMetadata) === null || t === undefined)) {
      t.unreadMentionMetadata.reset();
    }
  }
};
exports.markSeen = function (e, t, n) {
  return function () {
    return N.apply(this, arguments);
  }((0, h.unproxy)(e), t, n);
};
exports.markUnread = function (e, t) {
  let n = !(arguments.length > 2 && arguments[2] !== undefined) || arguments[2];
  return P((0, h.unproxy)(e), t, n);
};
exports.markUnseen = C;
exports.sendSeen = A;
exports.sendSeenDebounced = undefined;
exports.updateUnreadCountMD = D;
var i = r(require("../vendor/348926.js"));
var a = require("./122583.js");
var o = require("./652204.js");
var s = require("./685639.js");
var l = require("./287461.js");
var u = require("./328620.js");
var c = require("./35234.js");
var d = require("./984330.js");
var p = require("./955800.js");
var f = require("./780549.js");
var _ = r(require("./846870.js"));
var g = require("./840089.js");
var m = require("./203146.js");
var h = require("./163139.js");
var y = require("./973981.js");
var E = require("./390737.js");
var S = r(require("./556869.js"));
var v = require("../vendor/548360.js");
var T = r(require("../vendor/667294.js"));
const M = function () {
  let e = null;
  const t = new s.ShiftTimer(t => {
    let {
      chat_: n,
      afterAvailable: r
    } = t;
    A(n, r);
    e = null;
  });
  return function () {
    var n = (0, i.default)(function* (n, r) {
      if (e != null) {
        const [r, i] = e;
        if (r.id.toString() !== n.id.toString()) {
          t.cancel();
          A(r, i);
          e = null;
        }
      }
      if (!t.isScheduled()) {
        const e = (0, l.getABPropConfigValue)("web_resume_optimized_read_receipt_send_interval");
        t.onOrAfter(e, {
          chat_: n,
          afterAvailable: r
        });
      }
      e = [n, r];
    });
    return function () {
      return n.apply(this, arguments);
    };
  }();
}();
function A() {
  return b.apply(this, arguments);
}
function b() {
  return (b = (0, i.default)(function* (e) {
    let t = !(arguments.length > 1 && arguments[1] !== undefined) || arguments[1];
    const n = (0, h.unproxy)(e);
    yield Promise.all([O(n, t), k(n, t)]).catch((0, a.filteredCatch)(d.ServerStatusCodeError, e => {
      __LOG__(3)`sendSeen: got status ${e.status}`;
    }));
  })).apply(this, arguments);
}
function C(e) {
  !function (e) {
    if (!(e.unreadCount !== 0 && e.unreadCount !== _.default.MARKED_AS_UNREAD)) {
      if (e.active) {
        e.markedUnread = true;
      }
      (0, p.markConversationUnseen)(e.id).then(() => {
        e.unreadCount = _.default.MARKED_AS_UNREAD;
      });
    }
  }((0, h.unproxy)(e));
}
function P(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : (0, u.genId)();
  if (t) {
    if (e.active) {
      e.markedUnread = true;
    }
  } else {
    e.markedUnread = false;
  }
  const {
    promises: i
  } = e;
  if (i.markUnread) {
    return i.markUnread;
  }
  const o = i.markUnread = t ? I(e) : Promise.all([O(e), k(e)]);
  const s = t ? new u.ActionType(v.fbt._("Marking as unread", null, {
    hk: "5TGKh"
  })) : new u.ActionType(v.fbt._("Marking as read", null, {
    hk: "4FeJFZ"
  }));
  const l = o.then(() => {
    const i = t ? v.fbt._("Marked as unread", null, {
      hk: "1wT8rs"
    }) : v.fbt._("Marked as read", null, {
      hk: "1Kp6Es"
    });
    if (n) {
      return new u.ActionType(i, {
        actionText: v.fbt._("Undo", null, {
          hk: "4sCkfZ"
        }),
        actionHandler: () => P(e, !t, n, r)
      });
    } else {
      return new u.ActionType(i);
    }
  }).catch((0, a.filteredCatch)(d.ServerStatusCodeError, e => {
    if (e.status >= 400) {
      if (t) {
        return new u.ActionType(v.fbt._("Couldn't mark chat as unread.", null, {
          hk: "42T8IP"
        }));
      } else {
        return new u.ActionType(v.fbt._("Couldn't mark chat as read.", null, {
          hk: "12W7Sy"
        }));
      }
    }
    throw (0, S.default)("invalid response status");
  })).catch(() => {
    const i = t ? v.fbt._("Couldn't mark chat as unread.", null, {
      hk: "42T8IP"
    }) : v.fbt._("Couldn't mark chat as read.", null, {
      hk: "12W7Sy"
    });
    if (n) {
      return new u.ActionType(i, {
        actionText: v.fbt._("Try again.", null, {
          hk: "262nZi"
        }),
        actionHandler: () => P(e, t, n, r)
      });
    } else {
      return new u.ActionType(i);
    }
  });
  E.ToastManager.open(T.default.createElement(u.ActionToast, {
    id: r,
    initialAction: s,
    pendingAction: l
  }));
  return o.then(() => {}).catch((0, a.filteredCatch)(d.ServerStatusCodeError, e => {
    __LOG__(3)`markUnread: got status ${e.status}`;
  })).finally(() => {
    i.markUnread = null;
  });
}
function O(e) {
  let t = !(arguments.length > 1 && arguments[1] !== undefined) || arguments[1];
  if (e.markedUnread || e.unreadCount === 0) {
    String(e.markedUnread);
    e.unreadCount;
    return Promise.resolve();
  }
  if (!y.Stream.available && t) {
    e.listenToOnce(y.Stream, "change:available", () => O(e));
    return Promise.resolve();
  }
  e.unreadCount;
  e.pendingSeenCount;
  const n = e.unreadCount - e.pendingSeenCount;
  const r = e.unreadCount === -1 && n === -1;
  if (n <= 0 && !r) {
    return Promise.resolve();
  }
  e.disableUnreadAnchor = true;
  e.pendingSeenCount = e.unreadCount;
  e.unreadCount;
  const i = () => {
    e.pendingSeenCount -= n;
    e.pendingSeenCount;
    if (e.pendingSeenCount < 0) {
      __LOG__(3)`models:chat:sendSeen unread ${e.unreadCount} pending: ${e.pendingSeenCount} delta: ${n}`;
      e.pendingSeenCount = 0;
    }
  };
  const o = e.getLastMsgKeyForAction();
  return (0, p.sendConversationSeen)(e, o, n).then(() => {
    D(e, n);
  }).catch((0, a.filteredCatch)(d.ServerStatusCodeError, e => {
    i();
    return Promise.reject(e);
  })).then(() => {});
}
function I() {
  return R.apply(this, arguments);
}
function R() {
  return (R = (0, i.default)(function* (e) {
    const t = e.getLastMsgKeyForAction();
    try {
      yield (0, p.sendConversationUnseen)(e.id, t);
      C(e);
    } catch (t) {
      return (0, a.filteredCatch)(d.ServerStatusCodeError, t => {
        e.markedUnread = false;
        return Promise.reject(t);
      })(t);
    }
  })).apply(this, arguments);
}
function N() {
  return (N = (0, i.default)(function* (e, t) {
    let n = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
    String(t);
    let r = null;
    if (t != null) {
      if (t > 0 && t <= e.unreadCount) {
        r = e.unreadCount - t;
      } else if (t === -1 && e.unreadCount <= 0) {
        r = 0;
      }
    } else {
      r = 0;
    }
    const i = r == null ? Promise.resolve() : (0, p.markConversationSeen)(e.id, r);
    yield i;
    if (t != null && n) {
      const n = e.pendingSeenCount - t;
      e.pendingSeenCount = Math.max(0, n);
      e.pendingSeenCount;
    }
    if (r != null) {
      e.unreadCount = r;
    }
    e.unreadMsgAnchor = undefined;
    e.markedUnread = false;
    e.unreadDividerOffset = 0;
  })).apply(this, arguments);
}
function D() {
  return w.apply(this, arguments);
}
function w() {
  return (w = (0, i.default)(function* (e, t) {
    let n = !(arguments.length > 2 && arguments[2] !== undefined) || arguments[2];
    const {
      unreadCount: r
    } = yield (0, c.getChatMeta)(e.id);
    e.unreadCount;
    e.unreadCount = r;
    e.unreadDividerOffset = 0;
    e.unreadMsgAnchor = undefined;
    e.markedUnread = false;
    if (n) {
      const n = e.pendingSeenCount - t;
      e.pendingSeenCount = Math.max(0, n);
    }
  })).apply(this, arguments);
}
exports.sendSeenDebounced = function (e) {
  let t = !(arguments.length > 1 && arguments[1] !== undefined) || arguments[1];
  if (!f.Cmd.isOfflineDeliveryEnd && (0, l.getABPropConfigValue)("web_resume_optimized_read_receipt_send_active_chat")) {
    return M(e, t);
  } else {
    return A(e, t);
  }
};
const L = new o.PromiseQueue();
function k() {
  return G.apply(this, arguments);
}
function G() {
  return (G = (0, i.default)(function* (e) {
    let t = !(arguments.length > 1 && arguments[1] !== undefined) || arguments[1];
    if (e.unreadEditTimestampMs == null) {
      return;
    }
    String(e.unreadEditTimestampMs);
    if (!y.Stream.available && t) {
      return void e.listenToOnce(y.Stream, "change:available", () => k(e));
    }
    const n = e.unreadEditTimestampMs;
    yield L.enqueue((0, i.default)(function* () {
      if (e.unreadEditTimestampMs != null) {
        yield (0, m.markEditedMsgsRead)(e.id, {
          trusted: e.trusted
        });
        if (n === e.unreadEditTimestampMs) {
          e.unreadEditTimestampMs = null;
          (0, g.updateChatTable)(e.id, {
            unreadEditTimestampMs: null
          });
        }
      }
    }));
  })).apply(this, arguments);
}