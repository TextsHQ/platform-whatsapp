Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeNewsletterPictureFieldPicture = l;
exports.mergeNewsletterPictureFieldMixin = function (e, t) {
  const n = function (e) {
    const {
      pictureArgs: t
    } = e;
    return (0, i.smax)("metadata", null, (0, r.REPEATED_CHILD)(l, t, 0, 2));
  }(t);
  return (0, a.mergeStanzas)(e, n);
};
var r = require("./974339.js");
var i = require("./758616.js");
var a = require("./770006.js");
var o = require("./246114.js");
var s = require("./716358.js");
function l(e) {
  const {
    pictureType: t
  } = e;
  return (0, o.mergeBaseNewsletterPictureFieldMixin)((0, i.smax)("picture", {
    type: (0, s.CUSTOM_STRING)(t)
  }), e);
}