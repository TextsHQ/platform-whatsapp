var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseSetResponseServerError = function (e, t) {
  const n = (0, l.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const r = (0, l.flattenedChildWithTag)(e, "error");
  if (!r.success) {
    return r;
  }
  const u = (0, o.parseIQErrorInternalServerErrorMixin)(r.value);
  if (!u.success) {
    return u;
  }
  const c = (0, s.parseIQErrorResponseMixin)(e, t);
  if (!c.success) {
    return c;
  }
  return (0, a.makeResult)((0, i.default)({
    errorIQErrorInternalServerErrorMixin: u.value
  }, c.value));
};
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./538177.js");
var s = require("./976167.js");
var l = require("./686310.js");