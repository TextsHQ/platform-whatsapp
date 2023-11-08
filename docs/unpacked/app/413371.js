Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeChatBlockSetRequest = function (e) {
  const {
    blockingAction: t
  } = e;
  return (0, i.mergeBaseIQSetRequestMixin)((0, r.smax)("iq", {
    to: a.S_WHATSAPP_NET,
    xmlns: "w:comms:chat"
  }, (0, r.smax)("blocking", {
    action: (0, a.CUSTOM_STRING)(t)
  })));
};
var r = require("./758616.js");
var i = require("./942330.js");
var a = require("./716358.js");