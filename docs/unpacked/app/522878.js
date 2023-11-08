Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseGroupInfoDescriptionMixin = function (e) {
  const t = (0, a.assertTag)(e, "description");
  if (!t.success) {
    return t;
  }
  const n = (0, a.flattenedChildWithTag)(e, "body");
  if (!n.success) {
    return n;
  }
  const o = (0, a.attrString)(e, "id");
  if (!o.success) {
    return o;
  }
  const s = (0, a.optional)(i.attrUserJid, e, "participant");
  if (!s.success) {
    return s;
  }
  const l = (0, a.optional)(i.attrUserJid, e, "participant_pn");
  if (!l.success) {
    return l;
  }
  const u = (0, a.attrIntRange)(e, "t", 0, undefined);
  if (!u.success) {
    return u;
  }
  const c = (0, a.contentString)(n.value);
  if (!c.success) {
    return c;
  }
  return (0, r.makeResult)({
    id: o.value,
    participant: s.value,
    participantPn: l.value,
    t: u.value,
    bodyElementValue: c.value
  });
};
var r = require("./135781.js");
var i = require("./568113.js");
var a = require("./686310.js");