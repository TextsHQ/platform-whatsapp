Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeNewsletterReactionRevokeMixin = function (e) {
  const t = (0, a.mergeContentTypeReactionMixin)((0, o.mergeRevokeMixin)((0, r.smax)("message", null, (0, r.smax)("reaction", null))));
  return (0, i.mergeStanzas)(e, t);
};
var r = require("./758616.js");
var i = require("./770006.js");
var a = require("./124718.js");
var o = require("./839320.js");