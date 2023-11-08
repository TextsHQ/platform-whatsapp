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
    pollUpdateMessage: r
  } = t;
  if (!r) {
    return null;
  }
  const {
    $$unknownFieldCount: c = 0,
    vote: d,
    senderTimestampMs: p,
    pollCreationMessageKey: f
  } = r;
  if (c > 0) {
    return null;
  }
  if (f == null) {
    throw new l.PollUpdateValidationError(l.PollUpdateValidationErrorCode.MISSING_POLL_MESSAGE_KEY, u.E2E_FAILURE_REASON.INVALID_MESSAGE);
  }
  const _ = (0, o.getMsgKey)(f, n);
  if (_ == null) {
    throw new l.PollUpdateValidationError(l.PollUpdateValidationErrorCode.MISSING_POLL_MESSAGE_KEY, u.E2E_FAILURE_REASON.INVALID_MESSAGE);
  }
  if (p == null) {
    throw new l.PollUpdateValidationError(l.PollUpdateValidationErrorCode.MISSING_SENDER_TIMESTAMP, u.E2E_FAILURE_REASON.INVALID_MESSAGE);
  }
  if (d == null) {
    throw new l.PollUpdateValidationError(l.PollUpdateValidationErrorCode.MISSING_UPDATE, u.E2E_FAILURE_REASON.INVALID_MESSAGE);
  }
  const {
    encPayload: g,
    encIv: m
  } = d;
  if (g == null) {
    throw new l.PollUpdateValidationError(l.PollUpdateValidationErrorCode.MISSING_VOTE_ENC_PAYLOAD, u.E2E_FAILURE_REASON.INVALID_MESSAGE);
  }
  if (m == null) {
    throw new l.PollUpdateValidationError(l.PollUpdateValidationErrorCode.MISSING_VOTE_ENC_IV, u.E2E_FAILURE_REASON.INVALID_MESSAGE);
  }
  if (m.byteLength !== 12) {
    throw new l.PollUpdateValidationError(l.PollUpdateValidationErrorCode.INVALID_VOTE_ENC_IV, u.E2E_FAILURE_REASON.INVALID_MESSAGE);
  }
  return {
    msgData: (0, i.default)((0, i.default)({}, n), {}, {
      type: s.MSG_TYPE.POLL_UPDATE,
      subtype: "poll_vote",
      addonEncrypted: true,
      pollUpdateParentKey: _,
      encPollVote: {
        encPayload: g,
        encIv: m
      },
      senderTimestampMs: (0, a.numberOrThrowIfTooLarge)(p)
    }),
    contextInfo: null
  };
};
var i = r(require("../vendor/81109.js"));
var a = require("./229079.js");
var o = require("./974637.js");
var s = require("./373070.js");
var l = require("./918504.js");
var u = require("./751047.js");