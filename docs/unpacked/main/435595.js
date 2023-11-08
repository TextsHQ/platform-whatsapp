var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RoundTheme = exports.Round = undefined;
var r = a(require("../vendor/967154.js"));
var o = require("../app/396574.js");
var l = a(require("../app/83162.js"));
var i = a(require("../app/395967.js"));
var u = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = f(t);
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
var s = a(require("../app/156720.js"));
var c = a(require("../app/38085.js"));
var d = a(require("../app/83233.js"));
function f(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (f = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const p = require("../vendor/76672.js").Mirrored(["Default", "XSmall", "Small", "Medium", "Large", "Inverted", "NoShadow", "SVGGrayButton", "ReactionPickerButton", "Approve", "Reject", "Disabled", "QuickAction", "DrawerFooter", "Error"]);
exports.RoundTheme = p;
const m = {
  btn: {
    display: "p357zi0d",
    alignItems: "gndfcl4n",
    justifyContent: "ac2vgrno",
    width: "d6ll3xky",
    height: "db4qzak4",
    paddingTop: "i5tg98hk",
    paddingEnd: "f9ovudaz",
    paddingBottom: "przvwfww",
    paddingStart: "gx1rr48f",
    fontSize: "f8jlpxt4",
    fontWeight: "hnx8ox4h",
    color: "k17s6i4e",
    textTransform: "ofejerhi",
    backgroundColor: "os0tgls2",
    borderTopStartRadius: "g9p5wyxn",
    borderTopEndRadius: "i0tg5vk9",
    borderBottomEndRadius: "aoogvgrq",
    borderBottomStartRadius: "o2zu3hjb",
    boxShadow: "hftcxtij",
    transitionDuration: "rtx6r8la",
    transitionProperty: "e3b81npk",
    transitionTimingFunction: "oa9ii99z",
    ":active": {
      boxShadow: "p1ii4mzz"
    }
  },
  approve: {
    width: "qssinsw9",
    height: "lniyxyh2",
    boxShadow: "a27i2aag",
    color: "lcen7ztn",
    backgroundColor: "rr4x56ni",
    ":hover": {
      color: "ezxfb6c8",
      backgroundColor: "gh0z18ih"
    }
  },
  reject: {
    width: "qssinsw9",
    height: "lniyxyh2",
    boxShadow: "a27i2aag",
    color: "oqukxxk7",
    backgroundColor: "jcupx58r",
    ":hover": {
      color: "nlskoqo0",
      backgroundColor: "o74ugw8x"
    }
  },
  approvedHovered: {
    color: "r2tlnwpb",
    backgroundColor: "k144jibt"
  },
  rejectHovered: {
    color: "spqnsr0h",
    backgroundColor: "qzdlxc9r"
  },
  disabled: {
    color: "baku5n5n",
    cursor: "h2qzpyga",
    backgroundColor: "hntizkrm",
    boxShadow: "a27i2aag",
    ":active": {
      color: "fiisdfuz",
      cursor: "j4l7wepi",
      backgroundColor: "rg1593zc",
      boxShadow: "fb82vjfj"
    }
  },
  large: {
    width: "mh8l8k0y",
    height: "k45dudtp"
  },
  medium: {
    width: "kh81x8bz",
    height: "ov069gg1"
  },
  small: {
    width: "tknnhhou",
    height: "sai7fuui"
  },
  xsmall: {
    width: "rl3ijoo4",
    height: "rnpq20n3",
    boxShadow: "a27i2aag",
    ":active": {
      boxShadow: "fb82vjfj"
    }
  },
  inverted: {
    width: "dyxdk6fi",
    height: "m3o1wsh7",
    marginTop: "tt8xd2xn",
    marginEnd: "k1jo73ug",
    marginBottom: "mpdn4nr2",
    marginStart: "isfiuinm",
    backgroundColor: "pbdh3dnj",
    boxShadow: "a27i2aag",
    "@media screen and (min-width: $screen-width-3)": {
      width: "t2osvumt",
      height: "rlyqw2q9"
    }
  },
  quickAction: {
    width: "cxkis295",
    height: "rqm6ogl5",
    backgroundColor: "ilbp7ui4",
    boxShadow: "a27i2aag",
    ":active": {
      boxShadow: "fb82vjfj"
    }
  },
  svgGrayButton: {
    width: "dyxdk6fi",
    height: "m3o1wsh7",
    backgroundColor: "jq6r0jf2",
    boxShadow: "a27i2aag",
    ":active": {
      boxShadow: "fb82vjfj"
    }
  },
  noShadow: {
    width: "dyxdk6fi",
    height: "m3o1wsh7",
    boxShadow: "a27i2aag",
    ":active": {
      boxShadow: "fb82vjfj"
    }
  },
  hideBackground: {
    backgroundColor: "thr4l2wc"
  },
  reactionPickerButton: {
    width: "tknnhhou",
    height: "sai7fuui",
    backgroundColor: "hfergv0f",
    boxShadow: "a27i2aag"
  },
  drawerFooter: {
    backgroundColor: "rx9h9hmn"
  },
  error: {
    display: "p357zi0d",
    alignItems: "gndfcl4n",
    justifyContent: "ac2vgrno",
    width: "i94gqilv",
    minWidth: "mhp1pqu9",
    height: "bmot90v7",
    color: "k17s6i4e",
    pointerEvents: "jv8uhy2r",
    backgroundColor: "dwekmf2r",
    borderTop: "btsqtxyc",
    borderEnd: "rbfikn5x",
    borderBottom: "ft81lexa",
    borderStart: "r4ixzlli",
    borderTopStartRadius: "g9p5wyxn",
    borderTopEndRadius: "i0tg5vk9",
    borderBottomEndRadius: "aoogvgrq",
    borderBottomStartRadius: "o2zu3hjb"
  }
};
const h = {
  focusKeyboard: {
    ":focus:after": {
      position: "hbox45ub",
      boxSizing: "ik31nkoc",
      width: "db595r28",
      height: "bwoax4id",
      content: "sg39nr20",
      borderTop: "ey1cj0lg",
      borderEnd: "c9hkciu6",
      borderBottom: "r6g0kn0i",
      borderStart: "m2yn76ab",
      borderTopStartRadius: "kdzi6w22",
      borderTopEndRadius: "mys8l8o2",
      borderBottomEndRadius: "b44fdme4",
      borderBottomStartRadius: "or58lw3g"
    }
  },
  focusKeyboardMedium: {
    ":focus:after": {
      position: "hbox45ub",
      boxSizing: "ik31nkoc",
      width: "n59jjpd4",
      height: "ajuvruid",
      content: "sg39nr20",
      borderTop: "ey1cj0lg",
      borderEnd: "c9hkciu6",
      borderBottom: "r6g0kn0i",
      borderStart: "m2yn76ab",
      borderTopStartRadius: "kdzi6w22",
      borderTopEndRadius: "mys8l8o2",
      borderBottomEndRadius: "b44fdme4",
      borderBottomStartRadius: "or58lw3g"
    }
  },
  focusKeyboardLarge: {
    ":focus:after": {
      position: "hbox45ub",
      boxSizing: "ik31nkoc",
      width: "ajmbnfw1",
      height: "ig2yauae",
      content: "sg39nr20",
      borderTop: "ey1cj0lg",
      borderEnd: "c9hkciu6",
      borderBottom: "r6g0kn0i",
      borderStart: "m2yn76ab",
      borderTopStartRadius: "kdzi6w22",
      borderTopEndRadius: "mys8l8o2",
      borderBottomEndRadius: "b44fdme4",
      borderBottomStartRadius: "or58lw3g"
    }
  },
  focusKeyboard50: {
    ":focus:after": {
      position: "hbox45ub",
      boxSizing: "ik31nkoc",
      width: "kpzd8qk8",
      height: "qzqvs2fs",
      content: "sg39nr20",
      borderTop: "ey1cj0lg",
      borderEnd: "c9hkciu6",
      borderBottom: "r6g0kn0i",
      borderStart: "m2yn76ab",
      borderTopStartRadius: "kdzi6w22",
      borderTopEndRadius: "mys8l8o2",
      borderBottomEndRadius: "b44fdme4",
      borderBottomStartRadius: "or58lw3g"
    }
  },
  focusKeyboardQuickAction: {
    ":focus:after": {
      position: "hbox45ub",
      boxSizing: "ik31nkoc",
      width: "mzpogmef",
      height: "hj77gql4",
      content: "sg39nr20",
      borderTop: "ey1cj0lg",
      borderEnd: "c9hkciu6",
      borderBottom: "r6g0kn0i",
      borderStart: "m2yn76ab",
      borderTopStartRadius: "kdzi6w22",
      borderTopEndRadius: "mys8l8o2",
      borderBottomEndRadius: "b44fdme4",
      borderBottomStartRadius: "or58lw3g"
    }
  }
};
const g = (0, u.forwardRef)((e, t) => {
  let {
    large: n,
    medium: a,
    small: f,
    inverted: g,
    theme: E,
    testid: v,
    label: _,
    onClick: y,
    onKeyDown: C,
    className: b,
    children: M,
    disabled: S,
    dataTab: T,
    hideBackground: w,
    title: A,
    isHovered: P,
    xstyle: O
  } = e;
  const {
    isKeyboardUser: k
  } = (0, i.default)();
  const D = (0, o.classnamesConvertMeToStylexPlease)(b, (0, s.default)(m.btn, (n === true || E === p.Large) && m.large, (a === true || E === p.Medium) && m.medium, (f === true || E === p.Small) && m.small, E === p.XSmall && m.xsmall, (g === true || E === p.Inverted) && m.inverted, w === true && m.hideBackground, (S === true || E === p.Disabled) && m.disabled, E === p.NoShadow && m.noShadow, E === p.SVGGrayButton && m.svgGrayButton, E === p.ReactionPickerButton && m.reactionPickerButton, E === p.Approve && m.approve, E === p.Reject && m.reject, E === p.QuickAction && m.quickAction, E === p.DrawerFooter && S === true && m.drawerFooter, E === p.Error && m.error, E === p.Approve && P === true && m.approvedHovered, E === p.Reject && P === true && m.rejectHovered, k && h.focusKeyboard, (a === true || E === p.Medium) && k && h.focusKeyboardMedium, (n === true || E === p.Large) && k && h.focusKeyboardLarge, (E === p.SVGGrayButton || E === p.NoShadow || E === p.ReactionPickerButton) && k && h.focusKeyboard50, E === p.QuickAction && k && h.focusKeyboardQuickAction, O));
  const [I, R] = (0, d.default)(e => {
    if (!(y == null)) {
      y(e);
    }
    e.preventDefault();
  }, {
    disabled: S
  });
  const N = (0, c.default)(I, t);
  const x = C ? e => {
    if ((0, l.default)(e)) {
      e.preventDefault();
      if (!S) {
        C(e);
      }
    }
  } : R.onKeyPress;
  const L = C != null || y != null ? "0" : "-1";
  return u.default.createElement("div", (0, r.default)({}, R, {
    role: "button",
    "aria-label": _,
    tabIndex: L,
    className: D,
    onKeyDown: x,
    ref: N,
    title: A,
    "data-tab": T
  }), M);
});
exports.Round = g;
g.displayName = "Round";