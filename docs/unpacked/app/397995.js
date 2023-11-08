var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendNewsletterMessage = g;
exports.sendNewsletterMessageJob = function (e) {
  return (0, d.createNonPersistedJob)("sendNewsletterMessage", () => g(e), {
    priority: a.JOB_PRIORITY.UI_ACTION
  }).waitUntilCompleted();
};
var i = r(require("../vendor/81109.js"));
var a = require("./775593.js");
var o = require("./303754.js");
var s = require("./973776.js");
var l = require("./21838.js");
var u = require("./344371.js");
var c = require("./263318.js");
var d = require("./899137.js");
var p = require("./533494.js");
var f = require("./385914.js");
var _ = r(require("./556869.js"));
function g(e) {
  (0, c.validateNewsletterJidOrThrow)(e.newsletterJid);
  switch (e.type) {
    case "edit":
      {
        const t = e.editType === "text" ? undefined : e.mediaMetadata;
        const n = (0, l.getProtobufMessage)(e.msgData, t);
        const r = (0, f.encodeProtobuf)(p.MessageSpec, n);
        return (0, u.querySendNewsletterMessage)({
          type: "edit",
          messageId: e.msgData.id.id,
          newsletterJid: e.newsletterJid,
          payload: r.readByteArray()
        });
      }
    case "pollCreation":
    case "text":
    case "media":
      {
        const t = e.type === "media" ? e.mediaMetadata : undefined;
        const n = (0, l.getProtobufMessage)(e.msgData, t);
        const r = e.type === "media" ? {
          mediaHandle: e.mediaHandle,
          type: m(n)
        } : {
          type: e.type
        };
        return (0, u.querySendNewsletterMessage)((0, i.default)((0, i.default)({}, r), {}, {
          messageId: e.msgData.id.id,
          newsletterJid: e.newsletterJid,
          payload: (0, f.encodeProtobuf)(p.MessageSpec, n).readByteArray()
        }));
      }
    case "revoke":
      return (0, u.querySendNewsletterMessage)({
        messageId: e.messageId,
        newsletterJid: e.newsletterJid,
        type: "revoke",
        isContentMedia: e.isContentMedia
      });
    case "reaction":
      return (0, u.querySendNewsletterMessage)({
        type: "reaction",
        newsletterJid: e.newsletterJid,
        reactionCode: e.reactionCode,
        messageId: e.msgData.id.id,
        parentMsgServerId: e.parentMsgServerId
      });
    case "pollVote":
      return (0, u.querySendNewsletterMessage)({
        type: "pollVote",
        newsletterJid: e.newsletterJid,
        votes: e.votes,
        messageId: e.msgData.id.id,
        parentMsgServerId: e.parentMsgServerId
      });
    default:
      e.type;
      return Promise.reject((0, _.default)(`Unexpected message type: ${e.type}`));
  }
}
function m(e) {
  const t = (0, s.mediaTypeFromProtobuf)(e);
  if (t == null) {
    __LOG__(4, undefined, new Error(), true, ["newsletter"])`[newsletter] Failed to get media type from protobuf`;
    SEND_LOGS("newsletter-failed-media-type-from-protobuf", 1, "newsletter");
    throw (0, _.default)("Failed to get media type from protobuf");
  }
  switch (t) {
    case o.EncMediaType.Audio:
      return "audio";
    case o.EncMediaType.Document:
      return "document";
    case o.EncMediaType.Gif:
      return "gif";
    case o.EncMediaType.Image:
      return "image";
    case o.EncMediaType.Ptt:
      return "ptt";
    case o.EncMediaType.Sticker:
      return "sticker";
    case o.EncMediaType.Url:
      return "url";
    case o.EncMediaType.VCard:
      return "vcard";
    case o.EncMediaType.Video:
      return "video";
    default:
      __LOG__(4, undefined, new Error(), true, ["newsletter"])`[newsletter] Unsupported media type`;
      SEND_LOGS(`newsletter-unsupported-media-type-${t}`, 1, "newsletter");
      throw (0, _.default)(`Unsupported media type ${t}`);
  }
}