var r = require("./530066.js").default;
var i = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadSyncExternalPatch = exports.downloadSyncBlob = undefined;
var a = i(require("../vendor/81109.js"));
var o = i(require("../vendor/348926.js"));
var s = require("./417405.js");
var l = require("./256764.js");
var u = require("./941555.js");
var c = require("./263958.js");
var d = require("./22383.js");
var p = i(require("./92577.js"));
var f = require("./845972.js");
var _ = require("./495588.js");
var g = i(require("./556869.js"));
exports.uploadSyncExternalPatch = e => p.default.encryptAndUpload({
  blob: e,
  signal: new r().signal,
  type: "md-app-state",
  uploadOrigin: _.UPLOAD_ORIGIN_TYPE.UNKNOWN,
  userUploadAttemptCount: 0,
  forwardedFromWeb: false,
  isViewOnce: false
}).then(e => {
  let {
    mediaKey: t,
    directPath: n,
    encFilehash: r,
    handle: i
  } = e;
  if (i == null) {
    throw (0, g.default)("Missing handle after uploading external patch to mms4");
  }
  return {
    mediaKey: (0, s.decodeB64)(t),
    directPath: n,
    encFilehash: (0, s.decodeB64)(r),
    handle: i
  };
});
const m = function () {
  var e = (0, o.default)(function* (e, t, n) {
    const {
      mediaKey: i,
      directPath: o,
      fileSha256: p,
      fileEncSha256: _
    } = e;
    const g = {
      directPath: o,
      encFilehash: (0, s.encodeB64)(_),
      filehash: (0, s.encodeB64)(p),
      mediaKey: (0, s.encodeB64)(i),
      type: "md-app-state",
      userDownloadAttemptCount: 0
    };
    try {
      return yield u.downloadManager.downloadAndMaybeDecrypt((0, a.default)({
        signal: new r().signal
      }, g));
    } catch (r) {
      __LOG__(2)`syncd: error downloading ${t} of expected size ${e.fileSizeBytes} with expected hash b64 length of ${(0, s.encodeB64)(e.fileEncSha256).length} for collection ${n}`;
      if (r instanceof c.MediaNotFoundError) {
        (0, d.uploadFatalErrorMetric)(t === "patch" ? f.MD_SYNCD_FATAL_ERROR_CODE.EXTERNAL_PATCH_EXPIRED : f.MD_SYNCD_FATAL_ERROR_CODE.SNAPSHOT_EXPIRED, n);
        throw new l.SyncdFatalError("external patch expired");
      }
      throw r;
    }
  });
  return function () {
    return e.apply(this, arguments);
  };
}();
exports.downloadSyncBlob = m;