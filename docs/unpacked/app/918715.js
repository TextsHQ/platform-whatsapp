Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.areStatusQuickRepliesEnabled = function () {
  return (0, r.getABPropConfigValue)("status_quick_reply_enabled");
};
exports.canSeeStatusV3OnContact = function () {
  return (0, r.getABPropConfigValue)("web_abprop_business_profile_refresh_status_enabled");
};
exports.isStatusV3ProfilePhotoRingEnabled = function () {
  return (0, r.getABPropConfigValue)("profile_photo_rings_for_status_on_web_enabled");
};
exports.isStatusV3VoiceStatusReceiptEnabled = function () {
  return (0, r.getABPropConfigValue)("voice_status_receipt_on_web_enabled");
};
exports.smbStatusLoggingEnabled = function () {
  if (i.Conn.isSMB) {
    return (0, r.getABPropConfigValue)("smb_status_logging_enabled");
  }
  return false;
};
exports.statusQuickReplyEmojis = function () {
  try {
    const e = JSON.parse((0, r.getABPropConfigValue)("status_reaction_emojis")).map(e => String.fromCodePoint(e)).filter(e => o.has(e));
    if (e.length === 0) {
      return a;
    } else {
      return e;
    }
  } catch (e) {
    return a;
  }
};
exports.statusV3LinkPreviewEnabled = function () {
  return (0, r.getABPropConfigValue)("status_inline_link_preview_enabled");
};
var r = require("./287461.js");
var i = require("./445729.js");
const a = ["😍", "😂", "😮", "😢", "🙏", "👏", "🎉", "💯"];
const o = new Set(["😍", "😂", "😮", "😢", "🙏", "👏", "🎉", "💯", "👍", "❤", "😊", "🥰", "🤩", "💚", "🤣", "😆", "🔥", "🙌", "🥳", "😭", "😔", "🥺", "😲", "🤯", "😡", "😤"]);