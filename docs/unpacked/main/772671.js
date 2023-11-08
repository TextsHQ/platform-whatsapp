var a = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMediaHkdfInfo = function (e) {
  switch (e) {
    case "document":
      return "WhatsApp Document Keys";
    case "image":
    case "sticker":
    case "xma-image":
      return "WhatsApp Image Keys";
    case "video":
    case "gif":
      return "WhatsApp Video Keys";
    case "audio":
    case "ptt":
      return "WhatsApp Audio Keys";
    case "md-app-state":
      return "WhatsApp App State Keys";
    case "md-msg-hist":
      return "WhatsApp History Keys";
    default:
      throw (0, r.default)(`getMediaHkdfInfo: unexpected media type ${e}`);
  }
};
exports.getPreviewMediaHkdfInfo = function () {
  return "Messenger Preview Keys";
};
var r = a(require("../app/415227.js"));