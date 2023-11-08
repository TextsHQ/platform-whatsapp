var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendStarMsgs = function (e, t, n) {
  return c(t, n);
};
exports.sendUnstarAll = function (e) {
  return c(e, false);
};
var i = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = u(t);
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
}(require("./123647.js"));
var a = r(require("./97359.js"));
var o = require("./420213.js");
var s = require("./480313.js");
var l = r(require("./556869.js"));
function u(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (u = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function c(e, t) {
  if (!t) {
    i.addUnsetActionCount(e.length);
  }
  const r = (0, a.default)(require("./147668.js")).getStarMessageMutations(e, t);
  return (0, s.lockForSync)(["message"], r, () => t ? (0, o.starMessages)(e.map(e => e.id.toString())).catch(() => {
    __LOG__(4, true, new Error(), true)`star messages failed`;
    SEND_LOGS("star messages failed");
    throw (0, l.default)("star messages failed");
  }) : (0, o.unstarMessages)(e.map(e => e.id.toString())).catch(() => {
    __LOG__(4, true, new Error(), true)`unstar messages failed`;
    SEND_LOGS("unstar messages failed");
    throw (0, l.default)("unstar messages failed");
  }));
}