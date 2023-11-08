var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inFlightStickerRequests = exports.MEDIA_REUPLOAD_REQUEST_LIMIT = undefined;
exports.initializeMediaUploadResultFromStorage = function (e) {
  f.clear();
  e.forEach(e => {
    if (e.operationType === c.DataRequestUploadOperationType.MEDIA_UPLOAD) {
      f.set(e.id, e);
    }
  });
};
exports.insertMediaUploadResult = function (e, t) {
  const n = [];
  e.forEach((e, r) => {
    var i;
    const a = m(r, u.Message$PeerDataOperationRequestType.UPLOAD_STICKER, c.DataRequestUploadOperationType.MEDIA_UPLOAD);
    const o = f.get(a);
    const l = !h(t, o == null ? undefined : o.lastMediaUploadTimeStampSec);
    const d = e === s.UploadMediaResultKind.SUCCESS;
    const p = (l ? 0 : (i = o == null ? undefined : o.mediaUploadFailureCount) !== null && i !== undefined ? i : 0) + (d ? 0 : 1);
    const _ = {
      id: a,
      fileKey: r,
      requestType: u.Message$PeerDataOperationRequestType.UPLOAD_STICKER,
      operationType: c.DataRequestUploadOperationType.MEDIA_UPLOAD,
      lastMediaUploadTimeStampSec: t,
      lastMediaUploadSuccess: d,
      mediaUploadFailureCount: p
    };
    f.set(a, _);
    n.push(_);
  });
  (0, c.getNonMessageDataRequestTable)().bulkCreateOrReplace(n);
};
exports.insertResponseError = function () {
  return g.apply(this, arguments);
};
exports.mediaUploadResultMap = exports.mediaReuploadRequestCountMap = undefined;
exports.retryNonMessageDataRequestJob = function () {
  _.clear();
  return (0, l.createNonPersistedJob)("requestAllSyncdMissingKeys", (0, i.default)(function* () {
    const e = (0, o.unixTime)();
    const t = (0, c.getNonMessageDataRequestTable)();
    const n = yield t.all();
    n.filter(t => t.operationType === c.DataRequestUploadOperationType.MEDIA_UPLOAD && t.requestType === u.Message$PeerDataOperationRequestType.UPLOAD_STICKER && !(t.lastRequestTimeStampSec != null && e - t.lastRequestTimeStampSec > o.HOUR_SECONDS * 48) && !(t.requestRetryCount != null && t.requestRetryCount >= 3));
    (0, d.sendPeerDataOperationRequest)(u.Message$PeerDataOperationRequestType.UPLOAD_STICKER, {
      fileSha256Arr: n.map(e => e.fileKey)
    });
  }), {
    priority: a.JOB_PRIORITY.LOW
  }).waitUntilCompleted();
};
exports.shouldSkipMediaUploadWithCancellation = function (e, t, n) {
  const r = m(e, t, c.DataRequestUploadOperationType.MEDIA_UPLOAD);
  const i = f.get(r);
  const a = h(n, i == null ? undefined : i.lastRequestTimeStampSec);
  return i != null && i.lastMediaUploadSuccess === false && a && i.mediaUploadFailureCount != null && i.mediaUploadFailureCount >= 15;
};
exports.shouldSkipMediaUploadWithSuccess = function (e, t, n) {
  const r = m(e, t, c.DataRequestUploadOperationType.MEDIA_UPLOAD);
  const i = f.get(r);
  return i != null && i.lastMediaUploadSuccess === true && i.lastMediaUploadTimeStampSec != null && n - i.lastMediaUploadTimeStampSec <= o.DAY_SECONDS;
};
var i = r(require("../vendor/348926.js"));
var a = require("./775593.js");
var o = require("./632157.js");
var s = require("./709089.js");
var l = require("./899137.js");
var u = require("./533494.js");
var c = require("./9339.js");
var d = require("./437911.js");
exports.MEDIA_REUPLOAD_REQUEST_LIMIT = 15;
const p = new Set();
exports.inFlightStickerRequests = p;
const f = new Map();
exports.mediaUploadResultMap = f;
const _ = new Map();
function g() {
  return (g = (0, i.default)(function* (e, t) {
    const n = (0, c.getNonMessageDataRequestTable)();
    const r = Array.from(e.keys());
    const a = (0, o.unixTime)();
    const s = [];
    yield Promise.all(r.map(function () {
      var r = (0, i.default)(function* (r) {
        var i;
        const o = m(r, t, c.DataRequestUploadOperationType.SEND_REQUEST);
        const l = yield n.get(o);
        s.push({
          id: o,
          fileKey: r,
          requestType: t,
          operationType: c.DataRequestUploadOperationType.SEND_REQUEST,
          lastRequestTimeStampSec: a,
          requestRetryCount: ((i = l == null ? undefined : l.requestRetryCount) !== null && i !== undefined ? i : 0) + 1,
          responseError: e.get(r)
        });
      });
      return function () {
        return r.apply(this, arguments);
      };
    }())).then(() => {
      n.bulkCreateOrReplace(s);
    });
  })).apply(this, arguments);
}
function m(e, t, n) {
  return e + "_" + String(t) + "_" + String(n);
}
function h(e, t) {
  const n = new Date(e * 1000).toDateString();
  return n === (t != null ? new Date(t * 1000).toDateString() : n);
}
exports.mediaReuploadRequestCountMap = _;