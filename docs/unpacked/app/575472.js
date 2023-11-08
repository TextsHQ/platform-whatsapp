var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logOTPButtonClick = function () {
  return S.apply(this, arguments);
};
exports.logOTPMessageDeleted = function () {
  return M.apply(this, arguments);
};
exports.logOTPMessageRead = function () {
  return T.apply(this, arguments);
};
exports.logOTPMessageReceived = function () {
  return v.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./517301.js");
var o = require("./287461.js");
var s = require("./907539.js");
var l = require("./163755.js");
var u = require("./936327.js");
var c = require("./787742.js");
var d = require("./203119.js");
var p = r(require("./634152.js"));
var f = require("./459857.js");
var _ = require("./117429.js");
var g = require("./768159.js");
var m = require("./585859.js");
var h = require("./649218.js");
var y = require("./911379.js");
var E = require("./30202.js");
function S() {
  return (S = (0, i.default)(function* (e) {
    if (!(0, c.getIsAuthenticationMessage)(e)) {
      return;
    }
    const t = new d.OtpRetrieverWamEvent({
      otpEventType: y.OTP_EVENT_TYPE.CLICK,
      otpEventSource: h.OTP_EVENT_SOURCE.CHAT_CTA,
      ctaType: m.CTA_TYPE.COPY_CODE
    });
    yield A(t, e);
    t.commit();
  })).apply(this, arguments);
}
function v() {
  return (v = (0, i.default)(function* (e) {
    if (!(0, c.getIsAuthenticationMessage)(e)) {
      return;
    }
    const t = new d.OtpRetrieverWamEvent({
      otpEventType: y.OTP_EVENT_TYPE.MESSAGE_RECEIVED,
      otpEventSource: h.OTP_EVENT_SOURCE.OTP_MESSAGE,
      ctaType: m.CTA_TYPE.COPY_CODE
    });
    yield A(t, e);
    t.commit();
  })).apply(this, arguments);
}
function T() {
  return (T = (0, i.default)(function* (e) {
    const t = (0, s.messageFromDbRow)(e);
    if (!(0, c.getIsAuthenticationMessage)(t)) {
      return;
    }
    const n = new d.OtpRetrieverWamEvent({
      otpEventType: y.OTP_EVENT_TYPE.MESSAGE_READ,
      otpEventSource: h.OTP_EVENT_SOURCE.OTP_MESSAGE,
      ctaType: m.CTA_TYPE.COPY_CODE
    });
    yield A(n, t);
    n.commit();
  })).apply(this, arguments);
}
function M() {
  return (M = (0, i.default)(function* (e) {
    if (!(0, c.getIsAuthenticationMessage)(e)) {
      return;
    }
    const t = new d.OtpRetrieverWamEvent({
      otpEventType: y.OTP_EVENT_TYPE.MESSAGE_DELETED,
      otpEventSource: h.OTP_EVENT_SOURCE.OTP_MESSAGE,
      ctaType: m.CTA_TYPE.COPY_CODE
    });
    yield A(t, e);
    t.commit();
  })).apply(this, arguments);
}
function A() {
  return b.apply(this, arguments);
}
function b() {
  return (b = (0, i.default)(function* (e, t) {
    var n;
    e.otpSessionId = yield O(t);
    e.receiverCountryCode = String((0, u.getCountryCodeIso)((0, f.getMeUser)().user));
    const r = (n = t.from) === null || n === undefined ? undefined : n.user;
    if (r != null) {
      e.businessPhoneNumber = Number(r);
    }
    const i = t.templateId;
    if (i != null) {
      e.templateId = i;
    }
    const a = I(t);
    if (a != null) {
      e.otpProductType = a;
    }
    C(e);
    P(e, t);
  })).apply(this, arguments);
}
function C(e) {
  e.isKeepChatsArchivedEnabled = p.default.showArchiveV2;
  e.isNotificationEnabled = (0, _.getGlobalNotifications)();
}
function P(e, t) {
  const n = (0, l.getChat)(t);
  if (n != null) {
    e.chatsFolderType = n.archive ? g.CHATS_FOLDER_TYPE.ARCHIVED : g.CHATS_FOLDER_TYPE.INBOX;
    e.isMessageNotificationEnabled = !n.mute.isMuted;
  }
}
function O(e) {
  return (0, a.sha256Str)(e.id.id);
}
function I(e) {
  const t = e.hydratedButtons;
  if (t == null || t.length === 0) {
    return null;
  }
  const n = (0, o.getABPropConfigValue)("unified_otp_copy_code_url");
  const r = (0, o.getABPropConfigValue)("unified_otp_retriever_url");
  for (const e of t) {
    var i;
    const t = (i = e.urlButton) === null || i === undefined ? undefined : i.url;
    if (t != null) {
      if (t.startsWith(n)) {
        return E.OTP_PRODUCT_TYPE.COPY_CODE;
      }
      if (t.startsWith(r)) {
        var a;
        const e = ((a = new URL(t)) === null || a === undefined ? undefined : a.searchParams).get("otp_type");
        if (e == null) {
          return E.OTP_PRODUCT_TYPE.ONE_TAP;
        }
        switch (e) {
          case "COPY_CODE":
            return E.OTP_PRODUCT_TYPE.COPY_CODE;
          case "ONE_TAP":
            return E.OTP_PRODUCT_TYPE.ONE_TAP;
          case "ZERO_TAP":
            return E.OTP_PRODUCT_TYPE.ZERO_TAP;
          default:
            continue;
        }
      }
    }
  }
  return null;
}