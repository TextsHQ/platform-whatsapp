Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeMuteRequest = function (e) {
  const {
    newsletterArgs: t
  } = e;
  return (0, a.mergeSelfIQSetRequestMixin)((0, i.smax)("iq", null, (0, i.smax)("mute", null, (0, r.REPEATED_CHILD)(s, t, 0, 10000))));
};
exports.makeMuteRequestMuteNewsletter = s;
var r = require("./974339.js");
var i = require("./758616.js");
var a = require("./833910.js");
var o = require("./716358.js");
function s(e) {
  const {
    newsletterJid: t
  } = e;
  return (0, i.smax)("newsletter", {
    jid: (0, o.JID)(t)
  });
}