Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    json: t
  } = e;
  const n = (0, r.generatePaymentsNoteMessage)(t);
  return {
    requestPaymentMessage: {
      amount1000: t.amount1000,
      expiryTimestamp: t._paymentExpiryTimestamp,
      requestFrom: t._paymentRequestFrom,
      currencyCodeIso4217: t._currencyCodeIso4217,
      noteMessage: n
    }
  };
};
var r = require("./707129.js");