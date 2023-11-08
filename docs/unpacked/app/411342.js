var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ANCHOR_PORTAL_ID = undefined;
Object.defineProperty(exports, "PopoverAlignment", {
  enumerable: true,
  get: function () {
    return s.PopoverAlignment;
  }
});
exports.PopoverPortalBucket = function () {
  return c.default.createElement("div", {
    id: h
  });
};
Object.defineProperty(exports, "PopoverPosition", {
  enumerable: true,
  get: function () {
    return s.PopoverPosition;
  }
});
exports.usePopoverElement = function (e) {
  const t = document.getElementById(h);
  const {
    target: n,
    position: r,
    alignment: _,
    buffer: y = 0,
    openingDelay: E,
    enableEnterTransition: S = true,
    enableExitTransition: v = true,
    initHandling: T,
    controllerRef: M
  } = e;
  const A = (0, c.useRef)(null);
  const [b, C] = (0, c.useState)(null);
  const [P, O] = (0, c.useState)(false);
  const [I, R] = (0, c.useState)(false);
  const N = (0, c.useCallback)(() => {
    if (A.current == null || n.current == null || !P) {
      return;
    }
    const {
      coords: e,
      alignment: t,
      position: a
    } = (0, s.getFixedElementPosition)(n.current, A.current, r, _, y);
    const o = (0, s.getDefaultTransformOrigin)({
      position: a,
      alignment: t
    });
    C((0, i.default)((0, i.default)({}, e), {}, {
      transformOrigin: o
    }));
  }, [A, n, r, _, y, P]);
  (0, c.useEffect)(() => {
    if (n.current != null) {
      return (0, o.observeMutations)(n.current, {
        subtree: true,
        attributes: true,
        childList: true
      }, () => {
        N();
      });
    }
  }, [n, N]);
  const D = (0, c.useCallback)(() => O(true), []);
  const [w, L] = (0, f.useTimeout)(D, E);
  const k = (0, c.useCallback)(() => {
    L();
    O(false);
  }, [L]);
  (0, c.useEffect)(() => {
    const e = n.current;
    if (e == null || T == null) {
      return;
    }
    let t = T;
    if (!(t instanceof Array)) {
      t = [t];
    }
    const r = t.map(t => {
      switch (t) {
        case "click":
          return function (e, t) {
            e.addEventListener("click", t);
            return () => {
              e.removeEventListener("click", t);
            };
          }(e, w);
        case "contextmenu":
          return function (e, t, n) {
            const r = e => {
              e.preventDefault();
              if (!n) {
                t();
              }
            };
            e.addEventListener("contextmenu", r);
            return () => {
              e.removeEventListener("contextmenu", r);
            };
          }(e, w, I);
        case "hover":
          return function (e, t, n) {
            e.addEventListener("mouseenter", t);
            e.addEventListener("mouseleave", n);
            return () => {
              e.removeEventListener("mouseenter", t);
              e.removeEventListener("mouseleave", n);
            };
          }(e, w, k);
        case "hover-popover":
          return function (e, t, n, r) {
            const i = n => t != null && n instanceof Node && (n === t || t.contains(n) || n === e || e.contains(n));
            const a = e => {
              if (!i(e.relatedTarget)) {
                r();
              }
            };
            e.addEventListener("mouseenter", n);
            e.addEventListener("mouseleave", a);
            if (!(t == null)) {
              t.addEventListener("mouseleave", a);
            }
            return () => {
              e.removeEventListener("mouseenter", n);
              e.removeEventListener("mouseleave", a);
              if (!(t == null)) {
                t.removeEventListener("mouseleave", a);
              }
            };
          }(e, A.current, w, k);
        case "focus":
          return function (e, t, n) {
            e.addEventListener("focus", t);
            e.addEventListener("blur", n);
            return () => {
              e.removeEventListener("focus", t);
              e.removeEventListener("blur", n);
            };
          }(e, w, k);
      }
    });
    return () => r.forEach(e => e());
  }, [T, n, w, k, I]);
  const G = () => {
    if (A.current != null) {
      const e = (0, a.getNextTabbableElement)(A.current);
      if (e != null) {
        e.focus();
      }
    }
  };
  (0, c.useImperativeHandle)(M, () => ({
    showPopover: D,
    hidePopover: k,
    popoverIsVisible: P,
    popoverIsAnimating: I
  }));
  let U = null;
  if (t != null) {
    let n;
    var x;
    if (e.dismissable === true) {
      n = c.default.createElement(l.UIE, {
        escapable: true,
        popable: true,
        displayName: (x = e.name) !== null && x !== undefined ? x : "Popover",
        requestFocus: G,
        requestDismiss: k
      }, e.element);
    } else {
      n = e.element;
    }
    const r = c.default.createElement("div", {
      className: (0, p.default)(m),
      style: {
        top: -y,
        right: -y,
        bottom: -y,
        left: -y
      }
    });
    U = (0, d.createPortal)(c.default.createElement(u.VelocityTransition, {
      transitionName: "scaleAndFade",
      in: P,
      nodeRef: A,
      mountOnEnter: true,
      unmountOnExit: true,
      appear: true,
      enter: S,
      exit: v,
      timeout: 300,
      onEnter: () => N(),
      onEntering: () => R(true),
      onEntered: () => R(false),
      onExiting: () => R(true),
      onExited: () => R(false)
    }, c.default.createElement("div", {
      ref: A,
      "data-animate-dropdown-item": true,
      style: b,
      className: (0, p.default)(g)
    }, r, n)), t);
  } else if (P && t == null) {
    __LOG__(4, undefined, new Error())`[popover] portal ref is missing!`;
  }
  return {
    popover: U,
    showPopover: D,
    hidePopover: k,
    popoverIsVisible: P,
    popoverIsAnimating: I
  };
};
var i = r(require("../vendor/81109.js"));
var a = require("./299950.js");
var o = require("./685467.js");
var s = require("./997135.js");
var l = require("./392632.js");
var u = require("./60477.js");
var c = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = _(t);
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
}(require("../vendor/667294.js"));
var d = require("../vendor/973935.js");
var p = r(require("./156720.js"));
var f = require("./441673.js");
function _(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (_ = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const g = {
  position: "snyj76hw",
  zIndex: "qwzl264q",
  transformOrigin: "mzgp2ge6"
};
const m = {
  position: "lhggkp7q",
  zIndex: "ci7c9wzs"
};
const h = "wa-popovers-bucket";
exports.ANCHOR_PORTAL_ID = h;