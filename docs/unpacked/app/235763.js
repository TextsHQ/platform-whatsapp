var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseChangeNotificationRequest = function (e) {
  const t = (0, u.assertTag)(e, "notification");
  if (!t.success) {
    return t;
  }
  const n = (0, u.flattenedChildWithTag)(e, "set");
  if (!n.success) {
    return n;
  }
  const r = (0, l.attrUserJid)(e, "from");
  if (!r.success) {
    return r;
  }
  const c = (0, u.literal)(u.attrString, e, "type", "username");
  if (!c.success) {
    return c;
  }
  const d = (0, s.parseServerNotificationMixin)(e);
  if (!d.success) {
    return d;
  }
  const p = (0, o.parseChangeNotificationSetOrChangeNotificationSetHashOrChangeNotificationDeletedMixinGroup)(n.value);
  if (!p.success) {
    return p;
  }
  return (0, a.makeResult)((0, i.default)((0, i.default)({
    from: r.value,
    type: c.value
  }, d.value), {}, {
    setChangeNotificationSetOrChangeNotificationSetHashOrChangeNotificationDeletedMixinGroup: p.value
  }));
};
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./455012.js");
var s = require("./523933.js");
var l = require("./568113.js");
var u = require("./686310.js");