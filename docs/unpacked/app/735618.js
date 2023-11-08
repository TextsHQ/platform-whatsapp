Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FTS_TTL = exports.ConversationEndOfHistoryTransferModelPropType = undefined;
const r = require("../vendor/76672.js")({
  COMPLETE_BUT_MORE_MESSAGES_REMAIN_ON_PRIMARY: 0,
  COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY: 1,
  INCOMPLETE: 2,
  NOT_INCLUDED_IN_HIST_SYNC: 3,
  COMPLETE_ON_DEMAND_SYNC_BUT_MORE_MSG_REMAIN_ON_PRIMARY: 4
});
exports.ConversationEndOfHistoryTransferModelPropType = r;
exports.FTS_TTL = 300000;