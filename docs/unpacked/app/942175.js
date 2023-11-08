var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getValidatedMediaMessageProperties = function (e, t, n, r) {
  const {
    mediaKey: l,
    fileSha256: f,
    fileEncSha256: _,
    fileLength: g,
    url: m,
    mimetype: h
  } = e;
  if (!(0, o.isMessageDropValidationEnabled)(n) || !S()) {
    return {
      mediaKey: l,
      fileSha256: f,
      fileEncSha256: _,
      fileLength: (0, i.numberOrThrowIfTooLarge)(g != null ? g : 0),
      url: m,
      mimetype: h
    };
  }
  if ((e => e.id == null)(t) || !(0, s.isMediaCryptoExpectedForMsg)(t)) {
    return {
      mediaKey: l,
      fileSha256: f,
      fileEncSha256: _,
      fileLength: (0, i.numberOrThrowIfTooLarge)(g != null ? g : 0),
      url: m,
      mimetype: h
    };
  }
  if (l == null) {
    throw new p(d.MISSING_MEDIA_KEY, c.E2E_FAILURE_REASON.INVALID_IMAGE_MEDIA_KEY);
  }
  if (l.byteLength !== 32) {
    throw new p(d.INVALID_MEDIA_KEY, c.E2E_FAILURE_REASON.INVALID_IMAGE_MEDIA_KEY);
  }
  if ((f == null ? undefined : f.byteLength) !== 32) {
    throw new p(d.INVALID_SHA256, c.E2E_FAILURE_REASON.INVALID_IMAGE_FILE_SHA256);
  }
  if ((_ == null ? undefined : _.byteLength) !== 32) {
    throw new p(d.INVALID_ENC_SHA256, c.E2E_FAILURE_REASON.INVALID_IMAGE_FILE_SHA256);
  }
  if (!(m == null || u.default.isHttps(m) && v(m))) {
    throw new p(d.INVALID_URL, c.E2E_FAILURE_REASON.INVALID_IMAGE_MEDIA_URL);
  }
  if (h == null) {
    throw new p(d.INVALID_MIME_TYPE, c.E2E_FAILURE_REASON.INVALID_IMAGE_MIME_TYPE);
  }
  if ((0, a.getABPropConfigValue)("web_validate_media_mime_type")) {
    const e = E[r];
    if (e != null && !e.has(h)) {
      throw new p(d.INVALID_MIME_TYPE, c.E2E_FAILURE_REASON.INVALID_IMAGE_MIME_TYPE);
    }
  }
  if (g == null) {
    throw new p(d.INVALID_FILE_LENGTH, c.E2E_FAILURE_REASON.INVALID_IMAGE_FILE_LENGTH);
  }
  const y = (0, i.numberOrThrowIfTooLarge)(g);
  if (y <= 0) {
    throw new p(d.INVALID_FILE_LENGTH, c.E2E_FAILURE_REASON.INVALID_IMAGE_FILE_LENGTH);
  }
  return {
    mediaKey: l,
    fileSha256: f,
    fileEncSha256: _,
    fileLength: y,
    url: m,
    mimetype: h
  };
};
exports.isMediaMessageValidationEnabled = S;
exports.isWhatsAppSubdomain = v;
var i = require("./229079.js");
var a = require("./287461.js");
var o = require("./177205.js");
var s = require("./86595.js");
var l = require("./373070.js");
var u = r(require("./79291.js"));
var c = require("./751047.js");
const d = require("../vendor/76672.js")({
  MISSING_MEDIA_KEY: "missing_media_key",
  INVALID_SHA256: "invalid_sha256",
  INVALID_ENC_SHA256: "invalid_enc_sha256",
  INVALID_URL: "invalid_url",
  INVALID_MIME_TYPE: "invalid_mime_type",
  INVALID_MEDIA_KEY: "invalid_media_key",
  INVALID_FILE_LENGTH: "invalid_file_length"
});
class p extends o.MessageValidationError {
  constructor() {
    super(...arguments);
    this.name = "MediaMessageValidationError";
  }
}
const f = "audio/ogg; codecs=opus";
const _ = "audio/mp4";
const g = "audio/mpeg";
const m = "audio/aac";
const h = "audio/amr";
const y = "image/webp";
const E = {
  [l.MSG_TYPE.IMAGE]: new Set(["image/jpeg", "image/png", y]),
  [l.MSG_TYPE.STICKER]: new Set([y]),
  [l.MSG_TYPE.VIDEO]: new Set(["video/mp4", "video/3gpp"]),
  [l.MSG_TYPE.AUDIO]: new Set([f, _, g, m, h]),
  [l.MSG_TYPE.PTT]: new Set([f, _, g, m, h])
};
function S() {
  return (0, a.getABPropConfigValue)("web_invalid_media_message_validation");
}
function v(e) {
  const t = u.default.hostname(e);
  return t.endsWith(".whatsapp.net") || t === "whatsapp.net";
}