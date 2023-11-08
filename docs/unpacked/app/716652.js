var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertMutationResponse = function (e) {
  if (e != null && e.id != null) {
    var t;
    var n;
    let r;
    let i;
    if (((t = e.newsletter_state) === null || t === undefined ? undefined : t.type) === "SUSPENDED") {
      i = {
        error: "423"
      };
    }
    if (((n = e.newsletter_state) === null || n === undefined ? undefined : n.type) === "NON_EXISTING") {
      r = {
        error: "404"
      };
    }
    return {
      jid: (0, a.toNewsletterJid)(e.id),
      subscriberNotFoundMixin: r,
      newsletterSuspendedErrorMixin: i
    };
  }
  throw new o.ServerStatusCodeError(500, "unexpected_mex_mutation_response");
};
exports.handleMexGetNewsletter = function () {
  return f.apply(this, arguments);
};
exports.handleMexNewsletterError = p;
exports.mapReactionCodesSettingToMexInput = function (e) {
  switch (e) {
    case s.NewsletterReactionCodesSetting.All:
      return "ALL";
    case s.NewsletterReactionCodesSetting.Basic:
      return "BASIC";
    case s.NewsletterReactionCodesSetting.None:
      return "NONE";
    case s.NewsletterReactionCodesSetting.Blocklist:
      return "BLOCKLIST";
  }
};
exports.mapRoleToMembership = function (e) {
  switch (e) {
    case "OWNER":
      return s.NewsletterMembershipType.Owner;
    case "SUBSCRIBER":
      return s.NewsletterMembershipType.Subscriber;
    case "ADMIN":
      return s.NewsletterMembershipType.Admin;
    case "GUEST":
      return s.NewsletterMembershipType.Guest;
  }
};
exports.mapViewRoleToMexViewRole = g;
exports.runWithErrorHandler = function () {
  return _.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./418987.js");
var o = require("./984330.js");
var s = require("./927531.js");
var l = require("./553044.js");
var u = require("./733811.js");
var c = require("./849342.js");
var d = require("./561225.js");
function p(e) {
  __LOG__(4, undefined, new Error(), undefined, ["GQL", "MEX"])`[MEX][NEWSLETTER] fetch query newsletter error`;
  if (e instanceof d.MexFatalExtensionError) {
    const t = e.error.extensions.error_code;
    throw new o.ServerStatusCodeError(Number(t), "MexFatalExtensionError:" + e.error.message);
  }
  if (e instanceof d.MexIqError) {
    throw new o.ServerStatusCodeError(e.code, "MexIqError");
  }
  throw e;
}
function f() {
  return (f = (0, i.default)(function* (e) {
    try {
      var t;
      var n;
      var r;
      var i;
      var a;
      const o = (t = e.jidQueryOrDeprecatedInviteQueryOrInviteQueryIQPayloadMixinGroupArgs.jidQueryIQPayload) === null || t === undefined ? undefined : t.anyJid;
      const s = (n = e.jidQueryOrDeprecatedInviteQueryOrInviteQueryIQPayloadMixinGroupArgs.inviteQueryIQPayload) === null || n === undefined ? undefined : n.anyKey;
      const d = (r = (i = e.jidQueryOrDeprecatedInviteQueryOrInviteQueryIQPayloadMixinGroupArgs.jidQueryIQPayload) === null || i === undefined ? undefined : i.anyViewRole) !== null && r !== undefined ? r : (a = e.jidQueryOrDeprecatedInviteQueryOrInviteQueryIQPayloadMixinGroupArgs.inviteQueryIQPayload) === null || a === undefined ? undefined : a.anyViewRole;
      const p = o != null ? o : s;
      if (p != null) {
        let t;
        t = y(e) ? yield (0, l.mexGetNewsletterDehydrated)(p, g(d)) : yield (0, u.mexGetNewsletter)(p, g(d), {
          fetchViewerMetadata: m(e),
          fetchCreationTime: h("hasNewsletterCreationTimeField", e)
        });
        if (t == null) {
          return;
        }
        return (0, c.parseMexNewsletterResponse)(t.xwa2_newsletter);
      }
    } catch (e) {
      p(e);
    }
  })).apply(this, arguments);
}
function _() {
  return (_ = (0, i.default)(function* (e) {
    try {
      return yield e();
    } catch (e) {
      p(e);
      throw e;
    }
  })).apply(this, arguments);
}
function g(e) {
  if (e == null) {
    return "GUEST";
  }
  switch (e) {
    case "admin":
      return "ADMIN";
    case "owner":
      return "OWNER";
    case "subscriber":
      return "SUBSCRIBER";
    default:
      return "GUEST";
  }
}
function m(e) {
  var t;
  var n;
  var r;
  var i;
  var a;
  var o;
  var s;
  var l;
  let u = false;
  let c = false;
  u = (t = e.jidQueryOrDeprecatedInviteQueryOrInviteQueryIQPayloadMixinGroupArgs.jidQueryIQPayload) === null || t === undefined || (n = t.allNewsletterMetadataIQRequestPayloadMixinArgs) === null || n === undefined ? undefined : n.hasNewsletterMutedField;
  return u === true || (u = (r = e.jidQueryOrDeprecatedInviteQueryOrInviteQueryIQPayloadMixinGroupArgs.deprecatedInviteQueryIQPayload) === null || r === undefined || (i = r.allNewsletterMetadataIQRequestPayloadMixinArgs) === null || i === undefined ? undefined : i.hasNewsletterMutedField, u === true || (c = (a = e.jidQueryOrDeprecatedInviteQueryOrInviteQueryIQPayloadMixinGroupArgs.jidQueryIQPayload) === null || a === undefined || (o = a.allNewsletterMetadataIQRequestPayloadMixinArgs) === null || o === undefined ? undefined : o.hasNewsletterMembershipField, c === true || (c = (s = e.jidQueryOrDeprecatedInviteQueryOrInviteQueryIQPayloadMixinGroupArgs.deprecatedInviteQueryIQPayload) === null || s === undefined || (l = s.allNewsletterMetadataIQRequestPayloadMixinArgs) === null || l === undefined ? undefined : l.hasNewsletterMembershipField, c === true)));
}
function h(e, t) {
  var n;
  var r;
  var i;
  const a = (n = (r = t.jidQueryOrDeprecatedInviteQueryOrInviteQueryIQPayloadMixinGroupArgs.jidQueryIQPayload) === null || r === undefined ? undefined : r.allNewsletterMetadataIQRequestPayloadMixinArgs) !== null && n !== undefined ? n : t.jidQueryOrDeprecatedInviteQueryOrInviteQueryIQPayloadMixinGroupArgs.inviteQueryIQPayload;
  return a == null || ((i = Object.getOwnPropertyDescriptor(a, e)) === null || i === undefined ? undefined : i.value) === true;
}
function y(e) {
  const t = e.jidQueryOrDeprecatedInviteQueryOrInviteQueryIQPayloadMixinGroupArgs.jidQueryIQPayload;
  if (t != null) {
    const e = t.allNewsletterMetadataIQRequestPayloadMixinArgs;
    return e.hasNewsletterCreationTimeField !== true && e.hasNewsletterNameField !== true && e.hasNewsletterDescriptionField !== true && e.hasNewsletterInviteLinkField !== true && e.hasNewsletterHandleField !== true && e.hasNewsletterPrivacyField !== true && e.hasNewsletterLinkedAccountsField !== true && e.hasNewsletterStateField !== true && e.newsletterPictureFieldMixinArgs == null && e.hasNewsletterMembershipField !== true && e.hasNewsletterMutedField !== true && e.hasNewsletterVerificationField === true && e.hasNewsletterSubscribersField === true;
  }
  return false;
}