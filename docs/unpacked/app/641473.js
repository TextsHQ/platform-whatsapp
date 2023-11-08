var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleForActiveMessageRange = M;
exports.handleOfflineForMessageRange = function () {
  return b.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./527796.js");
var o = require("./254665.js");
var s = require("./791381.js");
var l = require("./989.js");
var u = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = m(t);
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
}(require("./939378.js"));
var c = require("./373070.js");
var d = require("./685907.js");
var p = require("./610876.js");
var f = require("./336897.js");
var _ = require("./669050.js");
var g = require("./394629.js");
function m(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (m = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const h = new Set();
const y = e => e.reduce((e, t) => new Set([...Array.from(e), ...Array.from(t)]), new Set());
function E() {
  return S.apply(this, arguments);
}
function S() {
  return (S = (0, i.default)(function* (e, t, n) {
    let r = null;
    switch (e.action) {
      case d.ActiveRangeAction.Archive:
        if (e.actionValue.archived) {
          yield u.handleForArchive(e, n);
        } else {
          yield u.handleForUnarchive(e, n);
        }
        return h;
      case d.ActiveRangeAction.MarkChatAsRead:
        yield u.handleForMarkAsReadUnread(e, n, !!e.actionValue.read);
        return h;
      case d.ActiveRangeAction.ClearChatDeleteStarredDeleteMedia:
      case d.ActiveRangeAction.ClearChatDeleteStarredKeepMedia:
        r = u.handleForClearChat(e, n);
        if (r) {
          return new Set([r]);
        } else {
          return h;
        }
      case d.ActiveRangeAction.ClearChatKeepStarredDeleteMedia:
      case d.ActiveRangeAction.ClearChatKeepStarredKeepMedia:
        if (yield v(t.id)) {
          return h;
        } else {
          r = u.handleForClearChat(e, n);
          if (r) {
            return new Set([r]);
          } else {
            return h;
          }
        }
      case d.ActiveRangeAction.DeleteChatDeleteMedia:
      case d.ActiveRangeAction.DeleteChatKeepMedia:
        r = u.handleForDeleteChat(e, n);
        if (r) {
          return new Set([r]);
        } else {
          return h;
        }
    }
    __LOG__(3)`handleMessageContainment called with unknwon message range action action: ${e.action}`;
    return h;
  })).apply(this, arguments);
}
function v() {
  return T.apply(this, arguments);
}
function T() {
  return (T = (0, i.default)(function* (e) {
    const t = (0, f.constructStarMsgKeyFromMsgKey)(e);
    const n = yield (0, p.getSyncAction)(t);
    if (n) {
      var r;
      const e = (0, g.decodeProtobuf)(a.SyncActionDataSpec, n.binarySyncData).value;
      return (e == null || (r = e.starAction) === null || r === undefined ? undefined : r.starred) || false;
    }
    return false;
  })).apply(this, arguments);
}
function M() {
  return A.apply(this, arguments);
}
function A() {
  return (A = (0, i.default)(function* (e, t) {
    if (c.SYSTEM_MESSAGE_TYPES.includes(t.type)) {
      return h;
    }
    const n = (yield (0, s.getActiveMessageRanges)(e.toString())).map(e => [e, (0, o.rangeContainsMessage)(e.actionValue.messageRange, t)]);
    const r = n.filter(e => {
      let [, t] = e;
      return t === l.RangeContain.CONTAINS_BY_ADDITIONAL;
    }).map(e => {
      let [t] = e;
      return t;
    });
    r.forEach(e => {
      e.remainingMessages--;
    });
    yield (0, s.bulkUpdateActiveMessageRanges)(r);
    const i = n.map(e => {
      let [n, r] = e;
      return E(n, t, r);
    });
    const a = yield Promise.all(i);
    return y(a);
  })).apply(this, arguments);
}
function b() {
  return (b = (0, i.default)(function* (e) {
    const t = new Map();
    e.forEach(e => {
      if (c.SYSTEM_MESSAGE_TYPES.includes(e.type) || c.ADDON_MESSAGE_TYPES.includes(e.type)) {
        return;
      }
      const n = t.get(e.id.remote.toString());
      if (n == null || n.t < e.t) {
        t.set(e.id.remote.toString(), e);
      }
    });
    yield Promise.all(Array.from(t.entries()).map(e => {
      let [t, n] = e;
      return M((0, _.createWid)(t), n);
    }));
  })).apply(this, arguments);
}