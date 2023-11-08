var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  var n;
  let {
    messageProtobuf: r,
    baseMessage: d,
    paymentInfo: p,
    msgContext: f
  } = e;
  const {
    sendPaymentMessage: _
  } = r;
  if (_ == null) {
    return;
  }
  const g = (t = _.noteMessage) === null || t === undefined || (n = t.extendedTextMessage) === null || n === undefined ? undefined : n.contextInfo;
  if ((p == null ? undefined : p.futureproofed) === true || (0, o.hasUnsupportedCurrency)(p)) {
    __LOG__(2)`parseSendPaymentMessageProto: does not support novi transactions`;
    return {
      msgData: (0, i.default)((0, i.default)({}, d), {}, {
        type: "unknown",
        subtype: "phone_only_feature"
      }),
      contextInfo: g
    };
  }
  const {
    background: m,
    noteMessage: h,
    requestMessageKey: y
  } = _;
  const E = (h == null ? undefined : h.extendedTextMessage) != null || (h == null ? undefined : h.conversation) != null || (h == null ? undefined : h.stickerMessage) != null;
  const S = E ? "send" : "futureproof";
  const v = h && E ? (0, a.parseMsgProto)(h, {}, f) : undefined;
  const T = p != null ? (0, o.parseMsgPaymentInfo)(p) : null;
  const M = y ? function (e, t, n) {
    if (!e) {
      throw (0, c.default)("getPaymentRequestMessageKey: no message key is defined");
    }
    const {
      id: r
    } = e;
    if (!r) {
      throw (0, c.default)("getPaymentRequestMessageKey: no key id is defined");
    }
    if (!t) {
      __LOG__(3)`getPaymentRequestMessageKey: no message id is defined`;
      return null;
    }
    let i;
    var a;
    if (t.remote.isGroup()) {
      if (!t.fromMe && !((a = (0, o.decodeJid)(e.participant)) === null || a === undefined ? undefined : a.equals((0, u.getMeUser)())) && n !== "send") {
        return null;
      }
      i = (0, o.decodeJid)(e.participant);
    }
    return new s.default({
      fromMe: !t.fromMe,
      remote: t.remote,
      id: r,
      participant: i
    });
  }(y, d.id, S) : null;
  if (!E) {
    return {
      msgData: (0, i.default)((0, i.default)((0, i.default)({}, d), {}, {
        type: l.MSG_TYPE.PAYMENT,
        subtype: "futureproof"
      }, T), {}, {
        paymentBackground: m,
        paymentRequestMessageKey: M
      }),
      contextInfo: g
    };
  }
  return {
    msgData: (0, i.default)((0, i.default)((0, i.default)({}, d), {}, {
      type: l.MSG_TYPE.PAYMENT,
      subtype: "send"
    }, T), {}, {
      paymentBackground: m,
      paymentRequestMessageKey: M,
      paymentNoteMsg: v
    }),
    contextInfo: g
  };
};
var i = r(require("../vendor/81109.js"));
var a = require("./740293.js");
var o = require("./974637.js");
var s = r(require("./565754.js"));
var l = require("./373070.js");
var u = require("./459857.js");
var c = r(require("./556869.js"));