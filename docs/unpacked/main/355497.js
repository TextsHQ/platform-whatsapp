Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GifInfo = exports.GIPHY_LOCALES = exports.BRAND_NAMES = undefined;
exports.getGifProvider = function () {
  switch (r.ServerProps.gifProvider) {
    case "giphy":
      return a.GIPHY;
    case "tenor":
    default:
      return a.TENOR;
  }
};
var a = require("./554779.js");
var r = require("../app/937001.js");
let o = 0;
exports.GifInfo = class {
  constructor(e, t, n, r, l, i, u, s) {
    this.rank = e;
    this.gifId = ++o;
    this.url = t;
    this.size = n;
    this.previewUrl = r || t;
    this.nonVideoUrl = l;
    this.width = i;
    this.widthStr = `${i}px`;
    this.ratioStr = `${Math.ceil(a.TARGET_GIF_HEIGHT * 100 / i)}%`;
    this.attribution = u;
    this.trending = s;
  }
};
exports.BRAND_NAMES = {
  giphy: "GIPHY",
  tenor: "Tenor"
};
exports.GIPHY_LOCALES = ["en", "es", "pt", "id", "fr", "ar", "tr", "th", "vi", "de", "it", "ja", "zh-CN", "zh-TW", "ru", "ko", "pl", "nl", "ro", "hu", "sv", "cs", "hi", "bn", "da", "fa", "tl", "fi", "iw", "ms", "no", "uk"];