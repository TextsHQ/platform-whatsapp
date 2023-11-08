var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parsePrimaryHelloNotifyCompanionRequest = function (e) {
  const t = (0, l.assertTag)(e, "notification");
  if (!t.success) {
    return t;
  }
  const n = (0, l.flattenedChildWithTag)(e, "link_code_companion_reg");
  if (!n.success) {
    return n;
  }
  const r = (0, l.flattenedChildWithTag)(n.value, "link_code_pairing_wrapped_primary_ephemeral_pub");
  if (!r.success) {
    return r;
  }
  const u = (0, l.flattenedChildWithTag)(n.value, "primary_identity_pub");
  if (!u.success) {
    return u;
  }
  const c = (0, l.flattenedChildWithTag)(n.value, "link_code_pairing_ref");
  if (!c.success) {
    return c;
  }
  const d = (0, l.literal)(l.attrString, e, "type", "link_code_companion_reg");
  if (!d.success) {
    return d;
  }
  const p = (0, s.attrDomainJid)(e, "from");
  if (!p.success) {
    return p;
  }
  const f = (0, l.literal)(l.attrString, n.value, "stage", "primary_hello");
  if (!f.success) {
    return f;
  }
  const _ = (0, l.contentBytes)(r.value);
  if (!_.success) {
    return _;
  }
  const g = (0, l.contentBytes)(u.value);
  if (!g.success) {
    return g;
  }
  const m = (0, l.contentBytes)(c.value);
  if (!m.success) {
    return m;
  }
  const h = (0, o.parseServerNotificationMixin)(e);
  if (!h.success) {
    return h;
  }
  return (0, a.makeResult)((0, i.default)({
    type: d.value,
    from: p.value,
    linkCodeCompanionRegStage: f.value,
    linkCodeCompanionRegLinkCodePairingWrappedPrimaryEphemeralPubElementValue: _.value,
    linkCodeCompanionRegPrimaryIdentityPubElementValue: g.value,
    linkCodeCompanionRegLinkCodePairingRefElementValue: m.value
  }, h.value));
};
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./228085.js");
var s = require("./568113.js");
var l = require("./686310.js");