var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseGetAccessTokenAndSessionCookiesResponseIncorrectNonce = function (e, t) {
  const n = (0, s.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const r = (0, s.flattenedChildWithTag)(e, "error");
  if (!r.success) {
    return r;
  }
  const l = (0, s.literal)(s.attrString, r.value, "code", "432");
  if (!l.success) {
    return l;
  }
  const u = (0, s.literal)(s.attrString, r.value, "text", "INCORRECT_NONCE");
  if (!u.success) {
    return u;
  }
  const c = (0, o.parseHackBaseIQErrorResponseMixin)(e, t);
  if (!c.success) {
    return c;
  }
  return (0, a.makeResult)((0, i.default)({
    errorCode: l.value,
    errorText: u.value
  }, c.value));
};
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./48005.js");
var s = require("./686310.js");