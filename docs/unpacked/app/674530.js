Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = o.parse(e);
  if (t.error) {
    __LOG__(4, undefined, new Error())`Parsing Error: ${t.error.toString()}`;
    return Promise.reject(t.error);
  }
  const n = t.success;
  const i = (0, r.wap)("ack", {
    to: r.S_WHATSAPP_NET,
    id: (0, r.CUSTOM_STRING)(n.stanzaId),
    class: "notification"
  });
  return (0, a.digestKey)().then(() => i);
};
var r = require("./716358.js");
var i = require("./347387.js");
var a = require("./9210.js");
const o = new i.WapParser("digestKeyParser", e => {
  e.assertTag("notification");
  e.assertAttr("type", "encrypt");
  e.assertFromServer();
  e.child("digest").assertTag("digest");
  return {
    stanzaId: e.attrString("id")
  };
});