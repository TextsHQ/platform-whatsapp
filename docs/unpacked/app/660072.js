Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parsePictureDidNotChangeOrPictureNotFoundOrBadServerProfilePictureErrorOrBadLinkedGroupProfilePictureErrorMixinGroup = function (e) {
  const t = (0, o.parsePictureDidNotChangeMixin)(e);
  if (t.success) {
    return (0, r.makeResult)({
      name: "PictureDidNotChange",
      value: t.value
    });
  }
  const n = (0, s.parsePictureNotFoundMixin)(e);
  if (n.success) {
    return (0, r.makeResult)({
      name: "PictureNotFound",
      value: n.value
    });
  }
  const u = (0, a.parseBadServerProfilePictureErrorMixin)(e);
  if (u.success) {
    return (0, r.makeResult)({
      name: "BadServerProfilePictureError",
      value: u.value
    });
  }
  const c = (0, i.parseBadLinkedGroupProfilePictureErrorMixin)(e);
  if (c.success) {
    return (0, r.makeResult)({
      name: "BadLinkedGroupProfilePictureError",
      value: c.value
    });
  }
  return (0, l.errorMixinDisjunction)(e, ["PictureDidNotChange", "PictureNotFound", "BadServerProfilePictureError", "BadLinkedGroupProfilePictureError"], [t, n, u, c]);
};
var r = require("./135781.js");
var i = require("./467280.js");
var a = require("./717341.js");
var o = require("./204023.js");
var s = require("./67231.js");
var l = require("./686310.js");