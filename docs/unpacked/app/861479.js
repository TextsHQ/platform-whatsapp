Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeNewsletterIQSetRequestMixin = function (e, t) {
  const n = function (e) {
    const {
      iqTo: t
    } = e;
    return (0, a.mergeBaseIQSetRequestMixin)((0, r.smax)("iq", {
      to: (0, o.JID)(t),
      xmlns: "newsletter"
    }));
  }(t);
  return (0, i.mergeStanzas)(e, n);
};
var r = require("./758616.js");
var i = require("./770006.js");
var a = require("./645384.js");
var o = require("./716358.js");