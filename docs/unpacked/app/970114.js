Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleNewsletterMsgError = function (e, t) {
  const n = function (e) {
    try {
      return (0, r.receiveNewsletterRPC)(e);
    } catch (e) {
      return null;
    }
  }(t.stanza);
  if (e instanceof i.MessageValidationError) {
    (function (e, t) {
      var n;
      var r;
      new a.IncomingMessageDropWamEvent({
        messageDropReason: l.MESSAGE_DROP_REASON_TYPE.INVALID_PROTOBUF,
        e2eDestination: o.E2E_DESTINATION.CHANNEL,
        offline: (e == null || (n = e.parsedRequest) === null || n === undefined || (r = n.offlineMixin) === null || r === undefined ? undefined : r.offline) != null,
        e2eFailureReason: t == null ? undefined : t.e2eFailureReason,
        messageMediaType: c(e),
        revokeType: (e == null ? undefined : e.parsedRequest.newsletterMessageFanoutContent.name) === "NewsletterRevoke" ? u.REVOKE_TYPE.ADMIN : undefined
      }).commit();
    })(n, e);
  }
};
var r = require("./854387.js");
var i = require("./177205.js");
var a = require("./651785.js");
var o = require("./555678.js");
var s = require("./684290.js");
var l = require("./271791.js");
var u = require("./564066.js");
function c(e) {
  const t = e == null ? undefined : e.parsedRequest.newsletterMessageFanoutContent;
  if (t == null) {
    return s.MEDIA_TYPE.NONE;
  }
  switch (t.name) {
    case "NewsletterReaction":
      return s.MEDIA_TYPE.REACTION;
    case "NewsletterMedia":
      return d(t.value.plaintextMediatype);
    case "NewsletterEdit":
      if (t.value.newsletterTextOrMediaMixinGroup.value.type === "media") {
        return d(t.value.newsletterTextOrMediaMixinGroup.value.plaintextMediatype);
      } else {
        return s.MEDIA_TYPE.NONE;
      }
    case "NewsletterText":
      return s.MEDIA_TYPE.NONE;
    case "NewsletterRevoke":
    case "NewsletterReactionRevoke":
      return s.MEDIA_TYPE.NONE;
    case "NewsletterPollCreation":
      return s.MEDIA_TYPE.POLL_CREATE;
    case "NewsletterPollVote":
      return s.MEDIA_TYPE.POLL_VOTE;
    default:
      t.name;
      return s.MEDIA_TYPE.NONE;
  }
}
function d(e) {
  switch (e) {
    case "video":
      return s.MEDIA_TYPE.VIDEO;
    case "vcard":
      return s.MEDIA_TYPE.CONTACT;
    case "url":
      return s.MEDIA_TYPE.URL;
    case "sticker":
      return s.MEDIA_TYPE.STICKER;
    case "ptt":
      return s.MEDIA_TYPE.PTT;
    case "productlink":
      return s.MEDIA_TYPE.PRODUCT_LINK;
    case "image":
      return s.MEDIA_TYPE.PHOTO;
    case "gif":
      return s.MEDIA_TYPE.GIF;
    case "document":
      return s.MEDIA_TYPE.DOCUMENT;
    case "cataloglink":
      return s.MEDIA_TYPE.CATALOG_LINK;
    case "avatar_sticker":
      return s.MEDIA_TYPE.FUTURE;
    case "audio":
      return s.MEDIA_TYPE.AUDIO;
  }
}