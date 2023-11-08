Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeMessageEnc = function () {
  return (0, a.smax)("enc", null);
};
exports.makeMessageRaw = T;
exports.mergeMessageMixin = function (e, t) {
  const n = function (e) {
    const {
      rawArgs: t,
      messageT: n,
      messageId: y,
      messageSelected: M,
      messageUnsent: A,
      messageDeletedReason: b,
      hasRevoke: C,
      hasAdminRevoke: P,
      hasMessageEdit: O,
      hasMulticast: I,
      hasPreFilledNumber: R,
      hasPreFilledText: N,
      hasAutomated: D,
      messageWithHsmTemplateMixinArgs: w,
      extensionScreenDataMixinArgs: L,
      messageParticipantMixinArgs: k,
      messageFrankingMixinArgs: G,
      hasSMBBroadcastSource: U,
      messageWithPaymentReportOrPaymentReportDeprecatedOrTypeOrPollMixinGroupArgs: x
    } = e;
    return (0, _.mergeMessageWithPaymentReportOrPaymentReportDeprecatedOrTypeOrPollMixinGroup)((0, o.optionalMerge)(S.mergeSMBBroadcastSourceMixin, (0, o.optionalMerge)(d.mergeMessageFrankingMixin, (0, o.optionalMerge)(p.mergeMessageParticipantMixin, (0, o.optionalMerge)(u.mergeExtensionScreenDataMixin, (0, o.optionalMerge)(f.mergeMessageWithHsmTemplateMixin, (0, o.optionalMerge)(l.mergeAutomatedMixin, (0, o.optionalMerge)(h.mergePreFilledTextMixin, (0, o.optionalMerge)(m.mergePreFilledNumberMixin, (0, o.optionalMerge)(g.mergeMulticastMixin, (0, o.optionalMerge)(c.mergeMessageEditMixin, (0, o.optionalMerge)(s.mergeAdminRevokeMixin, (0, o.optionalMerge)(E.mergeRevokeMixin, (0, a.smax)("message", {
      t: (0, v.INT)(n),
      id: (0, v.STANZA_ID)(y),
      selected: (0, r.OPTIONAL)(v.CUSTOM_STRING, M),
      unsent: (0, r.OPTIONAL)(v.CUSTOM_STRING, A),
      deleted_reason: (0, r.OPTIONAL)(v.CUSTOM_STRING, b)
    }, (0, i.OPTIONAL_CHILD)(T, t)), C), P), O), I), R), N), D), w), L), k), G), U), x);
  }(t);
  return (0, o.mergeStanzas)(e, n);
};
var r = require("./93864.js");
var i = require("./974339.js");
var a = require("./758616.js");
var o = require("./770006.js");
var s = require("./607105.js");
var l = require("./663949.js");
var u = require("./109209.js");
var c = require("./296366.js");
var d = require("./855338.js");
var p = require("./467791.js");
var f = require("./17217.js");
var _ = require("./121005.js");
var g = require("./144518.js");
var m = require("./531000.js");
var h = require("./470888.js");
var y = require("./771009.js");
var E = require("./58768.js");
var S = require("./528732.js");
var v = require("./716358.js");
function T(e) {
  const {
    rawMediatype: t,
    rawElementValue: n,
    rawV2Or3Or3DeprecatedMixinGroupArgs: i
  } = e;
  return (0, y.mergeRawV2Or3Or3DeprecatedMixinGroup)((0, a.smax)("raw", {
    mediatype: (0, r.OPTIONAL)(v.CUSTOM_STRING, t)
  }, n), i);
}