var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return y.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./417405.js");
var o = r(require("./670983.js"));
var s = require("./716358.js");
var l = require("./347387.js");
var u = require("./355813.js");
var c = require("./912384.js");
var d = require("./790215.js");
var p = require("./229479.js");
var f = require("./994451.js");
var _ = require("./459857.js");
var g = require("./669050.js");
var m = r(require("./556869.js"));
const h = new l.WapParser("mediaRetryNotification", e => {
  e.assertTag("notification");
  const t = e.maybeChild("error");
  let n;
  let r;
  if ((0, d.isMediaretryNotificationNackEnabled)()) {
    n = e.attrWapJid("from");
    if (e.hasAttr("participant")) {
      r = e.attrWapJid("participant");
    }
  }
  if (t) {
    return {
      from: n,
      participant: r,
      msgId: e.attrString("id"),
      ciphertext: null,
      iv: null,
      errorCode: p.MediaRetryNotification$ResultType.cast(t.attrInt("code"))
    };
  }
  const i = e.child("encrypt");
  return {
    from: n,
    participant: r,
    msgId: e.attrString("id"),
    ciphertext: i.child("enc_p").contentBytes(),
    iv: i.child("enc_iv").contentBytes(c.ENC_IV_SIZE),
    errorCode: null
  };
});
function y() {
  return (y = (0, i.default)(function* (e) {
    const t = h.parse(e);
    if (t.error) {
      __LOG__(4, undefined, new Error())`handleMediaRetryNotification: parsing error: ${t.error.toString()}`;
      throw t.error;
    }
    const {
      from: n,
      participant: r,
      msgId: i,
      errorCode: l
    } = t.success;
    if ((0, d.isMediaretryNotificationNackEnabled)()) {
      if (!(n != null && (0, g.createDeviceWid)(n.toString()).equals((0, _.getMeUser)()))) {
        __LOG__(2)`handleMediaRetryNotification: received from not self-primary: ${n}`;
        __LOG__(3, undefined, undefined, true)`handleMediaRetryNotification: received from not self-primary`;
        SEND_LOGS("media-retry-notification-not-from-self-primary");
      }
    }
    const p = (0, s.wap)("ack", {
      id: (0, s.CUSTOM_STRING)(i),
      class: "notification",
      type: "mediaretry",
      to: (0, d.isMediaretryNotificationNackEnabled)() && n != null ? n : (0, u.USER_JID)((0, _.getMeUser)()),
      participant: r || s.DROP_ATTR
    });
    if (l != null) {
      __LOG__(2)`handleMediaRetryNotification: ${i}: received error code: ${l}`;
      f.RequestMediaReuploadManager.resolveMediaReupload({
        msgId: i,
        result: l
      });
      return p;
    }
    const {
      ciphertext: y,
      iv: E
    } = t.success;
    const S = f.RequestMediaReuploadManager.getMediaKey(i);
    if (!S) {
      __LOG__(3)`handleMediaRetryNotification: ${i}: mediaKey is not found`;
      return p;
    }
    const {
      stanzaId: v,
      directPath: T,
      result: M
    } = yield (0, c.decryptMediaRetryNotification)((0, a.decodeB64)(S), i, (0, o.default)(E, "iv"), (0, o.default)(y, "ciphertext"));
    __LOG__(2)`handleMediaRetryNotification: ${i}: decrypted`;
    if (v !== i) {
      __LOG__(2)`handleMediaRetryNotification: ${i}: id mismatch`;
      throw (0, m.default)("handleMediaRetryNotification: msg id does not match");
    }
    f.RequestMediaReuploadManager.resolveMediaReupload({
      msgId: i,
      result: M,
      directPath: T
    });
    return p;
  })).apply(this, arguments);
}