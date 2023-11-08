Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parsePreKeyMixin = function (e) {
  const t = (0, o.flattenedChildWithTag)(e, "key");
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
  const l = (0, a.parseKeyIDMixin)(n.value);
  if (!l.success) {
    return l;
  }
  const u = (0, i.parseKeyDataMixin)(s.value);
  if (!u.success) {
    return u;
  }
  return (0, r.makeResult)({
    keyIdKeyIDMixin: l.value,
    keyValueKeyDataMixin: u.value
  });
};
var r = require("./135781.js");
var i = require("./616216.js");
var a = require("./859888.js");
var o = require("./686310.js");