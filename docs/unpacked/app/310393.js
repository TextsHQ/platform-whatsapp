var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return E.apply(this, arguments);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./402994.js");
var s = require("./397367.js");
var l = require("./394081.js");
var u = require("./223833.js");
var c = require("./138213.js");
var d = require("./503728.js");
var p = require("./320396.js");
var f = require("./942241.js");
var _ = require("./755916.js");
var g = require("./437142.js");
var m = require("./73225.js");
var h = require("./278756.js");
var y = r(require("./556869.js"));
function E() {
  return (E = (0, a.default)(function* (e) {
    const t = (0, s.createReceiptStanzaReceiveMetric)();
    const n = p.msgReceiptParser.parse(e);
    if (n.error) {
      __LOG__(4, undefined, new Error())`Parsing Error: ${n.error.toString()}`;
      throw n.error;
    }
    const r = n.success;
    const {
      ack: i,
      ackString: a,
      from: l,
      stanzaId: u,
      offline: c
    } = r;
    let d;
    if (r.type === p.RECEIPT_TYPE.SIMPLE) {
      if (i === o.ACK.CONTENT_GONE) {
        d = (0, h.buildReceiptAck)(l, u, a, null);
      } else {
        try {
          __LOG__(2)`handleSimpleReceipt: got receipt ${r.ack} for msg ${r.stanzaId}`;
          yield S(r);
        } catch (e) {
          __LOG__(3, undefined, undefined, undefined, ["messaging"])`handleSimpleReceipt: got error for receipt ${r.ack} for msg ${r.stanzaId}: ${e}`;
        }
        d = (0, h.buildReceiptAck)(l, u, a, r.participant);
      }
    } else if (r.type === p.RECEIPT_TYPE.AGGREGATE) {
      try {
        __LOG__(2)`handleAggregateReceipt: got ${r.receipts.length} receipts of ack type ${r.ack} for msg ${r.externalId}`;
        yield v(r);
      } catch (e) {}
      d = (0, h.buildReceiptAck)(l, u, a, null);
    } else {
      __LOG__(4, undefined, new Error(), true)`type: ${r.type}`;
      SEND_LOGS("handleMsgReceipt: Invalid receipt type");
      d = (0, h.buildReceiptAck)(l, u, a, null);
    }
    if (c == null) {
      t(r);
    }
    return d;
  })).apply(this, arguments);
}
function S(e) {
  const {
    from: t,
    ack: n,
    recipient: r,
    ackString: a
  } = e;
  if (n === o.ACK.PEER) {
    return (0, l.handleAckPeerSimpleReceipt)(e);
  }
  if (t.isNewsletter()) {
    if ((0, m.isNewsletterEnabled)()) {
      return (0, _.handleNewsletterSimpleReceipt)(e);
    } else {
      return Promise.resolve();
    }
  }
  if (t.isBot() && r != null && a === o.ACK_STRING.READ) {
    return (0, u.handleBotOneToOneInvokeSimpleReadReceipt)(e);
  }
  if (t.isStatusV3()) {
    return (0, g.handleStatusSimpleReceipt)(e);
  }
  if (t.isUser()) {
    return (0, c.handleChatSimpleReceipt)(e);
  }
  if (t.isGroup()) {
    return (0, d.handleGroupSimpleReceipt)(e);
  }
  if (t.isBroadcast()) {
    if (!e.participant) {
      __LOG__(4, undefined, new Error(), true)`error: missing participant for broadcast receipt ${t.toString()}`;
      SEND_LOGS("handleSimpleReceipt: failed");
      return Promise.reject((0, y.default)(`handleSimpleReceipt: missing participant for broadcast receipt ${t.toString()}`));
    }
    const n = (0, i.default)((0, i.default)({}, e), {}, {
      from: e.participant,
      participant: null
    });
    return (0, c.handleChatSimpleReceipt)(n);
  }
  __LOG__(4, undefined, new Error(), true)`error: unsupported type for ${t.toString()}`;
  SEND_LOGS("handleSimpleReceipt: failed");
  return Promise.reject((0, y.default)(`handleSimpleReceipt: unsupported type for ${t.toString()}`));
}
function v(e) {
  const {
    ack: t,
    from: n
  } = e;
  if (t === o.ACK.CONTENT_GONE) {
    __LOG__(4, undefined, new Error(), true)`error: reupload receipts cannot be aggregated`;
    SEND_LOGS("handleAggregateReceipt: failed");
    return Promise.reject((0, y.default)("handleAggregateReceipt: failed"));
  } else if (n.isGroup() || n.isBroadcast()) {
    return Promise.all((0, f.deaggregateReceipt)(e).map(S));
  } else {
    __LOG__(4, undefined, new Error(), true)`handleAggregateReceipt: aggregate receipts should come only from group, broadcast`;
    SEND_LOGS("handleAggregateReceipt: failed");
    return Promise.reject((0, y.default)("handleAggregateReceipt: failed"));
  }
}