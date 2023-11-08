Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BotWelcomeMsgProtocolModeType = exports.BotMsgEditType = exports.BotFeedbackKind = exports.BizBotType = exports.BizBotAutomatedType = undefined;
const r = require("../vendor/76672.js")({
  FIRST: "first",
  INNER: "inner",
  LAST: "last",
  FULL: "full"
});
exports.BotMsgEditType = r;
const i = require("../vendor/76672.js")({
  BIZ_1P: "biz_1p",
  BIZ_3P: "biz_3p"
});
exports.BizBotType = i;
const a = require("../vendor/76672.js").Mirrored(["POSITIVE", "NEGATIVE_GENERIC", "NEGATIVE_HELPFUL", "NEGATIVE_INTERESTING", "NEGATIVE_ACCURATE", "NEGATIVE_SAFE", "NEGATIVE_OTHER", "NEGATIVE_REFUSED", "NEGATIVE_NOT_VISUALLY_APPEALING", "NEGATIVE_NOT_RELEVANT_TO_TEXT"]);
exports.BotFeedbackKind = a;
const o = require("../vendor/76672.js")({
  UNKNOWN: "unknown",
  PARTIAL_1P: "1p_partial",
  FULL_3P: "3p_full"
});
exports.BizBotAutomatedType = o;
const s = require("../vendor/76672.js")({
  NONE: "none",
  BASIC: "basic",
  WITH_CHAT_STATE: "with_chat_state"
});
exports.BotWelcomeMsgProtocolModeType = s;