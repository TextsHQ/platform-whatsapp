var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return f.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = r(require("./670983.js"));
var o = require("./716358.js");
var s = require("./347387.js");
var l = require("./355813.js");
var u = require("./244670.js");
var c = require("./854379.js");
var d = r(require("./961745.js"));
const p = new s.WapParser("rekeyRetryReceiptParser", e => {
  e.assertTag("receipt");
  e.assertAttr("type", "enc_rekey_retry");
  const t = e.child("enc_rekey");
  return {
    from: (0, c.jidWithTypeToWid)(e.attrJidWithType("from")),
    originalMsgId: t.attrString("call-id"),
    stanzaId: e.attrString("id"),
    retryCount: t.hasAttr("count") ? t.attrInt("count") : 0,
    regId: e.child("registration").contentUint(4),
    ts: null,
    participant: null,
    recipient: null,
    keyBundle: null,
    offline: false
  };
});
function f() {
  return (f = (0, i.default)(function* (e) {
    const t = p.parse(e);
    if (t.error) {
      __LOG__(4, undefined, new Error())`Parsing Error: ${t.error.toString()}`;
      throw t.error;
    }
    const n = t.success;
    const r = (0, o.wap)("ack", {
      id: (0, o.CUSTOM_STRING)((0, a.default)(n.stanzaId, "retryInfo.stanzaId")),
      to: (0, l.JID)(n.from),
      class: "receipt",
      type: "enc_rekey_retry"
    });
    try {
      if (yield (0, u.handleVoipRetryRequest)(n)) {
        d.default.Voip.resendEncRekeyRetry(n.from.toString({
          legacy: true,
          formatFull: true
        }), n.retryCount);
      } else {
        __LOG__(3)`voip:handle_enc_rekey_retry_receipt: not sending enc_rekey retry`;
        d.default.Voip.endCall(n.originalMsgId);
      }
      return r;
    } catch (e) {
      __LOG__(3)`voip:handle_enc_rekey_retry_receipt: error while attempting to send enc_rekey retry`;
      return r;
    }
  })).apply(this, arguments);
}