Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EDIT_ATTR = exports.ACK_STRING = exports.ACK = undefined;
exports.ACK = {
  INACTIVE: -6,
  CONTENT_UNUPLOADABLE: -5,
  CONTENT_TOO_BIG: -4,
  CONTENT_GONE: -3,
  EXPIRED: -2,
  FAILED: -1,
  CLOCK: 0,
  SENT: 1,
  RECEIVED: 2,
  READ: 3,
  PLAYED: 4,
  PEER: 5
};
exports.EDIT_ATTR = {
  MESSAGE_EDIT: 1,
  PIN_IN_CHAT: 2,
  SENDER_REVOKE: 7,
  ADMIN_REVOKE: 8
};
exports.ACK_STRING = {
  SENDER: "sender",
  DELIVERY: "delivery",
  READ: "read",
  PLAYED: "played",
  INACTIVE: "inactive",
  READ_SELF: "read-self",
  PLAYED_SELF: "played-self"
};