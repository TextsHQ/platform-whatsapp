var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPushServerSettings = function () {
  return u.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./250281.js");
var o = require("./716358.js");
const s = new (require("./347387.js").WapParser)("getPushServerSettings", e => {
  if (!e.hasChild("error")) {
    __LOG__(2, undefined, undefined, undefined, ["push-notification"])`getPushServerSettings: success`;
    return e.child("settings").attrString("webserverkey");
  }
  const t = e.child("error");
  const n = t.attrInt("code");
  const r = t.attrString("text");
  __LOG__(3, undefined, undefined, undefined, ["push-notification"])`getPushServerSettingsRequest: server response with ${n}, ${r}`;
  return {
    errorCode: n,
    errorText: r
  };
});
const l = (0, o.wap)("iq", {
  to: o.S_WHATSAPP_NET,
  type: "get",
  xmlns: "urn:xmpp:whatsapp:push",
  id: (0, o.generateId)()
}, (0, o.wap)("settings", null));
function u() {
  return (u = (0, i.default)(function* () {
    const e = yield (0, a.deprecatedSendIq)(l, s);
    if (!e.success) {
      const {
        errorCode: t,
        errorText: n
      } = e;
      return {
        errorCode: t,
        errorText: n
      };
    }
    return e.result;
  })).apply(this, arguments);
}