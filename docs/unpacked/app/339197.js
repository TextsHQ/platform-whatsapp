Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeNewsletterReportRequest = function (e) {
  const {
    messageArgs: t,
    spamListJid: n
  } = e;
  return (0, s.mergeEntitySubjectMixin)((0, o.mergeBaseReportMixin)((0, a.mergeBaseIQSetRequestMixin)((0, i.smax)("iq", null, (0, i.smax)("spam_list", {
    jid: (0, u.JID)(n)
  }, (0, r.REPEATED_CHILD)(c, t, 0, 30)))), e), e);
};
exports.makeNewsletterReportRequestSpamListMessage = c;
var r = require("./974339.js");
var i = require("./758616.js");
var a = require("./251005.js");
var o = require("./999886.js");
var s = require("./198753.js");
var l = require("./78341.js");
var u = require("./716358.js");
function c(e) {
  const {
    messageFrom: t
  } = e;
  return (0, l.mergeMessageMixin)((0, i.smax)("message", {
    from: (0, u.JID)(t)
  }), e);
}