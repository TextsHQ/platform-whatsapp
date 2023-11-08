var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.downloadMsg = function (e) {
  const {
    msg: t,
    isUserClick: n,
    mode: r,
    downloadEvenIfExpensive: l,
    rmrReason: u,
    rmrData: c,
    isAutoDownload: d,
    chatWid: p
  } = e;
  const {
    mediaObject: f
  } = t;
  if (f) {
    return f.getPendingProcess("fromDisk").then((0, i.default)(function* () {
      if (n) {
        f.userDownloadAttemptCount++;
      }
      yield (0, o.downloadMedia)({
        mimetype: t.mimetype,
        mediaObject: f,
        downloadEvenIfExpensive: l,
        mediaType: (0, s.getMsgMediaType)(t),
        rmrReason: u,
        rmrData: c,
        downloadOrigin: (0, a.default)(t),
        isVcardOverMmsDocument: t.isVcardOverMmsDocument,
        mode: r,
        isAutoDownload: d,
        isViewOnce: Boolean(t.isViewOnce),
        chatWid: p
      });
      f.userDownloadAttemptCount = 0;
    }));
  }
  __LOG__(4, undefined, new Error(), true)`id: ${t.id.toString()} type: ${t.type}`;
  SEND_LOGS("media-fault: downloadMsg msg without mediaObject");
  return Promise.resolve();
};
var i = r(require("../vendor/348926.js"));
var a = r(require("./762467.js"));
var o = require("./102645.js");
var s = require("./708761.js");