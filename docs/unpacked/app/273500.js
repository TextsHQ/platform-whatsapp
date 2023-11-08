var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearDirtyBits = function () {
  return l.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./250281.js");
var o = require("./716358.js");
const s = new (require("./347387.js").WapParser)("cleanDirtyReplyParser", e => {
  e.assertAttr("type", "result");
  return {};
});
function l() {
  return (l = (0, i.default)(function* (e) {
    if (e.length === 0) {
      return;
    }
    const t = e.map(e => (0, o.wap)("clean", {
      type: (0, o.CUSTOM_STRING)(e.type),
      timestamp: (0, o.INT)(e.timestamp)
    }));
    const n = (0, o.wap)("iq", {
      to: o.S_WHATSAPP_NET,
      type: "set",
      xmlns: "urn:xmpp:whatsapp:dirty",
      id: (0, o.generateId)()
    }, t);
    try {
      yield (0, a.deprecatedSendIq)(n, s);
      __LOG__(2)`clearDirtyBits: success for type: ${e.map(e => e.type).join(",")}`;
    } catch (e) {
      __LOG__(3)`clearDirtyBits: failed with error`;
    }
  })).apply(this, arguments);
}