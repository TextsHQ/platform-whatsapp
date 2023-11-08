Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseProfilePictureUrlOrBlobResponseMixinGroup = function (e) {
  const t = (0, a.parseProfilePictureUrlResponseMixin)(e);
  if (t.success) {
    return (0, r.makeResult)({
      name: "ProfilePictureUrlResponse",
      value: t.value
    });
  }
  const n = (0, i.parseProfilePictureBlobResponseMixin)(e);
  if (n.success) {
    return (0, r.makeResult)({
      name: "ProfilePictureBlobResponse",
      value: n.value
    });
  }
  return (0, o.errorMixinDisjunction)(e, ["ProfilePictureUrlResponse", "ProfilePictureBlobResponse"], [t, n]);
};
var r = require("./135781.js");
var i = require("./599473.js");
var a = require("./628428.js");
var o = require("./686310.js");