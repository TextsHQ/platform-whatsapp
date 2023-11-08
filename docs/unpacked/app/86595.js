Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isMediaCryptoExpectedForChat = function (e) {
  if ((0, a.isNewsletterEnabled)() && e.isNewsletter) {
    return false;
  }
  return true;
};
exports.isMediaCryptoExpectedForMediaType = function (e) {
  if (s(e)) {
    return false;
  }
  return true;
};
exports.isMediaCryptoExpectedForMsg = function (e) {
  if ((0, a.isNewsletterEnabled)() && (0, i.getIsNewsletterMsg)(e)) {
    return false;
  }
  return true;
};
exports.isRmrSupportedForMediaType = function (e) {
  if (s(e)) {
    return false;
  }
  return true;
};
var r = require("./708761.js");
var i = require("./787742.js");
var a = require("./73225.js");
const o = new Set([r.MEDIA_TYPES.NEWSLETTER_AUDIO, r.MEDIA_TYPES.NEWSLETTER_DOCUMENT, r.MEDIA_TYPES.NEWSLETTER_GIF, r.MEDIA_TYPES.NEWSLETTER_IMAGE, r.MEDIA_TYPES.NEWSLETTER_PTT, r.MEDIA_TYPES.NEWSLETTER_STICKER, r.MEDIA_TYPES.NEWSLETTER_THUMBNAIL_LINK, r.MEDIA_TYPES.NEWSLETTER_VIDEO]);
function s(e) {
  return o.has(e);
}