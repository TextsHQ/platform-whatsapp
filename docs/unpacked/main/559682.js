var a = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseSetDescriptionResponseSuccess = function (e, t) {
  const n = (0, i.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const a = (0, i.optional)(i.attrIntRange, e, "t", 0, undefined);
  if (!a.success) {
    return a;
  }
  const u = (0, l.parseIQResultResponseMixin)(e, t);
  if (!u.success) {
    return u;
  }
  return (0, o.makeResult)((0, r.default)({
    t: a.value
  }, u.value));
};
var r = a(require("../vendor/73982.js"));
var o = require("../app/135781.js");
var l = require("../app/769758.js");
var i = require("../app/686310.js");