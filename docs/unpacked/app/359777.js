Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseClientExpirationRequest = function (e) {
  const t = (0, a.assertTag)(e, "ib");
  if (!t.success) {
    return t;
  }
  const n = (0, a.flattenedChildWithTag)(e, "client_expiration");
  if (!n.success) {
    return n;
  }
  const o = (0, i.literalJid)(i.attrDomainJid, e, "from", "s.whatsapp.net");
  if (!o.success) {
    return o;
  }
  const s = (0, a.optional)(a.attrIntRange, n.value, "t", 0, undefined);
  if (!s.success) {
    return s;
  }
  return (0, r.makeResult)({
    from: o.value,
    clientExpirationT: s.value
  });
};
var r = require("./135781.js");
var i = require("./568113.js");
var a = require("./686310.js");