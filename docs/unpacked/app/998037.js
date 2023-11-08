var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return f.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./632157.js");
var o = require("./716358.js");
var s = require("./347387.js");
var l = require("./287461.js");
var u = require("./359987.js");
var c = require("./459857.js");
var d = require("./427185.js");
const p = new s.WapParser("incomingDeviceSwitchingNotificationParser", e => {
  e.assertTag("notification");
  const t = e.attrString("id");
  const n = e.attrWapJid("from");
  const r = e.child("wa_old_registration");
  return {
    stanzaId: t,
    from: n,
    code: r.attrString("code"),
    expiryTime: r.attrTime("expiry_t"),
    ts: r.attrTime("ts"),
    deviceId: r.attrString("device_id")
  };
});
function f() {
  return (f = (0, i.default)(function* (e) {
    const t = p.parse(e);
    if (t.error) {
      __LOG__(4, undefined, new Error())`Parsing Error: ${t.error.toString()}`;
      throw t.error;
    }
    const {
      success: n
    } = t;
    const r = (0, o.wap)("ack", {
      id: (0, o.CUSTOM_STRING)(n.stanzaId),
      class: "notification",
      type: "registration",
      to: n.from
    });
    if (!(0, l.getABPropConfigValue)("web_device_switching")) {
      return r;
    }
    const i = n.expiryTime;
    const s = (0, a.unixTime)();
    if (s > i) {
      __LOG__(2)`OTP code has expired, expiry time: ${i} and current time: ${s}`;
      return r;
    }
    const f = n.code;
    (0, u.frontendFireAndForget)("showDeviceSwitchOtp", {
      otpCode: f
    });
    const _ = (0, c.assertGetMe)().getDeviceId().toString();
    new d.WaOldCodeWamEvent({
      deviceId: _
    }).commit();
    return r;
  })).apply(this, arguments);
}