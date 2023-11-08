var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DrawerHeader = exports.DRAWER_HEADER_TYPE = undefined;
var r = require("../main-chunk/238608.js");
var o = require("../app/950987.js");
var l = a(require("../app/335540.js"));
var i = require("./526795.js");
var u = require("../app/956113.js");
var s = require("../app/572946.js");
var c = require("../app/180519.js");
var d = require("../app/454905.js");
var f = require("../app/676345.js");
var p = a(require("../app/395967.js"));
var m = a(require("../app/844453.js"));
var h = require("../app/561912.js");
var g = require("../vendor/548360.js");
var E = function (e, t) {
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
var v = a(require("../app/156720.js"));
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
const y = {
  SMALL: "small",
  LARGE: "large",
  POPUP: "popup",
  OFFSET: "offset",
  MULTI_MEDIA_GALLERY: "multiMediaGallery",
  LABELS: "labels",
  TAB: "tab"
};
exports.DRAWER_HEADER_TYPE = y;
const C = {
  row: {
    display: "p357zi0d",
    alignItems: "gndfcl4n"
  },
  drawerHeader: {
    zIndex: "nbczt5ty",
    boxSizing: "cm280p3y",
    display: "p357zi0d",
    flex: "kk3akd72",
    flexDirection: "f8m0rgwh",
    justifyContent: "kcgo1i74",
    height: "ga8gq0dm",
    paddingEnd: "iffbo4e8",
    paddingStart: "emzwyjt3",
    color: "dmous0d2",
    backgroundColor: "hpebpoc7"
  },
  drawerTitle: {
    display: "p357zi0d",
    flex: "kk3akd72",
    alignItems: "gndfcl4n",
    width: "ln8gz9je",
    textAlign: "rk2490ta"
  },
  drawerTitleBody: {
    display: "c32ccnay",
    flexGrow: "ggj6brxn",
    maxHeight: "empurrkj",
    marginTop: "if44n927",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    fontSize: "iqrewfee",
    lineHeight: "qmieapo1",
    overflowWrap: "fd365im1",
    "-webkit-line-clamp": "fj2md7hy",
    "-webkit-box-orient": "aoi073rw"
  },
  drawerTitleMacOS: {
    marginTop: "o9i7y497"
  },
  side: {
    display: "p357zi0d",
    flex: "kk3akd72",
    alignItems: "gndfcl4n"
  },
  drawerTitleAction: {
    flex: "kk3akd72"
  },
  drawerHeaderTitle: {
    height: "m0jbzij3",
    backgroundColor: "thr4l2wc"
  },
  fontSmoothing: {
    "-webkit-font-smoothing": "kh4n4d4z",
    "-moz-osx-font-smoothing": "tt14wmjx"
  },
  fontWeight500: {
    fontWeight: "hnx8ox4h"
  },
  drawerHeaderTitleAction: {
    width: "iqmas3e4"
  },
  multiMediaGalleryDrawerHeader: {
    height: "e8h85j61"
  },
  drawerHeaderSmall: {
    boxSizing: "cm280p3y",
    display: "p357zi0d",
    flex: "kk3akd72",
    alignItems: "gndfcl4n",
    height: "e8h85j61",
    paddingEnd: "iffbo4e8",
    paddingStart: "hmkl5ysc",
    color: "tviruh8d",
    backgroundColor: "f6ipylw5"
  },
  drawerHeaderSmallWithNavBar: {
    backgroundColor: "ihvf49ua"
  },
  drawerHeaderSmallDrawerTitle: {
    fontWeight: "m1e7cby3",
    color: "tl2vja3b"
  },
  drawerHeaderSmallDrawerTitleBody: {
    marginTop: "kv6wexeh",
    fontSize: "enbbiyaj",
    lineHeight: "t61waeak"
  },
  drawerHeaderSmallDrawerTitleBodyOSMac: {
    marginTop: "o9i7y497"
  },
  drawerHeaderSmallDrawerTitleAction: {
    width: "p6y6hbba"
  },
  drawerHeaderTabDrawerTitleBody: {
    fontWeight: "nbipi2bn",
    fontSize: "ctdnaqea",
    color: "tl2vja3b",
    lineHeight: "bztmxs3w"
  },
  drawerHeaderOffset: {
    boxSizing: "cm280p3y",
    display: "p357zi0d",
    flex: "kk3akd72",
    alignItems: "gndfcl4n",
    height: "nqajmqdi",
    paddingTop: "i5tg98hk",
    paddingEnd: "iffbo4e8",
    paddingBottom: "przvwfww",
    paddingStart: "hmkl5ysc",
    color: "dmous0d2",
    backgroundColor: "hpebpoc7"
  },
  drawerHeaderPopup: {
    boxSizing: "cm280p3y",
    display: "p357zi0d",
    flex: "kk3akd72",
    alignItems: "gndfcl4n",
    height: "m0jbzij3",
    paddingTop: "i5tg98hk",
    paddingEnd: "iffbo4e8",
    paddingBottom: "przvwfww",
    paddingStart: "hmkl5ysc",
    color: "dmous0d2",
    backgroundColor: "gulicvea",
    borderTopStartRadius: "boajuire",
    borderTopEndRadius: "o93wvyfv"
  },
  drawerHeaderOffsetDrawerTitleBody: {
    marginTop: "kv6wexeh"
  },
  drawerHeaderOffsetDrawerTitleBodyMacOS: {
    marginTop: "o9i7y497"
  },
  drawerHeaderOffsetDrawerTitleAction: {
    width: "dyxdk6fi",
    opacity: "brh521k9"
  },
  btnCloseDrawer: {
    flex: "kk3akd72",
    color: "dmous0d2",
    verticalAlign: "fewfhwl7",
    cursor: "ajgl1lbb",
    width: "ltyqj8pj"
  },
  btnCloseDrawerDrawerHeaderSmall: {
    color: "svlsagor"
  },
  paneListControls: {
    flex: "kk3akd72"
  },
  drawerHeaderLabelTitleAction: {
    width: "qsdp9nde"
  },
  darwinOSRTLDrawerHeaderMacRtlFix: {
    paddingStart: "lmx45d5h"
  },
  darwinOSLTRDrawerHeaderMacRtlFix: {
    paddingEnd: "lgndmqz4"
  },
  keyboardUserBtnCloseDrawerFocus: {
    ":focus": {
      borderTopStartRadius: "mmjxyicr",
      borderTopEndRadius: "r1jx4bdh",
      borderBottomEndRadius: "f9yclydc",
      borderBottomStartRadius: "mtzt60z0",
      boxShadow: "esbo3we0"
    }
  }
};
exports.DrawerHeader = e => {
  const {
    title: t,
    titleStr: n,
    onBack: a,
    onCancel: _,
    type: b,
    children: M,
    menu: S,
    headingLevel: T,
    focusBackOrCancel: w = false,
    spinner: A = false
  } = e;
  const P = (0, E.useRef)(null);
  const {
    isKeyboardUser: O
  } = (0, p.default)();
  (0, E.useEffect)(() => {
    if (w === true && P.current != null) {
      self.setTimeout(() => {
        l.default.focus(P.current);
      }, 500);
    }
  }, [w]);
  const k = a && !_ ? E.default.createElement(o.Clickable, {
    className: (0, v.default)(C.btnCloseDrawer, b === y.SMALL && C.btnCloseDrawerDrawerHeaderSmall, O && C.keyboardUserBtnCloseDrawerFocus),
    dataTestId: "btn-closer-drawer",
    onClick: a,
    ariaLabel: g.fbt._("Back", null, {
      hk: "JgQC7"
    }),
    ref: P
  }, E.default.createElement(r.BackIcon, {
    directional: true
  })) : null;
  const D = _ ? E.default.createElement(o.Clickable, {
    className: (0, v.default)(C.btnCloseDrawer, b === y.SMALL && C.btnCloseDrawerDrawerHeaderSmall, O && C.keyboardUserBtnCloseDrawerFocus),
    dataTestId: "btn-closer-drawer",
    onClick: _,
    ariaLabel: g.fbt._("Close", null, {
      hk: "17RE2w"
    }),
    ref: P
  }, E.default.createElement(h.XIcon, null)) : null;
  const I = [y.SMALL, y.TAB].includes(b);
  const R = S != null ? E.default.createElement("span", {
    className: (0, v.default)(C.paneListControls)
  }, E.default.createElement(i.MenuBar, {
    key: "drawer-header",
    theme: I ? null : "inverse"
  }, E.default.createElement(m.default, {
    transitionName: "btn"
  }, S))) : null;
  const N = b === y.LARGE || b === y.MULTI_MEDIA_GALLERY || b === y.LABELS;
  const x = b === y.OFFSET || b === y.POPUP;
  const L = document.dir;
  const j = (0, v.default)(N && C.drawerHeader, b === y.MULTI_MEDIA_GALLERY && C.multiMediaGalleryDrawerHeader, I && C.drawerHeaderSmall, I && (0, d.topMenuRedesignEnabled)() && C.drawerHeaderSmallWithNavBar, x && C.drawerHeaderOffset, b === y.POPUP && C.drawerHeaderPopup, e.rtlFixIfOnDarwin === true && L === "ltr" && s.isOSMac && s.isOSRTL && C.darwinOSRTLDrawerHeaderMacRtlFix, e.rtlFixIfOnDarwin === true && L === "rtl" && s.isOSMac && s.isOSLTR && C.darwinOSLTRDrawerHeaderMacRtlFix);
  const B = t && M != null ? E.default.createElement("div", {
    className: (0, v.default)(C.side, f.uiMargin.start4)
  }, M) : null;
  const F = s.isOSMac;
  const G = (0, d.topMenuRedesignEnabled)() && b === y.TAB ? null : E.default.createElement("div", {
    className: (0, v.default)(C.drawerTitleAction, N && C.drawerHeaderTitleAction, b === y.SMALL && C.drawerHeaderSmallDrawerTitleAction, x && C.drawerHeaderOffsetDrawerTitleAction, b === y.LABELS && C.drawerHeaderLabelTitleAction)
  }, k, D);
  return E.default.createElement("header", {
    className: j
  }, E.default.createElement("div", {
    className: (0, v.default)(C.drawerTitle, N && C.drawerHeaderTitle, f.uiPadding.all0, b === y.SMALL && C.drawerHeaderSmallDrawerTitle)
  }, G, E.default.createElement("div", {
    title: n != null ? n : t,
    className: (0, v.default)(C.drawerTitleBody, F && C.drawerTitleMacOS, F && N && C.fontSmoothing, N && C.fontWeight500, b === y.SMALL && C.drawerHeaderSmallDrawerTitleBody, b === y.TAB && C.drawerHeaderTabDrawerTitleBody, F && b === y.SMALL && C.drawerHeaderSmallDrawerTitleBodyOSMac, x && C.fontWeight500, x && F && C.fontSmoothing, x && C.drawerHeaderOffsetDrawerTitleBody, F && x && C.drawerHeaderOffsetDrawerTitleBodyMacOS)
  }, E.default.createElement(c.TextHeader, {
    level: T,
    weight: "inherit",
    size: "inherit",
    xstyle: A && C.row
  }, t || M, A ? E.default.createElement("span", {
    className: (0, v.default)(f.uiMargin.start8)
  }, E.default.createElement(u.Spinner, {
    size: 16
  })) : null)), B, R));
};