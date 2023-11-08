var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    hostname: t,
    type: n,
    encFilehash: r,
    query: o
  } = e;
  const u = (0, a.default)(l[n], "MEDIA_TYPE_TO_PATH[type]");
  const c = new URL(`https://${t}${u}/${(0, i.default)(r)}`);
  const d = {};
  if (o) {
    Object.keys(o).forEach(e => {
      if (o[e] != null) {
        d[e] = o[e];
      }
    });
  }
  let p = new s.default(d).toString();
  if (p) {
    p = `?${p}`;
  }
  return `https://${c.host}${c.pathname}${p}`;
};
var i = r(require("./861309.js"));
var a = r(require("./670983.js"));
var o = require("./708761.js");
var s = r(require("./665810.js"));
const l = {
  audio: "/mms/audio",
  document: "/mms/document",
  gif: "/mms/gif",
  image: "/mms/image",
  ppic: "/pps/photo",
  product: "/mms/image",
  ptt: "/mms/ptt",
  sticker: "/mms/sticker",
  "thumbnail-document": "/mms/thumbnail-document",
  "thumbnail-link": "/mms/thumbnail-link",
  video: "/mms/video",
  "md-app-state": "/mms/md-app-state",
  "product-catalog-image": "/product/image",
  "biz-cover-photo": "/pps/biz-cover-photo",
  [o.MEDIA_TYPES.NEWSLETTER_AUDIO]: "/newsletter/newsletter-audio",
  [o.MEDIA_TYPES.NEWSLETTER_IMAGE]: "/newsletter/newsletter-image",
  [o.MEDIA_TYPES.NEWSLETTER_DOCUMENT]: "/newsletter/newsletter-document",
  [o.MEDIA_TYPES.NEWSLETTER_IMAGE]: "/newsletter/newsletter-image",
  [o.MEDIA_TYPES.NEWSLETTER_GIF]: "/newsletter/newsletter-gif",
  [o.MEDIA_TYPES.NEWSLETTER_PTT]: "/newsletter/newsletter-ptt",
  [o.MEDIA_TYPES.NEWSLETTER_STICKER]: "/newsletter/newsletter-sticker",
  [o.MEDIA_TYPES.NEWSLETTER_THUMBNAIL_LINK]: "/newsletter/newsletter-thumbnail-link",
  [o.MEDIA_TYPES.NEWSLETTER_VIDEO]: "/newsletter/newsletter-video"
};