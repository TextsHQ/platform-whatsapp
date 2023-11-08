Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  return i.RequestMediaReuploadManager.requestMediaReupload(e).then(e => {
    let {
      result: t,
      directPath: n
    } = e;
    return {
      status: a(t),
      directPath: n,
      isMD: true
    };
  });
};
var r = require("./229479.js");
var i = require("./994451.js");
function a(e) {
  if (e != null) {
    switch (e) {
      case r.MediaRetryNotification$ResultType.SUCCESS:
        return 200;
      case r.MediaRetryNotification$ResultType.NOT_FOUND:
      case r.MediaRetryNotification$ResultType.DECRYPTION_ERROR:
        return 404;
      case r.MediaRetryNotification$ResultType.GENERAL_ERROR:
        return 500;
    }
  }
  return 500;
}