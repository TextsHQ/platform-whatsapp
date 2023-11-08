Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseUpdateBlockListResponseSuccessWithMatch = function (e, t) {
  const n = (0, a.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const o = (0, a.flattenedChildWithTag)(e, "list");
  if (!o.success) {
    return o;
  }
  const s = (0, i.attrStringFromReference)(t, ["to"]);
  if (!s.success) {
    return s;
  }
  const l = (0, a.literal)(a.attrString, e, "from", s.value);
  if (!l.success) {
    return l;
  }
  const u = (0, a.literal)(a.attrString, e, "type", "result");
  if (!u.success) {
    return u;
  }
  const c = (0, i.attrStringFromReference)(t, ["id"]);
  if (!c.success) {
    return c;
  }
  const d = (0, a.literal)(a.attrString, e, "id", c.value);
  if (!d.success) {
    return d;
  }
  const p = (0, a.literal)(a.attrString, o.value, "matched", "true");
  if (!p.success) {
    return p;
  }
  const f = (0, a.attrString)(o.value, "dhash");
  if (!f.success) {
    return f;
  }
  return (0, r.makeResult)({
    type: u.value,
    listMatched: p.value,
    listDhash: f.value
  });
};
var r = require("./135781.js");
var i = require("./591439.js");
var a = require("./686310.js");