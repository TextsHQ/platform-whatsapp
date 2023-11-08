Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generatePaymentsNoteMessage = function (e) {
  if (e.paymentNoteMsg == null) {
    return;
  }
  const t = {
    stanzaId: e.quotedStanzaID,
    mentionedJid: e.mentionedJidList && e.mentionedJidList.map(i.encodeJid),
    isForwarded: e.isForwarded,
    forwardingScore: e.forwardingScore,
    groupMentions: []
  };
  const n = (0, i.encodeJid)(e.quotedParticipant);
  if (n != null) {
    t.participant = n;
  }
  if (e.quotedMsg) {
    const n = (0, r.getProtobufMessage)(e.quotedMsg, undefined, undefined, undefined, "quoted");
    t.quotedMessage = (0, i.getMutableMessageProtobuf)(n);
  }
  return (0, r.getProtobufMessage)(Object.assign(e.paymentNoteMsg, {
    _isPaymentNoteMsg: true
  }), undefined, t);
};
var r = require("./21838.js");
var i = require("./974637.js");