var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DesktopUpsellButterBar = undefined;
exports.getCommonDesktopUpsellUiContent = T;
exports.useCanUserDownloadUwp = w;
exports.useShouldShowDesktopUpsellButterbar = function () {
  const [e, t, n] = (0, y.default)(c.NUX.DESKTOP_UPSELL);
  const a = w();
  let r = !(0, s.isSMB)() && a && e && false;
  if (r) {
    const e = P();
    if (e == null) {
      f.default.set(d.KEYS.FIRST_SEEN_DESKTOP_UPSELL_BBAR, (0, o.unixTime)());
    } else {
      r = (0, o.happenedWithin)(e, M);
    }
  }
  const l = (0, _.useCallback)(() => {
    if (r) {
      n();
    }
  }, [r, n]);
  (0, C.useAlarm)(l, function () {
    const e = P();
    if (e == null) {
      return (0, o.unixTime)();
    }
    return (0, o.futureUnixTime)(M, e);
  }(), {
    immediate: true,
    isGlobal: true
  });
  return [r, n];
};
exports.useShouldShowDesktopUpsellIntroPanelCTA = function () {
  w();
  return false;
};
exports.useShowDesktopUpsellChatlistDropdownMenuButton = function () {
  (0, u.isWebUserOnSupportedWindowsOSForUWPSync)();
  return false;
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/632157.js");
var l = a(require("../app/3046.js"));
var i = a(require("../app/786566.js"));
var u = require("../app/787827.js");
var s = require("../app/94602.js");
var c = require("../app/95589.js");
var d = require("../app/94872.js");
var f = a(require("../app/53575.js"));
var p = require("./473080.js");
var m = require("./145752.js");
var h = require("../app/239097.js");
var g = require("./151618.js");
var E = require("../app/543696.js");
var v = require("../vendor/548360.js");
var _ = function (e, t) {
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
var y = a(require("./157558.js"));
var C = require("../app/441673.js");
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
const M = o.DAY_SECONDS * 14;
const S = (0, _.forwardRef)((e, t) => {
  const {
    title: n,
    action: a
  } = T();
  const o = function () {
    var t = (0, r.default)(function* () {
      try {
        if (e.shownInQrScreen === true) {
          yield new E.WebcNativeUpsellCtaWamEvent({
            webcNativeUpsellCtaSource: h.WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.QR_BANNER
          }).commitAndWaitForFlush(true);
        } else {
          new g.WebcButterbarEventWamEvent({
            webcButterbarType: m.WEBC_BUTTERBAR_BB_TYPE.UWP_UPSELL,
            webcButterbarAction: p.WEBC_BUTTERBAR_ACTION_TYPE.CLICK_CTA
          }).commit();
          yield new E.WebcNativeUpsellCtaWamEvent({
            webcNativeUpsellCtaSource: h.WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.BUTTERBAR
          }).commitAndWaitForFlush(true);
        }
      } catch (e) {}
      a();
    });
    return function () {
      return t.apply(this, arguments);
    };
  }();
  return _.default.createElement(i.default, {
    ref: t,
    type: "webDesktopUpsell",
    key: "web_desktop_upsell",
    title: n,
    text: _.default.createElement(_.default.Fragment, null, v.fbt._("Make voice and video group calls, get a faster app experience, and more!", null, {
      hk: "NEJNy"
    }), _.default.createElement(l.default, null, v.fbt._("Download now", null, {
      hk: "2alUYB"
    }))),
    action: o,
    onDismiss: e.onDismiss
  });
});
function T() {
  return {
    title: v.fbt._("Introducing the new desktop app", null, {
      hk: "38Tsvq"
    }),
    action: () => {}
  };
}
function w() {
  const [e, t] = (0, _.useState)(false);
  (0, _.useEffect)(() => {
    (0, u.isWebUserOnSupportedWindowsOSForUWPAsync)().then(e => {
      t(e);
    });
  }, []);
  return e;
}
exports.DesktopUpsellButterBar = S;
S.displayName = "DesktopUpsellButterBar";
let A = null;
function P() {
  if (A != null) {
    return A;
  }
  const e = parseInt(f.default.get(d.KEYS.FIRST_SEEN_DESKTOP_UPSELL_BBAR), 10);
  if (!Number.isNaN(e)) {
    A = (0, o.castToUnixTime)(e);
  }
  return A;
}