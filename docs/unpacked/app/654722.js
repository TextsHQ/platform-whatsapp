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
    declinePaymentRequestMessage: r
  } = t;
  if (r == null) {
    return;
  }
  const u = function (e, t) {
    if (!e) {
      throw (0, l.default)("parseProtocolMessageProto: no message key is defined for decline payment request message");
    }
    const {
      id: n
    } = e;
    if (!n) {
      throw (0, l.default)("parseProtocolMessageProto: no message id is defined for decline payment request message");
    }
    let r;
    var i;
    if (t.id.remote.isGroup()) {
      if (!t.id.fromMe && !((i = (0, a.decodeJid)(e.participant)) === null || i === undefined ? undefined : i.equals((0, s.getMeUser)())) && t.subtype !== "send") {
        return null;
      }
      r = (0, a.decodeJid)(e.participant);
    }
    return new o.default({
      fromMe: !t.id.fromMe,
      remote: t.id.remote,
      id: n,
      participant: r
    });
  }(r.key, n);
  return {
    msgData: (0, i.default)((0, i.default)({}, n), {}, {
      type: "unknown",
      subtype: "payment_action_request_declined",
      paymentRequestMessageKey: u
    }),
    contextInfo: null
  };
};
var i = r(require("../vendor/81109.js"));
var a = require("./974637.js");
var o = r(require("./565754.js"));
require("./373070.js");
var s = require("./459857.js");
var l = r(require("./556869.js"));