var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("../app/396574.js");
var o = a(require("./858807.js"));
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
var u = a(require("./286481.js"));
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
const c = "transform 300ms cubic-bezier(.1,.82,.25,1)";
function d(e, t) {
  const n = (0, l.useRef)();
  const a = (0, l.useRef)();
  (0, l.useImperativeHandle)(t, () => ({
    getInsideContainer: () => a.current,
    getOutsideContainer: () => n.current,
    getElement: () => n.current
  }));
  const {
    objectPosition: s,
    onObjectLoad: d,
    position: f,
    size: m,
    type: h,
    zoomIn: g
  } = e;
  const E = m == null ? undefined : m.width;
  const v = m == null ? undefined : m.height;
  const _ = g == null ? undefined : g.factor;
  const y = g == null ? undefined : g.translateX;
  const C = g == null ? undefined : g.translateY;
  const b = (0, l.useCallback)(() => {
    if (d != null && a.current != null) {
      d(a.current.firstChild);
    }
  }, [d]);
  const M = (0, l.useCallback)(() => {
    if (E == null || v == null) {
      return;
    }
    const e = n.current;
    const t = a.current;
    if (!e || !t) {
      return;
    }
    let l;
    switch (h) {
      case "contain":
        l = function (e, t, n) {
          const a = e.clientWidth;
          const r = e.clientHeight;
          let l = t;
          let i = n;
          let u = 0;
          let s = 0;
          if (l / a > i / r) {
            i *= a / l;
            l = a;
            if (i < r) {
              u = r / 2 - i / 2;
            }
          } else {
            l *= r / i;
            i = r;
            if (l < a) {
              s = a / 2 - l / 2;
            }
          }
          return {
            style: {
              width: l,
              height: i,
              top: u,
              left: s,
              position: "absolute"
            },
            className: o.default.fit
          };
        }(e, E, v);
        break;
      case "cover":
        l = function (e, t, n) {
          const a = e.clientWidth;
          const r = e.clientHeight;
          let l = t;
          let i = n;
          let u = 0;
          let s = 0;
          if (l !== a) {
            i *= a / l;
            l = a;
            if (i > r) {
              u = r / 2 - i / 2;
            }
          }
          if (i < r) {
            l *= r / i;
            i = r;
            if (l > a) {
              s = a / 2 - l / 2;
            }
          }
          return {
            style: {
              width: l,
              height: i,
              top: u,
              left: s,
              position: "absolute"
            },
            className: o.default.fit
          };
        }(e, E, v);
        break;
      case "scaleDown":
        l = p(e, E, v);
        break;
      case "zoomIn":
        l = function (e, t, n, a) {
          const l = p(e, t, n).style;
          let i;
          i = a ? {
            width: l.width,
            height: l.height,
            transition: c,
            transform: `translateX(${a.translateX}px) translateY(${a.translateY}px) scale(${a.factor})`
          } : {
            width: l.width,
            height: l.height,
            transition: c
          };
          return {
            style: i,
            className: (0, r.classnamesConvertMeToStylexPlease)(o.default.fit, o.default.fitScaledown, o.default.fitZoomin)
          };
        }(e, E, v, _ != null && y != null && C != null ? {
          factor: _,
          translateX: y,
          translateY: C
        } : null);
        break;
      default:
        __LOG__(4, undefined, new Error(), true)`unrecognized type ${h}`;
        return void SEND_LOGS("object-fit");
    }
    e.removeAttribute("class");
    t.removeAttribute("style");
    e.classList.add(...l.className.split(" "));
    if (f === "relative") {
      e.classList.add(o.default.fitRelative);
    }
    const i = s != null ? s : l.style.position;
    t.style.setProperty("position", i);
    for (const e of Object.keys(l.style)) {
      const n = l.style[e];
      if (!(n == null || Number.isNaN(n))) {
        t.style.setProperty(e, typeof n == "number" ? n + "px" : n);
      }
    }
    b();
  }, [b, s, f, v, E, h, _, y, C]);
  const S = (0, u.default)(M);
  (0, i.useListener)(window, "resize", S);
  (0, l.useLayoutEffect)(() => {
    M();
  }, [M]);
  return l.default.createElement("div", {
    className: (0, r.classnamesConvertMeToStylexPlease)({
      [o.default.fit]: true,
      [o.default.fitRelative]: f === "relative"
    }),
    ref: n
  }, l.default.createElement("div", {
    style: {
      visibility: "hidden"
    },
    ref: a
  }, e.children));
}
var f = (0, l.forwardRef)(d);
function p(e, t, n) {
  const a = e.clientWidth;
  const l = e.clientHeight;
  let i = n;
  let u = t;
  if (i > l) {
    i = l;
    u = t * (l / n);
  }
  if (u > a) {
    u = a;
    i = n * (a / t);
  }
  return {
    style: {
      width: u,
      height: i
    },
    className: (0, r.classnamesConvertMeToStylexPlease)(o.default.fit, o.default.fitScaledown)
  };
}
exports.default = f;