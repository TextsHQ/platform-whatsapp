var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unpairDevice = function () {
  return d.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./250281.js");
var o = require("./716358.js");
var s = require("./347387.js");
var l = require("./355813.js");
var u = require("./459857.js");
const c = new s.WapParser("unpairResponse", e => {
  e.assertTag("iq");
  e.assertFromServer();
  let t = 200;
  if (e.attrString("type") === "error") {
    t = e.child("error").attrInt("code");
  }
  return {
    status: t
  };
});
function d() {
  return (d = (0, i.default)(function* (e) {
    const t = (0, o.wap)("iq", {
      to: o.S_WHATSAPP_NET,
      type: "set",
      id: (0, o.generateId)(),
      xmlns: "md"
    }, (0, o.wap)("remove-companion-device", {
      jid: (0, l.DEVICE_JID)((0, u.assertGetMe)()),
      reason: (0, o.CUSTOM_STRING)(e)
    }));
    const n = yield (0, a.deprecatedSendIq)(t, c);
    if (n.success) {
      return {
        status: n.result.status
      };
    } else {
      return {
        status: n.errorCode
      };
    }
  })).apply(this, arguments);
}