Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeCommonAckMixin = function (e, t) {
  const n = function (e) {
    const t = (0, o.attrFromReference)(a.attrNewsletterJid, e, ["from"]);
    if (!t.success) {
      throw new l.SmaxParsingFailure(t.error);
    }
    const n = (0, o.attrFromReference)(s.attrStanzaId, e, ["id"]);
    if (!n.success) {
      throw new l.SmaxParsingFailure(n.error);
    }
    const i = (0, o.attrFromReference)(s.attrString, e, ["type"]);
    if (!i.success) {
      throw new l.SmaxParsingFailure(i.error);
    }
    return (0, r.smax)("ack", {
      to: (0, u.JID)(t.value),
      class: "message",
      id: (0, u.STANZA_ID)(n.value),
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