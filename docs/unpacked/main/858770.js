var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TYPE = exports.Messaging = exports.GuidePopup = undefined;
exports.guideConfirm = function () {
  f.ModalManager.close();
};
exports.notificationGuideLearnMore = function () {
  switch (p.UA.browser) {
    case p.BROWSER_TYPE.CHROME:
      return (0, u.openExternalLink)((0, s.getNotificationChromeFaqUrl)());
    case p.BROWSER_TYPE.FIREFOX:
      return (0, u.openExternalLink)((0, s.getNotificationFirefoxFaqUrl)());
    case p.BROWSER_TYPE.SAFARI:
      return (0, u.openExternalLink)((0, s.getNotificationSafariFaqUrl)());
    case p.BROWSER_TYPE.OPERA:
      return (0, u.openExternalLink)((0, s.getNotificationOperaFaqUrl)());
    case p.BROWSER_TYPE.EDGE:
      return (0, u.openExternalLink)((0, s.getNotificationEdgeFaqUrl)());
    default:
      return (0, u.openExternalLink)((0, s.getNotificationChromeFaqUrl)());
  }
};
var r = require("../main-chunk/238608.js");
var o = a(require("../app/692629.js"));
var l = require("../app/396574.js");
var i = require("../app/103440.js");
var u = require("../app/753233.js");
var s = require("../app/258105.js");
var c = a(require("./351271.js"));
var d = require("../app/118612.js");
var f = require("../app/114850.js");
var p = require("../app/368170.js");
var m = a(require("../app/556869.js"));
var h = require("../vendor/548360.js");
var g = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = E(t);
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
function E(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (E = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
exports.Messaging = {
  NOTIFICATIONS: "NOTIFICATIONS",
  BACKGROUND_SYNC: "BACKGROUND_SYNC",
  CAMERA_FAIL: "CAMERA_FAIL",
  CAMERA_MISSING: "CAMERA_MISSING",
  MIC_FAIL: "MIC_FAIL",
  MIC_MISSING: "MIC_MISSING",
  CAMERA: "CAMERA",
  MIC: "MIC"
};
const v = require("../vendor/76672.js")({
  GUIDE_ALLOW: "guide-allow",
  GUIDE_UNBLOCK: "guide-unblock",
  GUIDE_NONE: "guide-none"
});
exports.TYPE = v;
const _ = (0, g.forwardRef)((e, t) => {
  const {
    type: n = v.GUIDE_NONE,
    onCancel: a,
    onConfirm: u = () => f.ModalManager.close(),
    messaging: s
  } = e;
  const m = g.default.createElement(C, {
    messaging: s
  });
  if (n === v.GUIDE_ALLOW) {
    let e;
    switch (p.UA.browser) {
      case p.BROWSER_TYPE.CHROME:
      case p.BROWSER_TYPE.FIREFOX:
      case p.BROWSER_TYPE.EDGE:
        e = c.default.topLeft;
        break;
      default:
        e = c.default.topCenter;
    }
    return g.default.createElement(d.Modal, {
      type: d.ModalTheme.Guide
    }, g.default.createElement("div", {
      className: (0, l.classnamesConvertMeToStylexPlease)(c.default.containerAllow, e)
    }, g.default.createElement("div", {
      className: c.default.icon
    }, g.default.createElement(r.BackIcon, {
      directional: true
    })), g.default.createElement("div", {
      className: c.default.title
    }, g.default.createElement(y, {
      messaging: s
    })), g.default.createElement("div", {
      className: c.default.description
    }, m), g.default.createElement("div", {
      className: c.default.controls
    }, g.default.createElement(o.default, {
      onClick: u,
      type: "primary"
    }, h.fbt._("OK, got it", null, {
      hk: "2hEWOg"
    })))));
  }
  return g.default.createElement(i.ConfirmPopup, {
    ref: t,
    title: g.default.createElement(y, {
      messaging: s
    }),
    onOK: u,
    okText: h.fbt._("OK, got it", null, {
      hk: "2hEWOg"
    }),
    onCancel: a,
    cancelText: a ? h.fbt._("Learn more", null, {
      hk: "1rcCLt"
    }) : undefined
  }, g.default.createElement("div", {
    className: c.default.description
  }, m));
});
function y(e) {
  const {
    messaging: t
  } = e;
  switch (t) {
    case "BACKGROUND_SYNC":
    case "NOTIFICATIONS":
      return h.fbt._("Allow notifications", null, {
        hk: "2LDnhj"
      });
    case "CAMERA_FAIL":
      return h.fbt._("Allow camera", null, {
        hk: "3vkWnJ"
      });
    case "CAMERA_MISSING":
      return h.fbt._("Camera Not Found", null, {
        hk: "2G9xwh"
      });
    case "MIC_MISSING":
      return h.fbt._("Microphone Not Found", null, {
        hk: "1WJXcn"
      });
    case "CAMERA":
      return h.fbt._("Allow camera", null, {
        hk: "3vkWnJ"
      });
    case "MIC_FAIL":
    case "MIC":
      return h.fbt._("Allow microphone", null, {
        hk: "3X3uQl"
      });
    default:
      throw (0, m.default)(`Invalid messaging: ${t}`);
  }
}
function C(e) {
  const {
    messaging: t
  } = e;
  const {
    browser: n
  } = p.UA;
  const a = g.default.createElement("span", {
    className: "chrome-media-icon"
  });
  const r = g.default.createElement("span", {
    className: "firefox-lock-icon"
  });
  const o = g.default.createElement("span", {
    className: "opera-media-icon"
  });
  const l = g.default.createElement("span", {
    className: "edge-camera-error-icon"
  });
  const i = g.default.createElement("span", {
    className: "edge-mic-error-icon"
  });
  switch (t) {
    case "NOTIFICATIONS":
      if (n === "firefox") {
        return h.fbt._("To get notifications for new messages, select \"Allow\" from the prompt below the URL bar.", null, {
          hk: "12jF66"
        });
      } else {
        return h.fbt._("To get notifications for new messages, click \"Allow\" above.", null, {
          hk: "3IAYdv"
        });
      }
    case "BACKGROUND_SYNC":
      if (n === "firefox") {
        return h.fbt._("To allow notifications for background sync, select \"Allow\" from the prompt below the URL bar.", null, {
          hk: "Ag9GJ"
        });
      } else {
        return h.fbt._("To allow notifications for background sync, click \"Allow\" above.", null, {
          hk: "4Bb8OQ"
        });
      }
    case "CAMERA_FAIL":
      if (n === "firefox") {
        return h.fbt._("To take photos, WhatsApp needs access to your computer's camera. Click {firefox_lock} in the URL bar and set \"Use the Camera\" to \"Allow.\"", [h.fbt._param("firefox_lock", r)], {
          hk: "3nIXXp"
        });
      } else if (n === "safari") {
        return h.fbt._("To take photos, WhatsApp needs access to your computer's camera. Open your browser's Preferences → Websites and change camera setting for web.whatsapp.com to \"Allow\".", null, {
          hk: "15QdUo"
        });
      } else if (n === "opera") {
        return h.fbt._("To take photos, WhatsApp needs access to your computer's camera. Click {opera_media} in the URL bar and click \"Clear This Setting and Reload.\"", [h.fbt._param("opera_media", o)], {
          hk: "41zjHb"
        });
      } else {
        return h.fbt._("To take photos, WhatsApp needs access to your computer's camera. Click {chrome_media_error} in the URL bar and choose \"Always allow web.whatsapp.com to access your camera.\"", [h.fbt._param("chrome_media_error", n === "edge" ? l : a)], {
          hk: "25lCEl"
        });
      }
    case "CAMERA_MISSING":
      return h.fbt._("You can't take a photo because it looks like your computer doesn't have a camera. Try connecting one or if you have one connected, try restarting your browser.", null, {
        hk: "19sCYm"
      });
    case "MIC_FAIL":
      if (n === "firefox") {
        return h.fbt._("To record Voice Messages, WhatsApp needs access to your computer's microphone. Click {firefox_lock} in the URL bar and set \"Use the Microphone\" to \"Allow.\"", [h.fbt._param("firefox_lock", r)], {
          hk: "42spgZ"
        });
      } else if (n === "safari") {
        return h.fbt._("To record Voice Messages, WhatsApp needs access to your computer's microphone. Open your browser's Preferences → Websites and change microphone setting for web.whatsapp.com to \"Allow\".", null, {
          hk: "48kDIm"
        });
      } else if (n === "opera") {
        return h.fbt._("To record Voice Messages, WhatsApp needs access to your computer's microphone. Click {opera_media} in the URL bar and click \"Clear This Setting and Reload.\"", [h.fbt._param("opera_media", o)], {
          hk: "1kYREV"
        });
      } else {
        return h.fbt._("To record Voice Messages, WhatsApp needs access to your microphone. Click {chrome_media_error} in the URL bar and choose \"Always allow web.whatsapp.com to access your microphone.\"", [h.fbt._param("chrome_media_error", n === "edge" ? i : a)], {
          hk: "2C7fpA"
        });
      }
    case "MIC_MISSING":
      return h.fbt._("You can't record a Voice Message because it looks like your computer doesn't have a microphone. Try connecting one or if you have one connected, try restarting your browser.", null, {
        hk: "3vd1wV"
      });
    case "CAMERA":
      return h.fbt._("To take photos, click \"Allow\" above to give WhatsApp access to your computer's camera.", null, {
        hk: "2SWSA2"
      });
    case "MIC":
      return h.fbt._("To record Voice Messages, click \"Allow\" above to give WhatsApp access to your computer's microphone.", null, {
        hk: "p1jPV"
      });
    default:
      throw (0, m.default)(`Invalid messaging type: ${t}`);
  }
}
exports.GuidePopup = _;
_.displayName = "GuidePopup";