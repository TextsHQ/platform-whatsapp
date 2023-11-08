var a = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseGetLinkedGroupsParticipantsResponseSuccess = function (e, t) {
  const n = (0, u.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const a = (0, u.flattenedChildWithTag)(e, "linked_groups_participants");
  if (!a.success) {
    return a;
  }
  const i = (0, l.parseIQResultResponseMixin)(e, t);
  if (!i.success) {
    return i;
  }
  const c = (0, u.mapChildrenWithTag)(a.value, "participant", 1, 19999, s);
  if (!c.success) {
    return c;
  }
  return (0, o.makeResult)((0, r.default)((0, r.default)({}, i.value), {}, {
    linkedGroupsParticipantsParticipant: c.value
  }));
};
exports.parseGetLinkedGroupsParticipantsResponseSuccessLinkedGroupsParticipantsParticipant = s;
var r = a(require("../vendor/73982.js"));
var o = require("../app/135781.js");
var l = require("../app/769758.js");
var i = require("../app/94750.js");
var u = require("../app/686310.js");
function s(e) {
  const t = (0, u.assertTag)(e, "participant");
  if (!t.success) {
    return t;
  }
  const n = (0, i.parseParticipantWithJidMixin)(e);
  n.success;
  return n;
}