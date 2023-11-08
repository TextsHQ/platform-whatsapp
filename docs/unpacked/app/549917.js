Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeDeliverResponseBadStanza = function (e, t) {
  const {
    ackError: n
  } = e;
  const d = (0, s.attrFromReference)(l.attrStanzaId, t, ["id"]);
  if (!d.success) {
    throw new u.SmaxParsingFailure(d.error);
  }
  const p = (0, s.attrFromReference)(o.attrJidEnum, t, ["from"], i.BROADCASTJID_CALLJID_DEVICEJID_DOMAINJID_GROUPJID_STATUSJID_USERJID);
  if (!p.success) {
    throw new u.SmaxParsingFailure(p.error);
  }
  const f = (0, s.optionalAttrFromReference)(o.attrJidEnum, t, ["participant"], i.BROADCASTJID_CALLJID_DEVICEJID_DOMAINJID_GROUPJID_STATUSJID_USERJID);
  if (!f.success) {
    throw new u.SmaxParsingFailure(f.error);
  }
  const _ = (0, s.optionalAttrFromReference)(l.attrString, t, ["type"]);
  if (!_.success) {
    throw new u.SmaxParsingFailure(_.error);
  }
  return (0, a.smax)("ack", {
    class: "message",
    id: (0, c.STANZA_ID)(d.value),
    to: (0, c.JID)(p.value),
    participant: (0, r.OPTIONAL)(c.JID, f.value),
    type: (0, r.OPTIONAL)(c.CUSTOM_STRING, _.value),
    error: (0, c.INT)(n)
  });
};
var r = require("./93864.js");
var i = require("./544032.js");
var a = require("./758616.js");
var o = require("./568113.js");
var s = require("./591439.js");
var l = require("./686310.js");
var u = require("./590062.js");
var c = require("./716358.js");