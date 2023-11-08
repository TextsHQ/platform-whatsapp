var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseNewsletterPollCreationMixin = function (e) {
  const t = (0, l.assertTag)(e, "message");
  if (!t.success) {
    return t;
  }
  const n = (0, l.flattenedChildWithTag)(e, "plaintext");
  if (!n.success) {
    return n;
  }
  const r = (0, s.parsePayloadMixin)(n.value);
  if (!r.success) {
    return r;
  }
  const u = (0, o.parseContentTypePollCreationMixin)(e);
  if (!u.success) {
    return u;
  }
  return (0, a.makeResult)((0, i.default)({
    plaintextPayloadMixin: r.value
  }, u.value));
};
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./595076.js");
var s = require("./652732.js");
var l = require("./686310.js");