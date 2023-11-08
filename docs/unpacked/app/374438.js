Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeSetNewPictureMixinMixin = function (e, t) {
  const n = function (e) {
    const {
      pictureElementValue: t
    } = e;
    return (0, r.smax)("metadata", null, (0, r.smax)("picture", null, t));
  }(t);
  return (0, i.mergeStanzas)(e, n);
};
var r = require("./758616.js");
var i = require("./770006.js");