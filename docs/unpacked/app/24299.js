Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeNewsletterPreviewTypePictureFieldMixin = function (e, t) {
  const n = function (e) {
    const {
      baseNewsletterPictureFieldMixinArgs: t
    } = e;
    return (0, r.smax)("metadata", null, (0, a.mergeBaseNewsletterPictureFieldMixin)((0, r.smax)("picture", {
      type: "preview"
    }), t));
  }(t);
  return (0, i.mergeStanzas)(e, n);
};
var r = require("./758616.js");
var i = require("./770006.js");
var a = require("./246114.js");