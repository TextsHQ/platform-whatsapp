var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setPushConfig = function () {
  return c.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./417405.js");
var o = require("./250281.js");
var s = r(require("./670983.js"));
var l = require("./716358.js");
const u = new (require("./347387.js").WapParser)("setPushConfig", e => {
  if (!e.hasChild("error")) {
    return void __LOG__(2, undefined, undefined, undefined, ["push-notification"])`setPushConfig: success`;
  }
  const t = e.child("error");
  const n = t.attrInt("code");
  const r = t.attrString("text");
  __LOG__(3, undefined, undefined, undefined, ["push-notification"])`setPushConfig: server response with ${n}, ${r}`;
  return {
    errorCode: n,
    errorText: r
  };
});
function c() {
  return (c = (0, i.default)(function* (e) {
    const t = (0, l.wap)("iq", {
      to: l.S_WHATSAPP_NET,
      type: "set",
      xmlns: "urn:xmpp:whatsapp:push",
      id: (0, l.generateId)()
    }, (0, l.wap)("config", {
      platform: "web",
      endpoint: (0, l.CUSTOM_STRING)(e.endpoint),
      auth: (0, l.CUSTOM_STRING)((0, a.encodeB64)((0, s.default)(e.getKey("auth"), "pushSubscription.getKey('auth')"))),
      p256dh: (0, l.CUSTOM_STRING)((0, a.encodeB64)((0, s.default)(e.getKey("p256dh"), "pushSubscription.getKey('p256dh')")))
    }));
    const n = yield (0, o.deprecatedSendIq)(t, u);
    if (!n.success) {
      const {
        errorCode: e,
        errorText: t
      } = n;
      return {
        errorCode: e,
        errorText: t
      };
    }
    return n.result;
  })).apply(this, arguments);
}