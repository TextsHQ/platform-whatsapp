var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseNewsletterRevokeMixin = function (e) {
  const t = (0, l.assertTag)(e, "message");
  if (!t.success) {
    return t;
  }
  const n = (0, l.flattenedChildWithTag)(e, "plaintext");
  if (!n.success) {
    return n;
  }
  const r = (0, o.parseAdminRevokeMixin)(e);
  if (!r.success) {
    return r;
  }
  const u = (0, s.parseContentTypeTextMixin)(e);
  if (!u.success) {
    return u;
  }
  return (0, a.makeResult)((0, i.default)((0, i.default)({}, r.value), u.value));
};
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./513125.js");
var s = require("./691822.js");
var l = require("./686310.js");