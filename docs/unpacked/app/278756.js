Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildReceiptAck = function (e, t, n, a) {
  return (0, r.wap)("ack", {
    to: (0, i.JID)(e),
    id: (0, r.CUSTOM_STRING)(t),
    class: "receipt",
    type: (0, r.MAYBE_CUSTOM_STRING)(n),
    participant: a && a !== e ? (0, i.DEVICE_JID)(a) : r.DROP_ATTR
  });
};
var r = require("./716358.js");
var i = require("./355813.js");