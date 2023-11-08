Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OtpRetrieverWamEvent = undefined;
var r = require("./901032.js");
var i = require("./768159.js");
var a = require("./936913.js");
var o = require("./585859.js");
var s = require("./649218.js");
var l = require("./911379.js");
var u = require("./30202.js");
const {
  BOOLEAN: c,
  INTEGER: d,
  STRING: p
} = r.TYPES;
const f = (0, r.defineEvents)({
  OtpRetriever: [3468, {
    businessPhoneNumber: [1, d],
    chatId: [19, p],
    chatsFolderType: [12, i.CHATS_FOLDER_TYPE],
    ctaFallbackReason: [2, a.CTA_FALLBACK_REASON],
    ctaType: [3, o.CTA_TYPE],
    isKeepChatsArchivedEnabled: [13, c],
    isMessageNotificationEnabled: [14, c],
    isNotificationEnabled: [15, c],
    messageReceivedElapsedTimeSeconds: [11, d],
    otpCorrelationId: [20, p],
    otpEventSource: [5, s.OTP_EVENT_SOURCE],
    otpEventType: [6, l.OTP_EVENT_TYPE],
    otpFailureReason: [16, p],
    otpHandshakeElapsedTimeMs: [21, d],
    otpProductType: [7, u.OTP_PRODUCT_TYPE],
    otpSdkVersion: [22, p],
    otpSessionId: [8, p],
    receiverCountryCode: [18, p],
    templateId: [17, p],
    thirdPartyPackageNameFromIntent: [9, p],
    thirdPartyPackageSignatureHash: [10, p]
  }, [1, 1, 1], "private", 113760892]
});
exports.OtpRetrieverWamEvent = f;