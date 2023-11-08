Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cancelDownloadMedia = i;
exports.cancelDownloadMsg = function (e) {
  if (e.mediaObject) {
    i(e.mediaObject);
  } else if (!e.mediaObject) {
    __LOG__(4, undefined, new Error(), true)`id: ${e.id.toString()} type: ${e.type}`;
    SEND_LOGS("media-fault: cancelDownloadMsg msg without mediaObject");
  }
};
var r = require("./102645.js");
function i(e) {
  (0, r.cancelDownloadMedia)(e);
}