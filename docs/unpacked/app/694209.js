var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sanitizeNoticeSVG = function (e) {
  return i.default.sanitize(e, {
    USE_PROFILES: {
      svg: true,
      svgFilters: true
    }
  });
};
exports.sanitizeNoticeText = function (e) {
  return i.default.sanitize(e, {
    ALLOWED_TAGS: ["b", "i", "a", "#text"],
    ALLOWED_ATTR: ["href"],
    KEEP_CONTENT: false
  });
};
exports.sanitizeQuickPromotionText = function (e) {
  return i.default.sanitize(e, {
    ALLOWED_TAGS: ["b", "i", "#text"],
    KEEP_CONTENT: false
  });
};
var i = r(require("./724843.js"));