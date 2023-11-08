var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.querySendNewsletterMessage = function () {
  return u.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./432685.js");
var o = require("./757585.js");
var s = require("./263318.js");
var l = r(require("./556869.js"));
function u() {
  return (u = (0, i.default)(function* (e) {
    (0, s.validateNewsletterJidOrThrow)(e.newsletterJid);
    const t = {
      messageTo: e.newsletterJid,
      clientNewsletterOrNewsletterAndServerIDMixinGroupArgs: c(e)
    };
    const n = yield (0, a.sendNewsletterRPC)(t);
    switch (n.name) {
      case "NewsletterResponseSuccess":
        return {
          success: true,
          ack: {
            t: n.value.t
          },
          serverId: n.value.serverId
        };
      case "NewsletterResponseNegative":
        return {
          success: false,
          ack: {
            t: n.value.t,
            error: n.value.error
          }
        };
    }
  })).apply(this, arguments);
}
function c(e) {
  switch (e.type) {
    case "reaction":
      return function (e) {
        const {
          reactionCode: t
        } = e;
        const n = t != null && t !== "" ? {
          newsletterReaction: {
            reactionCode: t
          }
        } : {
          isNewsletterReactionRevoke: true
        };
        return {
          newsletterClientAndServerID: {
            messageId: (0, o.toStanzaId)(e.messageId),
            messageServerId: e.parentMsgServerId,
            newsletterReactionOrReactionRevokeOrPollVoteMixinGroupArgs: n
          }
        };
      }(e);
    case "pollVote":
      return function (e) {
        const t = {
          voteArgs: e.votes.map(e => ({
            voteElementValue: e
          }))
        };
        return {
          newsletterClientAndServerID: {
            messageId: (0, o.toStanzaId)(e.messageId),
            messageServerId: e.parentMsgServerId,
            newsletterReactionOrReactionRevokeOrPollVoteMixinGroupArgs: {
              newsletterPollVote: t
            }
          }
        };
      }(e);
    default:
      return {
        newsletterClientID: d(e)
      };
  }
}
function d(e) {
  switch (e.type) {
    case "edit":
      return {
        messageId: (0, o.toStanzaId)(e.messageId),
        newsletterEditOrTextOrMediaPublishOrRevokeOrPollCreationMixinGroupArgs: {
          newsletterEdit: {
            newsletterTextOrMediaMixinGroupArgs: {
              newsletterText: {
                payloadMixinArgs: {
                  plaintextElementValue: e.payload
                }
              }
            }
          }
        }
      };
    case "revoke":
      return {
        messageId: (0, o.toStanzaId)(e.messageId),
        newsletterEditOrTextOrMediaPublishOrRevokeOrPollCreationMixinGroupArgs: {
          isNewsletterRevoke: true
        }
      };
    case "pollCreation":
      return {
        messageId: (0, o.toStanzaId)(e.messageId),
        newsletterEditOrTextOrMediaPublishOrRevokeOrPollCreationMixinGroupArgs: {
          newsletterPollCreation: {
            payloadMixinArgs: {
              plaintextElementValue: e.payload
            }
          }
        }
      };
    case "text":
      return {
        messageId: (0, o.toStanzaId)(e.messageId),
        newsletterEditOrTextOrMediaPublishOrRevokeOrPollCreationMixinGroupArgs: {
          newsletterText: {
            payloadMixinArgs: {
              plaintextElementValue: e.payload
            }
          }
        }
      };
    case "audio":
    case "avatar_sticker":
    case "document":
    case "gif":
    case "image":
    case "ptt":
    case "sticker":
    case "url":
    case "vcard":
    case "video":
      return {
        messageId: (0, o.toStanzaId)(e.messageId),
        newsletterEditOrTextOrMediaPublishOrRevokeOrPollCreationMixinGroupArgs: {
          newsletterMediaPublish: {
            plaintextMediatype: e.type,
            payloadMixinArgs: {
              plaintextElementValue: e.payload
            },
            messageMediaId: e.mediaHandle
          }
        }
      };
    default:
      e.type;
      throw (0, l.default)(`Wrong code path for ${e.type}`);
  }
}