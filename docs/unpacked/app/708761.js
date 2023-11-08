var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MEDIA_TYPE_VALUES = exports.MEDIA_TYPES = undefined;
exports.castToV4 = function (e) {
  let t;
  if (e == null) {
    t = u.DOCUMENT;
  } else {
    if (!(e in u)) {
      throw (0, l.default)(`castToV4: unexpected mmsv3 type ${e}`);
    }
    t = u[e];
  }
  return t;
};
exports.getMsgMediaType = function (e) {
  return d({
    type: e.type,
    interactiveHeader: e.interactiveHeader,
    isGif: e.type === s.MSG_TYPE.VIDEO && e.isGif,
    isNewsletter: (0, o.getIsNewsletterMsg)(e)
  });
};
exports.msgToMediaType = d;
var i = r(require("../vendor/252628.js"));
var a = require("./943914.js");
var o = require("./787742.js");
var s = require("./373070.js");
var l = r(require("./556869.js"));
const u = Object.freeze({
  AUDIO: "audio",
  DOCUMENT: "document",
  GIF: "gif",
  IMAGE: "image",
  NATIVE_FLOW: "native_flow",
  PPIC: "ppic",
  PRODUCT: "product",
  PTT: "ptt",
  STICKER: "sticker",
  VIDEO: "video",
  PTV: "ptv",
  TEMPLATE: "template",
  THUMBNAIL_DOCUMENT: "thumbnail-document",
  THUMBNAIL_IMAGE: "thumbnail-image",
  THUMBNAIL_VIDEO: "thumbnail-video",
  THUMBNAIL_LINK: "thumbnail-link",
  HISTORY_SYNC: "md-msg-hist",
  MD_APP_STATE: "md-app-state",
  PRODUCT_CATALOG_IMAGE: "product-catalog-image",
  PAYMENT_BG_IMAGE: "payment-bg-image",
  BIZ_COVER_PHOTO: "biz-cover-photo",
  PREVIEW: "preview",
  NEWSLETTER_AUDIO: "newsletter-audio",
  NEWSLETTER_DOCUMENT: "newsletter-document",
  NEWSLETTER_IMAGE: "newsletter-image",
  NEWSLETTER_GIF: "newsletter-gif",
  NEWSLETTER_PTT: "newsletter-ptt",
  NEWSLETTER_STICKER: "newsletter-sticker",
  NEWSLETTER_THUMBNAIL_LINK: "newsletter-thumbnail-link",
  NEWSLETTER_VIDEO: "newsletter-video"
});
exports.MEDIA_TYPES = u;
const c = (0, i.default)(u);
function d(e) {
  let {
    type: t,
    isGif: n,
    interactiveHeader: r,
    isNewsletter: i
  } = e;
  switch (t) {
    case s.MSG_TYPE.IMAGE:
      if (i) {
        return u.NEWSLETTER_IMAGE;
      } else {
        return u.IMAGE;
      }
    case s.MSG_TYPE.VIDEO:
      if (i) {
        if (n === true) {
          return u.NEWSLETTER_GIF;
        } else {
          return u.NEWSLETTER_VIDEO;
        }
      } else if (n === true) {
        return u.GIF;
      } else {
        return u.VIDEO;
      }
    case s.MSG_TYPE.AUDIO:
      return u.AUDIO;
    case s.MSG_TYPE.PTT:
      if (i) {
        return u.NEWSLETTER_PTT;
      } else {
        return u.PTT;
      }
    case s.MSG_TYPE.PTV:
      return u.PTV;
    case s.MSG_TYPE.DOCUMENT:
      return u.DOCUMENT;
    case s.MSG_TYPE.STICKER:
      if (i) {
        return u.NEWSLETTER_STICKER;
      } else {
        return u.STICKER;
      }
    case s.MSG_TYPE.PRODUCT:
      return u.PRODUCT;
    case s.MSG_TYPE.NATIVE_FLOW:
      return u.NATIVE_FLOW;
    case s.MSG_TYPE.INTERACTIVE:
      if ((r == null ? undefined : r.mediaType) != null) {
        switch (r.mediaType) {
          case a.InteractiveMessageHeaderMediaType.DOCUMENT:
            return u.DOCUMENT;
          case a.InteractiveMessageHeaderMediaType.VIDEO:
            return u.VIDEO;
          case a.InteractiveMessageHeaderMediaType.IMAGE:
            return u.IMAGE;
        }
      }
  }
  throw (0, l.default)(`msg is not a media msg: ${t}, isGif=${String(n)}`);
}
exports.MEDIA_TYPE_VALUES = c;