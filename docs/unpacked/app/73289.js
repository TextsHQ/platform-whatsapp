Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeGetCountryCodeRequest = function () {
  return (0, i.mergeBaseIQGetRequestMixin)((0, r.smax)("iq", {
    to: a.S_WHATSAPP_NET,
    xmlns: "md"
  }, (0, r.smax)("link_code_companion_reg", {
    stage: "get_country_code"
  })));
};
var r = require("./758616.js");
var i = require("./596987.js");
var a = require("./716358.js");