var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFeatureFlagState = _;
exports.initialize = function () {
  return f.apply(this, arguments);
};
exports.isFeatureFlagEnabled = g;
exports.isInitializedAndFeatureFlagEnabled = function (e) {
  if (!d) {
    return false;
  }
  return g(e);
};
exports.listen = function (e, t) {
  if (!(0, a.isSmbOrangeEnabled)()) {
    Promise.resolve().then(() => t(null, false));
    return () => {};
  }
  let n = u.get(e);
  if (!n) {
    n = new Set();
    u.set(e, n);
  }
  n.add(t);
  if (d) {
    Promise.resolve().then(() => {
      const n = c.get(e);
      try {
        t((n == null ? undefined : n.subscription) || null, (n == null ? undefined : n.hasChanged) || false);
      } catch (t) {
        __LOG__(4, undefined, new Error(), true)`PremiumAccessEngine: error calling handler during listen for feature ${e}, error ${t}`;
        SEND_LOGS("PremiumAccessEngine");
      }
    });
  }
  return () => {
    const n = u.get(e);
    if (n) {
      n.delete(t);
    }
  };
};
exports.update = function () {
  if ((0, a.isSmbOrangeEnabled)()) {
    if (!d) {
      throw (0, s.default)("Premium access engine update() called before initialize()");
    }
    const e = h();
    const t = new Set();
    c.forEach((n, r) => {
      if (e.has(r)) {
        var i;
        var a;
        const t = (i = e.get(r)) === null || i === undefined ? undefined : i[0];
        if ((a = n.subscription) === null || a === undefined ? undefined : a.equal(t)) {
          if (n.hasChanged) {
            n.hasChanged = false;
            m(r);
          }
        } else {
          n.hasChanged = true;
          n.subscription = t == null ? undefined : t.clone();
          m(r);
        }
      } else {
        n.hasChanged = true;
        n.subscription = null;
        m(r);
        t.add(r);
      }
    });
    e.forEach((e, t) => {
      if (!c.has(t)) {
        c.set(t, {
          hasChanged: true,
          subscription: e[0].clone()
        });
        m(t);
      }
    });
    t.forEach(e => c.delete(e));
  }
};
var i = r(require("../vendor/348926.js"));
var a = require("./72696.js");
var o = require("./315650.js");
var s = r(require("./556869.js"));
let l = "{}";
const u = new Map();
const c = new Map();
let d = false;
let p = null;
function f() {
  return (f = (0, i.default)(function* () {
    let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : l;
    if (!d && (0, a.isSmbOrangeEnabled)()) {
      const {
        restoreSubscriptions: t
      } = require("./422481.js");
      yield t();
      p = y(e);
      h().forEach((e, t) => {
        c.set(t, {
          subscription: e[0].clone(),
          hasChanged: false
        });
      });
      d = true;
      yield Promise.resolve();
      u.forEach((e, t) => {
        const n = c.get(t);
        e.forEach(e => {
          try {
            e((n == null ? undefined : n.subscription) || null, (n == null ? undefined : n.hasChanged) || false);
          } catch (e) {
            __LOG__(4, undefined, new Error(), true)`PremiumAccessEngine: error calling handler during initialize for feature ${t}, error ${e}`;
            SEND_LOGS("PremiumAccessEngine");
          }
        });
      });
    }
  })).apply(this, arguments);
}
function _(e) {
  var t;
  var n;
  if (!(0, a.isSmbOrangeEnabled)()) {
    return null;
  }
  if (!d) {
    throw (0, s.default)(`Premium access engine getFeatureFlagState() for feature ${e} called before initialize()`);
  }
  if ((t = (n = c.get(e)) === null || n === undefined ? undefined : n.subscription) !== null && t !== undefined) {
    return t;
  } else {
    return null;
  }
}
function g(e) {
  let t;
  try {
    t = _(e);
  } catch (t) {
    __LOG__(4, undefined, new Error(), true)`isFeatureFlagEnabled: trying to read feature "${e}" before PremiumAccessEngine has been initialized, error ${t}`;
    SEND_LOGS("isFeatureFlagEnabled");
  }
  return t != null && (!t.isDeactivated || false);
}
function m(e) {
  const t = u.get(e);
  const n = c.get(e);
  if (t && n) {
    t.forEach(t => {
      Promise.resolve().then(() => {
        t(n.subscription, n.hasChanged);
      }).catch(t => {
        __LOG__(4, undefined, new Error(), true)`PremiumAccessEngine: error calling handler for feature ${e}, error ${t}`;
        SEND_LOGS("PremiumAccessEngine");
      });
    });
  }
}
function h() {
  const e = new Map();
  if (p) {
    Object.entries(p).forEach(t => {
      let [n, r] = t;
      if (n !== "MD_EXTENSION" && n !== "CUSTOM_URL") {
        return;
      }
      const i = r.map(e => o.SubscriptionCollection.get(e)).filter(Boolean);
      if (i.length > 0) {
        if (i.length > 1) {
          (function (e) {
            e.sort((e, t) => e.isDeactivated && !t.isDeactivated ? 1 : !e.isDeactivated && t.isDeactivated ? -1 : e.isDeactivated && t.isDeactivated ? 0 : e.isAutoRenewing && !t.isAutoRenewing ? -1 : t.isAutoRenewing && !e.isAutoRenewing ? 1 : e.isAutoRenewing || t.isAutoRenewing ? 0 : (t.expirationDate || 0) - (e.expirationDate || 0));
          })(i);
        }
        e.set(n, i);
      }
    });
  }
  return e;
}
function y(e) {
  let t = false;
  const n = JSON.parse(e);
  const r = Object.keys(n);
  if (r.length > 0) {
    r.forEach(e => {
      const r = n[e];
      if (!Array.isArray(r)) {
        t = true;
        __LOG__(4, undefined, new Error(), true)`PremiumAccessEngine: invalid config for key ${e}, value is not an array`;
        SEND_LOGS("PremiumAccessEngine");
      }
      if (r.length === 0) {
        t = true;
        __LOG__(4, undefined, new Error(), true)`PremiumAccessEngine: invalid config for key ${e}, value is empty array`;
        SEND_LOGS("PremiumAccessEngine");
      }
    });
  } else {
    t = true;
  }
  if (t) {
    return null;
  } else {
    return n;
  }
}