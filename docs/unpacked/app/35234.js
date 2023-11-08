var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._getActiveChatWid = N;
exports.addUnreadMentionChat = function (e, t) {
  return (0, _.getStorage)().lock(["chat"], function () {
    var n = (0, a.default)(function* (n) {
      let [r] = n;
      const i = Array.from(e.keys());
      if (i.length === 0) {
        return;
      }
      const a = yield (0, y.getChatTable)().bulkGet(i);
      if (!a || a.length === 0) {
        return void __LOG__(4, undefined, new Error())`addUnreadMentionChat: could not find chats`;
      }
      const o = [];
      a.forEach(n => {
        if (n) {
          var r;
          const a = n.id.toString();
          let s = (r = n.unreadMentionsOfMe) !== null && r !== undefined ? r : [];
          const l = e.get(a);
          if (l) {
            s = s.concat(l);
          }
          let u = {
            id: a,
            unreadMentionsOfMe: s
          };
          if (t) {
            var i;
            u = {
              id: a,
              unreadMentionsOfMe: s,
              unreadMentionCount: (i = t.get(a)) !== null && i !== undefined ? i : 0
            };
          }
          o.push(u);
        }
      });
      return (0, y.getChatTable)().bulkCreateOrMerge(o);
    });
    return function () {
      return n.apply(this, arguments);
    };
  }());
};
exports.bulkGetChats = R;
exports.bulkUpdateChatLastAddOnPreview = function (e) {
  const t = Array.from(e).map(e => {
    let [t, n] = e;
    return {
      id: t,
      chatlistPreview: n,
      lastReactionPreview: undefined
    };
  });
  return (0, y.getChatTable)().bulkCreateOrMerge(t);
};
exports.clearMatChatCache = function () {
  A.clear();
};
exports.createChatRecord = function () {
  return b.apply(this, arguments);
};
exports.getAllChatsDeserialized = function () {
  return (0, y.getChatTable)().all().then(e => e.map(e => (0, p.deserializeChat)(e)));
};
exports.getChatMeta = function () {
  return C.apply(this, arguments);
};
exports.getChatRecord = I;
exports.getMatChat = w;
exports.getMatChatBulk = function () {
  return L.apply(this, arguments);
};
exports.getMatChatIncomingMessage = function (e) {
  return w(e);
};
exports.markMessageAndChatAsRead = function (e, t, n) {
  return (0, _.getStorage)().lock(["message", "chat"], function () {
    var r = (0, a.default)(function* (r) {
      let [i, a] = r;
      const l = yield P(t);
      const p = [];
      let f = 0;
      const _ = [];
      l.forEach(t => {
        if (t.hsmTag === c.HSM_TAG_TYPE.AUTHENTICATION) {
          (0, u.frontendFireAndForget)("logOTPMessageReadActions", {
            msgRow: t
          });
        }
        if (e == null || t.rowId != null && t.rowId > e) {
          f++;
          if ((0, g.getIsImportantMessage)(t)) {
            const e = {
              id: t.id,
              timestamp: t.t
            };
            _.push(e);
          }
        } else {
          p.push({
            id: t.id,
            ack: Math.max(t.ack, s.ACK.READ),
            pendingReadReceipt: null
          });
        }
      });
      const m = f === 0 && n ? -1 : f;
      const h = [a.merge(t, {
        id: t,
        unreadCount: m,
        unreadDividerOffset: 0,
        unreadMentionsOfMe: _,
        unreadMentionCount: 0
      })];
      if (p.length > 0) {
        h.push((0, E.getMessageTable)().bulkCreateOrMerge(p).then(() => (0, d.handleActivitiesForChatThreadLogging)([{
          activityType: "msgRead",
          ts: (0, o.unixTime)(),
          chatId: (0, T.createWid)(t),
          readCount: p.length
        }])));
      }
      yield Promise.all(h);
    });
    return function () {
      return r.apply(this, arguments);
    };
  }());
};
exports.matChatCache = undefined;
exports.populateMatCacheBulk = function (e) {
  e.filter(e => v.default.isUser(e.id) && !e.isDeprecated).map(e => {
    const t = (0, T.createWid)(e.id);
    if (!(t.isLid() && A.get(t.toString()) != null)) {
      A.set(t.toString(), Promise.resolve(t));
    }
    const n = (0, l.getAlternateWid)(t);
    if (!(n == null || !n.isLid() && A.get(n.toString()) != null)) {
      A.set(n.toString(), Promise.resolve(t));
    }
  });
};
exports.pruneExpiredOrphanTcTokens = function () {
  const e = (0, S.tokenExpirationCutoff)(S.TcTokenMode.Receiver);
  const t = [];
  return (0, _.getStorage)().lock(["orphan-tc-token"], function () {
    var n = (0, a.default)(function* (n) {
      let [r] = n;
      (yield r.all()).forEach(n => {
        const r = n.tcTokenTimestamp;
        if (r != null && r < e) {
          t.push(n.chatId);
        }
      });
      return r.bulkRemove(t);
    });
    return function () {
      return n.apply(this, arguments);
    };
  }());
};
exports.pruneExpiredTcTokens = function () {
  const e = (0, S.tokenExpirationCutoff)(S.TcTokenMode.Receiver);
  return (0, _.getStorage)().lock(["chat"], function () {
    var t = (0, a.default)(function* (t) {
      let [n] = t;
      const r = yield n.lessThan(["tcTokenTimestamp"], e);
      if (!r || r.length === 0) {
        return;
      }
      const i = r.map(e => ({
        id: e.id,
        tcToken: null,
        tcTokenTimestamp: null
      }));
      return n.bulkCreateOrMerge(i);
    });
    return function () {
      return t.apply(this, arguments);
    };
  }());
};
exports.queryPendingReadReceiptMsgRows = P;
exports.reduceChatUnreadCount = function (e) {
  let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  let n = !(arguments.length > 2 && arguments[2] !== undefined) || arguments[2];
  return (0, _.getStorage)().lock(["chat"], function () {
    var r = (0, a.default)(function* (r) {
      var i;
      let [a] = r;
      const o = yield a.get(e);
      if (o == null) {
        return void __LOG__(4, undefined, new Error())`reduceChatUnreadCount: could not find chat with id ${e}`;
      }
      const s = Math.max(o.unreadCount - t, 0);
      let l = (i = o.unreadDividerOffset) !== null && i !== undefined ? i : 0;
      if (n) {
        l += t;
      }
      return a.merge(e, {
        unreadCount: s,
        unreadDividerOffset: l
      });
    });
    return function () {
      return r.apply(this, arguments);
    };
  }());
};
exports.removeMatChatMapping = G;
exports.removeUnreadMentionChat = function (e) {
  return (0, _.getStorage)().lock(["chat"], function () {
    var t = (0, a.default)(function* (t) {
      let [n] = t;
      const r = Array.from(e.keys());
      if (r.length === 0) {
        return;
      }
      const i = yield (0, y.getChatTable)().bulkGet(r);
      if (!i || i.length === 0) {
        return void __LOG__(4, undefined, new Error())`removeUnreadMentionChat: could not find chats`;
      }
      const a = [];
      i.forEach(t => {
        if (t) {
          var n;
          let r = (n = t.unreadMentionsOfMe) !== null && n !== undefined ? n : [];
          const i = e.get(t.id.toString());
          if (i) {
            r = r.filter(e => !i.includes(e.id));
          }
          a.push({
            id: t.id.toString(),
            unreadMentionsOfMe: r
          });
        }
      });
      return (0, y.getChatTable)().bulkCreateOrMerge(a);
    });
    return function () {
      return t.apply(this, arguments);
    };
  }());
};
exports.updateChatArchiveDrawer = function (e) {
  return (0, _.getStorage)().lock(["chat"], t => {
    let [n] = t;
    const r = Array.from(e.keys());
    if (r.length === 0) {
      return Promise.resolve();
    }
    const i = r.map(t => {
      var n;
      return {
        id: t,
        archiveAtMentionViewedInDrawer: (n = e.get(t)) !== null && n !== undefined && n
      };
    });
    return n.bulkCreateOrMerge(i);
  });
};
exports.updateChatForMarkAsReadSync = function (e) {
  return (0, _.getStorage)().lock(["chat"], function () {
    var t = (0, a.default)(function* (t) {
      let [n] = t;
      const r = yield n.get(e);
      if (r != null) {
        if (r.unreadCount === -1) {
          return n.createOrMerge(e, {
            id: e,
            unreadCount: 0,
            unreadMentionsOfMe: [],
            unreadMentionCount: 0
          });
        } else {
          return undefined;
        }
      }
      __LOG__(4, undefined, new Error())`updateMarkChatAsReadSync: could not find chat with id ${e}`;
    });
    return function () {
      return t.apply(this, arguments);
    };
  }());
};
exports.updateDeprecatedChatMatCache = function (e, t) {
  if (t) {
    G(e);
  } else {
    k(e);
  }
};
exports.updateMatCache = k;
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./632157.js");
var s = require("./402994.js");
var l = require("./12643.js");
var u = require("./359987.js");
var c = require("./382895.js");
var d = require("./698867.js");
var p = require("./555789.js");
var f = require("./288057.js");
var _ = require("./732011.js");
var g = require("./787742.js");
var m = require("./373070.js");
var h = require("./525119.js");
var y = require("./61229.js");
var E = require("./851698.js");
var S = require("./147034.js");
var v = r(require("./124928.js"));
var T = require("./669050.js");
var M = r(require("./556869.js"));
const A = new Map();
function b() {
  return (b = (0, a.default)(function* (e, t) {
    try {
      yield (0, y.getChatTable)().create((0, i.default)({
        id: e.toString()
      }, t));
    } catch (e) {
      if (e instanceof f.DbOnLogoutAbort) {
        throw e;
      }
      __LOG__(4, true, new Error())`createChatRecord: update chat table failed`;
      throw (0, M.default)("update chat table failed");
    }
    if ((0, h.isMatFullyEnabled)() && e.isUser()) {
      k(e);
    }
  })).apply(this, arguments);
}
function C() {
  return (C = (0, a.default)(function* (e) {
    const t = yield (0, y.getChatTable)().get(e.toString(), false);
    if (t) {
      return {
        unreadCount: t.unreadCount,
        timestamp: t.t
      };
    } else {
      return Promise.reject((0, M.default)("Failed to find row in chat table with id:" + e.toString()));
    }
  })).apply(this, arguments);
}
function P() {
  return O.apply(this, arguments);
}
function O() {
  return (O = (0, a.default)(function* (e) {
    return (yield (0, E.getMessageTable)().equals(["from", "pendingReadReceipt"], [e, 1], {
      shouldDecrypt: false
    })).filter(e => e.type !== m.MSG_TYPE.UNKNOWN);
  })).apply(this, arguments);
}
function I(e) {
  return (0, y.getChatTable)().get(e.toString(), false);
}
function R(e) {
  return (0, y.getChatTable)().bulkGet(e.map(e => e.toString()));
}
function N() {
  return D.apply(this, arguments);
}
function D() {
  return (D = (0, a.default)(function* (e) {
    if (!e.isLid()) {
      if ((yield I(e)) != null) {
        return e;
      }
      const t = (0, l.getCurrentLid)(e);
      if (t != null) {
        if ((yield I(t)) != null) {
          return t;
        }
      }
      return e;
    }
    const t = yield I(e);
    if (t != null && !t.isDeprecated) {
      return e;
    }
    const n = (0, l.getPhoneNumber)(e);
    if (n != null) {
      if (yield I(n)) {
        return n;
      }
    }
    return e;
  })).apply(this, arguments);
}
function w(e) {
  const t = A.get(e.toString());
  if (t != null) {
    return t;
  }
  const n = N(e);
  A.set(e.toString(), n);
  return n;
}
function L() {
  return (L = (0, a.default)(function* (e) {
    const t = [];
    const n = e.filter(e => e.isUser());
    n.map(e => {
      if (A.get(e.toString()) == null) {
        t.push(e);
      }
    });
    const r = (0, l.getAlternateWidBulk)(t);
    Array.from(r.keys()).map(e => t.push((0, T.createWidFromWidLike)(e)));
    if (t.length > 0) {
      (yield R(t)).forEach(e => {
        if (e != null) {
          var t;
          const n = (t = r.get(e.id.toString())) !== null && t !== undefined ? t : e.id.toString();
          if (!((e == null ? undefined : e.isDeprecated) || A.has(n.toString()))) {
            A.set(n.toString(), Promise.resolve((0, T.createWidFromWidLike)(e.id)));
          }
        }
      });
    }
    const i = new Map();
    n.map(function () {
      var e = (0, a.default)(function* (e) {
        const t = yield A.get(e.toString());
        if (t != null) {
          i.set(e, t);
        } else {
          i.set(e, e);
        }
      });
      return function () {
        return e.apply(this, arguments);
      };
    }());
    return i;
  })).apply(this, arguments);
}
function k(e) {
  A.set(e.toString(), Promise.resolve(e));
  const t = (0, l.getAlternateWid)(e);
  if (t != null) {
    A.set(t.toString(), Promise.resolve(e));
  }
}
function G(e) {
  const t = (0, l.getAlternateWid)(e);
  if (t != null) {
    A.delete(t.toString());
  }
  A.delete(e.toString());
}
exports.matChatCache = A;