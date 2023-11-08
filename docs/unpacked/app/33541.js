Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parsePassiveIQResponseSuccess = function (e, t) {
  const n = (0, o.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const s = (0, o.flattenedChildWithTag)(e, "passive");
  if (!s.success) {
    return s;
  }
  const l = (0, a.attrStringFromReference)(t, ["id"]);
  if (!l.success) {
    return l;
  }
  const u = (0, o.literal)(o.attrString, e, "id", l.value);
  if (!u.success) {
    return u;
  }
  const c = (0, o.literal)(o.attrString, e, "type", "result");
  if (!c.success) {
    return c;
  }
  const d = (0, i.literalJid)(i.attrDomainJid, e, "from", "s.whatsapp.net");
  if (!d.success) {
    return d;
  }
  return (0, r.makeResult)({
    type: c.value,
    from: d.value
  });
};
var r = require("./135781.js");
var i = require("./568113.js");
var a = require("./591439.js");
var o = require("./686310.js");