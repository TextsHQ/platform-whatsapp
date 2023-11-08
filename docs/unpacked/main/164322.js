Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseCreateResponseGroupAlreadyExists = function (e, t) {
  const n = (0, l.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const i = (0, l.flattenedChildWithTag)(e, "group");
  if (!i.success) {
    return i;
  }
  const u = (0, r.literalJid)(r.attrDomainJid, e, "from", "g.us");
  if (!u.success) {
    return u;
  }
  const s = (0, l.literal)(l.attrString, e, "type", "result");
  if (!s.success) {
    return s;
  }
  const c = (0, o.attrStringFromReference)(t, ["id"]);
  if (!c.success) {
    return c;
  }
  const d = (0, l.literal)(l.attrString, e, "id", c.value);
  if (!d.success) {
    return d;
  }
  const f = (0, r.attrGroupJid)(i.value, "jid");
  if (!f.success) {
    return f;
  }
  return (0, a.makeResult)({
    from: u.value,
    type: s.value,
    groupJid: f.value
  });
};
var a = require("../app/135781.js");
var r = require("../app/568113.js");
var o = require("../app/591439.js");
var l = require("../app/686310.js");