Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReceiptStanzaReceiveWamEvent = undefined;
var r = require("./901032.js");
var i = require("./684290.js");
var a = require("./718451.js");
var o = require("./346857.js");
const {
  BOOLEAN: s,
  INTEGER: l,
  STRING: u,
  TIMER: c
} = r.TYPES;
const d = (0, r.defineEvents)({
  ReceiptStanzaReceive: [2496, {
    mediaType: [2, i.MEDIA_TYPE],
    messageType: [10, a.MESSAGE_TYPE],
    receiptStanzaDuration: [1, c],
    receiptStanzaHasOrphaned: [6, s],
    receiptStanzaOfflineCount: [3, l],
    receiptStanzaProcessedCount: [8, l],
    receiptStanzaRetryVer: [5, l],
    receiptStanzaStage: [9, o.RECEIPT_STANZA_STAGE],
    receiptStanzaTotalCount: [7, l],
    receiptStanzaType: [4, u]
  }, [1, 1, 1], "regular"]
});
exports.ReceiptStanzaReceiveWamEvent = d;