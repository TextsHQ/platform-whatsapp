var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MIN_WIDTH = exports.MIN_HEIGHT = exports.MIN_ASPECT_RATIO = exports.MAX_ASPECT_RATIO = exports.MARGIN_Y = exports.MARGIN_X = exports.LONGER_SIDE_DEFAULT_LENGTH = exports.FloatingVideoPlayer = undefined;
var r = require("../app/780549.js");
var o = a(require("./587073.js"));
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
var u = a(require("../app/710629.js"));
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
  videoFloater: {
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    borderTopStartRadius: "l147y7tb",
    borderTopEndRadius: "mjscftrx",
    borderBottomEndRadius: "fqwk616h",
    borderBottomStartRadius: "pkud3j3x",
    boxShadow: "h2mkl1gk",
    willChange: "exvbdj68"
  },
  redesign: {
    backgroundColor: "p41u7gyj",
    borderTopStartRadius: "k6f31xd0",
    borderTopEndRadius: "i213mnjx",
    borderBottomEndRadius: "csyx12jj",
    borderBottomStartRadius: "aemtu0ky"
  },
  bgImg: {
    position: "lhggkp7q",
    top: "lqpp6bxj",
    end: "s5g3tb4o",
    bottom: "j950s1re",
    start: "itf0yk5b",
    filter: "kwqfpmxe",
    backgroundRepeat: "sxl192xd",
    backgroundPosition: "t3g6t33p",
    backgroundSize: "qnwaluaf",
    borderTopStartRadius: "l147y7tb",
    borderTopEndRadius: "mjscftrx",
    borderBottomEndRadius: "fqwk616h",
    borderBottomStartRadius: "pkud3j3x",
    opacity: "p2rjqpw5"
  },
  bottomLayer: {
    position: "lhggkp7q",
    top: "qq0sjtgm",
    start: "tkdu00h0",
    width: "ln8gz9je",
    height: "ppled2lx",
    backgroundColor: "pkk2s34l"
  }
};
exports.MARGIN_X = 10;
exports.MARGIN_Y = 10;
const d = 330;
exports.LONGER_SIDE_DEFAULT_LENGTH = d;
exports.MIN_HEIGHT = 145;
const f = 145;
exports.MIN_WIDTH = f;
const p = 0.4393939393939394;
exports.MIN_ASPECT_RATIO = p;
const m = 2.2758620689655173;
function h(e) {
  let {
    aspectRatio: t,
    originalAspectRatio: n,
    backgroundImage: a
  } = e;
  if (n == null || n === 0) {
    return null;
  }
  if (!(t === p && t > n || t === m && t < n)) {
    return null;
  }
  const r = a ? l.default.createElement("div", {
    className: (0, i.default)(c.bgImg),
    style: {
      backgroundImage: a
    }
  }) : null;
  return l.default.createElement("div", {
    className: (0, i.default)(c.bottomLayer)
  }, r);
}
function g(e) {
  const {
    initialWidth: t,
    initialHeight: n
  } = function (e) {
    if (e > 1) {
      return {
        initialWidth: d,
        initialHeight: d / e
      };
    } else {
      return {
        initialHeight: d,
        initialWidth: d * e
      };
    }
  }(e);
  const a = function () {
    var e;
    let t;
    r.Cmd.getConversationHeaderOffset(e => {
      t = e;
    });
    if ((e = t) !== null && e !== undefined) {
      return e;
    } else {
      return {
        right: window.innerWidth,
        bottom: 0
      };
    }
  }();
  return {
    width: t,
    left: a.right < window.innerWidth ? a.right - t - 10 : window.innerWidth - t - 10,
    bottom: window.innerHeight - 10 - n - a.bottom
  };
}
exports.MAX_ASPECT_RATIO = m;
const E = {
  x: 10,
  y: 10
};
const v = (0, l.forwardRef)((e, t) => {
  var n;
  const [a, r] = (0, l.useState)(false);
  const s = (0, l.useRef)(null);
  (0, l.useEffect)(() => () => self.clearTimeout(s.current), [s]);
  const d = (0, u.default)(() => {
    self.clearTimeout(s.current);
    r(true);
  }, 50);
  const v = (0, u.default)(() => {
    s.current = self.setTimeout(() => {
      r(false);
    }, 3000);
  }, 50);
  const _ = e.bottomContent != null || e.topContent != null || e.enableDragBar;
  const y = function (e) {
    if (e == null) {
      return 1;
    }
    switch (true) {
      case e < p:
        return p;
      case e > m:
        return m;
      default:
        return e;
    }
  }(e.aspectRatio);
  const C = (n = e.initialPiPStyle) !== null && n !== undefined ? n : g(y);
  const b = y * 145;
  const M = f < b ? b : f;
  return l.default.createElement(o.default, {
    ref: t,
    aspectRatio: y,
    margin: E,
    minWidth: M,
    className: (0, i.default)(c.videoFloater, _ && c.redesign),
    initialStyle: C,
    animationStartStyle: e.animationStartStyle,
    escapeConversationHeader: true,
    topContent: e.topContent,
    bottomContent: e.bottomContent,
    onMouseEnter: _ ? d : undefined,
    onMouseLeave: _ ? v : undefined,
    extraContentVisible: a,
    enableDragBar: e.enableDragBar
  }, l.default.createElement(h, {
    aspectRatio: y,
    originalAspectRatio: e.aspectRatio,
    backgroundImage: e.previewUrl
  }), e.children);
});
exports.FloatingVideoPlayer = v;
v.displayName = "FloatingVideoPlayer";