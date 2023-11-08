Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  return e.matchedText != null && e.matchedText !== "" && (0, a.isParsableYouTubeVideoUrl)(e.richPreviewType, e.matchedText, e.doNotPlayInline);
};
var a = require("./968698.js");