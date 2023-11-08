Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isReactionMsgMeta = exports.isPollVoteMsgMeta = undefined;
var r = require("./883310.js");
exports.isReactionMsgMeta = e => (e == null ? undefined : e.type) === r.STANZA_MSG_TYPES.reaction;
exports.isPollVoteMsgMeta = e => (e == null ? undefined : e.type) === r.STANZA_MSG_TYPES.poll && (e == null ? undefined : e.pollType) === r.POLL_TYPES.vote;