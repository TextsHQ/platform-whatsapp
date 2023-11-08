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
    cancelPaymentRequestMessage: r
  } = t;
  if (r == null) {
    return;
  }
  const c = r.key;
  if (c == null) {
    return;
  }
  const d = function (e, t) {
    if (!e) {
      throw (0, u.default)("parseProtocolMessageProto: no message key is defined for cancel payment request message");
    }
    const {
      id: n
    } = e;
    if (!n) {
      throw (0, u.default)("parseProtocolMessageProto: no message id is defined for cancel payment request message");
    }
    let r;
    if (t.id.remote.isGroup()) {
      var i;
      r = t.id.participant;
      if (t.id.fromMe) {
        r = (0, a.decodeJid)(t.from);
      } else if (!((i = (0, a.decodeJid)(e.participant)) === null || i === undefined ? undefined : i.equals((0, l.getMeUser)()))) {
        return null;
      }
    }
    return new o.default({
      id: n,
      fromMe: t.id.fromMe,
      remote: t.id.remote,
      participant: r
    });
  }(c, n);
  return {
    msgData: (0, i.default)((0, i.default)({}, n), {}, {
      type: s.MSG_TYPE.UNKNOWN,
      subtype: "payment_transaction_request_cancelled",
      paymentRequestMessageKey: d
    }),
    contextInfo: null
  };
};
var i = r(require("../vendor/81109.js"));
var a = require("./974637.js");
var o = r(require("./565754.js"));
var s = require("./373070.js");
var l = require("./459857.js");
var u = r(require("./556869.js"));