Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseGetGroupProfilePicturesProfilePicturesResponseMixin = function (e) {
  const t = (0, o.flattenedChildWithTag)(e, "pictures");
  if (!t.success) {
    return t;
  }
  const n = (0, o.mapChildrenWithTag)(t.value, "picture", 1, 1000, s);
  if (!n.success) {
    return n;
  }
  return (0, r.makeResult)({
    picturesPicture: n.value
  });
};
exports.parseGetGroupProfilePicturesProfilePicturesResponsePicturesPicture = s;
var r = require("./135781.js");
var i = require("./285855.js");
var a = require("./251126.js");
var o = require("./686310.js");
function s(e) {
  const t = (0, o.assertTag)(e, "picture");
  if (!t.success) {
    return t;
  }
  const n = (0, a.parseParentOrSubGroupMixinGroup)(e);
  if (!n.success) {
    return n;
  }
  const s = (0, i.parseGetGroupProfilePicturesSuccessOrGetGroupProfilePicturesPartialProfilePictureResponseMixinGroup)(e);
  if (s.success) {
    return (0, r.makeResult)({
      parentOrSubGroupMixinGroup: n.value,
      getGroupProfilePicturesSuccessOrGetGroupProfilePicturesPartialProfilePictureResponseMixinGroup: s.value
    });
  } else {
    return s;
  }
}