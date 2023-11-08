var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseNewsletterMessageWithJIDMixin = function (e) {
  const t = (0, u.assertTag)(e, "message");
  if (!t.success) {
    return t;
  }
  const n = (0, l.attrNewsletterJid)(e, "from");
  if (!n.success) {
    return n;
  }
  const r = (0, o.parseNewsletterMessageFanoutMixin)(e);
  if (!r.success) {
    return r;
  }
  const c = (0, s.parseOfflineMixin)(e);
  return (0, a.makeResult)((0, i.default)((0, i.default)({
    from: n.value
  }, r.value), {}, {
    offlineMixin: c.success ? c.value : null
  }));
};
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./472465.js");
var s = require("./456217.js");
var l = require("./568113.js");
var u = require("./686310.js");