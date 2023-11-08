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
    encReactionMessage: r
  } = t;
  if (r == null) {
    return;
  }
  const {
    encIv: u,
    encPayload: c
  } = r;
  const d = (0, a.getMsgKey)(r.targetMessageKey, n);
  if (d == null) {
    throw new s.ReactionEncMessageValidationError(s.ReactionEncValidationErrorCode.MISSING_TARGET_MSG_KEY, l.E2E_FAILURE_REASON.INVALID_PROTOCOL_BUFFER);
  }
  if (u == null) {
    throw new s.ReactionEncMessageValidationError(s.ReactionEncValidationErrorCode.INVALID_ENC_IV, l.E2E_FAILURE_REASON.INVALID_PROTOCOL_BUFFER);
  }
  if (c == null) {
    throw new s.ReactionEncMessageValidationError(s.ReactionEncValidationErrorCode.INVALID_ENC_PAYLOAD, l.E2E_FAILURE_REASON.INVALID_PROTOCOL_BUFFER);
  }
  return {
    msgData: (0, i.default)((0, i.default)({}, n), {}, {
      type: o.MSG_TYPE.REACTION_ENC,
      encIv: u,
      encPayload: c,
      targetMessageKey: d
    }),
    contextInfo: null
  };
};
var i = r(require("../vendor/81109.js"));
var a = require("./974637.js");
var o = require("./373070.js");
var s = require("./621974.js");
var l = require("./751047.js");