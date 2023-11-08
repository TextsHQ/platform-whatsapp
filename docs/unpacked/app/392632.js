var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UIE = undefined;
var i = require("./238669.js");
var a = r(require("./8073.js"));
var o = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = p(t);
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
var l = r(require("./558532.js"));
var u = r(require("./17533.js"));
var c = r(require("./321201.js"));
var d = r(require("./895851.js"));
function p(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (p = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
let f = null;
const _ = (0, o.forwardRef)((e, t) => {
  const {
    uimState: n = i.UIMState.ACTIVE,
    requestRecentFocusOnUnmount: r = true,
    popable: p = false,
    escapable: _ = false,
    displayName: g,
    children: m,
    dismissOnWindowResize: h = false
  } = e;
  const y = (0, c.default)();
  const E = function (e) {
    const t = (0, d.default)();
    const n = (0, o.useRef)(false);
    const r = (0, o.useRef)(null);
    const i = () => {
      if (e) {
        if (f) {
          self.clearTimeout(f);
        }
        r.current = f = self.setTimeout(() => {
          e();
          r.current = f = null;
        }, 0);
      }
    };
    const a = (0, u.default)(() => {
      if (e && !t.aborted) {
        i();
      } else {
        n.current = true;
      }
    });
    (0, o.useEffect)(() => {
      if (n.current) {
        i();
      }
      return () => {
        if (f && r.current === f) {
          self.clearTimeout(f);
          f = null;
        }
      };
    }, []);
    return a;
  }(e.requestFocus);
  const S = (0, u.default)(e.requestDismiss);
  const v = (0, o.useRef)(null);
  const T = (0, o.useCallback)(() => {
    var e;
    const t = v.current;
    if (t != null) {
      if (t instanceof HTMLElement) {
        return t;
      } else if ((e = t.getElement) === null || e === undefined) {
        return undefined;
      } else {
        return e.call(t);
      }
    }
  }, []);
  const M = (0, s.default)(() => {
    var e;
    const t = {
      displayName: g,
      popable: p,
      escapable: _,
      uimState: n,
      requestFocus: E,
      requestDismiss: S,
      getNode: T,
      dismissOnWindowResize: h
    };
    if ((e = y == null ? undefined : y.branch(t)) !== null && e !== undefined) {
      return e;
    } else {
      return new i.UIM(t);
    }
  });
  (0, o.useEffect)(() => {
    M.current.setState(n);
  }, [n, M]);
  (0, l.default)(() => {
    M.current.pop(i.DismissReason.LIFECYCLE, r);
  });
  (0, o.useImperativeHandle)(t, () => ({
    activate() {
      M.current.activate();
    },
    getElement: T
  }));
  if (!m) {
    return null;
  }
  const A = (0, o.cloneElement)(m, {
    ref: e => {
      var t;
      var n;
      const r = (t = e == null || (n = e.getComponent) === null || n === undefined ? undefined : n.call(e)) !== null && t !== undefined ? t : e;
      v.current = r;
      const i = m.ref;
      if (i) {
        if (typeof i == "function") {
          i(r);
        } else {
          i.current = r;
        }
      }
    }
  });
  return o.default.createElement(a.default.Provider, {
    value: M.current
  }, A);
});
exports.UIE = _;
_.displayName = "UIE";