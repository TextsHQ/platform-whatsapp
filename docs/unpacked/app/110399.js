Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeIndividualReportRequest = function (e) {
  const {
    messageArgs: t,
    callArgs: n,
    fRXMixinArgs: p,
    spamListJid: f,
    bizOptOutMixinArgs: E,
    uIStateSetMixinArgs: S,
    bizReportMixinArgs: v,
    tCTokenMixinArgs: T
  } = e;
  return (0, o.optionalMerge)(d.mergeFRXMixin, (0, l.mergeBaseReportMixin)((0, s.mergeBaseIQSetRequestMixin)((0, a.smax)("iq", null, (0, o.optionalMerge)(_.mergeTCTokenMixin, (0, o.optionalMerge)(c.mergeBizReportMixin, (0, o.optionalMerge)(g.mergeUIStateSetMixin, (0, o.optionalMerge)(u.mergeBizOptOutMixin, (0, a.smax)("spam_list", {
    jid: (0, r.OPTIONAL)(m.JID, f)
  }, [...(0, i.REPEATED_CHILD)(h, t, 0, 210), ...(0, i.REPEATED_CHILD)(y, n, 0, 5)]), E), S), v), T))), e), p);
};
exports.makeIndividualReportRequestSpamListCall = y;
exports.makeIndividualReportRequestSpamListMessage = h;
var r = require("./93864.js");
var i = require("./974339.js");
var a = require("./758616.js");
var o = require("./770006.js");
var s = require("./251005.js");
var l = require("./999886.js");
var u = require("./582931.js");
var c = require("./48207.js");
var d = require("./619738.js");
var p = require("./78341.js");
var f = require("./899131.js");
var _ = require("./79202.js");
var g = require("./210474.js");
var m = require("./716358.js");
function h(e) {
  const {
    messageSenderOrRecipientMixinGroupArgs: t
  } = e;
  return (0, f.mergeMessageSenderOrRecipientMixinGroup)((0, p.mergeMessageMixin)((0, a.smax)("message", null), e), t);
}
function y(e) {
  const {
    callTo: t,
    callFrom: n,
    callId: i,
    callInfoDuration: o,
    callInfoReason: s,
    callInfoTerminator: l,
    callInfoAdder: u,
    callInfoCreator: c,
    callInfoMediatype: d
  } = e;
  return (0, a.smax)("call", {
    to: (0, m.USER_JID)(t),
    from: (0, m.USER_JID)(n),
    id: (0, m.STANZA_ID)(i)
  }, (0, a.smax)("call_info", {
    duration: (0, m.INT)(o),
    reason: (0, m.CUSTOM_STRING)(s),
    terminator: (0, m.USER_JID)(l),
    adder: (0, r.OPTIONAL)(m.USER_JID, u),
    creator: (0, r.OPTIONAL)(m.USER_JID, c),
    mediatype: (0, r.OPTIONAL)(m.CUSTOM_STRING, d)
  }));
}