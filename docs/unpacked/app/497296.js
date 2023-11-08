var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseAndSerializeOfflinePreAck = function () {
  return p.apply(this, arguments);
};
exports.sendOfflinePreAck = function () {
  return f.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./392646.js");
var o = require("./250281.js");
var s = require("./716358.js");
var l = require("./355813.js");
var u = require("./850794.js");
var c = require("./669050.js");
const d = s.S_WHATSAPP_NET.toString();
function p() {
  return (p = (0, i.default)(function* (e) {
    var t;
    var n;
    var r;
    var i;
    const a = e.attrs.class.toString();
    if (a !== "notification" && a !== "receipt") {
      return;
    }
    const o = e.attrs.id.toString();
    const s = e.tag;
    const l = e.attrs.to.toString();
    const u = (t = e.attrs.participant) === null || t === undefined ? undefined : t.toString();
    const c = (n = e.attrs.type) === null || n === undefined ? undefined : n.toString();
    const d = ((r = e.attrs) === null || r === undefined ? undefined : r.error) ? parseInt((i = e.attrs) === null || i === undefined ? undefined : i.error.toString(), 10) : undefined;
    _({
      ackClass: a,
      ackId: o,
      to: l,
      tag: s,
      participant: u,
      type: c,
      error: d
    });
  })).apply(this, arguments);
}
function f() {
  return (f = (0, i.default)(function* (e) {
    try {
      var t;
      const n = (0, s.wap)("ack", {
        id: (0, s.CUSTOM_STRING)(e.ackId),
        class: e.ackClass,
        to: e.to === d ? s.S_WHATSAPP_NET : (0, l.JID)((0, c.createWidFromWidLike)(e.to)),
        type: (t = e.type) !== null && t !== undefined ? t : s.DROP_ATTR,
        participant: e.participant != null ? (0, l.DEVICE_JID)((0, c.createWid)(e.participant)) : s.DROP_ATTR,
        error: e.error != null ? (0, s.INT)(e.error) : s.DROP_ATTR
      });
      return (0, o.deprecatedCastStanza)(n, {
        preAck: true
      });
    } catch (t) {
      __LOG__(4, undefined, new Error(), true)`Failed to send offline pre-ack for envelope: ${e.ackClass} with error: ${t}`;
      SEND_LOGS("offline-pre-ack");
    }
  })).apply(this, arguments);
}
const _ = (0, a.batch)({
  delayMs: 3000,
  maxSize: 400
}, function () {
  var e = (0, i.default)(function* (e) {
    yield (0, u.getTable)().create({
      receipts: [],
      acks: e
    });
    return [];
  });
  return function () {
    return e.apply(this, arguments);
  };
}());