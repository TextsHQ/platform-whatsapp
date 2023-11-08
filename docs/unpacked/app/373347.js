var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    children: t,
    onComplex: n,
    waitIdle: r = false,
    id: u
  } = e;
  const [c, d] = (0, o.useState)(() => i.UIBusyTasks.isBusy());
  const p = () => {
    d(false);
  };
  const f = (0, s.default)(() => r ? i.UIBusyTasks.enqueue(p) : null);
  const _ = (0, l.default)(u);
  (0, o.useEffect)(() => () => {
    if (r && f.current != null) {
      i.UIBusyTasks.dequeue(f.current);
    }
  }, []);
  (0, o.useEffect)(() => {
    if (!a.default.equals(_, u) || !r) {
      if (c && f.current != null) {
        i.UIBusyTasks.dequeue(f.current);
      }
      const e = i.UIBusyTasks.isBusy();
      if (e && r) {
        f.current = i.UIBusyTasks.enqueue(p);
      }
      d(e);
    }
  }, [u, f, c, _, r]);
  if (c && r) {
    return o.default.createElement(o.default.Fragment, null, t);
  }
  return n();
};
var i = require("./806279.js");
var a = r(require("./124928.js"));
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
}(require("../vendor/667294.js"));
var s = r(require("./637660.js"));
var l = r(require("./49710.js"));
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