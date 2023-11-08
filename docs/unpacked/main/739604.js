Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseHasProfilePictureMixin = function (e) {
  const t = (0, r.flattenedChildWithTag)(e, "profile_picture");
  if (!t.success) {
    return t;
  }
  const n = (0, r.flattenedChildWithTag)(t.value, "url");
  if (!n.success) {
    return n;
  }
  const l = (0, r.optionalChildWithTag)(t.value, "bytes", o);
  if (!l.success) {
    return l;
  }
  const i = (0, r.contentString)(n.value);
  if (!i.success) {
    return i;
  }
  return (0, a.makeResult)({
    profilePictureUrlElementValue: i.value,
    profilePictureBytes: l.value
  });
};
exports.parseHasProfilePictureProfilePictureBytes = o;
var a = require("../app/135781.js");
var r = require("../app/686310.js");
function o(e) {
  const t = (0, r.assertTag)(e, "bytes");
  if (!t.success) {
    return t;
  }
  const n = (0, r.contentBytesRange)(e, 0, undefined);
  if (n.success) {
    return (0, a.makeResult)({
      elementValue: n.value
    });
  } else {
    return n;
  }
}