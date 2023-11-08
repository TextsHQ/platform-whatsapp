var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseRequestSilentNonceResponseRecoveryRequired = function (e, t) {
  const n = (0, s.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const r = (0, s.flattenedChildWithTag)(e, "result");
  if (!r.success) {
    return r;
  }
  const l = (0, s.literal)(s.attrString, r.value, "status", "RecoveryRequired");
  if (!l.success) {
    return l;
  }
  const u = (0, s.attrString)(r.value, "email");
  if (!u.success) {
    return u;
  }
  const c = (0, o.parseHackBaseIQResultResponseMixin)(e, t);
  if (!c.success) {
    return c;
  }
  return (0, a.makeResult)((0, i.default)({
    resultStatus: l.value,
    resultEmail: u.value
  }, c.value));
};
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./367915.js");
var s = require("./686310.js");