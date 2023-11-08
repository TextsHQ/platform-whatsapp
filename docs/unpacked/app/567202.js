Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cancelUploadMedia = i;
exports.cancelUploadMsg = function (e) {
  if (e.mediaObject) {
    i(e.mediaObject);
  } else {
    __LOG__(4, undefined, new Error(), true)`id: ${e.id.toString()} type: ${e.type}`;
    SEND_LOGS("media-fault: cancelUploadMsg msg without mediaObject");
  }
};
var r = require("./709089.js");
function i(e) {
  (0, r.cancelUploadMedia)(e);
}