var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseNewsletterEditMixin = function (e) {
  const t = (0, l.assertTag)(e, "message");
  if (!t.success) {
    return t;
  }
  const n = (0, o.parseAdminEditMixin)(e);
  if (!n.success) {
    return n;
  }
  const r = (0, s.parseNewsletterTextOrMediaMixinGroup)(e);
  if (!r.success) {
    return r;
  }
  return (0, a.makeResult)((0, i.default)((0, i.default)({}, n.value), {}, {
    newsletterTextOrMediaMixinGroup: r.value
  }));
};
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./368096.js");
var s = require("./419363.js");
var l = require("./686310.js");