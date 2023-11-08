Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeNewsletterEditMixin = function (e, t) {
  const n = function (e) {
    const {
      newsletterTextOrMediaMixinGroupArgs: t
    } = e;
    return (0, o.mergeNewsletterTextOrMediaMixinGroup)((0, a.mergeAdminEditMixin)((0, r.smax)("message", null)), t);
  }(t);
  return (0, i.mergeStanzas)(e, n);
};
var r = require("./758616.js");
var i = require("./770006.js");
var a = require("./921016.js");
var o = require("./58513.js");