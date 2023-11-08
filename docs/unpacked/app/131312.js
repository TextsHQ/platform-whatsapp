Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeNewsletterReactionMixin = function (e, t) {
  const n = function (e) {
    const {
      reactionCode: t
    } = e;
    return (0, a.mergeContentTypeReactionMixin)((0, r.smax)("message", null, (0, r.smax)("reaction", {
      code: (0, o.CUSTOM_STRING)(t)
    })));
  }(t);
  return (0, i.mergeStanzas)(e, n);
};
var r = require("./758616.js");
var i = require("./770006.js");
var a = require("./124718.js");
var o = require("./716358.js");