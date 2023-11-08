Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeGetAccessTokenAndSessionCookiesRequest = function (e) {
  const {
    codeElementValue: t
  } = e;
  return (0, i.mergeHackBaseIQGetRequestMixin)((0, r.smax)("iq", {
    xmlns: "fb:thrift_iq",
    smax_id: (0, a.INT)(104)
  }, (0, r.smax)("parameters", null, (0, r.smax)("code", null, t))), e);
};
var r = require("./758616.js");
var i = require("./97857.js");
var a = require("./716358.js");