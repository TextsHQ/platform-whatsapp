var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = require("./898817.js");
var a = require("./122583.js");
var o = r(require("./846870.js"));
var s = require("./306703.js");
var l = r(require("./322337.js"));
var u = r(require("./632515.js"));
var c = m(require("./288057.js"));
var d = r(require("./79291.js"));
var p = m(require("../vendor/667294.js"));
var f = r(require("./38085.js"));
var _ = r(require("./895851.js"));
function g(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (g = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function m(e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = g(t);
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
}
const h = new u.default();
function y(e, t) {
  const {
    alt: n,
    className: r,
    crossOrigin: u = true,
    draggable: g,
    onClick: m,
    onMouseMove: y,
    plainText: E,
    selectable: S,
    style: v,
    renderLoading: T,
    renderError: M,
    disableContextMenu: A = false,
    noXHR: b = false,
    hasPrivacyChecks: C = true,
    onError: P,
    onLoad: O
  } = e;
  const I = (0, p.useRef)(null);
  const R = (0, f.default)(t, I);
  const N = (0, p.useRef)(null);
  const [D, w] = (0, p.useState)(e.src);
  const [L, k] = (0, p.useState)(true);
  const [G, U] = (0, p.useState)(null);
  const [x, B] = (0, p.useState)(true);
  const F = (0, _.default)();
  if (e.src !== D) {
    w(e.src);
    k(true);
  }
  (0, p.useEffect)(() => {
    if (!D) {
      return;
    }
    const e = I.current;
    if (e && !e.complete) {
      e.style.visibility = "hidden";
    }
    return () => {
      const e = N.current;
      if (e) {
        if (e.release()) {
          h.remove(e);
        }
      }
    };
  }, [D]);
  if (G && M) {
    return M(G);
  }
  const j = Boolean(L && D);
  return p.default.createElement(p.default.Fragment, null, p.default.createElement(s.SelectableImg, {
    ref: R,
    plainText: E || "",
    selectable: Boolean(S),
    crossOrigin: u ? "anonymous" : undefined,
    onError: j ? t => {
      k(false);
      if (!D || !function (e) {
        return e[0] === "/" || d.default.isHttp(e);
      }(D)) {
        return void U(t.error);
      }
      const n = N.current;
      let r;
      if (n) {
        s = e;
        if ((o = n).src === s.src && o.crossOrigin === s.crossOrigin && o.noXHR === s.noXHR && o.hasPrivacyChecks === s.hasPrivacyChecks) {
          if (!n.noXHR) {
            return;
          }
          r = n;
        } else {
          if (n.release()) {
            h.remove(n);
          }
          r = new l.default(D, u, b, C);
        }
      } else {
        r = new l.default(D, u, b, C);
      }
      var o;
      var s;
      N.current = r;
      h.enqueue(r).then(() => {
        if (r == r) {
          if (!F.aborted) {
            k(true);
          }
        }
      }).catch((0, a.filteredCatch)([c.ServerStatusError, c.GaveUpRetry], e => {
        if (r == r) {
          if (!F.aborted) {
            k(false);
            U(e);
            if (P) {
              P(e);
            }
          }
        }
      })).catch((0, a.filteredCatch)(c.Unmount, () => {})).catch((0, i.catchAbort)(() => {}));
    } : () => {},
    onLoad: j ? e => {
      if (e.target instanceof HTMLImageElement) {
        const t = I.current;
        if (t == null ? undefined : t.complete) {
          t.style.visibility = "visible";
        }
        if (O) {
          O(e);
        }
        B(false);
      }
    } : () => {},
    src: j && D != null ? D : o.default.ONE_BY_ONE_TRANS_GIF,
    alt: n,
    className: r,
    draggable: g,
    onClick: m,
    onMouseMove: y,
    style: v,
    onContextMenu: e => {
      if (A) {
        e.preventDefault();
      }
    }
  }), x && (T == null ? undefined : T()));
}
var E = (0, p.forwardRef)(y);
exports.default = E;