var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlternateWidMapForPolls = function (e) {
  const t = new Set();
  const n = new Map();
  if ((0, c.isMatFullyEnabled)()) {
    e.forEach(e => {
      const r = (0, o.default)(e.pollUpdateParentKey, "pollMsg.pollUpdateParentKey");
      const i = (0, l.getOriginalSender)(e);
      if (r != null && i != null && r.remote.isUser() && !i.isSameAccount(r.remote)) {
        const e = u.default.from({
          fromMe: r.fromMe,
          id: r.id,
          participant: r.participant,
          remote: i
        });
        t.add(e.toString());
        n.set(r.toString(), e);
      }
    });
  }
  return {
    matParentMsgKeys: t,
    alternateWidMap: n
  };
};
exports.processAddonMatMessages = y;
exports.processEditMatMessages = function () {
  return m.apply(this, arguments);
};
exports.processPollUpdateMatMessages = function () {
  return h.apply(this, arguments);
};
exports.processReactionMatMessages = function () {
  return g.apply(this, arguments);
};
exports.processRenderableMatMessages = function () {
  return f.apply(this, arguments);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = r(require("./670983.js"));
var s = require("./35234.js");
var l = require("./787742.js");
var u = r(require("./565754.js"));
var c = require("./525119.js");
var d = r(require("./124928.js"));
var p = require("./766187.js");
function f() {
  return (f = (0, a.default)(function* (e) {
    const t = [];
    const n = [];
    const r = e.filter(e => {
      var r;
      const i = (r = e.id.remote) !== null && r !== undefined ? r : e.from;
      var a;
      if (i.isUser()) {
        n.push((a = e.id.remote) !== null && a !== undefined ? a : e.from);
      } else {
        t.push(e);
      }
      return i.isUser();
    });
    const o = r.filter(e => e.subtype === "sender_revoke");
    const l = [];
    o.forEach(e => {
      const t = e.protocolMessageKey;
      if (t) {
        l.push(t);
        if (t.remote.isUser()) {
          n.push(t.remote);
        }
      }
    });
    const c = yield (0, s.getMatChatBulk)(n);
    const f = new Map();
    o.forEach(function () {
      var e = (0, a.default)(function* (e) {
        const t = e.protocolMessageKey;
        if (t != null) {
          const n = yield c.get(t.remote);
          if (n != null && !d.default.equals(n, t.remote)) {
            const r = u.default.from({
              fromMe: t.fromMe,
              id: t.id,
              participant: t.participant,
              remote: n
            });
            f.set(e.id.id, r);
          }
        }
      });
      return function () {
        return e.apply(this, arguments);
      };
    }());
    r.forEach(function () {
      var e = (0, a.default)(function* (e) {
        var n;
        var r;
        const a = (n = yield c.get((r = e.id.remote) !== null && r !== undefined ? r : e.from)) !== null && n !== undefined ? n : e.id.remote;
        if (a.isSameAccount(e.id.remote)) {
          return void t.push(e);
        }
        const o = u.default.from({
          fromMe: e.id.fromMe,
          id: e.id.id,
          participant: e.id.participant,
          remote: a
        });
        var s;
        if (e.subtype === "sender_revoke") {
          t.push((0, i.default)((0, i.default)({}, e), {}, {
            id: o,
            protocolMessageKey: (s = f.get(e.id.id)) !== null && s !== undefined ? s : e.protocolMessageKey,
            from: e.id.fromMe ? e.from : a
          }));
        } else {
          t.push((0, i.default)((0, i.default)({}, e), {}, {
            id: o,
            from: e.id.fromMe ? e.from : a
          }));
        }
        (0, p.workerSafeFireAndForget)("incrementPnhCtwaDailyCount", {
          chatId: a
        });
      });
      return function () {
        return e.apply(this, arguments);
      };
    }());
    return t;
  })).apply(this, arguments);
}
function _(e, t, n) {
  const r = u.default.from({
    fromMe: n.fromMe,
    id: n.id,
    participant: n.participant,
    remote: t
  });
  return {
    newMsgKey: u.default.from({
      fromMe: e.fromMe,
      id: e.id,
      participant: e.participant,
      remote: t
    }),
    newParentMsgKey: r
  };
}
function g() {
  return (g = (0, a.default)(function* (e) {
    return y(e, "reactionParentKey");
  })).apply(this, arguments);
}
function m() {
  return (m = (0, a.default)(function* (e) {
    return y(e, "protocolMessageKey");
  })).apply(this, arguments);
}
function h() {
  return (h = (0, a.default)(function* (e) {
    return y(e, "pollUpdateParentKey");
  })).apply(this, arguments);
}
function y() {
  return E.apply(this, arguments);
}
function E() {
  return (E = (0, a.default)(function* (e, t) {
    var n;
    const r = (n = e.id.remote) !== null && n !== undefined ? n : e.from;
    if (!r.isUser()) {
      return e;
    }
    const a = yield (0, s.getMatChat)(r);
    const o = e[t];
    if (a == null || o == null || !(o instanceof u.default) || a.isSameAccount(r)) {
      return e;
    }
    const {
      newMsgKey: l,
      newParentMsgKey: c
    } = _(e.id, a, o);
    (0, p.workerSafeFireAndForget)("incrementPnhCtwaDailyCount", {
      chatId: a
    });
    return (0, i.default)((0, i.default)({}, e), {}, {
      id: l,
      [t]: c,
      from: e.id.fromMe ? e.from : a
    });
  })).apply(this, arguments);
}