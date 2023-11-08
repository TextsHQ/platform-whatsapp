Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeAllNewsletterMetadataIQRequestPayloadMixin = function (e, t) {
  const n = function (e) {
    const {
      hasNewsletterCreationTimeField: t,
      hasNewsletterNameField: n,
      hasNewsletterDescriptionField: E,
      hasNewsletterInviteLinkField: S,
      hasNewsletterHandleField: v,
      hasNewsletterSubscribersField: T,
      hasNewsletterPrivacyField: M,
      hasNewsletterVerificationField: A,
      hasNewsletterLinkedAccountsField: b,
      hasNewsletterStateField: C,
      newsletterPictureFieldMixinArgs: P,
      hasNewsletterMembershipField: O,
      hasNewsletterMutedField: I
    } = e;
    return (0, i.optionalMerge)(p.mergeNewsletterMutedFieldMixin, (0, i.optionalMerge)(d.mergeNewsletterMembershipFieldMixin, (0, i.optionalMerge)(_.mergeNewsletterPictureFieldMixin, (0, i.optionalMerge)(m.mergeNewsletterStateFieldMixin, (0, i.optionalMerge)(c.mergeNewsletterLinkedAccountsFieldMixin, (0, i.optionalMerge)(y.mergeNewsletterVerificationFieldMixin, (0, i.optionalMerge)(g.mergeNewsletterPrivacyFieldMixin, (0, i.optionalMerge)(h.mergeNewsletterSubscribersFieldMixin, (0, i.optionalMerge)(s.mergeNewsletterHandleFieldMixin, (0, i.optionalMerge)(u.mergeNewsletterInviteLinkFieldMixin, (0, i.optionalMerge)(o.mergeNewsletterDescriptionFieldMixin, (0, i.optionalMerge)(f.mergeNewsletterNameFieldMixin, (0, i.optionalMerge)(a.mergeNewsletterCreationTimeFieldMixin, (0, l.mergeNewsletterIDFieldMixin)((0, r.smax)("metadata", null)), t), n), E), S), v), T), M), A), b), C), P), O), I);
  }(t);
  return (0, i.mergeStanzas)(e, n);
};
var r = require("./758616.js");
var i = require("./770006.js");
var a = require("./809983.js");
var o = require("./494373.js");
var s = require("./701869.js");
var l = require("./913182.js");
var u = require("./904559.js");
var c = require("./124133.js");
var d = require("./412884.js");
var p = require("./557440.js");
var f = require("./825843.js");
var _ = require("./881689.js");
var g = require("./372383.js");
var m = require("./9908.js");
var h = require("./812832.js");
var y = require("./889670.js");