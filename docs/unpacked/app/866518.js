var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseRefreshCodeNotifyCompanionRequest = function (e) {
  const t = (0, u.assertTag)(e, "notification");
  if (!t.success) {
    return t;
  }
  const n = (0, u.flattenedChildWithTag)(e, "link_code_companion_reg");
  if (!n.success) {
    return n;
  }
  const r = (0, u.flattenedChildWithTag)(n.value, "link_code_pairing_ref");
  if (!r.success) {
    return r;
  }
  const c = (0, u.literal)(u.attrString, e, "type", "link_code_companion_reg");
  if (!c.success) {
    return c;
  }
  const d = (0, l.attrDomainJid)(e, "from");
  if (!d.success) {
    return d;
  }
  const p = (0, u.literal)(u.attrString, n.value, "stage", "refresh_code");
  if (!p.success) {
    return p;
  }
  const f = (0, u.optional)(u.attrStringEnum, n.value, "force_manual_refresh", o.ENUM_FALSE_TRUE);
  if (!f.success) {
    return f;
  }
  const _ = (0, u.contentBytes)(r.value);
  if (!_.success) {
    return _;
  }
  const g = (0, s.parseServerNotificationMixin)(e);
  if (!g.success) {
    return g;
  }
  return (0, a.makeResult)((0, i.default)({
    type: c.value,
    from: d.value,
    linkCodeCompanionRegStage: p.value,
    linkCodeCompanionRegForceManualRefresh: f.value,
    linkCodeCompanionRegLinkCodePairingRefElementValue: _.value
  }, g.value));
};
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./40495.js");
var s = require("./228085.js");
var l = require("./568113.js");
var u = require("./686310.js");