var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseRevokeRequestCodeResponseSuccess = function (e, t) {
  const n = (0, c.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const r = (0, c.flattenedChildWithTag)(e, "revoke");
  if (!r.success) {
    return r;
  }
  const l = (0, s.parseIQResultResponseMixin)(e, t);
  if (!l.success) {
    return l;
  }
  const u = (0, o.parseGroupAddressingModeMixin)(e);
  const p = (0, c.mapChildrenWithTag)(r.value, "participant", 1, 1000, d);
  if (!p.success) {
    return p;
  }
  return (0, a.makeResult)((0, i.default)((0, i.default)({}, l.value), {}, {
    groupAddressingModeMixin: u.success ? u.value : null,
    revokeParticipant: p.value
  }));
};
exports.parseRevokeRequestCodeResponseSuccessRevokeParticipant = d;
var i = r(require("../vendor/73982.js"));
var a = require("./135781.js");
var o = require("./682751.js");
var s = require("./769758.js");
var l = require("./202804.js");
var u = require("./568113.js");
var c = require("./686310.js");
function d(e) {
  const t = (0, c.assertTag)(e, "participant");
  if (!t.success) {
    return t;
  }
  const n = (0, u.attrUserJid)(e, "jid");
  if (!n.success) {
    return n;
  }
  const r = (0, c.optionalLiteral)(c.attrString, e, "error", "404");
  if (!r.success) {
    return r;
  }
  const i = (0, l.parsePhoneNumberMixin)(e);
  return (0, a.makeResult)({
    jid: n.value,
    error: r.value,
    phoneNumberMixin: i.success ? i.value : null
  });
}