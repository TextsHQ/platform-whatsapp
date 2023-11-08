var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.persistNewMessagesInBulk = function () {
  return g.apply(this, arguments);
};
exports.persistNewNewsletterMessagesInBulk = function () {
  return m.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./418987.js");
var o = require("./12643.js");
var s = require("./890490.js");
var l = require("./6007.js");
var u = require("./702708.js");
var c = require("./732011.js");
var d = require("./787742.js");
var p = require("./525119.js");
var f = require("./61229.js");
var _ = require("./724745.js");
function g() {
  return (g = (0, i.default)(function* (e, t) {
    const [n, r] = yield Promise.all([h(e), (0, s.encryptMultipleDBMsgs)(e, false)]);
    yield (0, c.getStorage)().lock(["chat", "message", "fts-indexing-queue"], function () {
      var e = (0, i.default)(function* (e) {
        let [i, a, o] = e;
        yield i.bulkCreateOrMerge(n);
        yield (0, l.storeEncryptedDBMessages)(r, t, false);
      });
      return function () {
        return e.apply(this, arguments);
      };
    }());
  })).apply(this, arguments);
}
function m() {
  return (m = (0, i.default)(function* (e) {
    const [t, n] = yield Promise.all([h(e), (0, s.encryptMultipleDBMsgs)(e, false)]);
    return (0, c.getStorage)().lock(["chat", "message"], function () {
      var e = (0, i.default)(function* (e) {
        let [r] = e;
        yield r.bulkCreateOrMerge(t);
        yield (0, u.storeEncryptedNewsletterMessages)(n);
      });
      return function () {
        return e.apply(this, arguments);
      };
    }());
  })).apply(this, arguments);
}
function h() {
  return y.apply(this, arguments);
}
function y() {
  return (y = (0, i.default)(function* (e) {
    const t = new Map();
    e.forEach(e => {
      const n = e.id;
      const r = n.remote.toString();
      if (r !== a.STATUS_JID && (0, d.getIsUnreadType)(e)) {
        const i = t.get(r) || {
          unread: 0,
          t: 0,
          unreadMentionsOfMe: []
        };
        if (!n.fromMe && (i.unread += 1, (0, d.getIsImportantMessage)(e))) {
          const t = {
            id: e.id.toString(),
            timestamp: e.t
          };
          if (i.unreadMentionsOfMe) {
            i.unreadMentionsOfMe.push(t);
          } else {
            i.unreadMentionsOfMe = [t];
          }
        }
        if (e.t != null && e.t > i.t) {
          i.t = Math.max(e.t, i.t);
        }
        t.set(r, i);
      }
    });
    const n = Array.from(t.keys());
    let r;
    let i;
    if ((0, p.isMatFullyEnabled)()) {
      i = (0, o.getAlternateWidBulkForLids)(n);
      const e = [];
      for (const t of i.values()) {
        e.push(...t);
      }
      r = yield (0, f.getChatTable)().bulkGet(e);
    }
    const s = (yield (0, f.getChatTable)().bulkGet(n)).map((e, a) => {
      var o;
      var s;
      var l;
      const u = n[a];
      const c = t.get(u);
      const d = (c == null ? undefined : c.unread) || 0;
      const f = Math.max(0, e ? e.unreadCount : 0);
      let g = (c == null ? undefined : c.t) || undefined;
      if (e && e.t != null && (g == null || e.t > g)) {
        g = e.t;
      }
      let m = [];
      let h = (o = e == null ? undefined : e.archiveAtMentionViewedInDrawer) !== null && o !== undefined && o;
      const y = (s = c == null ? undefined : c.unreadMentionsOfMe) !== null && s !== undefined ? s : [];
      const E = (l = e == null ? undefined : e.unreadMentionsOfMe) !== null && l !== undefined ? l : [];
      if (y.length > 0) {
        h = false;
      }
      m = y.concat(E);
      let S = e == null ? undefined : e.isDeprecated;
      if (S !== true && (0, p.isMatFullyEnabled)() && e != null) {
        var v;
        if ((0, _.shouldDeprecateLidThread)(e, (v = i.get(e.id.toString())) !== null && v !== undefined ? v : [], r)) {
          S = true;
        }
      }
      return {
        id: u,
        unreadCount: f + d,
        t: g,
        unreadMentionsOfMe: m,
        archiveAtMentionViewedInDrawer: h,
        isDeprecated: S
      };
    });
    __LOG__(2)`[offline-resume][msg-cache]: storing chat updates: ${JSON.stringify(s)}`;
    return s;
  })).apply(this, arguments);
}