var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNumChatsPinned = function () {
  return l.default.getLocalPins().then(e => e.length);
};
exports.setPin = function () {
  return s.apply(this, arguments);
};
exports.unpinAll = function () {
  return l.default.unpinAll();
};
var r = a(require("../vendor/348926.js"));
var o = function (e, t) {
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
  var a = {};
  var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e) {
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
      if (l && (l.get || l.set)) {
        Object.defineProperty(a, o, l);
      } else {
        a[o] = e[o];
      }
    }
  }
  a.default = e;
  if (n) {
    n.set(e, a);
  }
  return a;
}(require("../app/123647.js"));
var l = a(require("../app/208592.js"));
var i = require("../app/480313.js");
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
function s() {
  return (s = (0, r.default)(function* (e, t, n, a) {
    const r = t !== 0;
    const u = yield l.default.getMutationsForPin(a, r, e);
    if (!r) {
      o.addUnsetActionCount(1);
    }
    return (0, i.lockForSync)(["chat"], u, n => {
      let [a] = n;
      return a.merge(e.toString(), {
        pin: t
      });
    }).then(() => ({
      status: 200
    }));
  })).apply(this, arguments);
}