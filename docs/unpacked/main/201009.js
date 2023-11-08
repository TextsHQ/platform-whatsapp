Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parsePublishSuccessMixin = function (e, t) {
  const n = (0, i.assertTag)(e, "ack");
  if (!n.success) {
    return n;
  }
  const u = (0, l.attrStringFromReference)(t, ["id"]);
  if (!u.success) {
    return u;
  }
  const s = (0, i.literal)(i.attrString, e, "id", u.value);
  if (!s.success) {
    return s;
  }
  const c = (0, i.literal)(i.attrString, e, "class", "receipt");
  if (!c.success) {
    return c;
  }
  const d = (0, l.attrStringFromReference)(t, ["to"]);
  if (!d.success) {
    return d;
  }
  const f = (0, i.literal)(i.attrString, e, "from", d.value);
  if (!f.success) {
    return f;
  }
  const p = (0, i.optional)(i.attrIntRange, e, "t", 0, undefined);
  if (!p.success) {
    return p;
  }
  const m = (0, i.optional)(i.attrStringEnum, e, "readreceipts", o.ENUM_ALL_NONE);
  if (!m.success) {
    return m;
  }
  const h = (0, l.attrStringFromReference)(t, ["type"]);
  if (!h.success) {
    return h;
  }
  const g = (0, i.literal)(i.attrString, e, "type", h.value);
  if (!g.success) {
    return g;
  }
  const E = (0, r.parseDeprecatedEditMixin)(e);
  return (0, a.makeResult)({
    class: c.value,
    t: p.value,
    readreceipts: m.value,
    deprecatedEditMixin: E.success ? E.value : null
  });
};
var a = require("../app/135781.js");
var r = require("./577698.js");
var o = require("./882498.js");
var l = require("../app/591439.js");
var i = require("../app/686310.js");