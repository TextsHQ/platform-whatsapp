Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDownloadOriginFromUploadOrigin = function (e) {
  switch (e) {
    case i.UPLOAD_ORIGIN_TYPE.CHAT_PERSONAL:
      return r.DOWNLOAD_ORIGIN_TYPE.CHAT_PERSONAL;
    case i.UPLOAD_ORIGIN_TYPE.CHANNEL:
      return r.DOWNLOAD_ORIGIN_TYPE.CHANNEL;
    default:
      return r.DOWNLOAD_ORIGIN_TYPE.CHAT_GROUP;
  }
};
var r = require("./59095.js");
var i = require("./495588.js");