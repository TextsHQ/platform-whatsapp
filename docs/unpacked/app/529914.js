Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MediaDownload2WamEvent = undefined;
var r = require("./901032.js");
var i = require("./542009.js");
var a = require("./141209.js");
var o = require("./59095.js");
var s = require("./766400.js");
var l = require("./296526.js");
var u = require("./648211.js");
var c = require("./432650.js");
var d = require("./684290.js");
var p = require("./495456.js");
const {
  BOOLEAN: f,
  INTEGER: _,
  NUMBER: g,
  STRING: m,
  TIMER: h
} = r.TYPES;
const y = (0, r.defineEvents)({
  MediaDownload2: [1590, {
    clientMessageId: [50, m],
    connectionType: [31, a.CONNECTION_TYPE],
    daysSinceReceive: [46, _],
    debugMediaException: [24, m],
    debugMediaIp: [22, m],
    debugUrl: [23, m],
    deviceCount: [49, _],
    downloadBytesTransferred: [20, g],
    downloadConnectT: [15, h],
    downloadHttpCode: [18, _],
    downloadIsReuse: [17, f],
    downloadIsStreaming: [19, f],
    downloadNetworkT: [16, h],
    downloadQuality: [37, s.DOWNLOAD_QUALITY_TYPE],
    downloadResumePoint: [14, _],
    downloadTimeToFirstByteT: [21, h],
    estimatedBandwidth: [36, g],
    expressPathBytesSaved: [42, g],
    expressPathTimeSavedMs: [43, h],
    fileHeight: [47, _],
    fileWidth: [48, _],
    hasLeveragedExpressPath: [44, f],
    httpProtocolVersionType: [45, l.HTTP_PROTOCOL_VERSION_TYPE],
    isViewOnce: [41, f],
    mediaId: [38, _],
    networkStack: [30, p.NETWORK_STACK_TYPE],
    overallAttemptCount: [4, _],
    overallBackendStore: [39, i.BACKEND_STORE_TYPE],
    overallConnBlockFetchT: [10, h],
    overallConnectionClass: [29, m],
    overallCumT: [27, h],
    overallDecryptT: [12, h],
    overallDomain: [5, m],
    overallDownloadMode: [11, u.MEDIA_DOWNLOAD_MODE_TYPE],
    overallDownloadOrigin: [35, o.DOWNLOAD_ORIGIN_TYPE],
    overallDownloadResult: [25, c.MEDIA_DOWNLOAD_RESULT_TYPE],
    overallFileValidationT: [13, h],
    overallIsEncrypted: [28, f],
    overallIsFinal: [26, f],
    overallMediaSize: [7, g],
    overallMediaType: [1, d.MEDIA_TYPE],
    overallMmsVersion: [6, _],
    overallQueueT: [9, h],
    overallRetryCount: [3, _],
    overallT: [8, h],
    usedFallbackHint: [40, m]
  }, [1, 1, 50], "regular"]
});
exports.MediaDownload2WamEvent = y;