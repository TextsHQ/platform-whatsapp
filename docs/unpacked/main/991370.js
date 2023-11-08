var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../main-chunk/170206.js"));
var o = require("./957546.js");
var l = require("../app/305521.js");
var i = a(require("../app/988410.js"));
var u = a(require("../app/335540.js"));
var s = C(require("../app/675886.js"));
var c = a(require("../app/83162.js"));
var d = a(require("./576593.js"));
var f = require("../app/956113.js");
var p = require("../app/220584.js");
var m = a(require("../app/395967.js"));
var h = a(require("../app/844453.js"));
var g = require("../vendor/548360.js");
var E = C(require("../vendor/667294.js"));
var v = a(require("../app/156720.js"));
var _ = a(require("../app/49710.js"));
function y(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (y = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function C(e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = y(t);
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
const b = {
  btnContext: {
    display: "l7jjieqr",
    width: "qg8w82as",
    height: "jdwybkuq",
    marginStart: "qnz2jpws",
    color: "s4k44ver",
    verticalAlign: "fewfhwl7"
  },
  btnContextHover: {
    ":focus": {
      borderTopStartRadius: "mmjxyicr",
      borderTopEndRadius: "r1jx4bdh",
      borderBottomEndRadius: "f9yclydc",
      borderBottomStartRadius: "mtzt60z0",
      boxShadow: "t5zm8b4w"
    }
  },
  btnContextVerticallyCenter: {
    position: "g0rxnol2",
    top: "cy13c0w7"
  }
};
function M(e, t) {
  const {
    contextEnabled: n,
    onContext: a,
    onMouseEnter: y,
    onMouseLeave: C,
    isNewsletter: M = false,
    firstCellInList: S
  } = e;
  const [T, w] = (0, E.useState)(false);
  const [A, P] = (0, E.useState)(false);
  const O = (0, _.default)(A);
  const {
    isKeyboardUser: k
  } = (0, m.default)();
  const D = (0, E.useRef)(null);
  const I = (0, E.useRef)(null);
  const R = () => I.current;
  const N = () => {
    i.default.maybeIndicateFocus(I.current);
  };
  if (Boolean(O) && Boolean(!e.contextMenu)) {
    P(false);
  }
  const x = e => {
    e.stopPropagation();
  };
  const L = e => {
    e.stopPropagation();
    if (n() || A) {
      e.preventDefault();
      if (!(a == null)) {
        a({
          anchor: e.target
        });
      }
    }
  };
  const j = e => {
    if ((0, c.default)(e)) {
      e.stopPropagation();
      e.preventDefault();
      if (!n() && !A) {
        return;
      }
      if (!(a == null)) {
        a({
          anchor: D.current
        });
      }
    }
  };
  const B = () => D.current;
  const F = () => {
    if (D || e.contextEnabled()) {
      u.default.focus(D.current);
    }
  };
  const G = () => {
    if (!(T || A || !e.contextEnabled())) {
      w(true);
    }
  };
  const U = () => {
    if (T) {
      w(false);
      if (!(C == null)) {
        C();
      }
    }
  };
  const W = k && e.active === true && e.contextEnabled();
  const H = () => {
    var e;
    if (!((e = D.current) === null || e === undefined)) {
      e.removeAttribute("aria-hidden");
    }
  };
  const V = () => {
    var e;
    if (!((e = D.current) === null || e === undefined)) {
      e.setAttribute("aria-hidden", "true");
    }
  };
  (0, E.useImperativeHandle)(t, () => ({
    indicateFocus: N,
    focusOnContextMenuButton: F,
    mouseOver: G,
    mouseLeave: U,
    getContextMenuRef: B,
    getCellFrameDivRef: R
  }));
  const q = typeof e.primary == "string" ? E.default.createElement(l.EmojiText, {
    text: e.primary,
    direction: "auto",
    formatters: s.Search({
      terms: e.searchText ? [e.searchText] : []
    }),
    titlify: true,
    ellipsify: true
  }) : e.primary;
  let Y = null;
  let z = null;
  if (e.pendingAction != null && e.pendingAction > 0) {
    z = E.default.createElement("div", {
      className: (0, v.default)(b.btnContext, k && b.btnContextHover)
    }, E.default.createElement(f.Spinner, {
      size: 18,
      stroke: 6,
      color: "highlight"
    }));
  } else if (T || e.active || W) {
    var K;
    const t = (0, v.default)(b.btnContext, (e.theme === "product" || e.theme === "quick-replies-drawer-item") && b.btnContextVerticallyCenter, k && b.btnContextHover);
    const n = e.theme === "chat-info";
    Y = E.default.createElement("button", {
      className: t,
      key: "icon-context",
      ref: D,
      onMouseDown: x,
      onClick: L,
      "aria-label": (K = e.contextMenuAriaLabel) !== null && K !== undefined ? K : g.fbt._("Open the chat context menu", null, {
        hk: "2rxtMR"
      }),
      onKeyDown: j,
      onFocus: H,
      onBlur: V,
      "aria-hidden": true,
      tabIndex: e.contextMenuControlled ? -1 : 0
    }, E.default.createElement(o.DownIcon, {
      color: n ? p.SvgColorProp.SECONDARY : null
    }));
  }
  const Q = E.default.createElement(h.default, {
    transitionName: "fade"
  }, z);
  const X = E.default.createElement(h.default, {
    transitionName: "pop-fast-chat"
  }, T || W ? Y : null);
  let Z;
  let J;
  if (e.secondary != null) {
    Z = e.primaryDetail;
    J = [E.default.createElement(E.Fragment, {
      key: "prop"
    }, e.secondaryDetail), E.default.createElement(E.Fragment, {
      key: "spinner"
    }, Q), E.default.createElement(E.Fragment, {
      key: "button"
    }, X)];
  } else {
    Z = [E.default.createElement(E.Fragment, {
      key: "prop"
    }, e.primaryDetail), E.default.createElement(E.Fragment, {
      key: "spinner"
    }, Q), E.default.createElement(E.Fragment, {
      key: "button"
    }, X)];
  }
  const $ = M ? d.default : r.default;
  return E.default.createElement($, {
    ref: I,
    image: e.image,
    customImage: e.customImage,
    className: e.className,
    unreadStyle: e.unreadStyle,
    active: e.active,
    idle: e.idle,
    checkbox: e.checkbox,
    isMuted: e.isMuted,
    dragging: e.dragging,
    theme: e.theme,
    primary: q,
    primaryDetail: Z,
    secondary: e.secondary,
    secondaryDetail: J,
    extendSecondaryEllipsis: e.extendSecondaryEllipsis,
    detail: e.detail,
    onClick: e.onClick,
    onMouseDown: e.onMouseDown,
    onContextMenu: e.contextEnabled() ? e => {
      if (n()) {
        e.stopPropagation();
        e.preventDefault();
        if (a) {
          a({
            event: e
          });
        }
      }
    } : null,
    onMouseEnter: T ? null : () => {
      if (!(T || A || !e.contextEnabled())) {
        w(true);
        if (!(y == null)) {
          y();
        }
      }
    },
    onMouseOver: T ? null : G,
    onMouseLeave: T ? U : null,
    heightStyle: e.heightStyle,
    testid: e.testid,
    mediaPreview: e.mediaPreview,
    hideMeta: e.hideMeta,
    label: e.label,
    tabIndex: e.tabIndex,
    role: e.role,
    containerRole: e.containerRole,
    handleKeyboardClick: e.handleKeyboardClick,
    focusid: e.focusid,
    firstCellInList: S
  });
}
var S = (0, E.forwardRef)(M);
exports.default = S;