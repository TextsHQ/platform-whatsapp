Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeBaseSetServerMixin = function (e) {
  const t = (0, o.mergeBaseIQSetRequestMixin)((0, a.smax)("iq", {
    to: l.G_US,
    xmlns: "w:g2"
  }));
  return (0, r.mergeStanzas)(e, t);
};
var a = require("../app/758616.js");
var r = require("../app/770006.js");
var o = require("../app/737475.js");
var l = require("../app/716358.js");