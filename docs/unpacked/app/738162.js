Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseCommonNewsletterMetadataMixin = function (e) {
  const t = (0, h.assertTag)(e, "metadata");
  if (!t.success) {
    return t;
  }
  const n = (0, i.parseNewsletterCreationTimeMetadataMixin)(e);
  const y = (0, d.parseNewsletterNameMetadataMixin)(e);
  const E = (0, p.parseNewsletterPictureMetadataMixin)(e);
  const S = (0, a.parseNewsletterDescriptionMetadataMixin)(e);
  const v = (0, s.parseNewsletterInviteLinkMetadataMixin)(e);
  const T = (0, o.parseNewsletterHandleMetadataMixin)(e);
  const M = (0, g.parseNewsletterSubscribersMetadataMixin)(e);
  const A = (0, f.parseNewsletterPrivacyMetadataMixin)(e);
  const b = (0, m.parseNewsletterVerificationMetadataMixin)(e);
  const C = (0, l.parseNewsletterLinkedAccountsMetadataMixin)(e);
  const P = (0, u.parseNewsletterMembershipMetadataMixin)(e);
  const O = (0, c.parseNewsletterMutedMetadataMixin)(e);
  const I = (0, _.parseNewsletterStateMetadataMixin)(e);
  return (0, r.makeResult)({
    newsletterCreationTimeMetadataMixin: n.success ? n.value : null,
    newsletterNameMetadataMixin: y.success ? y.value : null,
    newsletterPictureMetadataMixin: E.success ? E.value : null,
    newsletterDescriptionMetadataMixin: S.success ? S.value : null,
    newsletterInviteLinkMetadataMixin: v.success ? v.value : null,
    newsletterHandleMetadataMixin: T.success ? T.value : null,
    newsletterSubscribersMetadataMixin: M.success ? M.value : null,
    newsletterPrivacyMetadataMixin: A.success ? A.value : null,
    newsletterVerificationMetadataMixin: b.success ? b.value : null,
    newsletterLinkedAccountsMetadataMixin: C.success ? C.value : null,
    newsletterMembershipMetadataMixin: P.success ? P.value : null,
    newsletterMutedMetadataMixin: O.success ? O.value : null,
    newsletterStateMetadataMixin: I.success ? I.value : null
  });
};
var r = require("./135781.js");
var i = require("./656456.js");
var a = require("./540699.js");
var o = require("./102119.js");
var s = require("./200353.js");
var l = require("./592781.js");
var u = require("./591164.js");
var c = require("./980333.js");
var d = require("./358190.js");
var p = require("./593737.js");
var f = require("./226977.js");
var _ = require("./696015.js");
var g = require("./378441.js");
var m = require("./848962.js");
var h = require("./686310.js");