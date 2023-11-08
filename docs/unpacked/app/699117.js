Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PsBufferUploadWamEvent = undefined;
var r = require("./901032.js");
var i = require("./507201.js");
var a = require("./831655.js");
var o = require("./781061.js");
var s = require("./517238.js");
const {
  BOOLEAN: l,
  INTEGER: u,
  TIMER: c
} = r.TYPES;
const d = (0, r.defineEvents)({
  PsBufferUpload: [2244, {
    applicationState: [6, i.APPLICATION_STATE],
    isFromWamsys: [12, l],
    isUserSampled: [14, l],
    psBufferSequenceNumber: [13, u],
    psBufferUploadHttpResponseCode: [3, u],
    psBufferUploadResult: [1, a.PS_BUFFER_UPLOAD_RESULT],
    psBufferUploadT: [2, c],
    psDitheredT: [11, u],
    psForceUpload: [10, l],
    psTokenNotReadyReason: [4, o.PS_TOKEN_NOT_READY_REASON],
    psUploadReason: [9, s.PS_UPLOAD_REASON],
    waConnectedToChatd: [5, l]
  }, [1, 1, 1], "regular"]
});
exports.PsBufferUploadWamEvent = d;