Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseAddParticipantsResponseSuccess = function (e, t) {
  const n = (0, i.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const r = (0, i.flattenedChildWithTag)(e, "add");
  if (!r.success) {
    return r;
  }
  const s = (0, l.attrStringFromReference)(t, ["to"]);
  if (!s.success) {
    return s;
  }
  const c = (0, i.literal)(i.attrString, e, "from", s.value);
  if (!c.success) {
    return c;
  }
  const d = (0, i.literal)(i.attrString, e, "type", "result");
  if (!d.success) {
    return d;
  }
  const f = (0, l.attrStringFromReference)(t, ["id"]);
  if (!f.success) {
    return f;
  }
  const p = (0, i.literal)(i.attrString, e, "id", f.value);
  if (!p.success) {
    return p;
  }
  const m = (0, o.parseGroupAddressingModeMixin)(e);
  const h = (0, i.mapChildrenWithTag)(r.value, "participant", 1, 19999, u);
  if (!h.success) {
    return h;
  }
  return (0, a.makeResult)({
    type: d.value,
    groupAddressingModeMixin: m.success ? m.value : null,
    addParticipant: h.value
  });
};
exports.parseAddParticipantsResponseSuccessAddParticipant = u;
var a = require("../app/135781.js");
var r = require("./468580.js");
var o = require("../app/682751.js");
var l = require("../app/591439.js");
var i = require("../app/686310.js");
function u(e) {
  const t = (0, i.assertTag)(e, "participant");
  if (!t.success) {
    return t;
  }
  const n = (0, r.parseAddParticipantsParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup)(e);
  if (n.success) {
    return (0, a.makeResult)({
      addParticipantsParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup: n.value
    });
  } else {
    return n;
  }
}