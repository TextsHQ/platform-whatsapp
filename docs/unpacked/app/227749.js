var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decryptVote = function (e) {
  return g(e).catch(t => {
    if ((0, u.isMatFullyEnabled)() && e.pollCreationOriginalSender.isUser()) {
      const t = (0, s.getAlternateWid)(e.pollCreationOriginalSender);
      if (t != null) {
        return g((0, a.default)((0, a.default)({}, e), {}, {
          pollCreationOriginalSender: (0, f.toUserWid)(t)
        }));
      }
    }
    throw t;
  }).catch(e => {
    new l.MessageSecretErrorsWamEvent({
      messageSecretAllowedList: d.MESSAGE_SECRET_ALLOWED_TYPE.MESSAGE_POLL,
      messageSecretError: p.MESSAGE_SECRET_ERROR_TYPE.DECRYPTION_ERROR
    }).commit();
    throw e;
  });
};
var i = r(require("../vendor/348926.js"));
var a = r(require("../vendor/81109.js"));
var o = require("./344530.js");
var s = require("./12643.js");
var l = require("./201650.js");
var u = require("./525119.js");
var c = require("./533494.js");
var d = require("./408959.js");
var p = require("./107443.js");
var f = require("./669050.js");
var _ = require("./394629.js");
function g() {
  return m.apply(this, arguments);
}
function m() {
  return (m = (0, i.default)(function* (e) {
    const t = {
      type: "poll_vote",
      encryptedAddOn: e.encryptedVote
    };
    const n = yield (0, o.decryptAddOn)(t, {
      messageSecret: e.messageSecret,
      iv: e.iv,
      stanzaId: e.stanzaId,
      originalMessageSender: e.pollCreationOriginalSender,
      addOnSender: e.voteSender
    });
    return (0, _.decodeProtobuf)(c.Message$PollVoteMessageSpec, n);
  })).apply(this, arguments);
}