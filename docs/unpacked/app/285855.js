Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseGetGroupProfilePicturesSuccessOrGetGroupProfilePicturesPartialProfilePictureResponseMixinGroup = function (e) {
  const t = (0, a.parseGetGroupProfilePicturesSuccessProfilePictureResponseMixin)(e);
  if (t.success) {
    return (0, r.makeResult)({
      name: "GetGroupProfilePicturesSuccessProfilePictureResponse",
      value: t.value
    });
  }
  const n = (0, i.parseGetGroupProfilePicturesPartialProfilePictureResponseMixin)(e);
  if (n.success) {
    return (0, r.makeResult)({
      name: "GetGroupProfilePicturesPartialProfilePictureResponse",
      value: n.value
    });
  }
  return (0, o.errorMixinDisjunction)(e, ["SuccessProfilePictureResponse", "PartialProfilePictureResponse"], [t, n]);
};
var r = require("./135781.js");
var i = require("./51372.js");
var a = require("./230685.js");
var o = require("./686310.js");