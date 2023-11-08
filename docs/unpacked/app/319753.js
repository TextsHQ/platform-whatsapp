var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t, n, r, g) {
  let m = arguments.length > 5 && arguments[5] !== undefined && arguments[5];
  const h = (0, _.generateMediaEventId)();
  const y = new s.MediaUpload2WamEvent({
    mediaId: h,
    connectionType: u.CONNECTION_TYPE.HOSTNAME,
    overallMediaType: (0, _.getMetricMediaType)(e),
    overallMmsVersion: 4,
    overallAttemptCount: n,
    networkStack: p.NETWORK_STACK_TYPE.NATIVE,
    overallUploadMode: (0, _.getMetricOverallUploadModeType)(e),
    overallIsForward: r,
    overallUploadOrigin: t,
    uploadSource: (0, o.default)(t, r),
    isViewOnce: g,
    overallUserVisibleT: 0
  });
  if (e === l.MEDIA_TYPES.IMAGE && (0, i.getABPropConfigValue)("hqp_log_enabled")) {
    const e = m ? c.MEDIA_QUALITY.HIGHEST_QUALITY : c.MEDIA_QUALITY.DATA_SAVER;
    y.set({
      photoQualitySetting: e
    });
  }
  return {
    handleStreamUploadStart: function () {
      y.set({
        uploadIsStreaming: true
      });
    },
    handleArrayBufferCreated: function (e) {
      y.set({
        overallMediaSize: e
      });
    },
    handleCheckExistingError: function (e) {
      if (e instanceof a.HttpStatusCodeError) {
        y.set({
          resumeHttpCode: e.status
        });
      }
    },
    handleCheckExistingSuccess: function () {
      y.set({
        overallUploadResult: d.MEDIA_UPLOAD_RESULT_TYPE.DUPLICATE,
        overallIsFinal: true,
        resumeHttpCode: 200
      });
      y.markOverallCumT();
      y.commit();
    },
    handleUploadHostFound: function (e) {
      let {
        hostName: t,
        hostClass: n,
        failCount: r
      } = e;
      y.set({
        overallDomain: t,
        overallConnectionClass: n,
        overallRetryCount: r
      });
    },
    handleUploadSuccess: function () {
      y.set({
        resumeHttpCode: 404,
        overallUploadResult: d.MEDIA_UPLOAD_RESULT_TYPE.OK,
        overallIsFinal: true,
        uploadHttpCode: 200,
        finalizeHttpCode: 200
      });
      y.markOverallCumT();
      y.commit();
    },
    handleUploadError: function (e) {
      y.set({
        overallUploadResult: (0, _.getMetricUploadErrorResultType)(e),
        overallIsFinal: true
      });
      const t = (0, _.getStatusCode)(e);
      if (t != null) {
        y.uploadHttpCode = t;
        y.finalizeHttpCode = t;
      }
      y.markOverallCumT();
      y.commit();
      (0, _.logErrorUnknownDetails)(y, e);
    },
    handleUploadAttemptSuccess: function (e) {
      y.set({
        overallT: e
      });
    },
    handleUploadAttemptError: function (e, t, n, r) {
      const i = new s.MediaUpload2WamEvent(y.all);
      const a = (0, _.getStatusCode)(e);
      const o = r === f.OVERALL_LAST_UPLOAD_RETRY_PHASE_TYPE.FINALIZE ? a : i.finalizeHttpCode;
      i.set({
        mediaId: (0, _.generateMediaEventId)(),
        overallUploadResult: (0, _.getMetricUploadErrorResultType)(e),
        overallIsFinal: false,
        overallT: t,
        overallRetryCount: n,
        overallLastUploadRetryPhase: r,
        finalizeHttpCode: o
      });
      if (a != null) {
        y.uploadHttpCode = a;
      }
      y.markOverallCumT();
      i.commit();
      (0, _.logErrorUnknownDetails)(y, e);
    },
    mediaId: h,
    handleEncryptionStart: function () {
      y.startOverallEncryptT();
    },
    handleEncryptionSuccess: function () {
      y.markOverallEncryptT();
    },
    handleUploadProgress: function (e) {
      y.set({
        uploadBytesTransferred: e
      });
    },
    handleSendMessageStart: function () {
      y.markOverallUserVisibleT();
    }
  };
};
var i = require("./287461.js");
var a = require("./791357.js");
var o = r(require("./918285.js"));
var s = require("./393902.js");
var l = require("./708761.js");
var u = require("./141209.js");
var c = require("./501329.js");
var d = require("./550407.js");
var p = require("./495456.js");
var f = require("./937849.js");
var _ = require("./464404.js");