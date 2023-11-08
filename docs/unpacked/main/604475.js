var a = require("../app/530066.js").default;
var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PDFNModal = function (e) {
  var t;
  var n;
  var r;
  var m;
  var b;
  var w;
  var k;
  var D;
  var I;
  var R;
  var N;
  let {
    pdfnId: x,
    runIfTosAccepted: L,
    verifyTosAccepted: j,
    onError: B
  } = e;
  const [F, G] = (0, S.useState)(j());
  const [U, W] = (0, S.useState)(!F);
  const [H, V] = (0, S.useState)();
  const [q, Y] = (0, S.useState)(false);
  const [z, K] = (0, S.useState)();
  const Q = e => {
    K(e);
    Y(true);
    if (!(B == null)) {
      B();
    }
  };
  (0, S.useEffect)(() => {
    if (!F) {
      const e = new a();
      g.TosManager.populateTosManagerNewsletterIds();
      (function () {
        var t = (0, o.default)(function* () {
          try {
            const t = yield v.UserDisclosureCollection.find(x.toString());
            if (e.signal.aborted) {
              return;
            }
            if (t != null) {
              V(t);
            } else {
              Q(S.default.createElement(p.ServerErrorModal, null));
            }
          } catch (e) {
            Q(e instanceof s.HttpNetworkError ? S.default.createElement(p.InternetErrorModal, null) : S.default.createElement(p.ServerErrorModal, null));
          } finally {
            W(false);
          }
        });
        return function () {
          return t.apply(this, arguments);
        };
      })()();
      return () => e.abort();
    }
  }, []);
  if (!U && q) {
    return z;
  }
  if (U) {
    return S.default.createElement(c.Modal, null, S.default.createElement(u.Loading, null));
  }
  if (F) {
    d.ModalManager.close();
    L();
    return null;
  }
  const X = function () {
    var e = (0, o.default)(function* () {
      if (yield (0, h.acceptUserDisclosureAction)(x)) {
        new _.UserNoticeWamEvent({
          userNoticeId: x,
          userNoticeContentVersion: H == null ? undefined : H.policyVersion,
          userNoticeEvent: C.USER_NOTICE_EVENT.PDFN_ACCEPTED,
          noticeType: y.NOTICE_TYPE.PDFN_DISCLOSURE
        }).commit();
        d.ModalManager.close();
        G(true);
      }
    });
    return function () {
      return e.apply(this, arguments);
    };
  }();
  const Z = H == null || (t = H.privacyDisclosureModal) === null || t === undefined ? undefined : t.bullets.map((e, t) => S.default.createElement(P, {
    key: t,
    text: e.text,
    icon: e.icon,
    iconSvg: e.iconSvg,
    secondaryText: e.secondaryText
  }));
  let J;
  const $ = H == null || (n = H.privacyDisclosureModal) === null || n === undefined ? undefined : n.footer;
  if ($ != null) {
    J = S.default.createElement("div", {
      className: (0, T.default)(E.uiPadding.top24),
      dangerouslySetInnerHTML: {
        __html: (0, i.sanitizeNoticeText)($)
      }
    });
  }
  const ee = (H == null || (r = H.privacyDisclosureModal) === null || r === undefined || (m = r.icon) === null || m === undefined ? undefined : m.type) === "lottie" ? S.default.createElement(f.PDFNAnimation, {
    icon: H == null || (b = H.privacyDisclosureModal) === null || b === undefined ? undefined : b.icon
  }) : S.default.createElement(O, {
    iconSvg: H == null || (w = H.privacyDisclosureModal) === null || w === undefined ? undefined : w.iconSvg,
    ariaLabel: H == null || (k = H.privacyDisclosureModal) === null || k === undefined ? undefined : k.iconDescription,
    classNames: (0, T.default)([A.topIcon, E.uiPadding.allAuto])
  });
  const te = (D = H == null || (I = H.privacyDisclosureModal) === null || I === undefined || (R = I.primaryButton) === null || R === undefined ? undefined : R.label) !== null && D !== undefined ? D : M.fbt._("Continue", null, {
    hk: "hnERh"
  });
  return S.default.createElement(l.ConfirmPopup, {
    onOK: X,
    okText: te,
    cancelText: M.fbt._("Close", null, {
      hk: "2m0ddC"
    }),
    onCancel: () => {
      new _.UserNoticeWamEvent({
        userNoticeId: x,
        userNoticeContentVersion: H == null ? undefined : H.policyVersion,
        userNoticeEvent: C.USER_NOTICE_EVENT.PDFN_DISMISSED,
        noticeType: y.NOTICE_TYPE.PDFN_DISCLOSURE
      }).commit();
      d.ModalManager.close();
    }
  }, ee, S.default.createElement("div", {
    className: (0, T.default)([A.popupTitle, E.uiPadding.top24])
  }, H == null || (N = H.privacyDisclosureModal) === null || N === undefined ? undefined : N.title), Z, J);
};
var o = r(require("../vendor/348926.js"));
var l = require("../app/103440.js");
var i = require("../app/694209.js");
var u = require("./811720.js");
var s = require("../app/791357.js");
var c = require("../app/118612.js");
var d = require("../app/114850.js");
var f = require("./833555.js");
var p = require("./910556.js");
var m = require("./516555.js");
var h = require("../app/231731.js");
var g = require("../app/87429.js");
var E = require("../app/676345.js");
var v = require("../app/967910.js");
var _ = require("./617671.js");
var y = require("../app/327696.js");
var C = require("./452704.js");
var b = require("../app/851488.js");
var M = require("../vendor/548360.js");
var S = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = w(t);
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
var T = r(require("../app/156720.js"));
function w(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (w = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const A = {
  container: {
    position: "g0rxnol2",
    display: "p357zi0d",
    alignItems: "gndfcl4n",
    color: "i8b0kslj",
    fontSize: "ovllcyds"
  },
  popupTitle: {
    fontSize: "p9fp32ui",
    fontWeight: "hnx8ox4h",
    lineHeight: "jgi8eev7",
    textAlign: "qfejxiq4"
  },
  bulletSubtitle: {
    fontSize: "f8jlpxt4",
    lineHeight: "e4qy2s3t",
    fontWeight: "m1e7cby3"
  },
  topIcon: {
    display: "p357zi0d",
    justifyContent: "ac2vgrno"
  }
};
function P(e) {
  let {
    text: t,
    iconSvg: n,
    secondaryText: a
  } = e;
  const r = a != null ? S.default.createElement("span", {
    className: (0, T.default)(A.bulletSubtitle),
    dangerouslySetInnerHTML: {
      __html: (0, i.sanitizeNoticeText)(a)
    }
  }) : null;
  return S.default.createElement("div", {
    className: (0, T.default)([A.container, E.uiMargin.top20])
  }, S.default.createElement(O, {
    iconSvg: n,
    classNames: (0, T.default)([E.uiMargin.start12, E.uiMargin.end24])
  }), S.default.createElement("div", null, S.default.createElement(b.WDSTextTitle, {
    color: "primary"
  }, t), r));
}
function O(e) {
  let {
    iconSvg: t,
    classNames: n,
    ariaLabel: a
  } = e;
  const r = (0, m.usePDFNThemedIcon)(t);
  if (r == null) {
    return null;
  }
  const o = (0, i.sanitizeNoticeSVG)(r);
  if (o == null) {
    return null;
  } else {
    return S.default.createElement("span", {
      className: n,
      dangerouslySetInnerHTML: {
        __html: o
      },
      "aria-label": a != null ? a : ""
    });
  }
}