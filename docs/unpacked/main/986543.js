var a = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseGetAccountNonceResponseSuccess = function (e, t) {
  const n = (0, i.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const a = (0, i.flattenedChildWithTag)(e, "detail");
  if (!a.success) {
    return a;
  }
  const s = (0, i.flattenedChildWithTag)(a.value, "nonce");
  if (!s.success) {
    return s;
  }
  const c = (0, i.optionalChildWithTag)(a.value, "request", u);
  if (!c.success) {
    return c;
  }
  const d = (0, i.contentString)(s.value);
  if (!d.success) {
    return d;
  }
  const f = (0, l.parseHackBaseIQResultResponseMixin)(e, t);
  if (!f.success) {
    return f;
  }
  return (0, o.makeResult)((0, r.default)((0, r.default)({
    detailNonceElementValue: d.value
  }, f.value), {}, {
    detailRequest: c.value
  }));
};
exports.parseGetAccountNonceResponseSuccessDetailRequest = u;
var r = a(require("../vendor/73982.js"));
var o = require("../app/135781.js");
var l = require("./346092.js");
var i = require("../app/686310.js");
function u(e) {
  const t = (0, i.assertTag)(e, "request");
  if (!t.success) {
    return t;
  }
  const n = (0, i.flattenedChildWithTag)(e, "id");
  if (!n.success) {
    return n;
  }
  const a = (0, i.contentString)(n.value);
  if (a.success) {
    return (0, o.makeResult)({
      idElementValue: a.value
    });
  } else {
    return a;
  }
}