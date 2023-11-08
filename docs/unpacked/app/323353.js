Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeRequestSilentNonceRequest = function (e) {
  return (0, i.mergeHackBaseIQGetRequestMixin)((0, r.smax)("iq", {
    xmlns: "fb:thrift_iq",
    smax_id: (0, a.INT)(118)
  }), e);
};
var r = require("./758616.js");
var i = require("./221091.js");
var a = require("./716358.js");