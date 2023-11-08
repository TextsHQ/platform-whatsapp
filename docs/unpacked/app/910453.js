var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bulkGetRootMsgs = function () {
  return u.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./35234.js");
var o = r(require("./565754.js"));
var s = require("./525119.js");
var l = require("./851698.js");
function u() {
  return (u = (0, i.default)(function* (e) {
    const t = yield p(e);
    yield c(e, t);
    return t;
  })).apply(this, arguments);
}
function c() {
  return d.apply(this, arguments);
}
function d() {
  return (d = (0, i.default)(function* (e, t) {
    const n = new Map();
    for (let r = 0; r < t.length; r++) {
      if (t[r] == null) {
        n.set(e[r], r);
      }
    }
    if (n.size === 0 || !(0, s.isMatFullyEnabled)()) {
      return;
    }
    const r = Array.from(n.keys()).map(e => o.default.from(e));
    const i = yield (0, a.getMatChatBulk)(r.map(e => e.remote));
    const l = r.map(e => {
      const t = i.get(e.remote);
      if (t == null || !e.remote.isUser() || e.remote.equals(t)) {
        return null;
      } else {
        return [e.toString(), new o.default({
          fromMe: e.fromMe,
          remote: t,
          id: e.id
        })];
      }
    }).filter(Boolean);
    if (l.length === 0) {
      return;
    }
    const u = yield p(l.map(e => {
      let [, t] = e;
      return t.toString();
    }));
    for (let e = 0; e < u.length; e++) {
      if (u[e] != null) {
        const r = l[e][0];
        const i = n.get(r);
        if (i != null) {
          t[i] = u[e];
        }
      }
    }
  })).apply(this, arguments);
}
function p() {
  return f.apply(this, arguments);
}
function f() {
  return (f = (0, i.default)(function* (e) {
    const t = yield (0, l.getMessageTable)().bulkGet(e);
    const n = new Map();
    for (let r = 0; r < e.length; r++) {
      if (!(t[r] != null && t[r].subtype !== "message_edit")) {
        n.set(e[r], r);
        t[r] = null;
      }
    }
    const r = yield (0, l.getMessageTable)().anyOf(["latestEditMsgKey"], Array.from(n.keys()));
    for (const e of r) {
      if (e.latestEditMsgKey == null || e.subtype === "message_edit") {
        continue;
      }
      const r = n.get(e.latestEditMsgKey);
      if (r != null) {
        t[r] = e;
      }
    }
    return t;
  })).apply(this, arguments);
}