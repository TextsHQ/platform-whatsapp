var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return p.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./716358.js");
var o = require("./347387.js");
var s = r(require("./797137.js"));
var l = require("./326314.js");
var u = require("./41517.js");
const c = new Set();
const d = new o.WapParser("lowKeyParser", e => {
  e.assertTag("notification");
  e.assertAttr("type", "encrypt");
  e.assertFromServer();
  return {
    stanzaId: e.attrString("id"),
    numRemaining: e.child("count").attrInt("value")
  };
});
function p() {
  return (p = (0, i.default)(function* (e, t) {
    const n = d.parse(e);
    if (n.error) {
      __LOG__(4, undefined, new Error())`handlePreKeyLow: Parsing Error: ${n.error.toString()}`;
      throw n.error;
    }
    {
      const e = n.success;
      const r = (0, a.wap)("ack", {
        to: a.S_WHATSAPP_NET,
        id: (0, a.CUSTOM_STRING)(e.stanzaId),
        class: "notification"
      });
      if (c.has(t)) {
        return r;
      } else {
        c.add(t);
        l.waSignalStore.setServerHasPreKeys(false);
        yield (0, s.default)();
        return (0, u.uploadPreKeys)().then(() => r).finally(() => {
          c.delete(t);
        });
      }
    }
  })).apply(this, arguments);
}