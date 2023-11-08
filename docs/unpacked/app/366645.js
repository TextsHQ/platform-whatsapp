Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeNotificationClientAckMixin = function (e, t) {
  const n = function (e) {
    const t = (0, o.attrFromReference)(s.attrStanzaId, e, ["id"]);
    if (!t.success) {
      throw new l.SmaxParsingFailure(t.error);
    }
    const n = (0, o.attrFromReference)(a.attrUserJid, e, ["from"]);
    if (!n.success) {
      throw new l.SmaxParsingFailure(n.error);
    }
    const i = (0, o.attrFromReference)(s.attrString, e, ["type"]);
    if (!i.success) {
      throw new l.SmaxParsingFailure(i.error);
    }
    return (0, r.smax)("ack", {
      id: (0, u.STANZA_ID)(t.value),
      to: (0, u.USER_JID)(n.value),
      class: "notification",
      type: (0, u.CUSTOM_STRING)(i.value)
    });
  }(t);
  return (0, i.mergeStanzas)(e, n);
};
var r = require("./758616.js");
var i = require("./770006.js");
var a = require("./568113.js");
var o = require("./591439.js");
var s = require("./686310.js");
var l = require("./590062.js");
var u = require("./716358.js");