Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseGetGroupProfilePicturesPartialProfilePictureResponseMixin = function (e) {
  const t = (0, a.assertTag)(e, "picture");
  if (!t.success) {
    return t;
  }
  const n = (0, i.parsePictureDidNotChangeOrPictureNotFoundOrBadServerProfilePictureErrorOrBadLinkedGroupProfilePictureErrorMixinGroup)(e);
  return (0, r.makeResult)({
    pictureDidNotChangeOrPictureNotFoundOrBadServerProfilePictureErrorOrBadLinkedGroupProfilePictureErrorMixinGroup: n.success ? n.value : null
  });
};
var r = require("./135781.js");
var i = require("./660072.js");
var a = require("./686310.js");