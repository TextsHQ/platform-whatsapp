var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseYoutubeVideoId = function (e) {
  const t = i.URL_PATTERNS.ONLINE_VIDEO_URL.YOUTUBE;
  for (let n = 0; n < t.length; n++) {
    const r = a.default.withoutWww(e).match(t[n]);
    if (r) {
      return r[r.length - 1];
    }
  }
  return null;
};
var i = require("./728.js");
var a = r(require("./79291.js"));