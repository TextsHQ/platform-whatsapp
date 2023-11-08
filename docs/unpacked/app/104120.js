var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = (0, o.getIsNewsletterMsg)(e);
  switch (e.type) {
    case s.MSG_TYPE.DOCUMENT:
      return a.MEDIA_TYPES.THUMBNAIL_DOCUMENT;
    case s.MSG_TYPE.VIDEO:
      return a.MEDIA_TYPES.THUMBNAIL_VIDEO;
    case s.MSG_TYPE.IMAGE:
      return a.MEDIA_TYPES.THUMBNAIL_IMAGE;
    case s.MSG_TYPE.CHAT:
      if (t) {
        return a.MEDIA_TYPES.NEWSLETTER_THUMBNAIL_LINK;
      } else {
        return a.MEDIA_TYPES.THUMBNAIL_LINK;
      }
    case s.MSG_TYPE.INTERACTIVE:
      {
        const {
          interactiveHeader: t
        } = e;
        if ((t == null ? undefined : t.mediaType) != null) {
          switch (t.mediaType) {
            case i.InteractiveMessageHeaderMediaType.DOCUMENT:
              return a.MEDIA_TYPES.THUMBNAIL_DOCUMENT;
            case i.InteractiveMessageHeaderMediaType.VIDEO:
              return a.MEDIA_TYPES.THUMBNAIL_VIDEO;
          }
        }
        break;
      }
  }
  throw (0, l.default)("getThumbnailTypeForMsg: Unsupported msg type");
};
var i = require("./943914.js");
var a = require("./708761.js");
var o = require("./787742.js");
var s = require("./373070.js");
var l = r(require("./556869.js"));