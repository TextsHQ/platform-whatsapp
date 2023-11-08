var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.editNewsletterMetadataQuery = function (e, t, n) {
  if ((0, _.getMexNewsletterSwitch)().isMexEnabledForNewsletterUpdate()) {
    return function () {
      return T.apply(this, arguments);
    }(e, t, n);
  }
  return (0, y.runWithBackoff)(() => function () {
    return v.apply(this, arguments);
  }(e, t, n));
};
exports.emptyNewsletterMetadataType = function (e) {
  return {
    idJid: e,
    newsletterMutedMetadataMixin: null,
    newsletterCreationTimeMetadataMixin: null,
    newsletterNameMetadataMixin: null,
    newsletterPictureMetadataMixin: null,
    newsletterDescriptionMetadataMixin: null,
    newsletterInviteLinkMetadataMixin: null,
    newsletterHandleMetadataMixin: null,
    newsletterSubscribersMetadataMixin: null,
    newsletterPrivacyMetadataMixin: null,
    newsletterVerificationMetadataMixin: null,
    newsletterLinkedAccountsMetadataMixin: null,
    newsletterMembershipMetadataMixin: null,
    newsletterStateMetadataMixin: null
  };
};
exports.queryAllNewslettersMetadata = function () {
  const e = function () {
    var e = (0, a.default)(function* () {
      if ((0, _.getMexNewsletterSwitch)().isMexEnabledForQueryAllNewsletters()) {
        return (0, p.handleMexGetAllNewsletters)();
      }
      const e = (0, h.getNewsletterMetadataArgs)();
      const t = yield (0, l.sendGetAllSubscribedNewslettersRPC)({
        allNewsletterMetadataIQRequestPayloadMixinArgs: e
      });
      switch (t.name) {
        case "GetAllSubscribedNewslettersResponseSuccess":
          return {
            newsletters: t.value.newsletter,
            deletedNewsletters: t.value.deleted
          };
        case "GetAllSubscribedNewslettersResponseClientError":
          {
            const e = t.value.badRequestOrRateLimitedIQErrorResponseMixinGroup;
            switch (e.name) {
              case "BadRequestIQErrorResponse":
                {
                  const {
                    code: t,
                    text: n
                  } = e.value.errorIQErrorBadRequestMixin;
                  throw new d.ServerStatusCodeError(Number(t), n);
                }
              case "RateLimitedIQErrorResponse":
                {
                  const {
                    code: t,
                    text: n
                  } = e.value.errorIQErrorRateOverlimitMixin;
                  throw new d.ServerStatusCodeError(Number(t), n);
                }
            }
            break;
          }
        case "GetAllSubscribedNewslettersResponseServerError":
          {
            const {
              code: e,
              text: n
            } = t.value.errorIQErrorInternalServerErrorMixin;
            throw new d.ServerStatusCodeError(Number(e), n);
          }
      }
    });
    return function () {
      return e.apply(this, arguments);
    };
  }();
  return (0, y.runWithBackoff)(e);
};
exports.queryNewsletterMetadataByInviteCode = function (e, t) {
  const n = (0, _.getMexNewsletterSwitch)().isMexEnabledForNewsletterMetadataByInvite();
  const r = (0, h.getNewsletterMetadataQueryParamArgs)(e, t, {
    creationTime: true,
    name: true,
    picture: true,
    description: true,
    inviteLink: true,
    handle: true,
    subscribers: true,
    privacy: true,
    verification: true,
    linkedAccounts: true,
    state: true
  });
  return (0, y.runWithBackoff)(() => E(r, n));
};
exports.queryNewsletterMetadataByJid = function (e, t, n) {
  const r = (0, _.getMexNewsletterSwitch)().isMexEnabledForNewsletterMetadataByJID();
  const i = (0, h.getNewsletterMetadataQueryParamArgs)(e, t, n);
  return (0, y.runWithBackoff)(() => E(i, r));
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = r(require("./367420.js"));
var s = require("./417405.js");
var l = require("./443572.js");
var u = require("./995166.js");
var c = require("./627475.js");
var d = require("./984330.js");
var p = require("./183782.js");
var f = require("./849342.js");
var _ = require("./573342.js");
var g = require("./716652.js");
var m = require("./836897.js");
var h = require("./645149.js");
var y = require("./408818.js");
function E() {
  return S.apply(this, arguments);
}
function S() {
  return (S = (0, a.default)(function* (e, t) {
    if (t === true) {
      return (0, g.handleMexGetNewsletter)(e);
    }
    const n = yield (0, u.sendGetNewsletterRPC)(e);
    switch (n.name) {
      case "GetNewsletterResponseSuccess":
        return n.value.newsletterMetadata;
      case "GetNewsletterResponseClientError":
        {
          const e = n.value.getNewsletterClientErrors;
          switch (e.name) {
            case "NotAllowedIQErrorResponse":
              {
                const {
                  code: t,
                  text: n
                } = e.value.errorIQErrorNotAllowedMixin;
                throw new d.ServerStatusCodeError(Number(t), n);
              }
            case "BadRequestIQErrorResponse":
              {
                const {
                  code: t,
                  text: n
                } = e.value.errorIQErrorBadRequestMixin;
                throw new d.ServerStatusCodeError(Number(t), n);
              }
            case "ItemNotFoundIQErrorResponse":
              {
                const {
                  code: t,
                  text: n
                } = e.value.errorIQErrorItemNotFoundMixin;
                throw new d.ServerStatusCodeError(Number(t), n);
              }
            case "SuspendedIQErrorResponse":
              {
                const {
                  code: t,
                  text: n
                } = e.value.errorIQErrorLockedMixin;
                throw new d.ServerStatusCodeError(Number(t), n);
              }
            case "RateLimitedIQErrorResponse":
              {
                const {
                  code: t,
                  text: n
                } = e.value.errorIQErrorRateOverlimitMixin;
                throw new d.ServerStatusCodeError(Number(t), n);
              }
            default:
              throw (0, o.default)(e);
          }
        }
      case "GetNewsletterResponseServerError":
        {
          const {
            code: e,
            text: t
          } = n.value.errorIQErrorInternalServerErrorMixin;
          throw new d.ServerStatusCodeError(Number(e), t);
        }
    }
  })).apply(this, arguments);
}
function v() {
  return (v = (0, a.default)(function* (e, t, n) {
    const {
      editName: r,
      editDescription: a,
      editPicture: o
    } = t;
    const {
      name: s,
      description: l,
      picture: u
    } = n;
    let p;
    let f;
    let _;
    let g = {};
    if (r && s != null) {
      p = {
        nameElementValue: s.trim()
      };
      g = (0, i.default)((0, i.default)({}, g), {}, {
        hasNewsletterNameField: true
      });
    }
    if (a) {
      f = l != null && l.trim() !== "" ? {
        setNewOrEmptyDescriptionMixinMixinGroupArgs: {
          setNewDescriptionMixin: {
            descriptionElementValue: l.trim()
          }
        }
      } : {
        setNewOrEmptyDescriptionMixinMixinGroupArgs: {
          isSetEmptyDescriptionMixin: true
        }
      };
      g = (0, i.default)((0, i.default)({}, g), {}, {
        hasNewsletterDescriptionField: true
      });
    }
    if (o) {
      _ = u != null ? {
        setNewOrEmptyPictureMixinMixinGroupArgs: {
          setNewPictureMixin: {
            pictureElementValue: u
          }
        }
      } : {
        setNewOrEmptyPictureMixinMixinGroupArgs: {
          isSetEmptyPictureMixin: true
        }
      };
      g = (0, i.default)((0, i.default)({}, g), {}, {
        newsletterPictureFieldMixinArgs: {
          pictureArgs: [{
            pictureType: "image"
          }, {
            pictureType: "preview"
          }]
        }
      });
    }
    const m = yield (0, c.sendSetNewsletterMetadataRPC)({
      iqTo: e,
      setNewsletterMetadataMixinMixinArgs: {
        setNameMixinMixinArgs: r ? p : undefined,
        setDescriptionMixinMixinArgs: a ? f : undefined,
        setPictureMixinMixinArgs: o ? _ : undefined
      },
      queryArgs: Object.keys(g).length > 0 ? g : undefined
    });
    switch (m.name) {
      case "SetNewsletterMetadataResponseSuccess":
        return m.value.metadataNewsletterMetadataIQResponsePayloadMixin;
      case "SetNewsletterMetadataResponseClientError":
        {
          const e = m.value.setNewsletterMetadataClientErrors;
          switch (e.name) {
            case "BadRequestIQErrorResponse":
              {
                const {
                  code: t,
                  text: n
                } = e.value.errorIQErrorBadRequestMixin;
                throw new d.ServerStatusCodeError(Number(t), n);
              }
            case "ItemNotFoundIQErrorResponse":
              {
                const {
                  code: t,
                  text: n
                } = e.value.errorIQErrorItemNotFoundMixin;
                throw new d.ServerStatusCodeError(Number(t), n);
              }
            case "UnauthorizedIQErrorResponse":
              {
                const {
                  code: t,
                  text: n
                } = e.value.errorIQErrorNotAuthorizedMixin;
                throw new d.ServerStatusCodeError(Number(t), n);
              }
            case "SuspendedIQErrorResponse":
              {
                const {
                  code: t,
                  text: n
                } = e.value.errorIQErrorLockedMixin;
                throw new d.ServerStatusCodeError(Number(t), n);
              }
          }
          break;
        }
      case "SetNewsletterMetadataResponseServerError":
        {
          const {
            code: e,
            text: t
          } = m.value.errorIQErrorInternalServerErrorMixin;
          throw new d.ServerStatusCodeError(Number(e), t);
        }
    }
  })).apply(this, arguments);
}
function T() {
  return (T = (0, a.default)(function* (e, t, n) {
    const {
      editName: r,
      editDescription: i,
      editPicture: a,
      editReactionCodesSetting: o
    } = t;
    const {
      name: l,
      description: u,
      picture: c,
      reactionCodesSetting: d
    } = n;
    let p;
    if (c != null) {
      p = (0, s.encodeB64)(c);
    }
    const _ = M(a, p);
    const h = M(r, l);
    const E = M(i, u);
    const S = o === true ? d : null;
    const v = yield (0, y.runWithBackoff)(() => (0, g.runWithErrorHandler)(() => (0, m.mexUpdateNewsletter)(e, h, E, _, S)));
    return (0, f.parseMexNewsletterResponse)(v.xwa2_newsletter_update);
  })).apply(this, arguments);
}
function M(e, t) {
  if (e === true) {
    if (t != null) {
      return t;
    } else {
      return "";
    }
  }
}