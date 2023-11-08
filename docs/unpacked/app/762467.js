Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  if ((0, r.getAsProduct)(e)) {
    return a.DOWNLOAD_ORIGIN_TYPE.PRODUCT_CATALOG;
  }
  if ((0, i.getIsStatusV3)(e)) {
    return a.DOWNLOAD_ORIGIN_TYPE.STATUS_USER;
  }
  if ((0, i.getIsGroupMsg)(e)) {
    return a.DOWNLOAD_ORIGIN_TYPE.CHAT_GROUP;
  }
  if ((0, i.getIsNewsletterMsg)(e)) {
    return a.DOWNLOAD_ORIGIN_TYPE.CHANNEL;
  }
  return a.DOWNLOAD_ORIGIN_TYPE.CHAT_PERSONAL;
};
var r = require("./163755.js");
var i = require("./787742.js");
var a = require("./59095.js");