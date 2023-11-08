var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setDisappearingMode = function () {
  return u.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/250281.js");
var l = require("../app/716358.js");
const i = new (require("../app/347387.js").WapParser)("setDMResponseParser", e => {
  e.assertTag("iq");
  e.assertAttr("type", "result");
});
function u() {
  return (u = (0, r.default)(function* (e) {
    const t = (0, l.wap)("iq", {
      xmlns: "disappearing_mode",
      to: l.S_WHATSAPP_NET,
      type: "set",
      id: (0, l.generateId)()
    }, (0, l.wap)("disappearing_mode", {
      duration: (0, l.CUSTOM_STRING)(String(e))
    }));
    const n = yield (0, o.deprecatedSendIq)(t, i);
    if (!n.success) {
      const {
        errorCode: e,
        errorText: t
      } = n;
      __LOG__(3, undefined, undefined, undefined, ["DM", "DDM"])`setDisappearingMode: failed ${e}, ${t}`;
      throw new Error({
        errorCode: e,
        errorText: t
      });
    }
  })).apply(this, arguments);
}