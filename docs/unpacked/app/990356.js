var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractVotes = function () {
  return h.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = r(require("./670983.js"));
var o = require("./201650.js");
var s = require("./787742.js");
var l = require("./823980.js");
var u = require("./705769.js");
var c = require("./918504.js");
var d = require("./227749.js");
var p = require("./459857.js");
var f = require("./751047.js");
var _ = require("./408959.js");
var g = require("./107443.js");
var m = require("./669050.js");
function h() {
  return (h = (0, i.default)(function* (e) {
    return (yield Promise.allSettled(Array.from(e.entries()).map(e => {
      let [t, n] = e;
      return y(t, n);
    }))).map(e => {
      switch (e.status) {
        case "fulfilled":
          return e.value;
        case "rejected":
          {
            const {
              reason: t
            } = e;
            if (t instanceof c.PollVoteValidationError) {
              __LOG__(4, undefined, new Error(), true)`Poll vote extraction failed: ${t.code}`;
              return void SEND_LOGS(t.code);
            }
            __LOG__(4, undefined, new Error(), true)`Poll vote extraction failed: ${t.message}\n${t.stack}`;
            SEND_LOGS("poll-vote-extraction-unknown-error");
          }
      }
    }).filter(Boolean);
  })).apply(this, arguments);
}
function y() {
  return E.apply(this, arguments);
}
function E() {
  return (E = (0, i.default)(function* (e, t) {
    if (t.messageSecret == null) {
      new o.MessageSecretErrorsWamEvent({
        messageSecretAllowedList: _.MESSAGE_SECRET_ALLOWED_TYPE.MESSAGE_POLL,
        messageSecretError: g.MESSAGE_SECRET_ERROR_TYPE.MISSING_MESSAGE_SECRET
      }).commit();
      throw new c.PollCreationValidationError(c.PollCreationValidationErrorCode.MISSING_MESSAGE_SECRET, f.E2E_FAILURE_REASON.MISSING_MESSAGE_SECRET);
    }
    const n = (0, a.default)(t.messageSecret, "parentMsg.messageSecret");
    const r = (0, a.default)(t.pollSelectableOptionsCount, "parentMsg.pollSelectableOptionsCount");
    const i = (0, a.default)(t.pollOptions, "parentMsg.pollOptions");
    const h = (0, a.default)(e.encPollVote, "pollUpdateMsg.encPollVote");
    if (n.byteLength !== 32) {
      new o.MessageSecretErrorsWamEvent({
        messageSecretAllowedList: _.MESSAGE_SECRET_ALLOWED_TYPE.MESSAGE_POLL,
        messageSecretError: g.MESSAGE_SECRET_ERROR_TYPE.WRONG_LENGTH
      }).commit();
      throw new c.PollVoteValidationError(c.PollVoteValidationErrorCode.INVALID_MESSAGE_SECRET);
    }
    const y = (0, m.toUserWid)((0, s.getSender)(e));
    const E = yield (0, d.decryptVote)({
      encryptedVote: h.encPayload,
      iv: h.encIv,
      messageSecret: n,
      stanzaId: t.id.id,
      pollCreationOriginalSender: (0, s.getOriginalSender)(t),
      voteSender: y
    });
    const S = E.selectedOptions.length;
    if (S > i.length || r !== 0 && S > r) {
      throw new c.PollVoteValidationError(c.PollVoteValidationErrorCode.INVALID_OPTIONS_COUNT);
    }
    if (E.selectedOptions.some(e => e.byteLength !== 32)) {
      throw new c.PollVoteValidationError(c.PollVoteValidationErrorCode.INVALID_OPTION);
    }
    const v = yield (0, l.createOptionLocalIdMap)(i);
    if (!v.includesHashes(E.selectedOptions)) {
      throw new c.PollVoteValidationError(c.PollVoteValidationErrorCode.OPTION_NOT_FOUND);
    }
    return (0, u.voteFromProtobuf)({
      voteProtobuf: E,
      pollVoteMsgKey: e.id,
      parentMsgKey: e.pollUpdateParentKey,
      sender: y,
      senderTimestampMs: e.senderTimestampMs,
      t: (0, a.default)(e.t, "pollUpdateMsg.t"),
      optionLocalIdMap: v,
      ack: e.ack,
      read: (0, p.isMeAccount)(y)
    });
  })).apply(this, arguments);
}