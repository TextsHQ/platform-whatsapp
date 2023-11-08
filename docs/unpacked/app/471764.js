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
    requestPaymentMessage: _
  } = r;
  if (_ == null) {
    return;
  }
  const g = (t = _.noteMessage) === null || t === undefined || (n = t.extendedTextMessage) === null || n === undefined ? undefined : n.contextInfo;
  if ((p == null ? undefined : p.futureproofed) || (0, l.hasUnsupportedCurrency)(p)) {
    __LOG__(2)`parseRequestPaymentMessageProto: does not support novi transactions`;
    return {
      msgData: (0, i.default)((0, i.default)({}, d), {}, {
        type: u.MSG_TYPE.PAYMENT,
        subtype: "phone_only_feature"
      }),
      contextInfo: g
    };
  }
  const {
    background: m,
    noteMessage: h
  } = _;
  const y = (h == null ? undefined : h.extendedTextMessage) != null || (h == null ? undefined : h.conversation) != null || (h == null ? undefined : h.stickerMessage) != null;
  const E = h && y ? (0, s.parseMsgProto)(h, {}, f) : undefined;
  const S = p != null ? (0, l.parseMsgPaymentInfo)(p) : {};
  if (_.amount == null) {
    if (_.currencyCodeIso4217 != null && S.paymentCurrency == null) {
      S.paymentCurrency = _.currencyCodeIso4217;
    }
    if (_.amount1000 != null && S.paymentAmount1000 == null) {
      S.paymentAmount1000 = (0, a.numberOrThrowIfTooLarge)(_.amount1000);
    }
  } else {
    if (_.amount.currencyCode != null && S.paymentCurrency == null) {
      S.paymentCurrency = _.amount.currencyCode;
    }
    if (_.amount.value != null && S.paymentAmount1000 == null) {
      const e = _.amount;
      const t = e.offset == null || e.offset === 0 ? 1000 : e.offset;
      S.paymentAmount1000 = parseFloat(e.value) * 1000 / t;
    }
  }
  if (_.requestFrom != null && (S == null ? undefined : S.paymentMessageReceiverJid) == null) {
    S.paymentMessageReceiverJid = (0, l.decodeJid)(_.requestFrom);
  }
  if (!((S == null ? undefined : S.paymentStatus) != null && (S == null ? undefined : S.paymentTxnStatus) != null || !(0, l.isEitherSenderOrReceiverOfPaymentMessage)(d.id, (0, o.default)(S.paymentMessageReceiverJid, "paymentInfoData.paymentMessageReceiverJid")))) {
    S.paymentStatus = c.PaymentInfo$Status.WAITING;
    S.paymentTxnStatus = c.PaymentInfo$TxnStatus.COLLECT_INIT;
  }
  if (_.expiryTimestamp != null && (S == null ? undefined : S.paymentExpiryTimestamp) == null) {
    S.paymentExpiryTimestamp = (0, a.numberOrThrowIfTooLarge)(_.expiryTimestamp);
  }
  if (!y) {
    return {
      msgData: (0, i.default)((0, i.default)((0, i.default)({}, d), {}, {
        type: u.MSG_TYPE.PAYMENT,
        subtype: "futureproof"
      }, S), {}, {
        paymentBackground: m
      }),
      contextInfo: g
    };
  }
  return {
    msgData: (0, i.default)((0, i.default)((0, i.default)({}, d), {}, {
      type: u.MSG_TYPE.PAYMENT,
      subtype: "request"
    }, S), {}, {
      paymentBackground: m,
      paymentNoteMsg: E
    }),
    contextInfo: g
  };
};
var i = r(require("../vendor/81109.js"));
var a = require("./229079.js");
var o = r(require("./670983.js"));
var s = require("./740293.js");
var l = require("./974637.js");
var u = require("./373070.js");
var c = require("./968923.js");