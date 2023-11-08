Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeGetV2Request = function (e) {
  const {
    propsHash: t
  } = e;
  return (0, i.mergeBaseIQGetRequestMixin)((0, r.smax)("iq", {
    to: a.S_WHATSAPP_NET,
    xmlns: "w"
  }, (0, r.smax)("props", {
    protocol: "2",
    hash: (0, a.CUSTOM_STRING)(t)
  })));
};
var r = require("./758616.js");
var i = require("./157532.js");
var a = require("./716358.js");