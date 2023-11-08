Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeBaseGetGroupMixin = function (e, t) {
  const n = function (e) {
    const {
      iqTo: t
    } = e;
    return (0, a.mergeBaseIQGetRequestMixin)((0, r.smax)("iq", {
      to: (0, o.GROUP_JID)(t),
      xmlns: "w:g2"
    }));
  }(t);
  return (0, i.mergeStanzas)(e, n);
};
var r = require("./758616.js");
var i = require("./770006.js");
var a = require("./672760.js");
var o = require("./716358.js");