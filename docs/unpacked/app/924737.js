Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeStatusReportRequest = function (e) {
  const {
    fRXMixinArgs: t,
    spamListJid: n,
    bizOptOutMixinArgs: f,
    bizReportMixinArgs: _,
    messageFrom: g,
    messageMixinArgs: m,
    messageRecipientMixinArgs: h
  } = e;
  return (0, i.optionalMerge)(u.mergeFRXMixin, (0, o.mergeBaseReportMixin)((0, a.mergeBaseIQSetRequestMixin)((0, r.smax)("iq", null, (0, i.optionalMerge)(l.mergeBizReportMixin, (0, i.optionalMerge)(s.mergeBizOptOutMixin, (0, r.smax)("spam_list", {
    jid: (0, p.JID)(n)
  }, (0, i.optionalMerge)(d.mergeMessageRecipientMixin, (0, c.mergeMessageMixin)((0, r.smax)("message", {
    from: (0, p.JID)(g)
  }), m), h)), f), _))), e), t);
};
var r = require("./758616.js");
var i = require("./770006.js");
var a = require("./251005.js");
var o = require("./999886.js");
var s = require("./582931.js");
var l = require("./48207.js");
var u = require("./619738.js");
var c = require("./78341.js");
var d = require("./819862.js");
var p = require("./716358.js");