var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseGetAccessTokenAndSessionCookiesResponseSuccess = function (e, t) {
  const n = (0, s.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const r = (0, s.flattenedChildWithTag)(e, "access_token");
  if (!r.success) {
    return r;
  }
  const l = (0, s.flattenedChildWithTag)(e, "session_cookies");
  if (!l.success) {
    return l;
  }
  const u = (0, s.flattenedChildWithTag)(e, "business_person");
  if (!u.success) {
    return u;
  }
  const c = (0, s.contentString)(r.value);
  if (!c.success) {
    return c;
  }
  const d = (0, s.contentString)(l.value);
  if (!d.success) {
    return d;
  }
  const p = (0, s.attrString)(u.value, "id");
  if (!p.success) {
    return p;
  }
  const f = (0, o.parseHackBaseIQResultResponseMixin)(e, t);
  if (!f.success) {
    return f;
  }
  return (0, a.makeResult)((0, i.default)({
    accessTokenElementValue: c.value,
    sessionCookiesElementValue: d.value,
    businessPersonId: p.value
  }, f.value));
};
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./19677.js");
var s = require("./686310.js");