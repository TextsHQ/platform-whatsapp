Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeBaseNewsletterPictureFieldMixin = function (e, t) {
  const n = function (e) {
    const {
      pictureId: t
    } = e;
    return (0, i.smax)("picture", {
      id: (0, r.OPTIONAL)(o.CUSTOM_STRING, t),
      query: "direct_path"
    });
  }(t);
  return (0, a.mergeStanzas)(e, n);
};
var r = require("./93864.js");
var i = require("./758616.js");
var a = require("./770006.js");
var o = require("./716358.js");