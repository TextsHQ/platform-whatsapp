var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CongratulationsAnimation = undefined;
var r = require("../app/578129.js");
var o = require("./617267.js");
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
var i = a(require("../app/156720.js"));
var u = a(require("../app/895851.js"));
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
const c = {
  animationContainer: {
    position: "lhggkp7q",
    zIndex: "pglj95m3",
    pointerEvents: "m62443ks",
    height: "ppled2lx",
    width: "ln8gz9je",
    display: "p357zi0d",
    justifyContent: "ac2vgrno"
  },
  lottieContainer: {
    height: "ppled2lx",
    width: "a98na6ns"
  },
  lottieComponent: {
    height: "ppled2lx",
    width: "ln8gz9je"
  }
};
function d(e, t) {
  let {
    onAnimationComplete: n
  } = e;
  const [a, s] = (0, l.useState)(false);
  const [d, f] = (0, l.useState)(null);
  const p = (0, l.useRef)(null);
  const m = (0, u.default)();
  const h = () => {
    if (!(n == null)) {
      n();
    }
    if (!m.aborted) {
      s(false);
    }
  };
  const g = e => {
    if (m.aborted) {
      return;
    }
    const t = (0, r.getCongratulationsAnimationPath)(e.animation);
    f(t);
    s(true);
  };
  (0, l.useImperativeHandle)(t, () => ({
    triggerAnimation: g
  }));
  let E = null;
  if (a && d != null) {
    E = l.default.createElement("div", {
      className: (0, i.default)(c.animationContainer)
    }, l.default.createElement("div", {
      className: (0, i.default)(c.lottieContainer)
    }, l.default.createElement(o.LottieAnimation, {
      ref: p,
      autoplay: true,
      path: d,
      onComplete: h,
      xstyle: c.lottieComponent
    })));
  }
  return E;
}
const f = (0, l.forwardRef)(d);
exports.CongratulationsAnimation = f;
f.displayName = "CongratulationsAnimation";