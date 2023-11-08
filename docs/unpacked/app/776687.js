var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMediaDownloadMetrics = function () {
  return g.apply(this, arguments);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./287461.js");
var s = require("./529914.js");
var l = require("./300098.js");
var u = require("./708761.js");
var c = require("./141209.js");
var d = require("./432650.js");
var p = require("./495456.js");
var f = require("./440401.js");
var _ = require("./464404.js");
function g() {
  return (g = (0, a.default)(function* (e) {
    var t;
    const n = (0, _.generateMediaEventId)();
    const r = new s.MediaDownload2WamEvent({
      mediaId: n,
      connectionType: c.CONNECTION_TYPE.HOSTNAME,
      overallMediaType: (0, _.getMetricMediaType)(e.type),
      overallMmsVersion: 4,
      networkStack: p.NETWORK_STACK_TYPE.NATIVE,
      overallDownloadMode: (0, _.getMetricOverallDownloadModeType)(e.type, e.downloadMode, e.isPrefetch),
      overallAttemptCount: e.userDownloadAttemptCount,
      overallDownloadOrigin: e.downloadOrigin,
      overallBackendStore: (t = (0, _.getMetricBackendStore)(e.directPath)) !== null && t !== undefined ? t : undefined,
      isViewOnce: e.isViewOnce
    });
    if (e.type === u.MEDIA_TYPES.IMAGE && (0, o.getABPropConfigValue)("hqp_log_enabled")) {
      r.set((0, i.default)({}, e.imageDimensions));
    }
    const {
      chatWid: a
    } = e;
    if (a) {
      const e = yield (0, f.getGroupMetrics)(a);
      if ((e == null ? undefined : e.deviceCount) != null) {
        r.set({
          deviceCount: e.deviceCount
        });
      }
    }
    l.downloadUploadCrashLogger.mark(n, l.ProgressType.DOWNLOAD_STARTED);
    return {
      mediaId: n,
      handleDownloadSuccess: e => {
        r.set({
          overallMediaSize: e,
          overallDownloadResult: d.MEDIA_DOWNLOAD_RESULT_TYPE.OK,
          overallIsFinal: true,
          downloadHttpCode: 200
        });
        l.downloadUploadCrashLogger.mark(n, l.ProgressType.DOWNLOAD_FINISHED, {
          overallMediaSize: e
        });
      },
      handleDownloadHostFound: e => {
        let {
          hostName: t,
          hostClass: n,
          failCount: i
        } = e;
        r.set({
          overallDomain: t,
          overallConnectionClass: n,
          overallRetryCount: i
        });
      },
      handleDownloadError: (e, t) => {
        r.set({
          overallDownloadResult: (0, _.getMetricDownloadErrorResultType)(e),
          overallIsFinal: t
        });
        const n = (0, _.getStatusCode)(e);
        if (n != null) {
          r.downloadHttpCode = n;
        }
        r.markOverallCumT();
        r.commit();
        (0, _.logErrorUnknownDetails)(r, e);
      },
      handleDownloadAttemptSuccess: e => {
        r.set({
          overallT: e
        });
      },
      handleDownloadAttemptError: e => {
        let {
          error: t,
          overallT: n,
          failCount: i
        } = e;
        const a = new s.MediaDownload2WamEvent(r.all);
        a.set({
          mediaId: (0, _.generateMediaEventId)(),
          overallDownloadResult: (0, _.getMetricDownloadErrorResultType)(t),
          overallIsFinal: false,
          overallT: n,
          overallRetryCount: i
        });
        const o = (0, _.getStatusCode)(t);
        if (o != null) {
          r.downloadHttpCode = o;
        }
        r.markOverallCumT();
        a.commit();
        (0, _.logErrorUnknownDetails)(a, t);
      },
      handleDownloadAndDecryptSuccess: () => {
        r.markOverallCumT();
        r.commit();
      },
      markDecryptionEnd: () => {
        r.markOverallDecryptT();
      },
      markDecryptionStart: () => {
        r.startOverallDecryptT();
      },
      startNetworkT: () => {
        r.startDownloadNetworkT();
      },
      markNetworkT: () => {
        r.markDownloadNetworkT();
      }
    };
  })).apply(this, arguments);
}