var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ensureE2ESessions = p;
exports.ensureE2ESessionsWithDelay = function (e, t) {
  let n = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
  const r = new o.ShiftTimer(() => {
    p(e, n);
  });
  e.forEach(e => {
    c.set(String(e), r);
  });
  r.onOrAfter(t * 1000);
};
var i = r(require("../vendor/348926.js"));
var a = require("./950376.js");
var o = require("./685639.js");
var s = r(require("./797137.js"));
var l = require("./608642.js");
var u = require("./138706.js");
const c = new Map();
const d = new Map();
function p() {
  return f.apply(this, arguments);
}
function f() {
  return (f = (0, i.default)(function* (e) {
    let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    yield (0, s.default)();
    __LOG__(2)`ensureE2ESessions: ${e.length} wids: ${e.map(e => e.toString()).join()}`;
    const n = new a.Resolvable();
    const r = [];
    const i = [];
    e.forEach(e => {
      if (!e.isUserNotPSA()) {
        return void __LOG__(2)`ensureE2ESessions: can only estabilish session with user wid`;
      }
      const t = c.get(e.toString());
      if (t) {
        t.cancel();
        c.delete(e.toString());
      }
      const a = d.get(e.toString());
      if (a) {
        r.push(a);
      } else {
        i.push(e);
        d.set(e.toString(), n.promise);
      }
    });
    let o = 0;
    let p = 0;
    try {
      if (i.length > 0) {
        const e = yield u.Session.hasSignalSessions(i);
        const n = i.filter((t, n) => !e[n]);
        if (n.length > 0) {
          var f;
          p = (f = (yield (0, l.fetchPrekeys)(n, t)).depletedPrekeyCount) !== null && f !== undefined ? f : 0;
          o = n.length;
        }
      }
      n.resolve();
    } catch (t) {
      __LOG__(3)`ensureE2ESessions: ${e.length} wids: request failed: ${t}`;
      n.resolve(t);
      throw t;
    } finally {
      i.forEach(e => d.delete(e.toString()));
    }
    try {
      const e = (yield Promise.all(r)).find(Boolean);
      if (e) {
        throw e;
      }
    } catch (t) {
      __LOG__(3)`ensureE2ESessions: ${e.length} wids: deduped requests failed: ${t}`;
      throw t;
    }
    __LOG__(2)`ensureE2ESessions: ${e.length} wids: ${i.length - o} existing sessions, ${o} requested, ${r.length} requests deduplicated`;
    return {
      missedPrekeyCount: o,
      depletedPrekeyCount: p
    };
  })).apply(this, arguments);
}