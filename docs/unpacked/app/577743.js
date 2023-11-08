var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertPollVoteEncryptedMsgData = function (e) {
  const t = s(e);
  (0, a.default)(t != null, "assertPollVoteEncryptedMsgData: invalid message object");
  return t;
};
exports.assertPollVoteMsgData = function (e) {
  const t = o(e);
  (0, a.default)(t != null, "assertPollVoteMsgData: invalid message object");
  return t;
};
exports.castToPollVoteEncryptedMsgData = s;
exports.castToPollVoteMsgData = o;
var i = require("./373070.js");
var a = r(require("../vendor/441143.js"));
function o(e) {
  if (e.type !== i.MSG_TYPE.POLL_UPDATE || "encrypted" in e) {
    return null;
  } else {
    return e;
  }
}
function s(e) {
  if (e.type === i.MSG_TYPE.POLL_UPDATE && e.addonEncrypted === true) {
    return e;
  } else {
    return null;
  }
}