var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseCompanionHelloResponseNotifyCompanion = function (e, t) {
  const n = (0, s.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const r = (0, s.flattenedChildWithTag)(e, "link_code_companion_reg");
  if (!r.success) {
    return r;
  }
  const l = (0, s.flattenedChildWithTag)(r.value, "link_code_pairing_ref");
  if (!l.success) {
    return l;
  }
  const u = (0, s.literal)(s.attrString, r.value, "stage", "companion_hello");
  if (!u.success) {
    return u;
  }
  const c = (0, s.contentBytes)(l.value);
  if (!c.success) {
    return c;
  }
  const d = (0, o.parseIQResultResponseMixin)(e, t);
  if (!d.success) {
    return d;
  }
  return (0, a.makeResult)((0, i.default)({
    linkCodeCompanionRegStage: u.value,
    linkCodeCompanionRegLinkCodePairingRefElementValue: c.value
  }, d.value));
};
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./948685.js");
var s = require("./686310.js");