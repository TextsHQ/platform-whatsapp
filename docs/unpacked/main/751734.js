Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    activeAccountInfo: t
  } = e;
  (0, u.useEffect)(() => {
    (0, a.logAdCreationImpression)(l.LWI_ENTRY_POINT.SMB_HOME_SCREEN_OVERFLOW_MENU_ITEM, t.hasFacebookPage);
  }, [t]);
  return u.default.createElement(o.DropdownItem, {
    testid: "ad-creation-menu-item",
    action: e => {
      e.preventDefault();
      (0, r.handleAdCreation)({
        activeAccountInfo: t,
        lwiEntryPoint: l.LWI_ENTRY_POINT.SMB_HOME_SCREEN_OVERFLOW_MENU_ITEM,
        sourceAdCreationType: "whatsapp_smb_web_ad_creation_home_menu_item"
      });
    }
  }, i.fbt._("Advertise on Facebook", null, {
    hk: "3MzA38"
  }));
};
var a = require("./445693.js");
var r = require("./628445.js");
var o = require("../app/675085.js");
var l = require("./846377.js");
var i = require("../vendor/548360.js");
var u = function (e, t) {
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