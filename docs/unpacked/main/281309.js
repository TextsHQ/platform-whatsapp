var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRegister = function () {
  const e = (0, l.createContext)();
  return {
    Register: function (t) {
      return l.default.createElement(e.Provider, {
        value: t.registerRef
      }, t.children);
    },
    useRegister: function (e) {
      var t;
      const n = (0, l.useMemo)(() => new r.default(), []);
      const a = new Map();
      const o = (0, l.useRef)({
        items: a,
        events: n
      });
      if (o.current != null) {
        o.current.items = new Map();
      }
      const s = (0, u.default)((t = o.current) === null || t === undefined ? undefined : t.items);
      (0, l.useEffect)(() => {
        const t = o.current;
        if (t != null) {
          var n;
          if (!function (e, t) {
            if (e.length !== t.length) {
              return false;
            }
            return e.every((e, n) => e === t[n]);
          }(Array.from((s == null ? undefined : s.keys()) || []), Array.from(t == null ? undefined : t.items.keys()))) {
            if (!(e == null || (n = e.onOrderChange) === null || n === undefined)) {
              n.call(e, t == null ? undefined : t.items);
            }
          }
        }
      });
      (0, l.useEffect)(() => {
        var t;
        if (o.current != null) {
          if (!(e == null || (t = e.onRegister) === null || t === undefined)) {
            t.call(e, o.current.items);
          }
        }
      });
      const c = e == null ? undefined : e.onChange;
      (0, i.useListener)(n, "change", (0, l.useCallback)(() => {
        if (o.current != null) {
          if (!(c == null)) {
            c(o.current.items);
          }
        }
      }, [c]));
      return o;
    },
    useRegisterItem: function (t, n) {
      var a;
      const r = (0, l.useContext)(e);
      const i = r;
      if (r == null || i == null) {
        throw (0, o.default)("[Register] `useRegisterItem` must be used in a `Register` tree");
      }
      const u = (0, l.useRef)(null);
      (0, l.useImperativeHandle)(u, () => n);
      if (!((a = i.current) === null || a === undefined)) {
        a.items.set(t, u);
      }
      (0, l.useEffect)(() => {
        const e = i.current;
        if (!(e == null)) {
          e.items.set(t, u);
        }
        if (!(e == null)) {
          e.events.trigger("change");
        }
        return () => {
          if (!(e == null)) {
            e.items.delete(t);
          }
          if (!(e == null)) {
            e.events.trigger("change");
          }
        };
      }, [t]);
    }
  };
};
var r = a(require("../app/395654.js"));
var o = a(require("../app/556869.js"));
var l = function (e, t) {
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
}(require("../vendor/667294.js"));
var i = require("../app/808446.js");
var u = a(require("../app/49710.js"));
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