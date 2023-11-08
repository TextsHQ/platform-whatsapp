var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../vendor/81109.js"));
var o = a(require("../vendor/618446.js"));
var l = a(require("../vendors-main/59854.js"));
var i = a(require("../app/670983.js"));
var u = require("../app/685639.js");
var s = require("../app/396574.js");
var c = require("../app/780549.js");
var d = require("./444811.js");
var f = a(require("./658388.js"));
var p = require("../app/152189.js");
var m = a(require("../app/330619.js"));
var h = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = b(t);
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
var g = a(require("../app/710629.js"));
var E = a(require("../app/637660.js"));
var v = require("../app/808446.js");
var _ = a(require("../app/38085.js"));
var y = a(require("../app/558532.js"));
var C = a(require("../app/895851.js"));
function b(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (b = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const M = (0, p.getIntFromStylesProp)(f.default, "-move-resize-component-border-radius");
const S = require("../vendor/76672.js").Mirrored(["TOP", "BOTTOM", "LEFT", "RIGHT", "TOP_RIGHT", "TOP_LEFT", "BOTTOM_RIGHT", "BOTTOM_LEFT"]);
const T = [S.LEFT, S.RIGHT];
const w = [S.TOP, S.TOP_LEFT, S.TOP_RIGHT].concat(T);
const A = [S.BOTTOM, S.BOTTOM_LEFT, S.BOTTOM_RIGHT].concat(T);
const P = require("../vendor/76672.js").Mirrored(["IDLE", "RESIZE", "MOVE"]);
function O(e) {
  switch (e) {
    case S.LEFT:
      return f.default.leftResizer;
    case S.BOTTOM:
      return f.default.bottomResizer;
    case S.RIGHT:
      return f.default.rightResizer;
    case S.TOP:
      return f.default.topResizer;
    case S.TOP_LEFT:
      return f.default.topLeftResizer;
    case S.TOP_RIGHT:
      return f.default.topRightResizer;
    case S.BOTTOM_LEFT:
      return f.default.bottomLeftResizer;
    case S.BOTTOM_RIGHT:
      return f.default.bottomRightResizer;
  }
}
function k(e) {
  let {
    getResizeCallback: t,
    currentAction: n,
    directions: a = Array.from(S.members())
  } = e;
  return a.map(e => h.default.createElement("div", {
    key: e,
    className: (0, s.classnamesConvertMeToStylexPlease)(O(e), f.default.resizer, {
      [f.default.defaultCursor]: n === P.RESIZE
    }),
    onMouseDown: t(e)
  }));
}
function D(e) {
  if (e.disabled) {
    return e.children;
  } else {
    return h.default.createElement("div", {
      className: (0, s.classnamesConvertMeToStylexPlease)({
        [f.default.defaultCursor]: e.currentAction === P.RESIZE,
        [f.default.moveable]: true
      }),
      onMouseDown: e.onMouseDown,
      onMouseUp: e.onMouseUp,
      grab: e.currentAction === P.MOVE ? "true" : "supported"
    }, e.children);
  }
}
function I(e, t) {
  const {
    escapeConversationHeader: n,
    animationStartStyle: a,
    aspectRatio: p,
    initialStyle: b,
    minWidth: O,
    margin: I,
    onMoveStop: R,
    onResize: N,
    onMove: x
  } = e;
  const L = (0, C.default)();
  const j = () => b ? {
    width: b.width,
    left: b.left,
    bottom: b.bottom
  } : {
    width: O,
    left: I.x,
    bottom: I.y
  };
  const B = (0, h.useMemo)(() => {
    let e;
    if (n) {
      c.Cmd.getConversationHeaderOffset(t => {
        e = t.right;
      });
    }
    const t = {
      resizeDirection: S.TOP,
      currentAction: P.IDLE,
      resizeStartMousePosition: {
        x: 0,
        y: 0
      },
      resizeStartPiPStyle: {
        width: 0,
        bottom: 0,
        left: 0
      },
      moveStartMousePosition: {
        x: 0,
        y: 0
      },
      moveStartPositionStyle: {
        left: 0,
        bottom: 0
      },
      previousWindowSize: {
        height: window.innerHeight,
        width: window.innerWidth
      },
      previousConvPanelRightBorder: e
    };
    if (a) {
      return (0, r.default)((0, r.default)({}, t), a);
    } else {
      return (0, r.default)((0, r.default)({}, t), j());
    }
  }, []);
  const [F, G] = (0, h.useState)(B.width);
  const [U, W] = (0, h.useState)(B.bottom);
  const [H, V] = (0, h.useState)(B.left);
  const [q, Y] = (0, h.useState)(B.resizeDirection);
  const [z, K] = (0, h.useState)(B.currentAction);
  const [Q, X] = (0, h.useState)(B.resizeStartMousePosition);
  const [Z, J] = (0, h.useState)(B.resizeStartPiPStyle);
  const [$, ee] = (0, h.useState)(B.moveStartMousePosition);
  const [te, ne] = (0, h.useState)(B.moveStartPositionStyle);
  const [ae, re] = (0, h.useState)(B.previousWindowSize);
  const [oe, le] = (0, h.useState)(B.previousConvPanelRightBorder);
  const ie = (0, h.useRef)(null);
  const ue = (0, h.useRef)(null);
  const se = (0, _.default)(t, ue);
  const ce = (0, h.useRef)(null);
  const de = (0, h.useRef)(null);
  const fe = (0, E.default)(() => new u.ShiftTimer(e => {
    if (e.left) {
      V(e.left);
    }
    if (e.bottom) {
      W(e.bottom);
    }
    if (e.width) {
      G(e.width);
    }
  }));
  const pe = e => t => {
    if (t.button === 0) {
      Y(e);
      K(P.RESIZE);
      J({
        width: F,
        left: H,
        bottom: U
      });
      X({
        x: t.clientX,
        y: t.clientY
      });
    }
    t.stopPropagation();
  };
  const me = e => {
    if (e.button === 0) {
      K(P.MOVE);
      ne({
        left: H,
        bottom: U
      });
      ee({
        x: e.clientX,
        y: e.clientY
      });
    }
    e.stopPropagation();
  };
  const he = () => ({
    top: window.innerHeight - U - F / p,
    left: H,
    bottom: window.innerHeight - U,
    right: H + F
  });
  const ge = () => {
    const e = he();
    if (!(R == null)) {
      R(e);
    }
  };
  const Ee = () => {
    var e;
    var t;
    return {
      extraTopContentHeight: 0 + (((e = ce.current) === null || e === undefined ? undefined : e.offsetHeight) != null ? ce.current.offsetHeight - M : 0),
      extraBottomContentHeight: ((t = de.current) === null || t === undefined ? undefined : t.offsetHeight) != null ? de.current.offsetHeight - M : 0
    };
  };
  const ve = (e, t, n, a) => {
    let r = e;
    let o = t;
    let i = n;
    let u = 0;
    let s = 0;
    let c = 0;
    switch (a) {
      case P.RESIZE:
        u = Z.width;
        s = Z.left;
        c = Z.bottom;
        break;
      case P.MOVE:
        u = F;
        s = te.left;
        c = te.bottom;
    }
    const d = window.innerHeight;
    const f = window.innerWidth;
    const {
      extraTopContentHeight: m,
      extraBottomContentHeight: h
    } = Ee();
    const g = u + r;
    const E = g / p;
    const v = c + i;
    const _ = (0, l.default)(v, 2);
    const y = s + o;
    const C = (0, l.default)(y, 2);
    const b = (0, l.default)(I.y + h, 2);
    const M = (0, l.default)(d - E - I.y - m, 2);
    const S = (0, l.default)(I.x, 2);
    const T = (0, l.default)(f - g - I.x, 2);
    if (b > _ || _ > M) {
      switch (a) {
        case P.RESIZE:
          i = 0;
          o = 0;
          r = 0;
          break;
        case P.MOVE:
          i = 0;
      }
    }
    if (S > C || C > T) {
      switch (a) {
        case P.RESIZE:
          i = 0;
          o = 0;
          r = 0;
          break;
        case P.MOVE:
          o = 0;
      }
    }
    if (r && v + E + I.y > d) {
      switch (a) {
        case P.RESIZE:
          i = 0;
          o = 0;
          r = 0;
      }
    }
    if (r && y + F + I.x > f) {
      switch (a) {
        case P.RESIZE:
          i = 0;
          o = 0;
          r = 0;
      }
    }
    if (g < O || E + I.y * 2 > d || g + I.x * 2 > f) {
      i = 0;
      o = 0;
      r = 0;
    }
    return {
      deltaWidth: r,
      deltaBottom: i,
      deltaLeft: o
    };
  };
  const _e = (e, t) => {
    const n = window.innerWidth;
    const a = window.innerHeight;
    const r = H + e;
    const o = U + t;
    const l = I.x;
    const i = n - F - I.x;
    const u = I.y;
    const s = a - F / p - I.y;
    return u > o || o > s || l > r || r > i;
  };
  (0, h.useEffect)(() => {
    if (b) {
      if (ie.current) {
        return void fe.current.onOrAfter(400, b);
      }
      const e = b.width;
      const t = b.left + e - (F + H);
      const n = b.bottom + e / p - (U + F / p);
      if (Math.abs(t) < 0.1 && Math.abs(n) < 0.1) {
        if (b.left) {
          V(b.left);
        }
        if (b.bottom) {
          W(b.bottom);
        }
        if (b.width) {
          G(b.width);
        }
      } else {
        G(e);
      }
    }
  }, [p]);
  const ye = (0, g.default)(() => {
    const {
      extraTopContentHeight: t,
      extraBottomContentHeight: n
    } = Ee();
    const a = window.innerHeight - e.margin.y * 2 - t - n;
    const r = window.innerWidth - e.margin.x * 2;
    let l = F;
    let i = l / e.aspectRatio;
    let u = U;
    let s = H;
    if (i > a) {
      i = a;
      l = a * e.aspectRatio;
    }
    if (l > r) {
      i = r / e.aspectRatio;
      l = r;
    }
    if (u + i > a + e.margin.y + n) {
      u = a + e.margin.y + n - i;
    }
    if (s + l > r + e.margin.x) {
      s = r + e.margin.x - l;
    }
    if (ae.width < s + l + e.margin.x + 3) {
      s = r + e.margin.x - l;
    }
    if (ae.height < u + i + e.margin.y + n + 3) {
      u = a + e.margin.y + n - i;
    }
    const d = oe != null && oe > 0 && Math.abs(H + l + e.margin.x - oe) < 3;
    let f;
    if (e.escapeConversationHeader) {
      c.Cmd.getConversationHeaderOffset(e => {
        f = e.right;
      });
    }
    const p = f && f < window.innerWidth;
    if (d && f != null && f !== 0 && p) {
      s = f - e.margin.x - l;
    }
    const m = {
      bottom: Math.max(e.margin.y, u),
      left: Math.max(e.margin.x, s),
      width: Math.max(e.minWidth, l),
      previousWindowSize: {
        height: window.innerHeight,
        width: window.innerWidth
      },
      previousConvPanelRightBorder: f
    };
    if (!(0, o.default)(m, {
      bottom: U,
      left: H,
      width: F,
      previousWindowSize: ae,
      previousConvPanelRightBorder: oe
    })) {
      W(m.bottom);
      V(m.left);
      G(m.width);
      re(m.previousWindowSize);
      le(m.previousConvPanelRightBorder);
    }
  }, 50);
  (0, h.useEffect)(() => {
    if (!a) {
      return void ye();
    }
    const e = j();
    const t = a.width / p;
    const n = a.height;
    const o = n / t;
    const l = (0, r.default)((0, r.default)({}, e), {}, {
      height: e.width / p,
      scaleY: [1, o],
      translateY: [0, (t - n) / 2 / o]
    });
    const u = (0, m.default)((0, i.default)(ue.current, "componentRef.current"), l, {
      easing: "easeInOutQuart",
      duration: 400
    });
    ie.current = u.then(() => {
      if (!L.aborted) {
        ie.current = null;
        V(e.left);
        W(e.bottom);
        G(e.width);
        ye();
      }
    });
  }, []);
  (0, y.default)(() => {
    fe.current.cancel();
  });
  (0, v.useListener)(window, "mousemove", e => {
    let t;
    let n = 0;
    let a = 0;
    let r = 0;
    let o = 0;
    const {
      extraTopContentHeight: l,
      extraBottomContentHeight: i
    } = Ee();
    switch (z) {
      case P.IDLE:
        return;
      case P.RESIZE:
        {
          switch (q) {
            case S.TOP:
              a = Q.y - e.clientY;
              n = a * p;
              break;
            case S.BOTTOM:
              a = e.clientY - Q.y;
              n = a * p;
              o = -a;
              break;
            case S.RIGHT:
              n = e.clientX - Q.x;
              a = n / p;
              o = -a;
              break;
            case S.LEFT:
              n = Q.x - e.clientX;
              a = n / p;
              o = -a;
              r = -n;
              break;
            case S.TOP_RIGHT:
              n = Math.max(e.clientX - Q.x, p * (Q.y - e.clientY));
              a = n / p;
              break;
            case S.TOP_LEFT:
              n = Math.max(Q.x - e.clientX, p * (Q.y - e.clientY));
              a = n / p;
              r = -n;
              break;
            case S.BOTTOM_RIGHT:
              n = Math.max(e.clientX - Q.x, p * (e.clientY - Q.y));
              a = n / p;
              o = -a;
              break;
            case S.BOTTOM_LEFT:
              n = Math.max(Q.x - e.clientX, p * (e.clientY - Q.y));
              a = n / p;
              o = -a;
              r = -n;
          }
          t = ve(n, r, o, P.RESIZE);
          let u = 0;
          let s = 0;
          let c = 0;
          if (t.deltaWidth === 0 && t.deltaLeft === 0 && t.deltaBottom === 0) {
            if (n < 0) {
              switch (q) {
                case S.TOP:
                case S.TOP_RIGHT:
                  n = O - Z.width;
                  o = 0;
                  r = 0;
                  break;
                case S.TOP_LEFT:
                  n = O - Z.width;
                  r = -n;
                  o = 0;
                  break;
                case S.BOTTOM:
                case S.RIGHT:
                case S.BOTTOM_RIGHT:
                  n = O - Z.width;
                  a = n / p;
                  o = -a;
                  r = 0;
                  break;
                case S.LEFT:
                case S.BOTTOM_LEFT:
                  n = O - Z.width;
                  a = n / p;
                  o = -a;
                  r = -n;
              }
            } else if (n > 0) {
              const e = Z.width / p;
              switch (q) {
                case S.TOP:
                case S.TOP_RIGHT:
                  n = Math.min(window.innerWidth - I.x - l - Z.width - Z.left, p * (window.innerHeight - I.y - l - e - Z.bottom)) - 0.1;
                  break;
                case S.TOP_LEFT:
                  n = Math.min(Z.left - I.x, p * (window.innerHeight - I.y - l - e - Z.bottom)) - 0.1;
                  a = n / p;
                  r = -n;
                  break;
                case S.BOTTOM:
                case S.RIGHT:
                case S.BOTTOM_RIGHT:
                  n = Math.min(window.innerWidth - I.x - Z.width - Z.left, p * (Z.bottom - I.y - i)) - 0.1;
                  a = n / p;
                  o = -a;
                  break;
                case S.LEFT:
                case S.BOTTOM_LEFT:
                  n = Math.min(Z.left - I.x, p * (Z.bottom - I.y - i)) - 0.1;
                  a = n / p;
                  o = -a;
                  r = -n;
              }
            }
            u = Z.width + n;
            s = Z.left + r;
            c = Z.bottom + o;
            G(u);
            V(s);
            W(c);
          } else {
            u = Z.width + t.deltaWidth;
            s = Z.left + t.deltaLeft;
            c = Z.bottom + t.deltaBottom;
            G(u);
            V(s);
            W(c);
          }
          if (N) {
            N(u, s, c);
          }
          break;
        }
      case P.MOVE:
        {
          r = e.clientX - $.x;
          o = $.y - e.clientY;
          t = ve(n, r, o, P.MOVE);
          let a = 0;
          let u = 0;
          a = r !== 0 && t.deltaLeft === 0 ? r > 0 ? window.innerWidth - F - I.x : I.x : te.left + t.deltaLeft;
          u = o !== 0 && t.deltaBottom === 0 ? o > 0 ? window.innerHeight - F / p - I.y - l - 0.1 : I.y + i : te.bottom + t.deltaBottom;
          V(a);
          W(u);
          if (x) {
            x(a, u);
          }
          break;
        }
    }
  });
  (0, v.useListener)(window, "mouseup", () => {
    K(P.IDLE);
  });
  (0, v.useListener)(window, "resize", ye);
  (0, v.useListener)(c.Cmd, "floater_escape_overlap", (e, t) => {
    const n = e.getBoundingClientRect();
    const a = {
      left: n.left - t,
      top: n.top - t,
      right: n.right + t,
      bottom: n.bottom + t
    };
    const r = he();
    l = a;
    if ((o = r).right <= l.left || o.left >= l.right || o.bottom <= l.top || o.top >= l.bottom) {
      return;
    }
    var o;
    var l;
    const u = ((e, t) => ({
      toLeftDistance: e.right - t.left,
      toBottomDistance: t.bottom - e.top,
      toRightDistance: t.right - e.left,
      toTopDistance: e.bottom - t.top
    }))(r, a);
    let s;
    let c;
    if (!_e(-u.toLeftDistance, 0)) {
      if (s === undefined || u.toLeftDistance < s) {
        s = u.toLeftDistance;
        c = S.LEFT;
      }
    }
    if (!_e(0, -u.toBottomDistance)) {
      if (s === undefined || u.toBottomDistance < s) {
        s = u.toBottomDistance;
        c = S.BOTTOM;
      }
    }
    if (!_e(u.toRightDistance, 0)) {
      if (s === undefined || u.toRightDistance < s) {
        s = u.toRightDistance;
        c = S.RIGHT;
      }
    }
    if (!_e(0, u.toTopDistance)) {
      if (s === undefined || u.toTopDistance < s) {
        s = u.toTopDistance;
        c = S.TOP;
      }
    }
    if (s === undefined || c == null) {
      return;
    }
    let d = {};
    switch (c) {
      case S.LEFT:
        d = {
          left: H - u.toLeftDistance
        };
        break;
      case S.BOTTOM:
        d = {
          bottom: U - u.toBottomDistance
        };
        break;
      case S.RIGHT:
        d = {
          left: H + u.toRightDistance
        };
        break;
      case S.TOP:
        d = {
          bottom: U + u.toTopDistance
        };
    }
    (0, m.default)((0, i.default)(ue.current, "componentRef.current"), d, {
      duration: 200
    }).then(() => {
      if (!L.aborted) {
        if (d.left != null) {
          V(d.left);
        }
        if (d.bottom != null) {
          W(d.bottom);
        }
      }
    });
  });
  const Ce = {
    width: F,
    height: F / p
  };
  const be = {
    width: Ce.width,
    height: Ce.height,
    bottom: U + "px",
    left: H + "px"
  };
  return h.default.createElement("div", {
    ref: se,
    className: f.default.moveResizeComponentContainer,
    style: be,
    onMouseEnter: e.onMouseEnter,
    onMouseLeave: e.onMouseLeave
  }, e.enableDragBar || e.topContent != null ? h.default.createElement("div", {
    ref: ce,
    className: (0, s.classnamesConvertMeToStylexPlease)({
      [f.default.extraContentVisible]: e.extraContentVisible,
      [f.default.extraContent]: true,
      [f.default.topContent]: true
    })
  }, e.enableDragBar ? h.default.createElement(D, {
    onMouseDown: me,
    onMouseUp: ge,
    currentAction: z
  }, h.default.createElement(d.DragTextureIcon, {
    className: f.default.dragBar
  })) : null, e.topContent, h.default.createElement(k, {
    getResizeCallback: pe,
    currentAction: z,
    directions: w
  })) : null, e.bottomContent != null ? h.default.createElement("div", {
    ref: de,
    style: {
      top: !e.extraContentVisible && de.current ? `calc(100% - ${de.current.offsetHeight}px)` : null
    },
    className: (0, s.classnamesConvertMeToStylexPlease)({
      [f.default.extraContentVisible]: e.extraContentVisible,
      [f.default.extraContent]: true,
      [f.default.bottomContent]: true
    })
  }, h.default.createElement("div", {
    className: f.default.blurryBackground
  }), e.bottomContent, h.default.createElement(k, {
    getResizeCallback: pe,
    currentAction: z,
    directions: A
  })) : null, e.disableResize ? null : h.default.createElement(k, {
    getResizeCallback: pe,
    currentAction: z,
    directions: e.topContent != null ? T : undefined
  }), h.default.createElement("div", {
    className: (0, s.classnamesConvertMeToStylexPlease)(f.default.moveResizeComponentInnerContainer, e.className)
  }, h.default.createElement(D, {
    onMouseDown: me,
    onMouseUp: ge,
    currentAction: z,
    disabled: e.enableDragBar
  }, e.children, z !== P.IDLE ? h.default.createElement("div", {
    className: f.default.overlay
  }) : null)));
}
var R = (0, h.forwardRef)(I);
exports.default = R;