var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return d.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./250281.js");
var o = require("./716358.js");
var s = require("./355813.js");
var l = require("./326314.js");
var u = require("./549227.js");
var c = r(require("./556869.js"));
function d() {
  return (d = (0, i.default)(function* (e, t) {
    let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    const r = yield l.waSignalStore.getRegistrationInfo();
    if (!r) {
      throw (0, c.default)("No registration info found");
    }
    const i = (0, o.wap)("receipt", {
      to: (0, s.DEVICE_JID)(t.peer_jid),
      id: (0, o.CUSTOM_STRING)(e),
      type: (0, o.CUSTOM_STRING)(u.ENC_RETRY_RECEIPT_ATTRS.GROUP_CALL)
    }, (0, o.wap)("enc_rekey", {
      "call-creator": (0, s.DEVICE_JID)(t.call_creator),
      "call-id": (0, o.CUSTOM_STRING)(t.call_id),
      count: (0, o.INT)(n + 1)
    }), (0, o.wap)("registration", null, (0, o.BIG_ENDIAN_CONTENT)(r.registrationId)));
    (0, a.deprecatedCastStanza)(i);
  })).apply(this, arguments);
}