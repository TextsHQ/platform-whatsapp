var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createNewsletterQuery = function (e) {
  let {
    name: t,
    description: n,
    picture: r
  } = e;
  if ((0, u.getMexNewsletterSwitch)().isMexEnabledForNewsletterCreation()) {
    return function () {
      return g.apply(this, arguments);
    }(t, n, r);
  }
  return function (e, t, n) {
    const r = (0, d.encodePicture)(n);
    return (0, p.runWithBackoff)(() => function () {
      return _.apply(this, arguments);
    }({
      name: e,
      description: t,
      picture: r
    }));
  }(t, n, r);
};
var i = r(require("../vendor/348926.js"));
var a = require("./571506.js");
var o = require("./984330.js");
var s = require("./876078.js");
var l = require("./849342.js");
var u = require("./573342.js");
var c = require("./716652.js");
var d = require("./800413.js");
var p = require("./408818.js");
var f = r(require("./79291.js"));
function _() {
  return (_ = (0, i.default)(function* (e) {
    let {
      name: t,
      description: n,
      picture: r
    } = e;
    const i = yield (0, a.sendCreateRPC)({
      createRequestMixinMixinArgs: {
        setNameMixinMixinArgs: {
          nameElementValue: t
        },
        setNewDescriptionMixinMixinArgs: n != null ? {
          descriptionElementValue: n
        } : undefined,
        setNewPictureMixinMixinArgs: r != null ? {
          pictureElementValue: r
        } : undefined,
        allNewsletterMetadataIQRequestPayloadMixinArgs: {
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
          hasNewsletterMutedField: true
        }
      }
    });
    switch (i.name) {
      case "CreateResponseSuccess":
        return i.value.newsletterNewsletterWithMetadataIQResponsePayloadMixin;
      case "CreateResponseClientError":
        {
          const e = i.value.badRequestOrRateLimitedIQErrorResponseMixinGroup;
          switch (e.name) {
            case "BadRequestIQErrorResponse":
              {
                const {
                  code: t,
                  text: n
                } = e.value.errorIQErrorBadRequestMixin;
                throw new o.ServerStatusCodeError(Number(t), n);
              }
            case "RateLimitedIQErrorResponse":
              {
                const {
                  code: t,
                  text: n
                } = e.value.errorIQErrorRateOverlimitMixin;
                throw new o.ServerStatusCodeError(Number(t), n);
              }
          }
          break;
        }
      case "CreateResponseServerError":
        {
          const {
            code: e,
            text: t
          } = i.value.errorIQErrorInternalServerErrorMixin;
          throw new o.ServerStatusCodeError(Number(e), t);
        }
    }
  })).apply(this, arguments);
}
function g() {
  return (g = (0, i.default)(function* (e, t, n) {
    let r;
    if (n != null) {
      r = f.default.parseDataURL(n).data;
    }
    const i = yield (0, p.runWithBackoff)(() => (0, c.runWithErrorHandler)(() => (0, s.mexCreateNewsletter)(e, t, r)));
    return (0, l.parseMexNewsletterResponse)(i.xwa2_newsletter_create);
  })).apply(this, arguments);
}