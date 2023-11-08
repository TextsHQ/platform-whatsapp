Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseGroupInfoAttributesMixin = function (e) {
  const t = (0, s.assertTag)(e, "group");
  if (!t.success) {
    return t;
  }
  const n = (0, s.attrString)(e, "id");
  if (!n.success) {
    return n;
  }
  const l = (0, s.optional)(o.attrUserJid, e, "creator");
  if (!l.success) {
    return l;
  }
  const u = (0, s.optional)(o.attrUserJid, e, "creator_pn");
  if (!u.success) {
    return u;
  }
  const c = (0, s.attrIntRange)(e, "creation", 0, undefined);
  if (!c.success) {
    return c;
  }
  const d = (0, s.optional)(s.attrString, e, "p_v_id");
  if (!d.success) {
    return d;
  }
  const p = (0, s.optional)(s.attrString, e, "a_v_id");
  if (!p.success) {
    return p;
  }
  const f = (0, s.optional)(s.attrIntRange, e, "s_t", 0, undefined);
  if (!f.success) {
    return f;
  }
  const _ = (0, s.optional)(o.attrUserJid, e, "s_o");
  if (!_.success) {
    return _;
  }
  const g = (0, s.optional)(o.attrUserJid, e, "s_o_pn");
  if (!g.success) {
    return g;
  }
  const m = (0, s.optional)(s.attrString, e, "open_thread_id");
  if (!m.success) {
    return m;
  }
  const h = (0, i.parseGroupAddressingModeMixin)(e);
  const y = (0, a.parseNamedSubjectOrUnnamedSubjectFallbackMixinGroup)(e);
  if (!y.success) {
    return y;
  }
  return (0, r.makeResult)({
    id: n.value,
    creator: l.value,
    creatorPn: u.value,
    creation: c.value,
    pVId: d.value,
    aVId: p.value,
    sT: f.value,
    sO: _.value,
    sOPn: g.value,
    openThreadId: m.value,
    groupAddressingModeMixin: h.success ? h.value : null,
    namedSubjectOrUnnamedSubjectFallbackMixinGroup: y.value
  });
};
var r = require("./135781.js");
var i = require("./682751.js");
var a = require("./418473.js");
var o = require("./568113.js");
var s = require("./686310.js");