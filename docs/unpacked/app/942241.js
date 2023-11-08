Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deaggregateReceipt = function (e) {
  return e.receipts.map(t => ({
    type: i.RECEIPT_TYPE.SIMPLE,
    stanzaId: e.externalId,
    externalIds: [e.externalId],
    from: e.from,
    participant: t.participant,
    recipient: null,
    ts: t.ts,
    ack: e.ack,
    ackString: e.ackString,
    offline: e.offline,
    biz: null
  }));
};
exports.isReadOrPlayedReceipt = function (e) {
  return e === r.ACK_STRING.READ || e === r.ACK_STRING.READ_SELF || e === r.ACK_STRING.PLAYED || e === r.ACK_STRING.PLAYED_SELF;
};
var r = require("./402994.js");
var i = require("./320396.js");