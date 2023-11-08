var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseAudioOrPttMessageProto = function (e) {
  let {
    messageProtobuf: t,
    baseMessage: n,
    type: r,
    msgContext: c
  } = e;
  const {
    audioMessage: d
  } = t;
  if (d == null) {
    return;
  }
  const {
    contextInfo: p
  } = d;
  const {
    directPath: f,
    mimetype: _,
    seconds: g,
    mediaKeyTimestamp: m,
    streamingSidecar: h,
    waveform: y,
    backgroundArgb: E
  } = d;
  const {
    mediaKey: S,
    fileSha256: v,
    fileEncSha256: T,
    fileLength: M,
    url: A
  } = (0, l.getValidatedMediaMessageProperties)(d, n, c, r);
  const b = (0, i.default)((0, i.default)({}, n), {}, {
    type: r,
    deprecatedMms3Url: (0, s.decodeUrl)(A),
    directPath: f,
    mimetype: _,
    filehash: (0, s.decodeBytes)(v),
    encFilehash: (0, s.decodeBytes)(T),
    size: M,
    duration: `${g || 0}`,
    mediaKey: (0, s.decodeBytes)(S),
    mediaKeyTimestamp: m != null ? (0, a.numberOrThrowIfTooLarge)(m) : (0, o.unixTime)(),
    streamingSidecar: h,
    waveform: y && u(y) ? new Uint8Array(y) : undefined,
    backgroundColor: E
  });
  (0, s.validateRequiredMediaProperties)(b, d);
  (function (e, t) {
    if (!(0, s.shouldLogE2eProtoValidation)(e, t)) {
      return;
    }
    const n = e.type;
    if (t.seconds == null) {
      __LOG__(2, undefined, undefined, true)`seconds is missing from msg type ${n}`;
      SEND_LOGS(`${n}-message-missing-seconds`);
    } else if (t.seconds === 0) {
      __LOG__(2, undefined, undefined, true)`seconds is 0 in msg type ${n}`;
      SEND_LOGS(`${n}-message-incorrect-seconds`);
    }
    if (t.fileLength == null) {
      __LOG__(2, undefined, undefined, true)`fileLength is missing from msg type ${n}`;
      SEND_LOGS(`${n}-message-missing-fileLength`);
    }
  })(b, d);
  return {
    msgData: b,
    contextInfo: p
  };
};
exports.validateWaveform = u;
var i = r(require("../vendor/81109.js"));
var a = require("./229079.js");
var o = require("./632157.js");
var s = require("./21094.js");
var l = require("./942175.js");
require("./373070.js");
function u(e) {
  return e.byteLength >= 64 && e.byteLength <= 192;
}