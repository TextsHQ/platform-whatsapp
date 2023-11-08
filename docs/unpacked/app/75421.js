Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMaxNumberSelectableMedia = function (e, t) {
  if (t.isNewsletter() && !(0, a.isNewsletterMediaAlbumUploadEnabled)()) {
    return 1;
  }
  const n = (0, r.getABPropConfigValue)("media_picker_select_limit");
  if (e <= n) {
    return n;
  }
  return (0, r.getABPropConfigValue)("media_picker_select_limit_new");
};
exports.getSupportedMediaTypesForChat = function (e) {
  if ((0, l.unproxy)(e).isNewsletter) {
    if ((0, a.isNewsletterStickerSendingEnabled)()) {
      return new Set([i.MSG_TYPE.IMAGE, i.MSG_TYPE.VIDEO, i.MSG_TYPE.STICKER]);
    } else {
      return new Set([i.MSG_TYPE.IMAGE, i.MSG_TYPE.VIDEO]);
    }
  }
  return new Set(Object.values(i.MSG_TYPE));
};
exports.getUploadLimit = function (e, t) {
  switch (e) {
    case "audio":
      return u((0, r.getABPropConfigValue)("default_audio_limit_mb"));
    case "document":
      if (t === true) {
        return o.VCARD_MAX_SIZE_KB * 1024;
      } else {
        return (0, s.getMaxFilesSizeServerProp)();
      }
    case "video":
      return u((0, r.getABPropConfigValue)("default_video_limit_mb"));
    case "image":
    case "sticker":
    default:
      return u((0, r.getABPropConfigValue)("default_media_limit_mb"));
  }
};
exports.isNativeFetchEnabled = function () {
  return (0, r.getABPropConfigValue)("web_native_fetch_media_download");
};
exports.isReceiveHQPhotoEnabled = function () {
  return (0, r.getABPropConfigValue)("enable_receiving_hd_photo_quality");
};
exports.isSendHQPhotoEnabled = function () {
  return (0, r.getABPropConfigValue)("web_original_photo_quality_upload_enabled");
};
exports.isStoreQuotaManagerEnabled = function () {
  return (0, r.getABPropConfigValue)("web_store_quota_manager_enabled");
};
exports.supportsMultipleUploads = function (e) {
  if (e.isNewsletter()) {
    return (0, a.isNewsletterMediaAlbumUploadEnabled)();
  }
  return true;
};
var r = require("./287461.js");
var i = require("./373070.js");
var a = require("./73225.js");
var o = require("./962260.js");
var s = require("./937001.js");
var l = require("./163139.js");
function u(e) {
  return e * 1024 * 1024;
}