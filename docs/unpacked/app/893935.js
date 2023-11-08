Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeChatBlockGetRequest = function () {
  return (0, i.mergeBaseIQGetRequestMixin)((0, r.smax)("iq", {
    to: a.S_WHATSAPP_NET,
    xmlns: "w:comms:chat"
  }, (0, r.smax)("query", null, (0, r.smax)("blocking_status", null))));
};
var r = require("./758616.js");
var i = require("./917160.js");
var a = require("./716358.js");