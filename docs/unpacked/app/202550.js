var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseCommonNotificationMixin = function (e) {
  const t = (0, l.assertTag)(e, "notification");
  if (!t.success) {
    return t;
  }
  const n = (0, s.attrNewsletterJid)(e, "from");
  if (!n.success) {
    return n;
  }
  const r = (0, l.literal)(l.attrString, e, "type", "newsletter");
  if (!r.success) {
    return r;
  }
  const u = (0, o.parseServerNotificationMixin)(e);
  if (!u.success) {
    return u;
  }
  return (0, a.makeResult)((0, i.default)({
    from: n.value,
    type: r.value
  }, u.value));
};
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./326320.js");
var s = require("./568113.js");
var l = require("./686310.js");