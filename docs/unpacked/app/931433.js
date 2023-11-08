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
    paymentInviteMessage: r
  } = t;
  if (r == null) {
    return;
  }
  if (r.serviceType === s.Message$PaymentInviteMessage$ServiceType.NOVI) {
    __LOG__(2)`[payment-invite] parsePaymentInviteMessageProto: does not support novi transactions`;
    return {
      msgData: (0, i.default)((0, i.default)({}, n), {}, {
        subtype: "phone_only_feature"
      }),
      contextInfo: null
    };
  }
  __LOG__(2)`[payment-invite] render payment invite of type ${r.serviceType}`;
  return {
    msgData: (0, i.default)((0, i.default)({}, n), {}, {
      type: o.MSG_TYPE.PAYMENT,
      subtype: "invite",
      paymentExpiryTimestamp: (0, a.maybeNumberOrThrowIfTooLarge)(r.expiryTimestamp),
      paymentInviteServiceType: r.serviceType
    }),
    contextInfo: null
  };
};
var i = r(require("../vendor/81109.js"));
var a = require("./229079.js");
var o = require("./373070.js");
var s = require("./533494.js");