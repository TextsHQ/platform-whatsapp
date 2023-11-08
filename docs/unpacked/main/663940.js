var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ALBUM_PADDING = exports.ALBUM_MIN_SIZE = exports.ALBUM_MAX_SIZE = exports.ALBUM_MAX_HEIGHT = exports.ALBUM_ANNOUNCEMENT_MAX_HEIGHT = undefined;
exports.canBeGroupedAsAlbum = function (e, t) {
  var n;
  var a;
  return ((0, r.getIsGroupMsg)(e) ? o.default.equals(e.author, t.author) : o.default.equals(e.from, t.from)) && e.isForwarded === t.isForwarded && ((n = e.forwardedNewsletterMessageInfo) === null || n === undefined ? undefined : n.newsletterId) === ((a = t.forwardedNewsletterMessageInfo) === null || a === undefined ? undefined : a.newsletterId) && t.t - e.t <= 600;
};
exports.canBeGroupedWithNext = function (e, t) {
  if ((0, r.getIsNotification)(e) || (0, r.getIsNotification)(t)) {
    return false;
  }
  if (e.forwardedNewsletterMessageInfo != null) {
    return t.forwardedNewsletterMessageInfo != null && e.forwardedNewsletterMessageInfo.newsletterId === t.forwardedNewsletterMessageInfo.newsletterId;
  }
  if ((0, r.getIsGroupMsg)(e)) {
    return o.default.equals(e.author, t.author) && (0, r.getIsSentByMe)(e) === (0, r.getIsSentByMe)(t);
  }
  return o.default.equals(e.from, t.from);
};
var r = require("../app/787742.js");
var o = a(require("../app/124928.js"));
exports.ALBUM_MIN_SIZE = 4;
exports.ALBUM_MAX_SIZE = 102;
exports.ALBUM_MAX_HEIGHT = 168;
exports.ALBUM_ANNOUNCEMENT_MAX_HEIGHT = 240;
exports.ALBUM_PADDING = 3;