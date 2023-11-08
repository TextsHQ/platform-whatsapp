Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleCallReceipt = function (e) {
  const t = l.parse(e);
  if (t.error) {
    __LOG__(4, undefined, new Error())`Parsing Error: ${t.error.toString()}`;
    return Promise.reject(t.error);
  }
  const {
    stanzaId: n,
    type: i,
    from: o
  } = t.success;
  return Promise.resolve((0, r.wap)("ack", {
    id: (0, r.CUSTOM_STRING)(n),
    to: (0, a.JID)(o),
    from: (0, a.JID)((0, s.getMaybeMeUser)()),
    class: "receipt",
    type: (0, r.MAYBE_CUSTOM_STRING)(i)
  }));
};
var r = require("./716358.js");
var i = require("./347387.js");
var a = require("./355813.js");
var o = require("./854379.js");
var s = require("./459857.js");
const l = new i.WapParser("callReceiptParser", e => {
  e.assertTag("receipt");
  if (!(e.maybeChild("offer") || e.maybeChild("accept") || e.maybeChild("reject"))) {
    throw e.createParseError("Unrecognized call stanza");
  }
  return {
    stanzaId: e.attrString("id"),
    type: e.hasAttr("type") ? e.attrString("type") : null,
    from: (0, o.jidWithTypeToWid)(e.attrJidWithType("from"))
  };
});