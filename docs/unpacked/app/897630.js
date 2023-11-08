var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseGetResponseSuccessPictureBlob = function (e, t) {
  const n = (0, l.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const r = (0, l.flattenedChildWithTag)(e, "picture");
  if (!r.success) {
    return r;
  }
  const u = (0, l.attrString)(r.value, "id");
  if (!u.success) {
    return u;
  }
  const c = (0, l.attrStringEnum)(r.value, "type", o.ENUM_IMAGE_PREVIEW);
  if (!c.success) {
    return c;
  }
  const d = (0, l.contentBytesRange)(r.value, 1, undefined);
  if (!d.success) {
    return d;
  }
  const p = (0, s.parseIQResultResponseMixin)(e, t);
  if (!p.success) {
    return p;
  }
  return (0, a.makeResult)((0, i.default)({
    pictureId: u.value,
    pictureType: c.value,
    pictureElementValue: d.value
  }, p.value));
};
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./104217.js");
var s = require("./319020.js");
var l = require("./686310.js");