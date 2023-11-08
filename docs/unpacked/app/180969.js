var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseGetGroupProfilePicturesResponseSuccessGroupPictures = function (e, t) {
  const n = (0, l.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const r = (0, s.parseIQResultResponseMixin)(e, t);
  if (!r.success) {
    return r;
  }
  const u = (0, o.parseGetGroupProfilePicturesProfilePicturesResponseMixin)(e);
  if (!u.success) {
    return u;
  }
  return (0, a.makeResult)((0, i.default)((0, i.default)({}, r.value), u.value));
};
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./729438.js");
var s = require("./769758.js");
var l = require("./686310.js");