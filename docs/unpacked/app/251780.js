Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.APICmd = undefined;
exports.isWAURL = function (e) {
  return n.test(e);
};
exports.APICmd = {
  GROUP_INVITE: "GROUP_INVITE",
  MSG_SEND: "MSG_SEND",
  INVALID: "INVALID",
  CATALOG: "CATALOG",
  PRODUCT: "PRODUCT",
  PUSH_NOTIFICATION: "PUSH_NOTIFICATION",
  CREATE_COMMUNITY: "CREATE_COMMUNITY",
  NEWSLETTER: "NEWSLETTER",
  AVATAR_STICKERPACK: "AVATAR_STICKERPACK",
  ADVERTISE: "ADVERTISE",
  MANAGE_ADS: "MANAGE_ADS",
  MESSAGE_YOURSELF: "MESSAGE_YOURSELF"
};
const n = /^whatsapp:\/\/.*/i;