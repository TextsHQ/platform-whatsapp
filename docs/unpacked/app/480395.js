Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeInviteQueryIQPayloadMixin = function (e, t) {
  const n = function (e) {
    const {
      hasNewsletterCreationTimeField: t,
      hasNewsletterNameField: n,
      newsletterPreviewTypePictureFieldMixinArgs: y,
      hasNewsletterDescriptionField: E,
      hasNewsletterInviteLinkField: S,
      hasNewsletterHandleField: v,
      hasNewsletterSubscribersField: T,
      hasNewsletterPrivacyField: M,
      hasNewsletterVerificationField: A,
      hasNewsletterLinkedAccountsField: b,
      hasNewsletterStateField: C
    } = e;
    return (0, h.mergeQueryNewsletterInviteParamsMixin)((0, r.smax)("query", null, (0, i.optionalMerge)(_.mergeNewsletterStateFieldMixin, (0, i.optionalMerge)(c.mergeNewsletterLinkedAccountsFieldMixin, (0, i.optionalMerge)(m.mergeNewsletterVerificationFieldMixin, (0, i.optionalMerge)(f.mergeNewsletterPrivacyFieldMixin, (0, i.optionalMerge)(g.mergeNewsletterSubscribersFieldMixin, (0, i.optionalMerge)(s.mergeNewsletterHandleFieldMixin, (0, i.optionalMerge)(u.mergeNewsletterInviteLinkFieldMixin, (0, i.optionalMerge)(o.mergeNewsletterDescriptionFieldMixin, (0, i.optionalMerge)(p.mergeNewsletterPreviewTypePictureFieldMixin, (0, i.optionalMerge)(d.mergeNewsletterNameFieldMixin, (0, i.optionalMerge)(a.mergeNewsletterCreationTimeFieldMixin, (0, l.mergeNewsletterIDFieldMixin)((0, r.smax)("metadata", null)), t), n), y), E), S), v), T), M), A), b), C)), e);
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
var d = require("./825843.js");
var p = require("./24299.js");
var f = require("./372383.js");
var _ = require("./9908.js");
var g = require("./812832.js");
var m = require("./889670.js");
var h = require("./264938.js");