var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasSymbol = function (e) {
  const t = (0, c.unproxy)(e);
  if (t.type === u.MSG_TYPE.INTERACTIVE) {
    return t.interactiveType === s.default.SHOPS_STOREFRONT || t.interactiveType === s.default.NATIVE_FLOW && t.nativeFlowName === o.default.ORDER_DETAILS;
  }
  if (t.type === u.MSG_TYPE.NATIVE_FLOW) {
    return t.nativeFlowName === o.default.ORDER_DETAILS;
  }
  return ["image", "video", "ptv", "audio", "ptt", "location", "vcard", "multi_vcard", "document", "ciphertext", "oversized", "unknown", "call_log", "revoked", "sticker", "payment", "poll_creation", "groups_v4_invite", "product", "order"].includes(t.type);
};
exports.iAmGroupParticipant = function (e) {
  var t;
  const n = (0, c.unproxy)(e);
  return ((t = (0, a.getChat)(n).groupMetadata) === null || t === undefined ? undefined : t.participants.iAmMember()) === true;
};
exports.isGroupLeave = function (e) {
  const t = (0, c.unproxy)(e);
  return t.type === "gp2" && (t.subtype === "leave" || t.subtype === "remove") && (0, d.isMeAccount)(t.recipients[0]);
};
exports.isTrusted = function (e) {
  const t = (0, c.unproxy)(e);
  if ((0, d.isMeAccount)((0, l.getSender)(t))) {
    return true;
  }
  if (t.senderObj != null && (0, i.getIsMyContact)(t.senderObj)) {
    return true;
  }
  if ((0, l.getIsGroupMsg)(t) || (0, a.getChat)(t).isNewsletter) {
    return (0, a.getChat)(t).isTrusted();
  }
  if ((0, l.getIsPSA)(t)) {
    return true;
  }
  if (t.isFromTemplate) {
    return true;
  }
  return (0, a.getChat)(t).notSpam;
};
var i = require("./660666.js");
var a = require("./163755.js");
var o = r(require("./753110.js"));
var s = r(require("./182394.js"));
var l = require("./787742.js");
var u = require("./373070.js");
var c = require("./163139.js");
var d = require("./459857.js");