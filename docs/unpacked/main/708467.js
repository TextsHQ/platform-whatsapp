var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dir = undefined;
exports.DrawerManagerComponent = function (e) {
  const {
    direction: t,
    onDrawerIn: n,
    onDrawerOut: a,
    onDrawerAnimationComplete: M
  } = e;
  const S = (0, b.default)();
  const P = (0, v.useRef)(null);
  const O = (0, v.useRef)(null);
  const k = (0, v.useRef)(false);
  const [D, I] = (0, v.useState)(undefined);
  const [R, N] = (0, v.useState)(null);
  const [x, L] = (0, v.useState)(() => A(e.direction));
  const [j, B] = (0, v.useState)(undefined);
  const [F, G] = (0, v.useState)(undefined);
  const [U, W] = (0, v.useState)(undefined);
  const [H, V] = (0, v.useState)(u.undefinedDrawerContext);
  const [q, Y] = (0, v.useState)(p.FocusType.CUSTOM);
  const z = e => {
    if (!(e && R !== e)) {
      if (D) {
        if (a) {
          a();
        }
        k.current = true;
        I(undefined);
        V(u.undefinedDrawerContext);
        S(() => {
          k.current = false;
        });
        s.DrawerManager.trigger(`drawer_${t}_closed`);
      }
    }
  };
  const K = () => {
    if (!P.current) {
      return;
    }
    const e = P.current.getElement();
    if (e && !e.contains(document.activeElement)) {
      d.default.focus(e);
    }
  };
  (0, C.useListener)(s.DrawerManager, `open_drawer_${t}`, function (e) {
    let {
      transition: a = A(t),
      uim: l,
      noFocus: i,
      onEnterAnimationComplete: s,
      newDrawerContext: c = u.undefinedDrawerContext,
      focusType: d
    } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const f = (0, o.default)(`DrawerManager${t}`);
    if (!k.current && D) {
      if (D.key != null && (0, r.default)(D.key, e.key)) {
        return;
      }
      O.current = w.NONE;
      _.unstable_batchedUpdates(() => {
        I(e);
        N(f);
        L(a);
        B(l);
        G(i);
        W(s);
        V(c);
        Y(d);
      });
      S(() => {
        O.current = a;
      });
    } else {
      if (n) {
        n();
      }
      _.unstable_batchedUpdates(() => {
        I(e);
        N(f);
        L(a);
        B(l);
        G(i);
        W(s);
        V(c);
        Y(d);
      });
    }
  });
  (0, C.useListener)(s.DrawerManager, `exists_drawer_${t}`, e => {
    e(k.current !== true && !!D);
  });
  (0, C.useListener)(s.DrawerManager, `close_drawer_${t}`, z);
  (0, C.useListener)(s.DrawerManager, `update_context_${t}`, e => {
    V(e);
  });
  const Q = e.animationDisabled === true ? "none" : O.current || x;
  let X;
  if (D) {
    X = v.default.createElement(g.UIE, {
      displayName: `Drawer${(0, i.default)(t)}`,
      escapable: true,
      key: R,
      ref: P,
      requestFocus: F ? null : K,
      requestDismiss: z.bind(null, R)
    }, v.default.createElement(f.RotateFocus, {
      style: {
        height: "100%"
      },
      focusType: q
    }, v.default.createElement(u.DrawerContext.Provider, {
      value: H
    }, v.default.createElement(c.ErrorBoundary, {
      name: `drawer-manager-${t}`
    }, D))));
  }
  return v.default.createElement(m.MaybeStrictMode, null, v.default.createElement(h.default.Consumer, null, e => v.default.createElement(h.default.Provider, {
    value: j || e
  }, v.default.createElement(E.default, {
    className: (0, y.default)(T),
    transitionName: Q,
    onAnimationComplete: () => {
      e = R;
      if (M) {
        M();
      }
      return void (U === undefined && F === undefined || D && e === R && (0, l.isFunction)(U) && U());
      var e;
    },
    displayName: "DrawerManager"
  }, X))));
};
exports.Transition = undefined;
var r = a(require("../vendor/618446.js"));
var o = a(require("../vendor/873955.js"));
var l = require("../app/724976.js");
var i = a(require("../app/817173.js"));
var u = require("./568550.js");
var s = require("../app/900316.js");
var c = require("../app/707529.js");
var d = a(require("../app/335540.js"));
var f = require("./817646.js");
var p = require("../app/299950.js");
var m = require("../app/48343.js");
var h = a(require("../app/8073.js"));
var g = require("../app/392632.js");
var E = a(require("../app/844453.js"));
var v = S(require("../vendor/667294.js"));
var _ = S(require("../vendor/973935.js"));
var y = a(require("../app/156720.js"));
var C = require("../app/808446.js");
var b = a(require("./940630.js"));
function M(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (M = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function S(e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = M(t);
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
}
const T = {
  position: "lhggkp7q",
  top: "qq0sjtgm",
  end: "ebjesfe0",
  bottom: "jxacihee",
  start: "tkdu00h0"
};
const w = {
  LEFT: "drawer-left",
  MID: "slide-up",
  NONE: "none",
  RIGHT: "slide-left"
};
exports.Transition = w;
exports.Dir = {
  LEFT: "left",
  MID: "mid",
  RIGHT: "right"
};
const A = e => w[e.toUpperCase()];