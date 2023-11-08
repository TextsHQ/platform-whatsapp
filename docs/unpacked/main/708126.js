var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("./190643.js"));
var o = require("./980518.js");
var l = require("./845582.js");
var i = require("./69315.js");
var u = a(require("./996513.js"));
var s = require("../app/787742.js");
var c = a(require("./821384.js"));
var d = require("./541345.js");
var f = require("./474474.js");
var p = require("../app/392632.js");
var m = a(require("../app/395967.js"));
var h = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = v(t);
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
var g = a(require("../app/156720.js"));
var E = a(require("../app/895851.js"));
function v(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (v = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const _ = {
  cursorZoomIn: {
    cursor: "bn05jr7j"
  },
  keyboardFocus: {
    boxShadow: "r6unq4of"
  }
};
const y = (e, t) => {
  const {
    children: n,
    onZoomIn: a,
    width: v,
    height: y,
    msg: C,
    onLoad: b,
    role: M
  } = e;
  const [S, T] = (0, h.useState)(null);
  const [w, A] = (0, h.useState)(true);
  const P = (0, h.useRef)(0);
  const O = (0, h.useRef)(0);
  const k = (0, h.useRef)();
  const D = (0, h.useRef)(null);
  const {
    isKeyboardUser: I
  } = (0, m.default)();
  const [R, N] = (0, h.useState)(false);
  const x = (0, E.default)();
  const L = () => {
    var e;
    if ((e = k.current) === null || e === undefined) {
      return undefined;
    } else {
      return e.getOutsideContainer();
    }
  };
  const j = () => {
    var e;
    if ((e = k.current) === null || e === undefined) {
      return undefined;
    } else {
      return e.getInsideContainer();
    }
  };
  const B = () => {
    A(false);
  };
  const F = (e, t, n) => {
    const a = O.current;
    const r = P.current;
    const o = window.innerWidth / 2 - t;
    const l = window.innerHeight / 2 - n;
    return {
      translateX: a > 0 ? Math.round(o * 1.2 * a / e.clientWidth) : 0,
      translateY: r > 0 ? Math.round(l * 1.2 * r / e.clientHeight) : 0
    };
  };
  const G = () => {
    a(false);
    T(null);
    A(true);
  };
  const U = () => {
    if (!x.aborted) {
      N(false);
    }
  };
  const W = (e, t) => {
    if (S) {
      return void G();
    }
    U();
    const n = j();
    const r = L();
    if (!(n instanceof HTMLElement && r instanceof HTMLElement)) {
      return;
    }
    P.current = n.clientHeight * i.ZOOM_IN_FACTOR - r.clientHeight;
    O.current = n.clientWidth * i.ZOOM_IN_FACTOR - r.clientWidth;
    const {
      translateX: o,
      translateY: l
    } = F(r, e, t);
    a(true);
    T({
      factor: i.ZOOM_IN_FACTOR,
      translateX: o,
      translateY: l
    });
    A(false);
  };
  const H = e => {
    e.stopPropagation();
    W(e.pageX, e.pageY);
  };
  const V = e => {
    e.stopPropagation();
    W(window.innerWidth / 2, window.innerHeight / 2);
  };
  (0, h.useImperativeHandle)(t, () => ({
    getHeightOverflow: () => P.current,
    getWidthOverflow: () => O.current,
    onClick: H,
    onKeyboardZoom: V,
    getTranslatePosition: F,
    getOutsideContainer: L,
    getInsideContainer: j,
    closingMediaZoomable: B
  }));
  let q = h.default.createElement("div", {
    role: M,
    ref: D,
    onFocus: () => {
      if (I && !x.aborted) {
        N(true);
      }
    },
    onBlur: U,
    className: (0, g.default)(u.default.content, !S && _.cursorZoomIn, !S && R && _.keyboardFocus)
  }, n);
  if (S) {
    q = h.default.createElement(p.UIE, {
      displayName: "ZoomInImage",
      escapable: true,
      requestDismiss: G
    }, q);
  }
  const Y = (0, l.getDisplayType)(C);
  const z = o.AddOnBubbleType.MEDIA_VIEWER;
  return h.default.createElement(c.default, {
    type: "zoomIn",
    size: {
      width: v,
      height: y
    },
    position: "relative",
    objectPosition: "relative",
    zoomIn: S,
    onObjectLoad: b,
    ref: k
  }, q, C && (0, f.shouldShowReactionBubble)(C, z) && h.default.createElement(r.default, {
    isOutgoingMsg: (0, s.getIsSentByMe)(C),
    displayType: Y,
    bubbleType: z
  }, h.default.createElement(d.ReactionBubbleContainer, {
    msgIds: [C.id.toString()],
    isOutgoingMsg: (0, s.getIsSentByMe)(C),
    displayType: Y,
    reactionBubbleVisible: w,
    reactionBubbleType: z
  })));
};
var C = (0, h.forwardRef)(y);
exports.default = C;