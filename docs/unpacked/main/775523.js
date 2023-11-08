var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SharePhoneNumberRestrictedActionModal = exports.SharePhoneNumberModal = exports.PostSharePhoneNumberModal = undefined;
var r = require("../app/986120.js");
var o = require("../app/351053.js");
var l = a(require("../app/196554.js"));
var i = require("../app/753233.js");
var u = require("../app/258105.js");
var s = a(require("../app/395767.js"));
var c = require("../app/543081.js");
var d = require("../app/114850.js");
var f = require("./14509.js");
var p = require("./769676.js");
var m = require("../app/163139.js");
var h = require("./136829.js");
var g = require("../app/459857.js");
var E = require("../app/334724.js");
var v = require("../app/1373.js");
var _ = require("../app/262553.js");
var y = require("../vendor/548360.js");
var C = function (e, t) {
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
const M = e => {
  const t = o.ChatCollection.getActive();
  if (t) {
    if (e != null) {
      (0, c.logPnhRequestRevealActionHelper)(v.PNH_CHAT_TYPE_TYPE.CTWA, _.PNH_MESSAGE_CHAT_PARTY.CONSUMER, E.PNH_ACTION_TYPE.SHARE_NUMBER, e);
    }
    (0, p.sendSharePhoneNumber)((0, m.unproxy)(t));
  }
  d.ModalManager.close();
};
const S = e => {
  if (o.ChatCollection.getActive()) {
    if (e != null) {
      (0, c.logPnhRequestRevealActionHelper)(v.PNH_CHAT_TYPE_TYPE.CTWA, _.PNH_MESSAGE_CHAT_PARTY.CONSUMER, E.PNH_ACTION_TYPE.DISMISS, e);
    }
    d.ModalManager.close();
  }
};
const T = () => {
  const e = (0, u.getPhoneNumberHidingFaqUrl)();
  (0, i.openExternalLink)(e);
};
const w = C.default.createElement(l.default, {
  onClick: T
}, y.fbt._("Learn more", null, {
  hk: "3mRGvK"
}));
exports.SharePhoneNumberModal = e => {
  const t = (0, g.getMeDisplayName)();
  (0, C.useEffect)(() => {
    if (e.entryPoint) {
      (0, c.logPnhRequestRevealActionHelper)(v.PNH_CHAT_TYPE_TYPE.CTWA, _.PNH_MESSAGE_CHAT_PARTY.CONSUMER, E.PNH_ACTION_TYPE.SHARE_PN_SHEET_APPEAR, e.entryPoint);
    }
  }, [e.entryPoint]);
  const n = o.ChatCollection.getActive();
  if ((n == null ? undefined : n.contact.isContactBlocked) === true) {
    return (0, h.UnblockLidUserModal)({
      contact: n.contact
    });
  }
  const a = y.fbt._("Your phone number is not shared in this chat", null, {
    hk: "4FUK0N"
  });
  const r = y.fbt._("Businesses that have your phone number saved in their contacts will be able to see it on WhatsApp. {learnMoreLink}", [y.fbt._param("learnMoreLink", w)], {
    hk: "2JsQji"
  });
  const l = y.fbt._("Share Number", null, {
    hk: "3PDt77"
  });
  const i = y.fbt._("Not Now", null, {
    hk: "S6JWr"
  });
  return C.default.createElement(f.PhoneNumberPrivacyNux, {
    onOK: () => {
      M(e.entryPoint);
    },
    okText: l,
    onCancel: () => {
      S(e.entryPoint);
    },
    title: a,
    subTitle: r,
    cancelText: i,
    displayName: t,
    okButtonType: "secondary",
    testid: "phone-number-not-shared-modal"
  });
};
exports.SharePhoneNumberRestrictedActionModal = e => {
  const t = (0, g.getMeDisplayName)();
  const n = o.ChatCollection.getActive();
  if (n && n.contact.isContactBlocked) {
    d.ModalManager.open((0, h.UnblockLidUserModal)({
      contact: n.contact
    }));
  }
  (0, C.useEffect)(() => {
    if (e.entryPoint) {
      (0, c.logPnhRequestRevealActionHelper)(v.PNH_CHAT_TYPE_TYPE.CTWA, _.PNH_MESSAGE_CHAT_PARTY.CONSUMER, E.PNH_ACTION_TYPE.SHARE_PN_SHEET_APPEAR, e.entryPoint);
    }
  }, [e.entryPoint]);
  const a = y.fbt._("Share phone number?", null, {
    hk: "2aMsrx"
  });
  const r = y.fbt._("This business will be able to see your number and add you to their contacts. {learnMoreLink}", [y.fbt._param("learnMoreLink", w)], {
    hk: "2VtTEa"
  });
  const l = y.fbt._("Share Number", null, {
    hk: "3PDt77"
  });
  const i = y.fbt._("Not Now", null, {
    hk: "S6JWr"
  });
  return C.default.createElement(f.PhoneNumberPrivacyNux, {
    onOK: () => {
      M(e.entryPoint);
    },
    okText: l,
    onCancel: () => {
      S(e.entryPoint);
    },
    title: a,
    subTitle: r,
    cancelText: i,
    displayName: t,
    okButtonType: "secondary",
    testid: "phone-number-not-shared-restricted-modal"
  });
};
exports.PostSharePhoneNumberModal = () => {
  const e = (0, g.getMeUser)();
  const t = y.fbt._("Your phone number is shared in this chat", null, {
    hk: "1NVZbb"
  });
  const n = y.fbt._("This business can see your phone number.", null, {
    hk: "1nrrvJ"
  });
  const a = (0, s.default)("OK");
  const o = y.fbt._("Learn more", null, {
    hk: "4lW5En"
  });
  return C.default.createElement(f.PhoneNumberPrivacyNux, {
    onOK: S,
    okText: a,
    onCancel: () => {
      T();
      S();
    },
    title: t,
    subTitle: n,
    cancelText: o,
    displayName: (0, r.formatPhone)(e.user),
    testid: "phone-number-shared-modal"
  });
};