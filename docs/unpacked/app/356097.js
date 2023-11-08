Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DISPLAY_TYPE = undefined;
exports.isConversationDisplay = function (e) {
  return r.includes(e);
};
exports.isMsgGalleryDisplay = function (e) {
  return i.includes(e);
};
exports.isWideDisplay = function (e) {
  return e === n.ANNOUNCEMENT || e === n.NEWSLETTER;
};
const n = {
  CONVERSATION: "CONVERSATION",
  MSG_INFO: "MSG_INFO",
  STARRED_MSGS: "STARRED_MSGS",
  KEPT_MSGS: "KEPT_MSGS",
  GALLERY: "GALLERY",
  GALLERY_LINKS: "GALLERY_LINKS",
  REPLY_STAGE: "REPLY_STAGE",
  QUOTED_MSG: "QUOTED_MSG",
  CONTACT_CARD: "CONTACT_CARD",
  ORDER: "ORDER",
  STATUS: "STATUS",
  EDITING: "EDITING",
  ANNOUNCEMENT: "ANNOUNCEMENT",
  NEWSLETTER: "NEWSLETTER",
  NEWSLETTER_PREVIEW: "NEWSLETTER_PREVIEW",
  CHANNEL_ALERTS_MSGS: "CHANNEL_ALERTS_MSGS",
  REPORTED_MSG: "REPORTED_MSG",
  BOT_INVOKE_RESPONSE: "BOT_INVOKE_RESPONSE",
  ALL_REPLIES: "ALL_REPLIES"
};
exports.DISPLAY_TYPE = n;
const r = [n.CONVERSATION, n.ANNOUNCEMENT, n.NEWSLETTER, n.BOT_INVOKE_RESPONSE, n.ALL_REPLIES];
const i = [n.STARRED_MSGS, n.REPORTED_MSG, n.CONTACT_CARD, n.GALLERY, n.GALLERY_LINKS];