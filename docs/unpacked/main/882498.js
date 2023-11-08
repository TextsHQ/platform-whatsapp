Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ENUM_HSMENVELOPEMISMATCH_STRUCTUREUNAVAILABLE = exports.ENUM_FALSE_TRUE = exports.ENUM_DELIVER_DELIVERY = exports.ENUM_DELIVERY_NOOPTIMIZATION = exports.ENUM_CONTENT_TITLE = exports.ENUM_CBP_NBP = exports.ENUM_CANCELLATIONFAILED_INVALIDTRANSITION = exports.ENUM_BODYLINK_CTACALL_CTAURL_MEDIADOC_MEDIAIMAGE_MEDIAVIDEO_QUICKREPLY = exports.ENUM_ALL_NONE = exports.ENUM_1002_1007_1008 = exports.ENUM_0_1_7 = exports.DEVICEJID_DEVICEJID = exports.DEVICEJID_BROADCASTJID_DEVICEJID_GROUPJID_NEWSLETTERJID_STATUSJID = exports.DEVICEJID_BROADCASTJID_DEVICEJID_GROUPJID = exports.BROADCASTJID_GROUPJID_NEWSLETTERJID_STATUSJID = exports.BROADCASTJID_GROUPJID = undefined;
var a = require("../app/418987.js");
exports.ENUM_0_1_7 = {
  0: "0",
  1: "1",
  7: "7"
};
exports.ENUM_1002_1007_1008 = {
  1002: "1002",
  1007: "1007",
  1008: "1008"
};
exports.ENUM_ALL_NONE = {
  all: "all",
  none: "none"
};
exports.ENUM_BODYLINK_CTACALL_CTAURL_MEDIADOC_MEDIAIMAGE_MEDIAVIDEO_QUICKREPLY = {
  "body-link": "body-link",
  "cta-call": "cta-call",
  "cta-url": "cta-url",
  "media-doc": "media-doc",
  "media-image": "media-image",
  "media-video": "media-video",
  "quick-reply": "quick-reply"
};
exports.ENUM_CANCELLATIONFAILED_INVALIDTRANSITION = {
  "cancellation-failed": "cancellation-failed",
  "invalid-transition": "invalid-transition"
};
exports.ENUM_CBP_NBP = {
  CBP: "CBP",
  NBP: "NBP"
};
exports.ENUM_CONTENT_TITLE = {
  content: "content",
  title: "title"
};
exports.ENUM_DELIVERY_NOOPTIMIZATION = {
  delivery: "delivery",
  no_optimization: "no_optimization"
};
exports.ENUM_DELIVER_DELIVERY = {
  deliver: "deliver",
  delivery: "delivery"
};
exports.ENUM_FALSE_TRUE = {
  false: "false",
  true: "true"
};
exports.ENUM_HSMENVELOPEMISMATCH_STRUCTUREUNAVAILABLE = {
  "hsm-envelope-mismatch": "hsm-envelope-mismatch",
  "structure-unavailable": "structure-unavailable"
};
const r = {
  validators: [a.validateBroadcastJid, a.validateGroupJid],
  typeName: "BroadcastJid|GroupJid"
};
exports.BROADCASTJID_GROUPJID = r;
const o = {
  validators: [a.validateBroadcastJid, a.validateGroupJid, a.validateNewsletterJid, a.validateStatusJid],
  typeName: "BroadcastJid|GroupJid|NewsletterJid|StatusJid"
};
exports.BROADCASTJID_GROUPJID_NEWSLETTERJID_STATUSJID = o;
const l = {
  validators: [a.validateDeviceJid, a.validateBroadcastJid, a.validateDeviceJid, a.validateGroupJid],
  typeName: "DeviceJid|BroadcastJid|DeviceJid|GroupJid"
};
exports.DEVICEJID_BROADCASTJID_DEVICEJID_GROUPJID = l;
const i = {
  validators: [a.validateDeviceJid, a.validateBroadcastJid, a.validateDeviceJid, a.validateGroupJid, a.validateNewsletterJid, a.validateStatusJid],
  typeName: "DeviceJid|BroadcastJid|DeviceJid|GroupJid|NewsletterJid|StatusJid"
};
exports.DEVICEJID_BROADCASTJID_DEVICEJID_GROUPJID_NEWSLETTERJID_STATUSJID = i;
const u = {
  validators: [a.validateDeviceJid, a.validateDeviceJid],
  typeName: "DeviceJid|DeviceJid"
};
exports.DEVICEJID_DEVICEJID = u;