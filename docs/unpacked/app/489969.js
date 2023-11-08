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
    reactionMessage: r
  } = t;
  if (r == null) {
    return;
  }
  !function (e) {
    const t = e.text;
    if (t != null && t.length > o.default.REACTION_CONTENT_MAX_LENGTH) {
      throw new u.ReactionValidationError(u.ReactionValidationErrorCode.INVALID_REACTION_TEXT_LENGTH, c.E2E_FAILURE_REASON.INVALID_REACTION_TEXT);
    }
  }(r);
  const d = (0, s.getMsgKey)(r.key, n);
  const p = (0, a.maybeNumberOrThrowIfTooLarge)(r.senderTimestampMs);
  if (d == null) {
    throw new u.ReactionValidationError(u.ReactionValidationErrorCode.MISSING_PARENT_MSG_KEY, c.E2E_FAILURE_REASON.INVALID_MESSAGE);
  }
  if (p == null) {
    throw new u.ReactionValidationError(u.ReactionValidationErrorCode.MISSING_TIMESTAMP, c.E2E_FAILURE_REASON.INVALID_MESSAGE);
  }
  return {
    msgData: (0, i.default)((0, i.default)({}, n), {}, {
      type: l.MSG_TYPE.REACTION,
      reactionParentKey: d,
      reactionText: (0, s.convertToTextWithoutSpecialEmojis)(r.text),
      reactionTimestamp: p
    }),
    contextInfo: null
  };
};
var i = r(require("../vendor/81109.js"));
var a = require("./229079.js");
var o = r(require("./846870.js"));
var s = require("./974637.js");
var l = require("./373070.js");
var u = require("./972574.js");
var c = require("./751047.js");