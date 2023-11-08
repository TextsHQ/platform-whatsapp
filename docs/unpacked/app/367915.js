var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseHackBaseIQResultResponseMixin = function (e, t) {
  const n = (0, l.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const r = (0, l.optional)(s.attrUserJid, e, "to");
  if (!r.success) {
    return r;
  }
  const u = (0, o.parseIQResultResponseMixin)(e, t);
  if (!u.success) {
    return u;
  }
  return (0, a.makeResult)((0, i.default)({
    to: r.value
  }, u.value));
};
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./49792.js");
var s = require("./568113.js");
var l = require("./686310.js");