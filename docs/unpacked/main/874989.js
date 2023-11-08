var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WAWebDesktopUpsellChatlistToastbar = function () {
  const e = (0, s.getUserDesktopOs)();
  const t = (0, i.useWAWebDesktopUpsellAbPropCheck)("chatlist_toastbar");
  const n = (0, i.useWAWebDesktopUpsellPlatformCheck)();
  const [a, M] = (0, y.useState)(true);
  (0, b.useListener)(l.WAWebDesktopUpsellEvents, "conversation_panel_ui_change", e => {
    M(e.conversationPanelVisible);
  });
  const T = !!m.default.get(p.KEYS.DESKTOP_UPSELL_USER_HAS_DISMISSED_CHATLIST_TOASTBAR);
  const w = (t && n) === true && e != null && !T;
  (0, C.useWAWebDesktopUpsellWamImpression)({
    isCtaVisible: w,
    source: g.WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.BUTTERBAR
  });
  if (!w) {
    return null;
  }
  return y.default.createElement(d.WAWebToastbar, {
    hidden: !a,
    dismissible: true,
    onClick: () => {
      (0, u.openExternalWhatsAppDesktopDownloadUrl)(g.WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.BUTTERBAR);
    },
    onDismiss: () => {
      m.default.set(p.KEYS.DESKTOP_UPSELL_USER_HAS_DISMISSED_CHATLIST_TOASTBAR, true);
      new _.WebcNativeUpsellCtaWamEvent({
        webcNativeUpsellCtaEventType: h.WEBC_NATIVE_UPSELL_CTA_EVENT_TYPE.CTA_DISMISS,
        webcNativeUpsellCtaSource: g.WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.BUTTERBAR
      }).commit();
    }
  }, y.default.createElement(E.WaSquareIconIcon, {
    height: 42,
    xstyle: f.uiMargin.end20
  }), y.default.createElement(v.WDSTextTitle, {
    as: "span",
    color: "teal",
    xstyle: S.textWrapper
  }, (0, o.getDesktopUpsellToastbarLabel)(), y.default.createElement(r.ChevronRightIcon, {
    displayInline: true,
    height: 22,
    color: c.SvgColorProp.TEAL,
    xstyle: [S.chevron, f.uiMargin.bottom1]
  })));
};
var r = require("./397454.js");
var o = require("../app/215267.js");
var l = require("./814223.js");
var i = require("../app/792522.js");
var u = require("../app/29054.js");
var s = require("../app/787827.js");
var c = require("../app/220584.js");
var d = require("./585589.js");
var f = require("../app/676345.js");
var p = require("../app/94872.js");
var m = a(require("../app/53575.js"));
var h = require("../app/23892.js");
var g = require("../app/239097.js");
var E = require("./22682.js");
var v = require("../app/851488.js");
var _ = require("../app/543696.js");
var y = function (e, t) {
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
}(require("../vendor/667294.js"));
a(require("../app/156720.js"));
var C = require("../app/505046.js");
var b = require("../app/808446.js");
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
const S = {
  textWrapper: {
    lineHeight: "gz7w46tb"
  },
  chevron: {
    verticalAlign: "neme6l2y"
  }
};