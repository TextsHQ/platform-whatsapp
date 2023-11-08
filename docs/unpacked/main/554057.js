Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseRemoveParticipantsResponseSuccess = function (e, t) {
  const n = (0, s.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const o = (0, s.flattenedChildWithTag)(e, "remove");
  if (!o.success) {
    return o;
  }
  const l = (0, u.attrStringFromReference)(t, ["to"]);
  if (!l.success) {
    return l;
  }
  const i = (0, s.literal)(s.attrString, e, "from", l.value);
  if (!i.success) {
    return i;
  }
  const d = (0, s.literal)(s.attrString, e, "type", "result");
  if (!d.success) {
    return d;
  }
  const f = (0, u.attrStringFromReference)(t, ["id"]);
  if (!f.success) {
    return f;
  }
  const p = (0, s.literal)(s.attrString, e, "id", f.value);
  if (!p.success) {
    return p;
  }
  const m = (0, s.optionalLiteral)(s.attrString, o.value, "linked_groups", "true");
  if (!m.success) {
    return m;
  }
  const h = (0, r.parseGroupAddressingModeMixin)(e);
  const g = (0, s.mapChildrenWithTag)(o.value, "participant", 1, 1024, c);
  if (!g.success) {
    return g;
  }
  return (0, a.makeResult)({
    type: d.value,
    removeLinkedGroups: m.value,
    groupAddressingModeMixin: h.success ? h.value : null,
    removeParticipant: g.value
  });
};
exports.parseRemoveParticipantsResponseSuccessRemoveParticipant = c;
var a = require("../app/135781.js");
var r = require("../app/682751.js");
var o = require("./656647.js");
var l = require("../app/202804.js");
var i = require("../app/568113.js");
var u = require("../app/591439.js");
var s = require("../app/686310.js");
function c(e) {
  const t = (0, s.assertTag)(e, "participant");
  if (!t.success) {
    return t;
  }
  const n = (0, i.attrUserJid)(e, "jid");
  if (!n.success) {
    return n;
  }
  const r = (0, l.parsePhoneNumberMixin)(e);
  const u = (0, o.parseParticipantNotInGroupOrParticipantNotAllowedOrParticipantNotAcceptableOrRemoveParticipantsLinkedGroupsServerErrorMixinGroup)(e);
  return (0, a.makeResult)({
    jid: n.value,
    phoneNumberMixin: r.success ? r.value : null,
    participantNotInGroupOrParticipantNotAllowedOrParticipantNotAcceptableOrRemoveParticipantsLinkedGroupsServerErrorMixinGroup: u.success ? u.value : null
  });
}