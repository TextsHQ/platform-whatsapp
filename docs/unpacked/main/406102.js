Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    width: t,
    height: n,
    rgbaBuffer: r
  } = e;
  const o = (0, a.useRef)(null);
  const l = (0, a.useRef)(null);
  (0, a.useEffect)(() => {
    const e = o.current;
    const t = l.current;
    if (e && t && r) {
      t.data.set(new Uint8Array(r));
      e.putImageData(t, 0, 0);
    }
  }, [r]);
  return a.default.createElement("canvas", {
    role: "button",
    className: e.className,
    width: e.width,
    height: e.height,
    onClick: e.onClick,
    onMouseEnter: e.onMouseEnter,
    onMouseLeave: e.onMouseLeave,
    ref: e => {
      if (e) {
        o.current = e.getContext("2d");
        l.current = o.current.createImageData(t, n);
      } else {
        o.current = null;
        l.current = null;
      }
    }
  });
};
var a = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = r(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var a = {};
  var o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var l in e) {
    if (l !== "default" && Object.prototype.hasOwnProperty.call(e, l)) {
      var i = o ? Object.getOwnPropertyDescriptor(e, l) : null;
      if (i && (i.get || i.set)) {
        Object.defineProperty(a, l, i);
      } else {
        a[l] = e[l];
      }
    }
  }
  a.default = e;
  if (n) {
    n.set(e, a);
  }
  return a;
}(require("../vendor/667294.js"));
function r(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (r = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}