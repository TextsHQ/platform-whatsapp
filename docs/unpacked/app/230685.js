var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseGetGroupProfilePicturesSuccessProfilePictureResponseMixin = function (e) {
  const t = (0, u.assertTag)(e, "picture");
  if (!t.success) {
    return t;
  }
  const n = (0, o.parseProfilePictureIdMixin)(e);
  if (!n.success) {
    return n;
  }
  const r = (0, s.parseProfilePictureTypeMixin)(e);
  if (!r.success) {
    return r;
  }
  const c = (0, l.parseProfilePictureUrlOrBlobResponseMixinGroup)(e);
  return (0, a.makeResult)((0, i.default)((0, i.default)((0, i.default)({}, n.value), r.value), {}, {
    profilePictureUrlOrBlobResponseMixinGroup: c.success ? c.value : null
  }));
};
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./539307.js");
var s = require("./821830.js");
var l = require("./868433.js");
var u = require("./686310.js");