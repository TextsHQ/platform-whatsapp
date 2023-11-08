Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeGetGroupProfilePicturesProfilePicturesRequestPicturesPicture = d;
exports.mergeGetGroupProfilePicturesProfilePicturesRequestMixin = function (e, t) {
  const n = function (e) {
    const {
      pictureArgs: t,
      subGroupHintMixinArgs: n
    } = e;
    return (0, i.smax)("smax$any", null, (0, a.optionalMerge)(c.mergeSubGroupHintMixin, (0, i.smax)("pictures", null, (0, r.REPEATED_CHILD)(d, t, 1, 1000)), n));
  }(t);
  return (0, a.mergeStanzas)(e, n);
};
var r = require("./974339.js");
var i = require("./758616.js");
var a = require("./770006.js");
var o = require("./631940.js");
var s = require("./821241.js");
var l = require("./323198.js");
var u = require("./147127.js");
var c = require("./377791.js");
function d(e) {
  const {
    profilePictureIdMixinArgs: t,
    profilePictureTypeMixinArgs: n,
    profilePictureQueryMixinArgs: r,
    parentOrSubGroupMixinGroupArgs: c
  } = e;
  return (0, o.mergeParentOrSubGroupMixinGroup)((0, a.optionalMerge)(l.mergeProfilePictureQueryMixin, (0, a.optionalMerge)(u.mergeProfilePictureTypeMixin, (0, a.optionalMerge)(s.mergeProfilePictureIdMixin, (0, i.smax)("picture", null), t), n), r), c);
}