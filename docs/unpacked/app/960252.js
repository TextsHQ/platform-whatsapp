Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeGetPrivacySettingRequest = function () {
  return (0, i.mergeBaseIQGetRequestMixin)((0, r.smax)("iq", {
    xmlns: "w:biz",
    to: a.S_WHATSAPP_NET,
    smax_id: (0, a.INT)(109)
  }, (0, r.smax)("privacy", null)));
};
var r = require("./758616.js");
var i = require("./112242.js");
var a = require("./716358.js");