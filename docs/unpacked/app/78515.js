Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeBaseGetIQMixin = function (e) {
  const t = (0, a.mergeBaseIQGetRequestMixin)((0, r.smax)("iq", {
    xmlns: "w:profile:picture"
  }));
  return (0, i.mergeStanzas)(e, t);
};
var r = require("./758616.js");
var i = require("./770006.js");
var a = require("./731816.js");