var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createReceiptStanzaReceiveMetric = function () {
  const e = new o.ReceiptStanzaReceiveWamEvent({
    receiptStanzaStage: l.RECEIPT_STANZA_STAGE.OVERALL,
    receiptStanzaTotalCount: 1
  });
  return t => {
    let {
      ackString: n,
      from: r,
      offline: o,
      receipts: s
    } = t;
    e.messageType = c(r);
    if (o != null) {
      const t = parseInt(o, 10);
      if (!Number.isNaN(t)) {
        e.receiptStanzaOfflineCount = t;
      }
    }
    if (n == null) {
      e.receiptStanzaType = i.ACK_STRING.DELIVERY;
    } else if (a.RECEIPT_TYPES_TO_ACK[n] != null) {
      e.receiptStanzaType = n;
    }
    if ((s == null ? undefined : s.length) != null) {
      e.receiptStanzaTotalCount = s.length;
    }
    e.markReceiptStanzaDuration();
    e.commit();
  };
};
exports.getWamMessageTypeFromWid = c;
var i = require("./402994.js");
var a = require("./320396.js");
var o = require("./325530.js");
var s = require("./718451.js");
var l = require("./346857.js");
var u = r(require("./124928.js"));
function c(e) {
  if (u.default.isStatusV3(e)) {
    return s.MESSAGE_TYPE.STATUS;
  } else if (u.default.isGroup(e)) {
    return s.MESSAGE_TYPE.GROUP;
  } else if (u.default.isBroadcast(e)) {
    return s.MESSAGE_TYPE.BROADCAST;
  } else if (u.default.isNewsletter(e)) {
    return s.MESSAGE_TYPE.CHANNEL;
  } else {
    return s.MESSAGE_TYPE.INDIVIDUAL;
  }
}