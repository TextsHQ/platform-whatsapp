var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNewsletterMessagesQueryParams = function (e) {
  if (l.default.isNewsletter(e)) {
    return {
      queryNewsletterJIDParams: {
        anyJid: (0, o.toNewsletterJid)(e)
      }
    };
  }
  return {
    queryNewsletterInviteParams: {
      anyKey: e
    }
  };
};
exports.getNewsletterMetadataArgs = d;
exports.getNewsletterMetadataQueryParamArgs = function (e, t, n) {
  const r = d(n);
  if (l.default.isNewsletter(e)) {
    return {
      jidQueryOrDeprecatedInviteQueryOrInviteQueryIQPayloadMixinGroupArgs: {
        jidQueryIQPayload: {
          anyJid: (0, o.toNewsletterJid)(e),
          anyViewRole: c(t),
          allNewsletterMetadataIQRequestPayloadMixinArgs: r
        }
      }
    };
  }
  const {
    hasNewsletterMembershipField: s,
    hasNewsletterMutedField: p,
    newsletterPictureFieldMixinArgs: f
  } = r;
  const _ = (0, a.default)(r, u);
  return {
    jidQueryOrDeprecatedInviteQueryOrInviteQueryIQPayloadMixinGroupArgs: {
      inviteQueryIQPayload: (0, i.default)((0, i.default)({
        anyKey: e,
        anyViewRole: c(t)
      }, _), {}, {
        newsletterPreviewTypePictureFieldMixinArgs: {
          baseNewsletterPictureFieldMixinArgs: {}
        }
      })
    }
  };
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/506479.js"));
var o = require("./418987.js");
var s = require("./927531.js");
var l = r(require("./124928.js"));
const u = ["hasNewsletterMembershipField", "hasNewsletterMutedField", "newsletterPictureFieldMixinArgs"];
function c(e) {
  if (e == null) {
    return "guest";
  }
  switch (e) {
    case s.NewsletterMembershipType.Admin:
      return "admin";
    case s.NewsletterMembershipType.Owner:
      return "owner";
    case s.NewsletterMembershipType.Subscriber:
      return "subscriber";
    default:
      return "guest";
  }
}
function d(e) {
  if (e == null) {
    return {
      hasNewsletterCreationTimeField: true,
      hasNewsletterNameField: true,
      newsletterPictureFieldMixinArgs: {
        pictureArgs: [{
          pictureType: "image"
        }, {
          pictureType: "preview"
        }]
      },
      hasNewsletterDescriptionField: true,
      hasNewsletterInviteLinkField: true,
      hasNewsletterHandleField: true,
      hasNewsletterSubscribersField: true,
      hasNewsletterPrivacyField: true,
      hasNewsletterVerificationField: true,
      hasNewsletterLinkedAccountsField: true,
      hasNewsletterMembershipField: true,
      hasNewsletterMutedField: true,
      hasNewsletterStateField: true
    };
  } else {
    return {
      hasNewsletterCreationTimeField: e.creationTime,
      hasNewsletterNameField: e.name,
      newsletterPictureFieldMixinArgs: e.picture === true ? {
        pictureArgs: [{
          pictureType: "image"
        }, {
          pictureType: "preview"
        }]
      } : undefined,
      hasNewsletterDescriptionField: e.description,
      hasNewsletterInviteLinkField: e.inviteLink,
      hasNewsletterHandleField: e.handle,
      hasNewsletterSubscribersField: e.subscribers,
      hasNewsletterPrivacyField: e.privacy,
      hasNewsletterVerificationField: e.verification,
      hasNewsletterLinkedAccountsField: e.linkedAccounts,
      hasNewsletterMembershipField: e.membership,
      hasNewsletterMutedField: e.membership,
      hasNewsletterStateField: e.state
    };
  }
}