var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isParsableOnlineVideoURL = function (e, t, n) {
  if (t == null || t === "") {
    return false;
  }
  if (n === true) {
    return false;
  }
  if (e === o.Message$ExtendedTextMessage$PreviewType.VIDEO) {
    const e = l.default.withoutWww(l.default.hostname(t));
    if (i.has(e)) {
      return true;
    }
  }
  const a = l.default.withoutWww(t);
  return Object.keys(r.URL_PATTERNS.ONLINE_VIDEO_URL).some(e => {
    var t;
    return ((t = r.URL_PATTERNS.ONLINE_VIDEO_URL[e]) !== null && t !== undefined ? t : []).some(e => e.test(a));
  });
};
exports.isParsableYouTubeVideoUrl = function (e, t, n) {
  if (t == null || t === "") {
    return false;
  }
  if (n === true) {
    return false;
  }
  const a = r.URL_PATTERNS.ONLINE_VIDEO_URL.YOUTUBE;
  const o = l.default.withoutWww(t);
  return a.some(e => e.test(o));
};
var r = require("../app/728.js");
var o = require("../app/533494.js");
var l = a(require("../app/79291.js"));
const i = new Set([r.HOSTNAME.INSTAGRAM, r.HOSTNAME.STREAMABLE, r.HOSTNAME.FACEBOOK, r.HOSTNAME.FBWATCH, r.HOSTNAME.FBWATCH_ALT, r.HOSTNAME.SHARECHAT]);