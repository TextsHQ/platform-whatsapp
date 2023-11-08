var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  var n;
  var r;
  const {
    parsedRequest: o,
    makeNewsletterResponseSuccess: l
  } = (0, i.receiveNewsletterRPC)(e);
  const {
    newsletterMessageFanoutContent: {
      name: f
    }
  } = o;
  return {
    ack: l(),
    type: d(f),
    msg: {
      id: o.id,
      t: o.t,
      isSender: o.isSender === "true",
      serverId: o.serverId,
      reactionCode: u(o.newsletterMessageFanoutContent),
      pollVote: c(o.newsletterMessageFanoutContent),
      from: (0, a.jidWithTypeToWid)({
        jidType: "newsletter",
        newsletterJid: o.from
      }),
      to: (0, s.getMeUser)(),
      payload: p(o),
      offline: ((t = o.offlineMixin) === null || t === undefined ? undefined : t.offline) != null,
      msgEditT: (n = o.newsletterMessageLastEditTimestampMixin) === null || n === undefined ? undefined : n.metaMsgEditT,
      msgOriginalT: (r = o.newsletterMessageOriginalTimestampMixin) === null || r === undefined ? undefined : r.metaOriginalMsgT
    }
  };
};
var i = require("./854387.js");
var a = require("./854379.js");
var o = require("./911600.js");
var s = require("./459857.js");
var l = r(require("./556869.js"));
function u(e) {
  if (e.name === "NewsletterReaction") {
    return e.value.reactionCode;
  } else if (e.name === "NewsletterReactionRevoke") {
    return o.REVOKED_REACTION_TEXT;
  } else {
    return undefined;
  }
}
function c(e) {
  if (e.name === "NewsletterPollVote") {
    return e.value.votesVote.map(e => {
      let {
        elementValue: t
      } = e;
      return t;
    });
  }
}
function d(e) {
  switch (e) {
    case "NewsletterRevoke":
      return "revoke";
    case "NewsletterText":
    case "NewsletterMedia":
      return "chat";
    case "NewsletterReaction":
    case "NewsletterReactionRevoke":
      return "reaction";
    case "NewsletterEdit":
      return "edit";
    case "NewsletterPollCreation":
      return "pollCreation";
    case "NewsletterPollVote":
      return "pollVote";
    default:
      throw (0, l.default)(`Unsupported message type: ${e}.`);
  }
}
function p(e) {
  if (e.newsletterMessageFanoutContent.name === "NewsletterRevoke" || e.newsletterMessageFanoutContent.name === "NewsletterReaction" || e.newsletterMessageFanoutContent.name === "NewsletterReactionRevoke" || e.newsletterMessageFanoutContent.name === "NewsletterPollVote") {
    return new Uint8Array(0);
  } else if (e.newsletterMessageFanoutContent.name === "NewsletterEdit") {
    return e.newsletterMessageFanoutContent.value.newsletterTextOrMediaMixinGroup.value.plaintextPayloadMixin.elementValue;
  } else {
    e.newsletterMessageFanoutContent.name;
    return e.newsletterMessageFanoutContent.value.plaintextPayloadMixin.elementValue;
  }
}