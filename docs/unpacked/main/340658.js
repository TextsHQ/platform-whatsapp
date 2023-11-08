var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("./445693.js");
var o = a(require("./50822.js"));
var l = require("../app/432079.js");
var i = require("./628445.js");
var u = require("./526795.js");
var s = require("../main-chunk/931109.js");
var c = require("./846377.js");
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
  var n = m(t);
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
var p = a(require("../app/38085.js"));
function m(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (m = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function h(e, t) {
  const {
    activeAccountInfo: n,
    iconStyle: a,
    vertical: m
  } = e;
  const h = (0, f.useRef)(null);
  const g = (0, p.default)(t, h);
  (0, f.useEffect)(() => {
    (0, r.logAdCreationImpression)(c.LWI_ENTRY_POINT.SMB_HOME_SCREEN_ICON, n.hasFacebookPage);
  }, [n]);
  const E = f.default.createElement(u.MenuBarItem, {
    tabOrder: s.TAB_ORDER.CHATLIST_HEADER,
    vertical: m,
    testid: "menu-bar-ad-creation",
    icon: f.default.createElement(l.BusinessAdvertiseIcon, {
      directional: true,
      width: 24,
      height: 24
    }),
    title: d.fbt._("Advertise on Facebook", null, {
      hk: "22w2r5"
    }),
    onClick: () => {
      (0, i.handleAdCreation)({
        activeAccountInfo: n,
        lwiEntryPoint: c.LWI_ENTRY_POINT.SMB_HOME_SCREEN_ICON,
        sourceAdCreationType: "whatsapp_smb_web_ad_creation_home_screen_icon"
      });
    }
  });
  const v = f.default.createElement(o.default, {
    refAnchorElement: h
  });
  return f.default.createElement("div", {
    ref: g,
    className: a
  }, v, E);
}
var g = (0, f.forwardRef)(h);
exports.default = g;