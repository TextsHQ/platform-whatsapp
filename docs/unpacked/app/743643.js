var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadEarlierMsgs = function () {
  return R.apply(this, arguments);
};
exports.loadMsgsPromiseLoop = k;
exports.loadRecentMsgs = function () {
  return I.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./898817.js");
var o = require("./250655.js");
var s = require("./122583.js");
var l = r(require("./670983.js"));
var u = require("./8304.js");
var c = require("./904086.js");
var d = r(require("./60748.js"));
var p = require("./984330.js");
var f = require("./735618.js");
var _ = require("./292220.js");
var g = r(require("./495976.js"));
var m = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = O(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var r = {};
  var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (o && (o.get || o.set)) {
        Object.defineProperty(r, a, o);
      } else {
        r[a] = e[a];
      }
    }
  }
  r.default = e;
  if (n) {
    n.set(e, r);
  }
  return r;
}(require("./288057.js"));
var h = require("./61113.js");
var y = require("./567538.js");
var E = require("./192737.js");
var S = require("./73225.js");
var v = require("./578606.js");
var T = require("./425280.js");
var M = require("./787111.js");
var A = require("./163139.js");
var b = require("./142601.js");
var C = require("./54614.js");
var P = require("./780898.js");
function O(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (O = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function I() {
  return (I = (0, i.default)(function* (e, t, n) {
    const r = (0, A.unproxy)(e);
    let i = t;
    if (!i) {
      i = r.msgs;
    }
    if (N(r, i)) {
      return Promise.resolve();
    }
    if (i.msgLoadState.isLoadingRecentMsgs) {
      return i.loadRecentPromise;
    }
    const {
      msgs: a
    } = yield D(r, "after", i, P.WEBC_QUERY_TRIGGER_TYPE.USER_SCROLL, n);
    return a;
  })).apply(this, arguments);
}
function R() {
  return (R = (0, i.default)(function* (e, t, n, r) {
    const i = (0, A.unproxy)(e);
    yield i.waitForChatLoading();
    let a = t;
    const o = n != null ? n : P.WEBC_QUERY_TRIGGER_TYPE.USER_SCROLL;
    if (!a) {
      a = i.msgs;
    }
    if (a.msgLoadState.noEarlierMsgs) {
      return Promise.resolve();
    }
    if (a.msgLoadState.isLoadingEarlierMsgs) {
      return a.loadEarlierPromise;
    }
    const s = a ? a.head() : null;
    if (i.isNewsletter && s != null && (0, M.isEarliestNewsletterSystemMsg)(s)) {
      a.msgLoadState.noEarlierMsgs = true;
      return [];
    }
    const {
      msgs: l,
      hasMoreMsgs: u
    } = yield D(i, "before", a, o, r);
    const c = s ? s.msgChunk : a;
    if (c && !u) {
      c.msgLoadState.noEarlierMsgs = i.endOfHistoryTransferType !== f.ConversationEndOfHistoryTransferModelPropType.INCOMPLETE;
      if ((0, b.isHistorySyncOnDemandEnabled)()) {
        c.msgLoadState.noEarlierMsgs = c.msgLoadState.noEarlierMsgs && i.endOfHistoryTransferType !== f.ConversationEndOfHistoryTransferModelPropType.COMPLETE_BUT_MORE_MESSAGES_REMAIN_ON_PRIMARY;
      }
    }
    return l;
  })).apply(this, arguments);
}
function N(e, t) {
  return e.msgs === t;
}
function D() {
  return w.apply(this, arguments);
}
function w() {
  return (w = (0, i.default)(function* (e, t, n, r, i) {
    let a;
    a = t === "after" ? n.last() : n.head();
    let o = {};
    if (a) {
      o = a.id.clone();
    } else {
      o.remote = e.id;
    }
    o.count = _.PAGE_SIZE;
    o.direction = t;
    const s = (0, y.newMessageQueryEvent)(r);
    const l = yield k(e, a, n, h.MsgCollection.findQuery.bind(h.MsgCollection, o), t, s, true, i);
    if (e.isNewsletter && (0, S.isNewsletterReactionEnabled)()) {
      yield (0, v.maybeUpdateMsgsAddOns)(l, e);
    }
    if (l.length === _.PAGE_SIZE || !e.isNewsletter || !(0, S.isNewsletterEnabled)()) {
      return {
        msgs: l,
        hasMoreMsgs: l.length === _.PAGE_SIZE
      };
    }
    try {
      const r = l[0];
      if (t === "before" && r != null && (0, M.isNewsletterSystemMsg)(r)) {
        return {
          msgs: l,
          hasMoreMsgs: false
        };
      }
      const i = l.length > _.PAGE_SIZE ? [] : yield (0, T.pullNewsletterMessagesFromServer)(e, {
        messageCount: _.PAGE_SIZE - l.length,
        cursor: L(n, t, l),
        resetUnreadCount: true
      });
      const a = t === "before" ? i.concat(l) : l.concat(i);
      const o = a.length >= _.PAGE_SIZE;
      const s = a[0];
      if (!(t !== "before" || o || s != null && (0, M.isNewsletterSystemMsg)(s))) {
        const t = yield (0, M.addSystemMessagesToChat)(e);
        a.unshift(...t);
      }
      return {
        msgs: a,
        hasMoreMsgs: o
      };
    } catch (e) {
      return {
        msgs: l,
        hasMoreMsgs: true
      };
    }
  })).apply(this, arguments);
}
function L(e, t, n) {
  var r;
  var i;
  const a = n.length > 0 ? n : e.toArray();
  const o = t === "before" ? (r = a[0]) === null || r === undefined ? undefined : r.serverId : (i = a[a.length - 1]) === null || i === undefined ? undefined : i.serverId;
  if (o == null) {
    return null;
  } else {
    return {
      [t]: o
    };
  }
}
function k(e, t, n, r, l, f) {
  let _ = !(arguments.length > 6 && arguments[6] !== undefined) || arguments[6];
  let h = arguments.length > 7 ? arguments[7] : undefined;
  const S = (0, A.unproxy)(e);
  const v = self.performance.now();
  if (l === "after") {
    n.msgLoadState.isLoadingRecentMsgs = true;
    f.webcMessageQueryType = C.WEBC_MESSAGE_QUERY_DIRECTION.LOAD_NEXT;
  } else if (l === "before") {
    n.msgLoadState.isLoadingEarlierMsgs = true;
    f.webcMessageQueryType = C.WEBC_MESSAGE_QUERY_DIRECTION.LOAD_PREV;
  } else if (l === "around") {
    n.msgLoadState.isLoadingAroundMsgs = true;
    f.webcMessageQueryType = C.WEBC_MESSAGE_QUERY_DIRECTION.LOAD_AROUND;
  }
  f.webcBrowserNetworkType = (0, E.getEffectiveNetworkType)();
  f.webcChatType = S.getWebcChatType();
  if (typeof S.initialIndex == "number") {
    f.webcChatPosition = S.initialIndex;
  }
  const T = (0, d.default)([h, S.deleteSignal].filter(Boolean), e => (0, c.promiseLoop)(function () {
    var s = (0, i.default)(function* (i, s, c) {
      if (e.aborted) {
        throw new a.AbortError();
      }
      const d = (0, u.delayMs)((0, o.expBackoff)(c, 120000, 1000, 0.1));
      const _ = Promise.resolve();
      try {
        yield _;
        const o = yield r();
        if (e.aborted) {
          throw new a.AbortError();
        }
        let s;
        f.webcQueryT = Math.ceil(self.performance.now() - v);
        if (Array.isArray(o[0])) {
          s = o[0][0];
          o.forEach(e => (0, y.logMessageCounts)(f, e));
        } else {
          s = o[0];
          (0, y.logMessageCounts)(f, o);
        }
        if (s) {
          f.webcEarliestMessageT = s.t;
          if (s.msgChunk === S.msgs) {
            f.webcEarliestMessageIndex = S.msgs.length - 1;
          }
        }
        (0, g.default)().then(e => {
          if (e) {
            f.webcBrowserStorageQuotaBytes = e.quota;
            f.webcBrowserStorageQuotaUsedBytes = e.usage;
          }
        }).finally(() => f.commit());
        G(t, n, l);
        i(o);
      } catch (e) {
        if (e.name === a.ABORT_ERROR) {
          throw e;
        }
        if (c > 3 || e === 404) {
          G(t, n, l);
          __LOG__(3)`chat:loadMsgs:error ${String(e)}`;
          if (e === 404) {
            return Promise.reject(new p.E404());
          } else {
            return Promise.reject(new m.GaveUpRetry(`Gave up msg fetch after ${c} tries`));
          }
        } else {
          return d;
        }
      }
    });
    return function () {
      return s.apply(this, arguments);
    };
  }(), 0)).catch((0, s.filteredCatch)(m.GaveUpRetry, () => [])).catch((0, s.filteredCatch)(p.E404, e => {
    if (_) {
      return [];
    }
    throw e;
  }));
  if (l === "after") {
    n.loadRecentPromise = T;
  } else if (l === "before") {
    n.loadEarlierPromise = T;
  } else if (l === "around") {
    n.loadAroundPromise = T;
  }
  return T;
}
function G(e, t, n) {
  const r = (e == null ? undefined : e.msgChunk) && e.msgChunk !== t;
  t.msgLoadState.contextLoaded = true;
  if (e && r) {
    (0, l.default)(e.msgChunk, "msg.msgChunk").msgLoadState.contextLoaded = true;
  }
  if (n === "after") {
    t.msgLoadState.isLoadingRecentMsgs = false;
  } else if (n === "before") {
    t.msgLoadState.isLoadingEarlierMsgs = false;
  } else if (n === "around") {
    t.msgLoadState.isLoadingAroundMsgs = false;
  }
}