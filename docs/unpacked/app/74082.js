var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return d.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./417405.js");
var o = require("./250281.js");
var s = require("./716358.js");
var l = require("./707065.js");
var u = require("./355813.js");
var c = require("./912384.js");
function d() {
  return (d = (0, i.default)(function* (e, t, n) {
    const r = (0, a.decodeB64)(n);
    const {
      ciphertext: i,
      iv: d
    } = yield (0, c.encryptServerErrorReceipt)(r, t);
    const p = (0, s.wap)("receipt", {
      type: "server-error",
      to: (0, u.USER_JID)(e),
      id: (0, s.CUSTOM_STRING)(t),
      category: "peer"
    }, (0, s.wap)("encrypt", null, (0, s.wap)("enc_p", null, i), (0, s.wap)("enc_iv", null, d)));
    return (0, o.deprecatedSendStanzaAndWaitForAck)(p, (0, l.toCoreAckTemplate)({
      id: t,
      class: "receipt",
      type: "server-error",
      from: e,
      participant: null
    }));
  })).apply(this, arguments);
}