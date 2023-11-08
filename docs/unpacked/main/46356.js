var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    msg: t,
    displayAuthor: n,
    displayType: a,
    quotedMsg: f
  } = e;
  const [p, m, h, g, E, v, _, y, C, b, M, S] = (0, d.useMsgValues)(e.msg.id, [r.getPaymentAmount1000, r.getPaymentCurrency, r.getId, r.getIsSentByMe, r.getPaymentNoteMsg, r.getPaymentStatus, r.getPaymentTxnStatus, r.getPaymentExpiryTimestamp, r.getPaymentInviteServiceType, r.getPaymentMessageReceiverJid, r.getPaymentBackground, r.getSubtype]);
  const T = !!(E == null ? undefined : E.body);
  if (S === "invite" && C != null) {
    return c.default.createElement(l.default, {
      msg: t,
      displayAuthor: n,
      displayType: a,
      serviceType: C
    });
  }
  if (!p || !m) {
    return c.default.createElement(i.default, {
      msg: t,
      displayAuthor: n,
      displayType: a,
      quotedMsg: f
    });
  }
  const w = c.default.createElement(o.default, {
    isSentByMe: g,
    currency: m,
    amount1000: p,
    receiverJid: b,
    paymentStatus: v,
    paymentTxnStatus: _,
    expiryTimestamp: y,
    subtype: S,
    hasCaption: T,
    msg: t
  });
  switch (S) {
    case "ciphertext":
      return c.default.createElement(i.default, {
        msg: t,
        displayAuthor: n,
        displayType: a,
        quotedMsg: f,
        paymentInfo: w,
        placeholderText: s.fbt._("Waiting for this payment message's note. This may take a while.", null, {
          hk: "4EzoLe"
        })
      });
    case "futureproof":
      return c.default.createElement(i.default, {
        msg: t,
        displayAuthor: n,
        displayType: a,
        quotedMsg: f,
        paymentInfo: w,
        placeholderText: s.fbt._("This payment message has a note but your version of WhatsApp doesn't support viewing it.", null, {
          hk: "2rWw9k"
        })
      });
    case "send":
    case "request":
      return c.default.createElement(u.default, {
        msg: t,
        displayAuthor: n,
        displayType: a,
        quotedMsg: f,
        paymentInfo: w
      });
    default:
      return c.default.createElement(i.default, {
        msg: t,
        displayAuthor: n,
        displayType: a,
        quotedMsg: f
      });
  }
};
var r = require("../app/787742.js");
var o = a(require("./295131.js"));
var l = a(require("./432081.js"));
var i = a(require("./612378.js"));
var u = a(require("./505234.js"));
var s = require("../vendor/548360.js");
var c = a(require("../vendor/667294.js"));
var d = require("./871210.js");