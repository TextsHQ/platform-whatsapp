var a = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parsePromoteDemoteResponseSuccessDemote = function (e, t) {
  const n = (0, d.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const a = (0, d.flattenedChildWithTag)(e, "demote");
  if (!a.success) {
    return a;
  }
  const l = (0, u.parseIQResultResponseMixin)(e, t);
  if (!l.success) {
    return l;
  }
  const s = (0, i.parseGroupAddressingModeMixin)(e);
  const c = (0, d.mapChildrenWithTag)(a.value, "participant", 0, 1024, f);
  if (!c.success) {
    return c;
  }
  return (0, o.makeResult)((0, r.default)((0, r.default)({}, l.value), {}, {
    groupAddressingModeMixin: s.success ? s.value : null,
    demoteParticipant: c.value
  }));
};
exports.parsePromoteDemoteResponseSuccessDemoteDemoteParticipant = f;
var r = a(require("../vendor/73982.js"));
var o = require("../app/135781.js");
var l = require("../app/699342.js");
var i = require("../app/682751.js");
var u = require("../app/769758.js");
var s = require("../app/202804.js");
var c = require("../app/568113.js");
var d = require("../app/686310.js");
function f(e) {
  const t = (0, d.assertTag)(e, "participant");
  if (!t.success) {
    return t;
  }
  const n = (0, c.attrUserJid)(e, "jid");
  if (!n.success) {
    return n;
  }
  const a = (0, d.optional)(d.attrStringEnum, e, "error", l.ENUM_404_406);
  if (!a.success) {
    return a;
  }
  const r = (0, s.parsePhoneNumberMixin)(e);
  return (0, o.makeResult)({
    jid: n.value,
    error: a.value,
    phoneNumberMixin: r.success ? r.value : null
  });
}