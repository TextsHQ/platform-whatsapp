Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeSetIQMixin = function (e) {
  const t = (0, a.mergeBaseIQSetRequestMixin)((0, r.smax)("iq", {
    to: o.S_WHATSAPP_NET,
    xmlns: "urn:xmpp:whatsapp:username"
  }));
  return (0, i.mergeStanzas)(e, t);
};
var r = require("./758616.js");
var i = require("./770006.js");
var a = require("./20850.js");
var o = require("./716358.js");