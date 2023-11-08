Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSendBufferRequest = function (e) {
  const {
    addT: t,
    bufferMixinArgs: n
  } = e;
  return (0, i.mergeBaseIQSetRequestMixin)((0, r.smax)("iq", {
    xmlns: "w:stats",
    to: o.S_WHATSAPP_NET
  }, (0, a.mergeBufferMixin)((0, r.smax)("add", {
    t: (0, o.INT)(t)
  }), n)));
};
var r = require("./758616.js");
var i = require("./881547.js");
var a = require("./833763.js");
var o = require("./716358.js");