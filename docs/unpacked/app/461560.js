var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseQPNotificationRequest = function (e) {
  const t = (0, u.assertTag)(e, "notification");
  if (!t.success) {
    return t;
  }
  const n = (0, u.flattenedChildWithTag)(e, "surfaces");
  if (!n.success) {
    return n;
  }
  const r = (0, l.attrUserJid)(e, "from");
  if (!r.success) {
    return r;
  }
  const c = (0, u.literal)(u.attrString, e, "type", "psa");
  if (!c.success) {
    return c;
  }
  const d = (0, o.parseQPSurfacesMixin)(n.value);
  if (!d.success) {
    return d;
  }
  const p = (0, s.parseServerNotificationMixin)(e);
  if (!p.success) {
    return p;
  }
  return (0, a.makeResult)((0, i.default)({
    from: r.value,
    type: c.value,
    surfacesQPSurfacesMixin: d.value
  }, p.value));
};
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./347611.js");
var s = require("./331633.js");
var l = require("./568113.js");
var u = require("./686310.js");