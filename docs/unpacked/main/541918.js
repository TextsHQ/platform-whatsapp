var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return g.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/250281.js");
var l = require("../app/716358.js");
var i = require("../app/287461.js");
var u = require("../app/402994.js");
var s = require("../app/707065.js");
var c = require("../app/355813.js");
var d = require("../app/997772.js");
var f = require("../app/851698.js");
var p = require("../app/259377.js");
var m = require("../app/757453.js");
function h(e) {
  if (e.isGroup()) {
    return p.RECEIPT_TYPE.PLAYED;
  }
  if (e.isNewsletter()) {
    return p.RECEIPT_TYPE.PLAYED_SELF;
  }
  const t = (0, i.getABPropConfigValue)("played_self_enabled");
  if ((0, m.getUserPrivacySettings)().readReceipts === d.ALL_NONE.none && t === true) {
    return p.RECEIPT_TYPE.PLAYED_SELF;
  } else {
    return p.RECEIPT_TYPE.PLAYED;
  }
}
function g() {
  return (g = (0, r.default)(function* (e, t) {
    const n = e.broadcastId || t;
    const a = e.id.id;
    const r = n.isUser() ? null : e.author;
    const i = h(t);
    const d = (0, l.wap)("receipt", {
      to: (0, c.CHAT_JID)(n),
      type: i,
      id: (0, l.CUSTOM_STRING)(a),
      t: (0, l.CUSTOM_STRING)(Date.now().toString()),
      participant: r ? (0, c.DEVICE_JID)(r) : l.DROP_ATTR
    });
    yield (0, o.deprecatedSendStanzaAndWaitForAck)(d, (0, s.toCoreAckTemplate)({
      id: a,
      class: "receipt",
      type: i,
      from: n,
      participant: r
    }));
    return (0, f.getMessageTable)().merge(e.id.toString(), {
      ack: u.ACK.PLAYED
    });
  })).apply(this, arguments);
}