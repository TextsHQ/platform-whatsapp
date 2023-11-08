var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserByCustomURL = function () {
  return c.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./250281.js");
var o = require("./716358.js");
var s = require("./347387.js");
var l = require("./984330.js");
const u = new s.WapParser("customURLResponse", e => {
  e.assertTag("iq");
  e.assertFromServer();
  return {
    user: {
      jid: e.child("user").attrUserJid("jid")
    }
  };
});
function c() {
  return (c = (0, i.default)(function* (e) {
    const t = (0, o.wap)("iq", {
      smax_id: "79",
      xmlns: "fb:thrift_iq",
      type: "get",
      to: o.S_WHATSAPP_NET,
      id: (0, o.generateId)()
    }, (0, o.wap)("custom_url", null, (0, o.wap)("path", null, e)));
    const n = yield (0, a.deprecatedSendIq)(t, u);
    if (!n.success) {
      throw new l.ServerStatusCodeError(n.errorCode, n.errorText);
    }
    return n.result;
  })).apply(this, arguments);
}