var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return _.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./417405.js");
var o = require("./250281.js");
var s = require("./716358.js");
var l = require("./707065.js");
var u = require("./355813.js");
var c = require("./912384.js");
var d = require("./163755.js");
var p = require("./787742.js");
var f = require("./459857.js");
function _() {
  return (_ = (0, i.default)(function* (e) {
    const t = e.id.id;
    if ((0, p.getIsNewsletterMsg)(e)) {
      __LOG__(4, undefined, new Error(), true, ["newsletter"])`[newsletter] Called RMR on newsletter media, which has null mediaKey`;
      SEND_LOGS("newsletter-called-rmr", 1, "newsletter");
      return Promise.resolve();
    }
    if (e.mediaKey == null) {
      __LOG__(4, undefined, new Error(), true, ["media", "non-sad"])`[media][rmr] Called RMR with null mediaKey`;
      SEND_LOGS("rmr-called-with-null-media-key", 0.001, "media", "non-sad");
      return Promise.resolve();
    }
    const n = (0, a.decodeB64)(e.mediaKey);
    const {
      ciphertext: r,
      iv: i
    } = yield (0, c.encryptServerErrorReceipt)(n, t);
    const _ = (0, d.getChat)(e);
    const g = (0, s.CUSTOM_STRING)(_.id.toString({
      legacy: true
    }));
    const m = _.isGroup || _.isBroadcast ? (0, s.CUSTOM_STRING)((0, p.getSender)(e).toString({
      legacy: true
    })) : s.DROP_ATTR;
    const h = (0, f.getMeUser)();
    const y = (0, s.wap)("receipt", {
      type: "server-error",
      to: (0, u.USER_JID)(h),
      id: (0, s.CUSTOM_STRING)(t)
    }, (0, s.wap)("encrypt", null, (0, s.wap)("enc_p", null, r), (0, s.wap)("enc_iv", null, i)), (0, s.wap)("rmr", {
      jid: g,
      from_me: (0, s.CUSTOM_STRING)(String((0, p.getIsSentByMe)(e))),
      participant: m
    }));
    return (0, o.deprecatedSendStanzaAndWaitForAck)(y, (0, l.toCoreAckTemplate)({
      id: t,
      class: "receipt",
      type: "server-error",
      from: h,
      participant: null
    }));
  })).apply(this, arguments);
}