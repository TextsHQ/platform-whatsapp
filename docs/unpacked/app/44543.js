Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let t;
  let {
    json: n
  } = e;
  switch (n.botFeedbackKind) {
    case r.BotFeedbackKind.POSITIVE:
      t = a.Message$BotFeedbackMessage$BotFeedbackKind.BOT_FEEDBACK_POSITIVE;
      break;
    case r.BotFeedbackKind.NEGATIVE_GENERIC:
      t = a.Message$BotFeedbackMessage$BotFeedbackKind.BOT_FEEDBACK_NEGATIVE_GENERIC;
      break;
    case r.BotFeedbackKind.NEGATIVE_HELPFUL:
      t = a.Message$BotFeedbackMessage$BotFeedbackKind.BOT_FEEDBACK_NEGATIVE_HELPFUL;
      break;
    case r.BotFeedbackKind.NEGATIVE_INTERESTING:
      t = a.Message$BotFeedbackMessage$BotFeedbackKind.BOT_FEEDBACK_NEGATIVE_INTERESTING;
      break;
    case r.BotFeedbackKind.NEGATIVE_ACCURATE:
      t = a.Message$BotFeedbackMessage$BotFeedbackKind.BOT_FEEDBACK_NEGATIVE_ACCURATE;
      break;
    case r.BotFeedbackKind.NEGATIVE_SAFE:
      t = a.Message$BotFeedbackMessage$BotFeedbackKind.BOT_FEEDBACK_NEGATIVE_SAFE;
      break;
    case r.BotFeedbackKind.NEGATIVE_OTHER:
      t = a.Message$BotFeedbackMessage$BotFeedbackKind.BOT_FEEDBACK_NEGATIVE_OTHER;
      break;
    case r.BotFeedbackKind.NEGATIVE_REFUSED:
      t = a.Message$BotFeedbackMessage$BotFeedbackKind.BOT_FEEDBACK_NEGATIVE_REFUSED;
      break;
    case r.BotFeedbackKind.NEGATIVE_NOT_VISUALLY_APPEALING:
      t = a.Message$BotFeedbackMessage$BotFeedbackKind.BOT_FEEDBACK_NEGATIVE_NOT_VISUALLY_APPEALING;
      break;
    case r.BotFeedbackKind.NEGATIVE_NOT_RELEVANT_TO_TEXT:
      t = a.Message$BotFeedbackMessage$BotFeedbackKind.BOT_FEEDBACK_NEGATIVE_NOT_RELEVANT_TO_TEXT;
  }
  const o = {
    messageKey: (0, i.encodeKey)(n.protocolMessageKey),
    kind: t,
    text: n.botFeedbackText
  };
  return {
    protocolMessage: {
      type: a.Message$ProtocolMessage$Type.BOT_FEEDBACK_MESSAGE,
      botFeedbackMessage: o
    }
  };
};
var r = require("./37237.js");
var i = require("./974637.js");
var a = require("./533494.js");