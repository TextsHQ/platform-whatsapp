Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeGetDisclosuresRequest = function (e) {
  const {
    getUserDisclosuresT: t
  } = e;
  return (0, i.mergeBaseIQGetRequestMixin)((0, r.smax)("iq", {
    to: a.S_WHATSAPP_NET,
    xmlns: "tos"
  }, (0, r.smax)("get_user_disclosures", {
    t: (0, a.INT)(t)
  })));
};
var r = require("./758616.js");
var i = require("./387083.js");
var a = require("./716358.js");