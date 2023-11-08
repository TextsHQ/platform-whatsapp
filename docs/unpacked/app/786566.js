var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = require("./647045.js");
var a = require("./140777.js");
var o = require("./39523.js");
var s = require("./4062.js");
var l = require("./84296.js");
var u = require("./787539.js");
var c = require("./648721.js");
var d = require("./534120.js");
var p = require("./401262.js");
var f = require("./334864.js");
var _ = require("./151395.js");
var g = require("./432079.js");
var m = require("./672244.js");
var h = r(require("./659344.js"));
var y = require("./396574.js");
var E = require("./349942.js");
var S = require("./445729.js");
var v = require("./694209.js");
var T = require("./315731.js");
var M = require("./24320.js");
var A = r(require("./395767.js"));
var b = require("./690495.js");
var C = require("./118914.js");
var P = require("./532168.js");
var O = require("./881438.js");
var I = require("./692504.js");
var R = require("./462937.js");
var N = r(require("./397778.js"));
var D = require("./667738.js");
var w = require("./344575.js");
var L = require("./561912.js");
var k = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = U(t);
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
var G = r(require("./156720.js"));
function U(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (U = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function x(e) {
  return k.default.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: (0, v.sanitizeNoticeText)(e.text)
    },
    className: h.default.text
  });
}
function B(e) {
  return k.default.createElement("div", {
    className: h.default.text
  }, e.text);
}
const F = {
  width: "dyxdk6fi",
  height: "m3o1wsh7",
  borderTopStartRadius: "ig3kka7n",
  borderTopEndRadius: "a57u14ck",
  borderBottomEndRadius: "a4bg1r4i",
  borderBottomStartRadius: "h1a3x9ys",
  backgroundColor: "mx3ldrxl",
  color: "pahbacuu"
};
function j(e, t) {
  var n;
  var r;
  const U = (0, D.useIsDarkTheme)();
  const [j, Y] = (0, k.useState)(null);
  const {
    action: K,
    onDismiss: W,
    type: V,
    textTestid: H,
    title: $,
    customIcons: z,
    showInternalBadge: q = false
  } = e;
  (0, k.useEffect)(() => {
    if (z == null) {
      return void Y(null);
    }
    const e = U ? z.iconDark : z.iconLight;
    if (e == null) {
      return void Y(null);
    }
    const {
      description: t
    } = z;
    let n;
    try {
      const r = new Blob([e]);
      n = window.URL.createObjectURL(r);
      Y({
        src: n,
        altText: t
      });
    } catch (e) {
      __LOG__(3)`ButterBar: Could not create a blob URL`;
    }
    return () => {
      if (n != null) {
        window.URL.revokeObjectURL(n);
      }
    };
  }, [U, Y, z]);
  const J = (0, y.classnamesConvertMeToStylexPlease)({
    [h.default.computer]: V === "computer" || V === "generalAlert" || V === "updateWarning" || V === "electronDeprecationNoticeDownload" || V === "electronDeprecationNoticeSwitchToNative",
    [h.default.phone]: V === "phone",
    [h.default.notification]: V === "notification" || V === "updateNotification" || V === "electronDeprecationAwareness",
    [h.default.battery]: V === "battery",
    [h.default.update]: V === "update" || V === "updatePrimaryDevice",
    [h.default.notice]: V === "notice" && !S.Conn.isSMB,
    [h.default.noticeSmb]: V === "notice" && S.Conn.isSMB,
    [h.default.fatal]: V === "fatal",
    [h.default.nuxGreen]: V === "nuxGreen",
    [h.default.nuxBlue]: V === "nuxBlue" || V === "announcement",
    [h.default.resumeProgress]: V === "resumeProgress",
    [h.default.quickPromotion]: V === "quickPromotion",
    [h.default.webDesktopUpsell]: V === "webDesktopUpsell" || V === "electronDeprecationQrAwareness" || V === "electronDeprecationQrExpiryNotice" || V === "featureAlert",
    [h.default.adActionInfo]: V === "adActionInfo",
    [h.default.adActionWarning]: V === "adActionWarning",
    [h.default.orderExpansion]: V === "orderExpansion",
    [h.default.invalidPoll]: V === "invalidPoll",
    [h.default.butterbar]: true
  });
  const Q = W ? k.default.createElement("div", {
    className: h.default.controls
  }, k.default.createElement(N.default, {
    className: h.default.controlsIcon,
    "aria-label": (0, A.default)("Close"),
    Icon: L.XIcon,
    onClick: W
  })) : null;
  let X = $ != null ? k.default.createElement("div", {
    className: h.default.title
  }, $) : null;
  if (X && q) {
    X = k.default.createElement("div", {
      className: h.default.titleAndBadge
    }, X, k.default.createElement(O.InternalBadge, null));
  }
  const Z = {
    computer: a.AlertComputerIcon,
    phone: d.AlertPhoneIcon,
    notification: l.AlertNotificationIcon,
    announcement: o.AlertIcon,
    updateNotification: p.AlertUpdateIcon,
    updateWarning: p.AlertUpdateIcon,
    battery: i.AlertBatteryIcon,
    update: p.AlertUpdateIcon,
    notice: s.AlertNoticeIcon,
    fatal: o.AlertIcon,
    generalAlert: o.AlertIcon,
    nuxGreen: m.BusinessDescriptionIcon,
    nuxBlue: E.CollectionsFolderIcon,
    updatePrimaryDevice: f.AlertUpdatePrimaryIcon,
    electronDeprecationAwareness: M.ElectronDeprecationDownloadNativeIcon,
    electronDeprecationNoticeDownload: M.ElectronDeprecationDownloadNativeIcon,
    electronDeprecationNoticeSwitchToNative: c.AlertOpenNativeIcon,
    electronDeprecationQrAwareness: T.ElectronDeprecationDownloadNativeGreenIcon,
    electronDeprecationQrExpiryNotice: u.AlertOpenNativeGreenIcon,
    webDesktopUpsell: M.ElectronDeprecationDownloadNativeIcon,
    featureAlert: P.InfoFilledGreenCircleIcon,
    resumeProgress: I.OfflineMessageLoadIcon,
    invalidPoll: w.WarningIcon,
    adActionInfo: _.AnnouncementSpeakerIcon,
    adActionWarning: w.WarningIcon,
    orderExpansion: R.ReceiptIcon,
    quickPromotion: g.BusinessAdvertiseIcon
  }[e.type];
  let ee;
  let te;
  let ne;
  switch (e.type) {
    case "notice":
      {
        const t = e.iconSvg != null ? (0, v.sanitizeNoticeSVG)(e.iconSvg) : null;
        const n = t != null ? k.default.createElement("span", {
          "aria-label": e.iconDescription,
          dangerouslySetInnerHTML: {
            __html: t
          }
        }) : k.default.createElement(Z, {
          "aria-label": e.iconDescription
        });
        ee = k.default.createElement(b.FlexRow, {
          className: h.default.noticeSvgWrapper,
          align: "center",
          justify: "center"
        }, n);
      }
      break;
    case "fatal":
      ee = k.default.createElement(b.FlexRow, {
        className: h.default.fatalSvgWrapper,
        align: "center",
        justify: "center"
      }, k.default.createElement(Z, null));
      break;
    case "resumeProgress":
    case "nuxGreen":
      ee = k.default.createElement(b.FlexRow, {
        className: h.default.nuxGreenSvgWrapper,
        align: "center",
        justify: "center"
      }, k.default.createElement(Z, null));
      break;
    case "quickPromotion":
      {
        const e = k.default.createElement(Z, null);
        const t = j != null ? k.default.createElement(C.ImgWithFallback, {
          imgProps: {
            src: j.src,
            alt: j.altText
          },
          fallbackSVG: e,
          size: 44
        }) : e;
        ee = k.default.createElement(b.FlexRow, {
          className: j != null ? h.default.nuxQuickPromotionImageWrapper : h.default.nuxGreenSvgWrapper,
          align: "center",
          justify: "center"
        }, t);
        break;
      }
    case "nuxBlue":
    case "announcement":
      ee = k.default.createElement(b.FlexRow, {
        className: h.default.nuxBlueSvgWrapper,
        align: "center",
        justify: "center"
      }, k.default.createElement(Z, null));
      break;
    case "generalAlert":
      ee = k.default.createElement(b.FlexRow, {
        className: h.default.fatalSvgWrapper,
        align: "center",
        justify: "center"
      }, k.default.createElement(Z, {
        width: 36,
        height: 36
      }));
      break;
    case "invalidPoll":
      ee = k.default.createElement(b.FlexRow, {
        className: (0, G.default)(F),
        align: "center",
        justify: "center"
      }, k.default.createElement(Z, {
        width: 24,
        height: 21
      }));
      break;
    case "adActionInfo":
      ee = k.default.createElement(b.FlexRow, {
        className: h.default.adActionInfoSvgWrapper,
        align: "center",
        justify: "center"
      }, k.default.createElement(Z, null));
      break;
    case "adActionWarning":
      ee = k.default.createElement(b.FlexRow, {
        className: h.default.adActionWarningSvgWrapper,
        align: "center",
        justify: "center"
      }, k.default.createElement(Z, null));
      break;
    case "orderExpansion":
      ee = k.default.createElement(b.FlexRow, {
        className: h.default.orderExpansionSvgWrapper,
        align: "center",
        justify: "center"
      }, k.default.createElement(Z, null));
      break;
    default:
      e.type;
      ee = k.default.createElement(Z, null);
  }
  if (e.type === "notice") {
    e.text;
    te = k.default.createElement(x, {
      type: e.type,
      text: e.text,
      testid: H
    });
  } else {
    e.type;
    if (e.text != null) {
      te = k.default.createElement(B, {
        type: e.type,
        text: e.text,
        testid: H
      });
    }
  }
  switch (e.type) {
    case "quickPromotion":
      var re;
      if (U && ((n = e.customColours) === null || n === undefined ? undefined : n.darkBackground) != null) {
        ne = {
          backgroundColor: `#${(re = e.customColours) === null || re === undefined ? undefined : re.darkBackground}`
        };
      } else if (!U && ((r = e.customColours) === null || r === undefined ? undefined : r.lightBackground) != null) {
        var ie;
        ne = {
          backgroundColor: `#${(ie = e.customColours) === null || ie === undefined ? undefined : ie.lightBackground}`
        };
      }
      break;
    default:
      e.type;
  }
  return k.default.createElement("div", {
    ref: t,
    className: h.default.wrapper
  }, k.default.createElement("div", {
    className: J,
    style: ne
  }, k.default.createElement("div", {
    className: (0, y.classnamesConvertMeToStylexPlease)({
      [h.default.icon]: true,
      [h.default.action]: K != null
    }),
    onClick: K
  }, ee), k.default.createElement("div", {
    className: (0, y.classnamesConvertMeToStylexPlease)({
      [h.default.body]: true,
      [h.default.action]: K != null
    }),
    onClick: K
  }, X, te), Q));
}
var Y = (0, k.forwardRef)(j);
exports.default = Y;