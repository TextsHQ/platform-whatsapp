var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    messageProtobuf: t,
    baseMessage: n
  } = e;
  const {
    protocolMessage: r
  } = t;
  if (r == null) {
    return;
  }
  const {
    type: u,
    botFeedbackMessage: c
  } = r;
  if (u !== l.Message$ProtocolMessage$Type.BOT_FEEDBACK_MESSAGE) {
    return;
  }
  if (c == null) {
    return;
  }
  const {
    messageKey: d,
    kind: p,
    text: f
  } = c;
  if (d == null) {
    return;
  }
  if (p == null) {
    return;
  }
  let _;
  switch (p) {
    case l.Message$BotFeedbackMessage$BotFeedbackKind.BOT_FEEDBACK_POSITIVE:
      _ = a.BotFeedbackKind.POSITIVE;
      break;
    case l.Message$BotFeedbackMessage$BotFeedbackKind.BOT_FEEDBACK_NEGATIVE_GENERIC:
      _ = a.BotFeedbackKind.NEGATIVE_GENERIC;
      break;
    case l.Message$BotFeedbackMessage$BotFeedbackKind.BOT_FEEDBACK_NEGATIVE_HELPFUL:
      _ = a.BotFeedbackKind.NEGATIVE_HELPFUL;
      break;
    case l.Message$BotFeedbackMessage$BotFeedbackKind.BOT_FEEDBACK_NEGATIVE_INTERESTING:
      _ = a.BotFeedbackKind.NEGATIVE_INTERESTING;
      break;
    case l.Message$BotFeedbackMessage$BotFeedbackKind.BOT_FEEDBACK_NEGATIVE_ACCURATE:
      _ = a.BotFeedbackKind.NEGATIVE_ACCURATE;
      break;
    case l.Message$BotFeedbackMessage$BotFeedbackKind.BOT_FEEDBACK_NEGATIVE_SAFE:
      _ = a.BotFeedbackKind.NEGATIVE_SAFE;
      break;
    case l.Message$BotFeedbackMessage$BotFeedbackKind.BOT_FEEDBACK_NEGATIVE_OTHER:
      _ = a.BotFeedbackKind.NEGATIVE_OTHER;
      break;
    case l.Message$BotFeedbackMessage$BotFeedbackKind.BOT_FEEDBACK_NEGATIVE_REFUSED:
      _ = a.BotFeedbackKind.NEGATIVE_REFUSED;
      break;
    case l.Message$BotFeedbackMessage$BotFeedbackKind.BOT_FEEDBACK_NEGATIVE_NOT_VISUALLY_APPEALING:
      _ = a.BotFeedbackKind.NEGATIVE_NOT_VISUALLY_APPEALING;
      break;
    case l.Message$BotFeedbackMessage$BotFeedbackKind.BOT_FEEDBACK_NEGATIVE_NOT_RELEVANT_TO_TEXT:
      _ = a.BotFeedbackKind.NEGATIVE_NOT_RELEVANT_TO_TEXT;
  }
  if (_ == null) {
    return;
  }
  return {
    msgData: (0, i.default)((0, i.default)({}, n), {}, {
      type: s.MSG_TYPE.PROTOCOL,
      subtype: "bot_feedback",
      protocolMessageKey: (0, o.getMsgKey)(d, n),
      botFeedbackKind: _,
      botFeedbackText: f
    }),
    contextInfo: null
  };
};
var i = r(require("../vendor/81109.js"));
var a = require("./37237.js");
var o = require("./974637.js");
var s = require("./373070.js");
var l = require("./533494.js");