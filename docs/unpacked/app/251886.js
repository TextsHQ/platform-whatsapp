var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = l.parse(e);
  if (t.error) {
    __LOG__(4, undefined, new Error())`Parsing Error: ${t.error.toString()}`;
    return Promise.reject(t.error);
  }
  return (0, o.default)(t.success);
};
var i = require("./632157.js");
var a = require("./347387.js");
var o = r(require("./482503.js"));
var s = require("./854379.js");
const l = new a.WapParser("incomingPresenceParser", e => {
  e.assertTag("presence");
  const t = e.attrEnumOrDefault("type", {
    available: "available",
    unavailable: "unavailable"
  }, "available");
  const n = e.maybeAttrString("last") === "deny" || undefined;
  let r;
  if (t === "unavailable") {
    if (e.hasAttr("last")) {
      if (!["deny", "none", "error"].includes(e.attrString("last"))) {
        r = e.attrTime("last");
      }
    } else {
      r = (0, i.unixTime)();
    }
  }
  return {
    id: (0, s.chatJidToChatWid)(e.attrChatJid("from")),
    type: t,
    t: r,
    deny: n
  };
});