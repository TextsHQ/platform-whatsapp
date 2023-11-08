var a = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseHackBaseIQErrorResponseMixin = function (e, t) {
  const n = (0, u.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const a = (0, u.optional)(i.attrUserJid, e, "to");
  if (!a.success) {
    return a;
  }
  const s = (0, l.parseIQErrorResponseMixin)(e, t);
  if (!s.success) {
    return s;
  }
  return (0, o.makeResult)((0, r.default)({
    to: a.value
  }, s.value));
};
var r = a(require("../vendor/73982.js"));
var o = require("../app/135781.js");
var l = require("./429477.js");
var i = require("../app/568113.js");
var u = require("../app/686310.js");