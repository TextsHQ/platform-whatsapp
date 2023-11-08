var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearFtsCache = function (e) {
  (0, h.unproxy)(e).ftsCache = {};
};
exports.fts = function (e, t) {
  let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  let r = arguments.length > 3 ? arguments[3] : undefined;
  const i = (0, h.unproxy)(e);
  if (n === 1) {
    const e = i.ftsCache[t];
    if (e) {
      return e;
    }
    const a = f.MsgCollection.search(t, n, r, i.id);
    i.ftsCache[t] = a;
    const o = () => {
      i.ftsCache[t] = null;
    };
    self.setTimeout(o, s.FTS_TTL);
    a.catch(o);
    return a;
  }
  return f.MsgCollection.search(t, n, r, i.id);
};
exports.getSearchContext = function (e, t, n) {
  const r = (0, h.unproxy)(e);
  let i;
  let o = null;
  if (t instanceof m.Msg) {
    o = t;
  } else if (t instanceof g.default) {
    i = t;
  }
  let c = o ? o.msgChunk : undefined;
  const p = Math.trunc(d.PAGE_SIZE / 3 * 2);
  if (!c || !c.msgLoadState.contextLoaded) {
    var E;
    if (!c) {
      c = new u.ChatMsgsCollection();
      r.msgChunks.push(c);
      if (o) {
        c.add(o);
      }
    }
    const e = o ? o.id.clone() : i.clone();
    e.count = p;
    e.serverId = (E = o) === null || E === undefined ? undefined : E.serverId;
    const t = function () {
      if (o) {
        return o.msgChunk;
      }
      if (i != null) {
        const e = f.MsgCollection.get(i);
        if (e == null ? undefined : e.msgChunk) {
          return e.msgChunk;
        } else {
          return c;
        }
      }
      return c;
    };
    const d = (0, _.newMessageQueryEvent)(y.WEBC_QUERY_TRIGGER_TYPE.SEARCH_RESULT_CLICK);
    l.loadMsgsPromiseLoop(r, o, c, f.MsgCollection.getContext.bind(f.MsgCollection, e, t), "around", d, n == null).then(e => {
      const n = t();
      if (n && c && n !== c) {
        r.notifyMsgCollectionMerge(n, c, n);
      }
      const l = e[0];
      const u = i ? f.MsgCollection.get(i) : o;
      if (u && Array.isArray(l) && l.length < p) {
        (0, a.default)(u.msgChunk, "loadedMsg.msgChunk").msgLoadState.noEarlierMsgs = r.endOfHistoryTransferType !== s.ConversationEndOfHistoryTransferModelPropType.INCOMPLETE;
        if (c && u.msgChunk !== c) {
          c.msgLoadState.noEarlierMsgs = r.endOfHistoryTransferType !== s.ConversationEndOfHistoryTransferModelPropType.INCOMPLETE;
        }
      }
    }).catch(() => {
      if (n) {
        n.isQuotedMsgAvailable = false;
      }
    });
  }
  return {
    collection: c,
    msg: o,
    key: i,
    highlightMsg: true
  };
};
exports.isUnreadFilterMatch = S;
exports.matchFilter = function (e) {
  let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const n = (0, h.unproxy)(e);
  if ((0, i.default)(t)) {
    return true;
  }
  if (t.label) {
    return n.labels != null && n.labels.includes(t.label);
  }
  if (t.kind === c.SEARCH_FILTERS.UNREAD) {
    return S(n);
  }
  if (t.kind === c.SEARCH_FILTERS.CONTACT) {
    return (0, p.getIsMyContact)(n.contact) && !(0, p.getIsGroup)(n.contact) && !n.isBroadcast;
  }
  if (t.kind === c.SEARCH_FILTERS.NON_CONTACT) {
    return !(0, p.getIsMyContact)(n.contact) && !(0, p.getIsGroup)(n.contact) && !n.isBroadcast;
  }
  if (t.kind === c.SEARCH_FILTERS.ASSIGNED_TO_YOU) {
    return (0, o.canAssignChats)() && n.isAssignedToMe;
  }
  return n.kind != null && t.kind === c.SEARCH_FILTERS.cast(n.kind);
};
var i = r(require("../vendor/441609.js"));
var a = r(require("./670983.js"));
var o = require("./560861.js");
var s = require("./735618.js");
var l = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = E(t);
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
}(require("./743643.js"));
var u = require("./557491.js");
var c = require("./2754.js");
var d = require("./292220.js");
var p = require("./660666.js");
var f = require("./61113.js");
var _ = require("./567538.js");
var g = r(require("./565754.js"));
var m = require("./772358.js");
var h = require("./163139.js");
var y = require("./780898.js");
function E(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (E = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function S(e) {
  return !!e.hasUnread && !e.isBroadcast || (0, o.canAssignChats)() && e.isAssignedToMe && e.unopenedByAssignedAgent;
}