Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.STANZA_MSG_TYPES = exports.STANZA_MSG_ORIGIN = exports.STANZA_MSG_ADDRESSING_MODE = exports.POLL_TYPES = exports.PAY_NODE_TYPES = exports.MSG_VERIFIED_LEVEL = exports.HsmMismatchError = exports.CATEGORY_PEER = exports.BIZ_SOURCE_ATTR = undefined;
var r = require("./477689.js");
exports.STANZA_MSG_TYPES = {
  text: "text",
  media: "media",
  pay: "pay",
  poll: "poll",
  reaction: "reaction"
};
exports.STANZA_MSG_ORIGIN = {
  ctwa: "ctwa",
  username: "username"
};
exports.STANZA_MSG_ADDRESSING_MODE = {
  pn: "pn",
  lid: "lid"
};
exports.POLL_TYPES = {
  creation: "creation",
  vote: "vote"
};
exports.MSG_VERIFIED_LEVEL = {
  high: "high",
  low: "low",
  unknown: "unknown"
};
exports.CATEGORY_PEER = "peer";
class i extends (0, r.customError)("HSMMismatchError") {}
exports.HsmMismatchError = i;
exports.PAY_NODE_TYPES = {
  send: "send",
  request: "request",
  futureproof: "futureproof",
  "request-decline": "request-decline",
  "request-cancel": "request-cancel",
  invite: "invite"
};
exports.BIZ_SOURCE_ATTR = "biz_source";