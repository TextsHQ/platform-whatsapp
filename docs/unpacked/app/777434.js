var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseGetCountryCodeResponseGetCountryCodeResponse = function (e, t) {
  const n = (0, s.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const r = (0, s.flattenedChildWithTag)(e, "country_code");
  if (!r.success) {
    return r;
  }
  const l = (0, s.attrString)(r.value, "iso");
  if (!l.success) {
    return l;
  }
  const u = (0, o.parseIQResultResponseMixin)(e, t);
  if (!u.success) {
    return u;
  }
  return (0, a.makeResult)((0, i.default)({
    countryCodeIso: l.value
  }, u.value));
};
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./948685.js");
var s = require("./686310.js");