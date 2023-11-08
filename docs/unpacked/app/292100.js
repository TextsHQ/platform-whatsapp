var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseNewsletterMediaMixin = function (e) {
  const t = (0, u.assertTag)(e, "message");
  if (!t.success) {
    return t;
  }
  const n = (0, u.flattenedChildWithTag)(e, "plaintext");
  if (!n.success) {
    return n;
  }
  const r = (0, u.attrStringEnum)(n.value, "mediatype", s.ENUM_AUDIO_AVATARSTICKER_CATALOGLINK_DOCUMENT_GIF_IMAGE_PRODUCTLINK_PTT_STICKER_URL_VCARD_VIDEO);
  if (!r.success) {
    return r;
  }
  const c = (0, l.parsePayloadMixin)(n.value);
  if (!c.success) {
    return c;
  }
  const d = (0, o.parseContentTypeMediaMixin)(e);
  if (!d.success) {
    return d;
  }
  return (0, a.makeResult)((0, i.default)({
    plaintextMediatype: r.value,
    plaintextPayloadMixin: c.value
  }, d.value));
};
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./615692.js");
var s = require("./621945.js");
var l = require("./434861.js");
var u = require("./686310.js");