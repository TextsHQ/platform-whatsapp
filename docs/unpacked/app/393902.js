Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MediaUpload2WamEvent = undefined;
var r = require("./901032.js");
var i = require("./141209.js");
var a = require("./296526.js");
var o = require("./501329.js");
var s = require("./684290.js");
var l = require("./123278.js");
var u = require("./550407.js");
var c = require("./495456.js");
var d = require("./767978.js");
var p = require("./937849.js");
var f = require("./658018.js");
var _ = require("./495588.js");
var g = require("./268682.js");
const {
  BOOLEAN: m,
  INTEGER: h,
  NUMBER: y,
  STRING: E,
  TIMER: S
} = r.TYPES;
const v = (0, r.defineEvents)({
  MediaUpload2: [1588, {
    batchSize: [57, h],
    connectionType: [43, i.CONNECTION_TYPE],
    debugMediaException: [34, E],
    debugMediaIp: [32, E],
    debugUrl: [33, E],
    estimatedBandwidth: [45, y],
    fileHeight: [55, h],
    fileWidth: [56, h],
    finalizeConnectT: [28, S],
    finalizeHttpCode: [31, h],
    finalizeIsReuse: [30, m],
    finalizeNetworkT: [29, S],
    httpProtocolVersionType: [51, a.HTTP_PROTOCOL_VERSION_TYPE],
    isViewOnce: [49, m],
    mediaId: [46, h],
    networkStack: [42, c.NETWORK_STACK_TYPE],
    originalSize: [53, h],
    overallAttemptCount: [4, h],
    overallConnBlockFetchT: [10, S],
    overallConnectionClass: [41, E],
    overallCumT: [37, S],
    overallCumUserVisibleT: [38, S],
    overallDomain: [5, E],
    overallEncryptT: [50, S],
    overallIsFinal: [36, m],
    overallIsForward: [16, m],
    overallIsManual: [13, m],
    overallLastUploadRetryPhase: [11, p.OVERALL_LAST_UPLOAD_RETRY_PHASE_TYPE],
    overallMediaKeyReuse: [40, f.OVERALL_MEDIA_KEY_REUSE_TYPE],
    overallMediaSize: [7, y],
    overallMediaType: [1, s.MEDIA_TYPE],
    overallMmsVersion: [6, h],
    overallOptimisticFlag: [12, d.OPTIMISTIC_FLAG_TYPE],
    overallQueueT: [9, S],
    overallRetryCount: [3, h],
    overallT: [8, S],
    overallTranscodeT: [15, S],
    overallUploadMode: [39, l.MEDIA_UPLOAD_MODE_TYPE],
    overallUploadOrigin: [44, _.UPLOAD_ORIGIN_TYPE],
    overallUploadResult: [35, u.MEDIA_UPLOAD_RESULT_TYPE],
    overallUserVisibleT: [14, S],
    photoQualitySetting: [52, o.MEDIA_QUALITY],
    resumeConnectT: [17, S],
    resumeHttpCode: [20, h],
    resumeIsReuse: [19, m],
    resumeNetworkT: [18, S],
    uploadBytesTransferred: [27, y],
    uploadConnectT: [22, S],
    uploadHttpCode: [25, h],
    uploadIsReuse: [24, m],
    uploadIsStreaming: [26, m],
    uploadNetworkT: [23, S],
    uploadResumePoint: [21, h],
    uploadSource: [48, g.UPLOAD_SOURCE_TYPE],
    usedFallbackHint: [47, E],
    videoQualitySetting: [54, o.MEDIA_QUALITY]
  }, [1, 1, 1], "regular"]
});
exports.MediaUpload2WamEvent = v;