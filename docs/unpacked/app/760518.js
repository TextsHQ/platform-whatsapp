var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SERVER_MEDIA = undefined;
exports.castToServerMediaType = function (e) {
  switch (e) {
    case "image":
    case "sticker":
    case "ptt":
    case "audio":
    case "document":
    case "video":
    case "gif":
    case "ppic":
    case "md-app-state":
    case "md-msg-hist":
    case "kyc-id":
    case "thumbnail-image":
    case "thumbnail-video":
    case "thumbnail-gif":
    case "thumbnail-document":
    case "thumbnail-link":
    case "payment-bg-image":
    case "novi-video":
    case "novi-image":
    case "template":
    case "product":
    case "product-catalog-image":
    case "xma-image":
    case "biz-cover-photo":
    case "preview":
    case "newsletter-audio":
    case "newsletter-document":
    case "newsletter-image":
    case "newsletter-gif":
    case "newsletter-ptt":
    case "newsletter-sticker":
    case "newsletter-thumbnail-link":
    case "newsletter-video":
      return e;
    default:
      return null;
  }
};
exports.getMediaType = function (e) {
  switch (e) {
    case "Image":
      return "image";
    case "Video":
      return "video";
    case "Ptt":
      return "ptt";
    case "Gif":
      return "gif";
    case "Sticker":
      return "sticker";
    case "DocumentFile":
      return "document";
    case "Text":
    case "Futureproof":
    case "Ciphertext":
    case "Unavailable":
    case "ExpiredEphemeral":
    case "Admin":
    case "Revoked":
    case "DeleteForMe":
    case "EphemeralSettingAdmin":
    case "EphemeralSyncResponse":
    case "EphemeralSettingChangeFromCurrentDevice":
    case "AlertICDC":
    case "GroupInvite":
    case "SenderKeyDistribution":
    case "Reaction":
    case "EditAction":
      return null;
    default:
      return (0, i.default)(e);
  }
};
var i = r(require("./367420.js"));
exports.SERVER_MEDIA = ["image", "sticker", "ptt", "audio", "document", "video", "gif", "ppic", "md-app-state", "md-msg-hist", "kyc-id", "template", "thumbnail-image", "thumbnail-video", "thumbnail-gif", "thumbnail-document", "thumbnail-link", "payment-bg-image", "novi-video", "novi-image", "product", "product-catalog-image", "xma-image", "biz-cover-photo", "preview", "newsletter-audio", "newsletter-document", "newsletter-image", "newsletter-gif", "newsletter-ptt", "newsletter-sticker", "newsletter-thumbnail-link", "newsletter-video"];