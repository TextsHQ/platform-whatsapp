Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeGetExperimentConfigRequest = function (e) {
  const {
    propsHash: t
  } = e;
  return (0, a.mergeBaseIQGetRequestMixin)((0, i.smax)("iq", {
    xmlns: "abt",
    to: o.S_WHATSAPP_NET
  }, (0, i.smax)("props", {
    protocol: "1",
    hash: (0, r.OPTIONAL)(o.CUSTOM_STRING, t)
  })));
};
var r = require("./93864.js");
var i = require("./758616.js");
var a = require("./504293.js");
var o = require("./716358.js");