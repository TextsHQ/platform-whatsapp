var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    json: t,
    mediaMetadata: n,
    contextInfo: r
  } = e;
  (0, l.default)(n, "mediaMetadata should be non-null");
  const u = t.mimetype || n.mimetype;
  const c = n.duration;
  const d = t.waveform || n.waveform;
  const p = c != null && (0, i.isString)(c) ? parseInt(c, 10) : c;
  const f = {
    url: n.url,
    mimetype: u,
    directPath: n.directPath,
    fileSha256: (0, o.encodeBytes)(n.filehash),
    fileEncSha256: (0, o.encodeBytes)(n.encFilehash),
    seconds: p,
    ptt: t.type === "ptt",
    fileLength: (0, i.isNumber)(t.size) ? t.size : undefined,
    mediaKey: (0, o.encodeBytes)(n.mediaKey),
    mediaKeyTimestamp: (0, i.isNumber)(n.mediaKeyTimestamp) ? n.mediaKeyTimestamp : undefined,
    contextInfo: r,
    streamingSidecar: t.streamingSidecar
  };
  if (d) {
    if ((0, a.validateWaveform)(d)) {
      f.waveform = d.buffer;
    } else {
      __LOG__(4, undefined, new Error(), true)`Outgoing waveform with invalid size: ${d.byteLength}`;
      SEND_LOGS("outgoing-waveform-invalid-size");
    }
  }
  (0, o.validateOutgoingRequiredMediaProperties)(t.type ? "ptt" : "audio", f, s.default.isNewsletter(t.to));
  return {
    audioMessage: f
  };
};
var i = require("./724976.js");
var a = require("./484852.js");
var o = require("./974637.js");
var s = r(require("./124928.js"));
var l = r(require("../vendor/441143.js"));