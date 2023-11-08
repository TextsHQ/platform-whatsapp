var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  let {
    messageProtobuf: n,
    baseMessage: r
  } = e;
  const {
    pinInChatMessage: p
  } = n;
  if (p == null) {
    return;
  }
  if (!(0, c.isPinnedMessagesM1ReceiverEnabled)()) {
    return {
      msgData: (0, i.default)((0, i.default)({}, r), {}, {
        type: l.MSG_TYPE.UNKNOWN,
        futureproofType: l.MSG_TYPE.PIN_MESSAGE
      }),
      contextInfo: null
    };
  }
  const f = (0, s.getMsgKey)(p.key, r);
  if (f == null || r.id.remote.toString() !== f.remote.toString()) {
    throw new u.PinInChatValidationError(u.PinInChatValidationErrorCode.INVALID_PIN_IN_CHAT_MSG_REMOTE, d.E2E_FAILURE_REASON.INVALID_MESSAGE);
  }
  const _ = (t = n.messageContextInfo) === null || t === undefined ? undefined : t.messageAddOnDurationInSecs;
  if (_ != null && (_ < 0 || _ > o.DAY_SECONDS * 60)) {
    throw new u.PinInChatValidationError(u.PinInChatValidationErrorCode.INVALID_PIN_IN_CHAT_EXPIRY_DURATION, d.E2E_FAILURE_REASON.INVALID_MESSAGE);
  }
  const g = p.type;
  if (g == null) {
    throw new u.PinInChatValidationError(u.PinInChatValidationErrorCode.MISSING_TYPE, d.E2E_FAILURE_REASON.INVALID_MESSAGE);
  }
  const m = (0, a.maybeNumberOrThrowIfTooLarge)(p.senderTimestampMs);
  if (m == null) {
    throw new u.PinInChatValidationError(u.PinInChatValidationErrorCode.MISSING_SENDER_TIMESTAMP, d.E2E_FAILURE_REASON.INVALID_MESSAGE);
  }
  return {
    msgData: (0, i.default)((0, i.default)({}, r), {}, {
      type: l.MSG_TYPE.PIN_MESSAGE,
      pinParentKey: f,
      pinMessageType: g,
      pinSenderTimestampMs: m,
      pinExpiryDuration: _
    }),
    contextInfo: null
  };
};
var i = r(require("../vendor/81109.js"));
var a = require("./229079.js");
var o = require("./632157.js");
var s = require("./974637.js");
var l = require("./373070.js");
var u = require("./395405.js");
var c = require("./591800.js");
var d = require("./751047.js");