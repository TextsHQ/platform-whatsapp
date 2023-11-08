Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseCreateSubGroupSuggestionResponseNewGroupSuggestionSuccess = function (e, t) {
  const n = (0, l.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const u = (0, l.flattenedChildWithTag)(e, "sub_group_suggestion");
  if (!u.success) {
    return u;
  }
  const s = (0, l.optionalChildWithTag)(u.value, "description", i);
  if (!s.success) {
    return s;
  }
  const c = (0, o.attrStringFromReference)(t, ["to"]);
  if (!c.success) {
    return c;
  }
  const d = (0, l.literal)(l.attrString, e, "from", c.value);
  if (!d.success) {
    return d;
  }
  const f = (0, l.literal)(l.attrString, e, "type", "result");
  if (!f.success) {
    return f;
  }
  const p = (0, o.attrStringFromReference)(t, ["id"]);
  if (!p.success) {
    return p;
  }
  const m = (0, l.literal)(l.attrString, e, "id", p.value);
  if (!m.success) {
    return m;
  }
  const h = (0, r.attrGroupJid)(u.value, "jid");
  if (!h.success) {
    return h;
  }
  const g = (0, r.attrUserJid)(u.value, "creator");
  if (!g.success) {
    return g;
  }
  const E = (0, l.attrIntRange)(u.value, "creation", 0, undefined);
  if (!E.success) {
    return E;
  }
  return (0, a.makeResult)({
    type: f.value,
    subGroupSuggestionJid: h.value,
    subGroupSuggestionCreator: g.value,
    subGroupSuggestionCreation: E.value,
    subGroupSuggestionDescription: s.value
  });
};
exports.parseCreateSubGroupSuggestionResponseNewGroupSuggestionSuccessSubGroupSuggestionDescription = i;
var a = require("../app/135781.js");
var r = require("../app/568113.js");
var o = require("../app/591439.js");
var l = require("../app/686310.js");
function i(e) {
  const t = (0, l.assertTag)(e, "description");
  if (!t.success) {
    return t;
  }
  const n = (0, l.optionalLiteral)(l.attrString, e, "error", "406");
  if (n.success) {
    return (0, a.makeResult)({
      error: n.value
    });
  } else {
    return n;
  }
}