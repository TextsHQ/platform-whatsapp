Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeSelfIQSetRequestMixin = function (e) {
  const t = (0, a.mergeBaseIQSetRequestMixin)((0, r.smax)("iq", {
    to: o.S_WHATSAPP_NET,
    xmlns: "newsletter"
  }));
  return (0, i.mergeStanzas)(e, t);
};
var r = require("./758616.js");
var i = require("./770006.js");
var a = require("./645384.js");
var o = require("./716358.js");