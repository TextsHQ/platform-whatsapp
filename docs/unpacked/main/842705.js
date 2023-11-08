Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseParticipantRequestCodeCanBeSentMixin = function (e) {
  const t = (0, o.assertTag)(e, "participant");
  if (!t.success) {
    return t;
  }
  const n = (0, o.flattenedChildWithTag)(e, "add_request");
  if (!n.success) {
    return n;
  }
  const l = (0, o.literal)(o.attrString, e, "error", "403");
  if (!l.success) {
    return l;
  }
  const i = (0, o.attrString)(n.value, "code");
  if (!i.success) {
    return i;
  }
  const u = (0, o.attrIntRange)(n.value, "expiration", 0, undefined);
  if (!u.success) {
    return u;
  }
  const s = (0, r.parseParticipantNotAddressableMixin)(e);
  return (0, a.makeResult)({
    error: l.value,
    addRequestCode: i.value,
    addRequestExpiration: u.value,
    participantNotAddressableMixin: s.success ? s.value : null
  });
};
var a = require("../app/135781.js");
var r = require("../app/37772.js");
var o = require("../app/686310.js");