var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return d.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = r(require("../vendor/402525.js"));
var o = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = s(t);
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
}(require("../vendor/512641.js"));
function s(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (s = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const l = "finish";
const u = "stop";
const c = new Map();
function d() {
  return (d = (0, i.default)(function* (e, t, n) {
    if (!e) {
      return;
    }
    for (var r = arguments.length, i = new Array(r > 3 ? r - 3 : 0), a = 3; a < r; a++) {
      i[a - 3] = arguments[a];
    }
    if (typeof t == "string" && (t === l || t === u)) {
      return (0, o.default)(e, t, n, ...i);
    }
    p(e, e => {
      const t = c.get(e) || 0;
      c.set(e, t + 1);
    });
    const s = t;
    if (typeof n == "object" && typeof s == "object") {
      let e;
      if (typeof n.begin == "function") {
        e = n.begin;
      }
      n.begin = t => {
        for (const e in s) {
          const n = s[e];
          if (Array.isArray(n)) {
            (0, o.hook)(t, e, n[1]);
          }
        }
        if (e) {
          e(t);
        }
      };
    }
    const d = yield (0, o.default)(e, t, n, ...i);
    p(d, e => {
      const t = (c.get(e) || 1) - 1;
      if (t === 0) {
        c.delete(e);
        f(e);
      } else {
        c.set(e, t);
      }
    });
    return d;
  })).apply(this, arguments);
}
function p(e, t) {
  if (Array.isArray(e)) {
    e.forEach(e => {
      t(e);
    });
  } else {
    t(e);
  }
}
function f(e) {
  var t;
  const n = o.default.Utilities.data(e);
  const {
    delayedElements: r
  } = o.default.State;
  (0, a.default)(r, (t, n) => {
    if (n !== "count") {
      if (!(t !== e && t)) {
        delete r[n];
      }
    }
  });
  if (n == null || (t = n.velocity) === null || t === undefined ? undefined : t.tweensContainer) {
    n.velocity.tweensContainer.element = null;
  }
  o.default.Utilities.removeData(e, ["fxqueue", "velocity"]);
}