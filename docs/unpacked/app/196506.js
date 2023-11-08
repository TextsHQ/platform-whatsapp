Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t) {
  const n = e.isUser() && t != null;
  return (0, r.deprecatedCastStanza)((0, i.wap)("presence", {
    id: (0, i.generateId)(),
    to: (0, a.CHAT_JID)(e),
    type: "subscribe"
  }, n ? (0, i.wap)("tctoken", null, t) : null));
};
var r = require("./250281.js");
var i = require("./716358.js");
var a = require("./355813.js");