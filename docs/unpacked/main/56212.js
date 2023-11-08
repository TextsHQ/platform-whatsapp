Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.genMinimalLinkPreview = function (e) {
  let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
  if (!e || !e.url) {
    return null;
  }
  return {
    url: e.url,
    data: {
      title: e.domain,
      description: e.url,
      canonicalUrl: e.url,
      matchedText: e.url,
      richPreviewType: a.Message$ExtendedTextMessage$PreviewType.NONE,
      thumbnail: undefined,
      doNotPlayInline: true,
      isLoading: t
    }
  };
};
var a = require("../app/533494.js");