var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../app/670983.js"));
var o = a(require("./86250.js"));
var l = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = d(t);
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
var i = a(require("./105170.js"));
var u = require("../app/808446.js");
var s = require("./636729.js");
var c = require("../app/441673.js");
function d(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (d = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const f = (0, l.forwardRef)((e, t) => {
  const n = (0, l.useRef)();
  const a = (0, l.useRef)();
  const d = (0, l.useRef)();
  const f = (0, l.useRef)();
  const [p, {
    isIntersecting: m
  }] = (0, i.default)({
    root: null,
    rootMargin: "25px",
    threshold: 0.99
  });
  const [h, g] = (0, l.useState)(e.startAnimation);
  const [E, v] = (0, l.useState)(false);
  const [_, y] = (0, c.useManualTimeout)(() => {
    const e = d.current;
    if (!(e == null)) {
      e.refreshBlob();
    }
    g(false);
    f.current = null;
  });
  const C = () => {
    const t = (0, r.default)(e.mediaData.singleLoopDuration, "props.mediaData.singleLoopDuration");
    const n = (Date.now() - (0, r.default)(f.current, "startedAtRef.current")) % t;
    const a = e.mediaData.animationDuration - n;
    _(a);
  };
  const b = () => {
    y();
    if (f.current == null) {
      f.current = Date.now();
    }
    g(true);
  };
  (0, u.useListener)(document, "visibilitychange", () => {
    const e = document.visibilityState === "visible";
    if (m && e) {
      b();
      C();
    } else {
      g(false);
    }
  });
  (0, l.useEffect)(() => {
    if (m) {
      b();
      C();
    } else if (f.current != null) {
      C();
    }
  }, [m]);
  const M = (0, s.useSetModelValue)(e.mediaData, "animatedAsNewMsg");
  const S = () => {
    if (E) {
      return;
    }
    const t = n.current;
    const r = a.current;
    if (t && r) {
      t.width = r.naturalWidth / 2;
      t.height = r.naturalHeight / 2;
      t.getContext("2d").drawImage(r, 0, 0, t.width, t.height);
    }
    if (e.startAnimation) {
      f.current = Date.now();
      C();
      M(true);
    }
    v(true);
  };
  (0, l.useImperativeHandle)(t, () => ({
    startAnimation: b
  }));
  const T = !E || h;
  return l.default.createElement("div", {
    className: e.className,
    onMouseEnter: b,
    onMouseLeave: () => {
      if (f.current != null) {
        C();
      }
    },
    onClick: e.onClick,
    ref: p
  }, l.default.createElement(o.default, {
    ref: d,
    mediaData: e.mediaData,
    placeholderRenderer: e.placeholderRenderer,
    downloadMedia: e.downloadMedia
  }, t => l.default.createElement("img", {
    alt: e.label,
    className: e.className,
    style: {
      display: T ? "block" : "none"
    },
    draggable: "false",
    src: t,
    ref: a,
    onLoad: S
  })), l.default.createElement("canvas", {
    className: e.className,
    style: {
      display: T ? "none" : "block"
    },
    draggable: "false",
    ref: n
  }));
});
f.displayName = "ControlledAnimatedSticker";
var p = f;
exports.default = p;