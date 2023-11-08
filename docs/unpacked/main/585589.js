var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WAWebToastbar = function (e) {
  let {
    children: t,
    hidden: n = false,
    dismissible: a,
    onClick: h,
    onDismiss: E,
    wrapperXstyle: v
  } = e;
  const [_, y] = (0, f.useState)(false);
  const {
    isHovered: C,
    onMouseEnter: b,
    onMouseLeave: M
  } = (0, p.default)();
  const [S, T] = (0, m.default)();
  const [w, A] = (0, m.default)();
  let P = null;
  if (!(_ || n)) {
    P = f.default.createElement(o.FlexRow, {
      align: "center",
      justify: "all",
      xstyle: [u.uiPadding.top12, u.uiPadding.bottom10, g.container, v]
    }, f.default.createElement(o.FlexRow, {
      xstyle: [u.uiMargin.start13, g.childrenContainer, T && g.focused],
      align: "center",
      justify: "evenly"
    }, t), f.default.createElement(o.FlexItem, {
      xstyle: u.uiMargin.end20
    }, a === true ? f.default.createElement(r.Clickable, {
      ref: w,
      "data-tab": i.TAB_ORDER.CHAT_LIST,
      onClick: e => {
        if (!(e == null)) {
          e.preventDefault();
        }
        if (!(e == null)) {
          e.stopPropagation();
        }
        y(true);
        if (!(E == null)) {
          E();
        }
      }
    }, f.default.createElement(c.XIcon, {
      height: 24,
      "aria-label": d.fbt._("Dismiss", null, {
        hk: "sOjec"
      }),
      xstyle: [g.icon, !C && !T && !A && g.iconHidden]
    })) : null));
  }
  return f.default.createElement(r.Clickable, {
    ref: S,
    "data-tab": i.TAB_ORDER.CHAT_LIST,
    onClick: h
  }, f.default.createElement(l.HotKeys, {
    onMouseEnter: b,
    onMouseLeave: M
  }, f.default.createElement(s.default, {
    component: "div",
    transitionName: "toast-transition"
  }, P)));
};
var r = require("../app/950987.js");
var o = require("../app/690495.js");
var l = require("../app/81644.js");
var i = require("../main-chunk/931109.js");
var u = require("../app/676345.js");
var s = a(require("../app/844453.js"));
var c = require("../app/561912.js");
var d = require("../vendor/548360.js");
var f = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = h(t);
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
a(require("../app/156720.js"));
var p = a(require("./478636.js"));
var m = a(require("../app/576191.js"));
function h(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (h = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const g = {
  container: {
    position: "lhggkp7q",
    bottom: "jxacihee",
    zIndex: "lvkpixa0",
    width: "ln8gz9je",
    backgroundColor: "ihvf49ua",
    borderTopWidth: "gofg5ll1",
    borderTopStyle: "d1poss59",
    borderTopColor: "eo2nzah0"
  },
  childrenContainer: {
    display: "i86elurf"
  },
  icon: {
    color: "svlsagor",
    opacity: "bs7a17vp",
    transitionProperty: "cr6d9hz6",
    transitionDuration: "hswow7x1",
    transitionTimingFunction: "mks54fll"
  },
  iconHidden: {
    opacity: "axi1ht8l"
  },
  focused: {
    borderTopStartRadius: "dntxsmpk",
    borderTopEndRadius: "ixn6u0rb",
    borderBottomEndRadius: "s2vc4xk1",
    borderBottomStartRadius: "o0wkt7aw",
    boxShadow: "lgxs6e1q"
  }
};