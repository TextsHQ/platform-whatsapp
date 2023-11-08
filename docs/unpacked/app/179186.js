var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    json: t,
    contextInfo: n
  } = e;
  if (t.quotedMsg || t.quotedRemoteJid || Array.isArray(t.mentionedJidList) && t.mentionedJidList.length > 0 || Array.isArray(t.groupMentions) && t.groupMentions.length > 0 || t.conversionTuple || t.isForwarded || t.forwardingScore || t._isPaymentNoteMsg || t.ephemeralDuration || t.ephemeralSettingTimestamp || t.ctwaContext || (n == null ? undefined : n.utm)) {
    return (0, i.default)({
      json: t,
      contextInfo: n
    });
  }
  return {
    conversation: t.body
  };
};
var i = r(require("./357417.js"));