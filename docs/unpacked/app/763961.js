Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendAck = function (e, t, n, s) {
  (0, r.deprecatedCastStanza)((0, i.wap)("ack", {
    id: (0, i.CUSTOM_STRING)(e),
    class: "message",
    from: (0, a.DEVICE_JID)((0, o.assertGetMe)()),
    to: t ? (0, a.JID)(t) : i.DROP_ATTR,
    participant: s ? (0, a.DEVICE_JID)(s) : i.DROP_ATTR,
    type: n != null ? n : i.DROP_ATTR
  }));
};
exports.sendNack = function (e, t, n, s, l) {
  (0, r.deprecatedCastStanza)((0, i.wap)("ack", {
    id: (0, i.CUSTOM_STRING)(e),
    class: "message",
    from: (0, a.DEVICE_JID)((0, o.assertGetMe)()),
    to: t ? (0, a.JID)(t) : i.DROP_ATTR,
    participant: s ? (0, a.DEVICE_JID)(s) : i.DROP_ATTR,
    type: n != null ? n : i.DROP_ATTR,
    error: (0, i.INT)(l)
  }));
};
var r = require("./250281.js");
var i = require("./716358.js");
var a = require("./355813.js");
var o = require("./459857.js");