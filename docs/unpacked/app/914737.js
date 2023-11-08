Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseUpdateBlockListResponseSuccessWithMismatch = function (e, t) {
  const n = (0, o.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const i = (0, o.flattenedChildWithTag)(e, "list");
  if (!i.success) {
    return i;
  }
  const l = (0, a.attrStringFromReference)(t, ["to"]);
  if (!l.success) {
    return l;
  }
  const u = (0, o.literal)(o.attrString, e, "from", l.value);
  if (!u.success) {
    return u;
  }
  const c = (0, o.literal)(o.attrString, e, "type", "result");
  if (!c.success) {
    return c;
  }
  const d = (0, a.attrStringFromReference)(t, ["id"]);
  if (!d.success) {
    return d;
  }
  const p = (0, o.literal)(o.attrString, e, "id", d.value);
  if (!p.success) {
    return p;
  }
  const f = (0, o.literal)(o.attrString, i.value, "matched", "false");
  if (!f.success) {
    return f;
  }
  const _ = (0, a.optionalAttrStringFromReference)(t, ["item", "dhash"]);
  if (!_.success) {
    return _;
  }
  const g = (0, o.optionalLiteral)(o.attrString, i.value, "c_dhash", _.value);
  if (!g.success) {
    return g;
  }
  const m = (0, o.attrString)(i.value, "dhash");
  if (!m.success) {
    return m;
  }
  const h = (0, o.mapChildrenWithTag)(i.value, "item", 0, 64000, s);
  if (!h.success) {
    return h;
  }
  return (0, r.makeResult)({
    type: c.value,
    listMatched: f.value,
    hasListCDhash: g.value != null,
    listDhash: m.value,
    listItem: h.value
  });
};
exports.parseUpdateBlockListResponseSuccessWithMismatchListItem = s;
var r = require("./135781.js");
var i = require("./568113.js");
var a = require("./591439.js");
var o = require("./686310.js");
function s(e) {
  const t = (0, o.assertTag)(e, "item");
  if (!t.success) {
    return t;
  }
  const n = (0, i.attrUserJid)(e, "jid");
  if (n.success) {
    return (0, r.makeResult)({
      jid: n.value
    });
  } else {
    return n;
  }
}