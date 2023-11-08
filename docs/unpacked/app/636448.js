Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSetPrivacySettingRequest = function (e) {
  const {
    smbDataSharingSettingMixinArgs: t
  } = e;
  return (0, a.mergeBaseIQSetRequestMixin)((0, r.smax)("iq", {
    xmlns: "w:biz",
    to: s.S_WHATSAPP_NET,
    smax_id: (0, s.INT)(110)
  }, (0, i.optionalMerge)(o.mergeSmbDataSharingSettingMixin, (0, r.smax)("privacy", null), t)));
};
var r = require("./758616.js");
var i = require("./770006.js");
var a = require("./971602.js");
var o = require("./290742.js");
var s = require("./716358.js");