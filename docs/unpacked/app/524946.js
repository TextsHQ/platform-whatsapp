Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeGroupReportRequest = function (e) {
  const {
    messageArgs: t,
    fRXMixinArgs: n,
    spamListJid: d,
    spamListSource: _
  } = e;
  return (0, u.mergeEntitySubjectMixin)((0, o.optionalMerge)(c.mergeFRXMixin, (0, l.mergeBaseReportMixin)((0, s.mergeBaseIQSetRequestMixin)((0, a.smax)("iq", null, (0, a.smax)("spam_list", {
    jid: (0, p.GROUP_JID)(d),
    source: (0, r.OPTIONAL)(p.USER_JID, _)
  }, (0, i.REPEATED_CHILD)(f, t, 0, 210)))), e), n), e);
};
exports.makeGroupReportRequestSpamListMessage = f;
var r = require("./93864.js");
var i = require("./974339.js");
var a = require("./758616.js");
var o = require("./770006.js");
var s = require("./251005.js");
var l = require("./999886.js");
var u = require("./198753.js");
var c = require("./619738.js");
var d = require("./78341.js");
var p = require("./716358.js");
function f(e) {
  const {
    messageFrom: t,
    messagePhash: n
  } = e;
  return (0, d.mergeMessageMixin)((0, a.smax)("message", {
    from: (0, p.GROUP_JID)(t),
    phash: (0, r.OPTIONAL)(p.CUSTOM_STRING, n)
  }), e);
}