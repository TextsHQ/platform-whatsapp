var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("../app/72696.js");
require("../app/508247.js");
var o = a(require("../app/692629.js"));
var l = require("./144737.js");
require("../app/306703.js");
var i = require("../app/215267.js");
var u = require("../app/792522.js");
var s = require("../app/29054.js");
var c = require("./480623.js");
var d = require("../app/753233.js");
var f = require("../app/258105.js");
var p = a(require("../app/395767.js"));
var m = require("./259485.js");
var h = require("./241399.js");
var g = a(require("./745018.js"));
var E = a(require("../app/932325.js"));
var v = require("./391435.js");
var _ = require("../app/73225.js");
var y = require("../app/667738.js");
var C = a(require("../main-chunk/806077.js"));
var b = a(require("../app/330619.js"));
require("./86242.js");
var M = require("../app/239097.js");
var S = require("../vendor/548360.js");
var T = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = P(t);
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
var w = a(require("../app/829686.js"));
var A = require("../app/505046.js");
function P(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (P = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function O(e, t) {
  const {
    animate: a
  } = e;
  const o = (0, T.useContext)(y.ThemeContext);
  const P = (0, T.useRef)(null);
  const O = (0, T.useRef)(null);
  (0, T.useEffect)(() => {
    const e = P.current;
    const t = O.current;
    if (a) {
      (0, b.default)(e, {
        scale: [1, 0],
        opacity: [1, 0]
      }, {
        delay: 1340,
        duration: 180,
        easing: [0.05, 1.02, 0, 1.01]
      });
      (0, b.default)(t, {
        translateY: [0, 80],
        opacity: [1, 0]
      }, {
        delay: 1300,
        duration: 140,
        easing: [0.05, 1.02, 0, 1.01]
      });
    } else {
      if (e) {
        e.style.opacity = "1";
      }
      if (t) {
        t.style.opacity = "1";
      }
    }
  }, []);
  const D = (0, T.useRef)(null);
  const I = (e, t) => {
    var n;
    const a = (n = D.current) === null || n === undefined ? undefined : n.clientWidth;
    return a != null && e !== t && (0, l.animateConversationPanel)(D.current, a / (e - t));
  };
  const R = e => !!D.current && D.current.contains(e);
  (0, T.useImperativeHandle)(t, () => ({
    animatePanel: I,
    containsDOMNode: R
  }));
  const N = (0, C.default)("MD_EXTENSION");
  let x;
  let L;
  let j;
  let B = false;
  let F = g.default.textContainer;
  (0, w.default)(c.logElectronDeprecationCtaImpressionToWam);
  const G = (0, u.useWAWebDesktopUpsellAbPropCheck)("intro_panel");
  const U = (0, u.useWAWebDesktopUpsellPlatformCheck)();
  (0, A.useWAWebDesktopUpsellWamImpression)({
    source: M.WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.INTRO_PANEL,
    isCtaVisible: G && U === true
  });
  if (G && U === true) {
    B = true;
    x = T.default.createElement("div", {
      ref: P,
      className: g.default.mdImageWrapper
    }, T.default.createElement("img", {
      src: require("./74377.js"),
      width: 320,
      alt: ""
    }));
    L = T.default.createElement(T.default.Fragment, null, T.default.createElement("h1", {
      className: g.default.title
    }, (0, i.getDesktopUpsellDownloadWhatsAppTitle)()), T.default.createElement("div", {
      className: g.default.text
    }, (0, i.getDesktopUpsellIntroPanelText)()));
    j = k({
      buttonText: (0, i.getDesktopAppDownloadBtnLabel)(),
      onClick: () => {
        (0, s.openExternalWhatsAppDesktopDownloadUrl)(M.WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.INTRO_PANEL);
      }
    });
  } else {
    B = true;
    F = g.default.mdTextContainer;
    x = T.default.createElement("div", {
      ref: P,
      className: g.default.mdImageWrapper
    }, o.theme === "light" ? T.default.createElement(h.IntroMdBetaLogoLightIcon, {
      className: g.default.mdBetaImage,
      width: 360
    }) : T.default.createElement(m.IntroMdBetaLogoDarkIcon, {
      className: g.default.mdBetaImage,
      width: 360
    }));
    const e = T.default.createElement("h1", null, (0, p.default)("WhatsApp Web"));
    if (N) {
      L = T.default.createElement(T.default.Fragment, null, T.default.createElement("div", {
        className: g.default.betaTitle
      }, e), T.default.createElement("div", {
        className: g.default.betaText
      }, S.fbt._("Your premium subscription allows you to link up to 10 devices to your WhatsApp account and assign chats to each one.", null, {
        hk: "zyIFd"
      }), T.default.createElement("br", null), S.fbt._("Use your phone to add devices.", null, {
        hk: "J1dc3"
      })));
    } else if ((0, r.billingEnabled)()) {
      L = T.default.createElement(T.default.Fragment, null, T.default.createElement("div", {
        className: g.default.betaTitle
      }, e), T.default.createElement("div", {
        className: g.default.betaText
      }, S.fbt._("{=m0}", [S.fbt._implicitParam("=m0", T.default.createElement("strong", null, S.fbt._("New: multi-agent sales and support", null, {
        hk: "2mKdx3"
      })))], {
        hk: "3NiahL"
      }), T.default.createElement("br", null), S.fbt._("Respond to customers faster with up to 10 assignable agents. Available with WhatsApp Business Premium.", null, {
        hk: "1HafQg"
      }), T.default.createElement("br", null), T.default.createElement(d.ExternalLink, {
        href: (0, f.getWhatsAppBusinessPremiumFaqUrl)()
      }, S.fbt._("Learn more", null, {
        hk: "11FH0o"
      }))));
    } else {
      L = T.default.createElement(T.default.Fragment, null, T.default.createElement("div", {
        className: g.default.betaTitle
      }, e), T.default.createElement("div", {
        className: g.default.betaText
      }, S.fbt._("Send and receive messages without keeping your phone online.", null, {
        hk: "7Jntr"
      }), T.default.createElement("br", null), S.fbt._("Use WhatsApp on up to 4 linked devices and 1 phone at the same time.", null, {
        hk: "1QOlYg"
      })));
      j = k(null);
    }
  }
  return T.default.createElement("div", {
    className: g.default.intro,
    ref: D
  }, T.default.createElement("div", {
    className: g.default.body
  }, x, T.default.createElement("div", {
    ref: O,
    className: F
  }, L, j, null, null), B && T.default.createElement("div", {
    className: g.default.encrypted
  }, T.default.createElement(v.LockSmallIcon, null), " ", (0, _.isNewsletterEnabled)() ? S.fbt._("Your personal messages are end-to-end encrypted", null, {
    hk: "3yfSyB"
  }) : E.default.t(50))));
}
function k(e) {
  if ((e == null ? undefined : e.buttonText) != null) {
    return T.default.createElement("div", {
      className: g.default.upgradeElectronBtn
    }, T.default.createElement(o.default, {
      type: "strong-primary",
      onClick: e.onClick,
      testid: "product-info-drawer edit-button"
    }, e.buttonText));
  } else {
    return null;
  }
}
var D = (0, T.forwardRef)(O);
exports.default = D;