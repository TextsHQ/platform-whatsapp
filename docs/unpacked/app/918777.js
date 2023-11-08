Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSetRequest = function (e) {
  const {
    stageMixinArgs: t
  } = e;
  return (0, i.mergeBaseIQSetRequestMixin)((0, r.smax)("iq", {
    to: o.S_WHATSAPP_NET,
    xmlns: "tos"
  }, (0, a.mergeStageMixin)((0, r.smax)("notice", null), t)));
};
var r = require("./758616.js");
var i = require("./822846.js");
var a = require("./709329.js");
var o = require("./716358.js");