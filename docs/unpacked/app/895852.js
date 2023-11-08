var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseRequestSilentNonceResponseSuccess = function (e, t) {
  const n = (0, s.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const r = (0, s.flattenedChildWithTag)(e, "result");
  if (!r.success) {
    return r;
  }
  const l = (0, s.literal)(s.attrString, r.value, "status", "Success");
  if (!l.success) {
    return l;
  }
  const u = (0, o.parseHackBaseIQResultResponseMixin)(e, t);
  if (!u.success) {
    return u;
  }
  return (0, a.makeResult)((0, i.default)({
    resultStatus: l.value
  }, u.value));
};
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./367915.js");
var s = require("./686310.js");