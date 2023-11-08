Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    json: t
  } = e;
  return {
    sendPaymentMessage: {
      requestMessageKey: t.paymentRequestMessageKey ? {
        fromMe: t.paymentRequestMessageKey.fromMe,
        remoteJid: (0, r.encodeJid)(t.paymentRequestMessageKey.remote),
        id: t.paymentRequestMessageKey.id,
        participant: (0, r.encodeJid)(t.paymentRequestMessageKey.participant)
      } : undefined,
      noteMessage: (0, i.generatePaymentsNoteMessage)(t)
    }
  };
};
var r = require("./974637.js");
var i = require("./707129.js");