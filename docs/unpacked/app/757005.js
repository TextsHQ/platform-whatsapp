Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseSignedPreKeyMixin = function (e) {
  const t = (0, o.flattenedChildWithTag)(e, "skey");
  if (!t.success) {
    return t;
  }
  const n = (0, o.flattenedChildWithTag)(t.value, "id");
  if (!n.success) {
    return n;
  }
  const s = (0, o.flattenedChildWithTag)(t.value, "value");
  if (!s.success) {
    return s;
  }
  const l = (0, o.flattenedChildWithTag)(t.value, "signature");
  if (!l.success) {
    return l;
  }
  const u = (0, o.contentBytesRange)(l.value, 64, 64);
  if (!u.success) {
    return u;
  }
  const c = (0, a.parseKeyIDMixin)(n.value);
  if (!c.success) {
    return c;
  }
  const d = (0, i.parseKeyDataMixin)(s.value);
  if (!d.success) {
    return d;
  }
  return (0, r.makeResult)({
    skeySignatureElementValue: u.value,
    skeyIdKeyIDMixin: c.value,
    skeyValueKeyDataMixin: d.value
  });
};
var r = require("./135781.js");
var i = require("./616216.js");
var a = require("./859888.js");
var o = require("./686310.js");