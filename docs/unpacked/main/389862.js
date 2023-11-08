Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseCreateResponseSuccess = function (e, t) {
  const n = (0, m.assertTag)(e, "iq");
  if (!n.success) {
    return n;
  }
  const r = (0, m.flattenedChildWithTag)(e, "group");
  if (!r.success) {
    return r;
  }
  const l = (0, m.optionalChildWithTag)(r.value, "description", g);
  if (!l.success) {
    return l;
  }
  const s = (0, m.optionalChild)(r.value, "locked");
  if (!s.success) {
    return s;
  }
  const d = (0, m.optionalChild)(r.value, "announcement");
  if (!d.success) {
    return d;
  }
  const C = (0, m.optionalChildWithTag)(r.value, "parent", E);
  if (!C.success) {
    return C;
  }
  const b = (0, m.optionalChild)(r.value, "no_frequently_forwarded");
  if (!b.success) {
    return b;
  }
  const M = (0, m.optionalChildWithTag)(r.value, "ephemeral", v);
  if (!M.success) {
    return M;
  }
  const S = (0, m.optionalChild)(r.value, "shadow");
  if (!S.success) {
    return S;
  }
  const T = (0, m.optionalChildWithTag)(r.value, "membership_approval_mode", _);
  if (!T.success) {
    return T;
  }
  const w = (0, m.optionalChild)(r.value, "breakout");
  if (!w.success) {
    return w;
  }
  const A = (0, m.optionalChildWithTag)(r.value, "linked_parent", y);
  if (!A.success) {
    return A;
  }
  const P = (0, m.optionalChild)(r.value, "allow_non_admin_sub_group_creation");
  if (!P.success) {
    return P;
  }
  const O = (0, m.optionalChild)(r.value, "group_history");
  if (!O.success) {
    return O;
  }
  const k = (0, f.literalJid)(f.attrDomainJid, e, "from", "g.us");
  if (!k.success) {
    return k;
  }
  const D = (0, m.literal)(m.attrString, e, "type", "result");
  if (!D.success) {
    return D;
  }
  const I = (0, p.attrStringFromReference)(t, ["id"]);
  if (!I.success) {
    return I;
  }
  const R = (0, m.literal)(m.attrString, e, "id", I.value);
  if (!R.success) {
    return R;
  }
  const N = (0, m.attrString)(r.value, "id");
  if (!N.success) {
    return N;
  }
  const x = (0, f.attrUserJid)(r.value, "creator");
  if (!x.success) {
    return x;
  }
  const L = (0, m.attrIntRange)(r.value, "creation", 0, undefined);
  if (!L.success) {
    return L;
  }
  const j = (0, m.optional)(m.attrIntRange, r.value, "s_t", 0, undefined);
  if (!j.success) {
    return j;
  }
  const B = (0, m.optional)(f.attrUserJid, r.value, "s_o");
  if (!B.success) {
    return B;
  }
  const F = (0, o.parseDedupAttrsMixin)(r.value);
  const G = (0, u.parseGroupMemberAddModeMixin)(r.value);
  const U = (0, i.parseGroupAddressingModeMixin)(r.value);
  const W = (0, c.parseNamedSubjectOrUnnamedSubjectFallbackMixinGroup)(r.value);
  if (!W.success) {
    return W;
  }
  const H = (0, m.mapChildrenWithTag)(r.value, "participant", 1, 1024, h);
  if (!H.success) {
    return H;
  }
  return (0, a.makeResult)({
    from: k.value,
    type: D.value,
    groupId: N.value,
    groupCreator: x.value,
    groupCreation: L.value,
    groupST: j.value,
    groupSO: B.value,
    groupDedupAttrsMixin: F.success ? F.value : null,
    groupGroupMemberAddModeMixin: G.success ? G.value : null,
    groupGroupAddressingModeMixin: U.success ? U.value : null,
    groupNamedSubjectOrUnnamedSubjectFallbackMixinGroup: W.value,
    groupDescription: l.value,
    hasGroupLocked: s.value != null,
    hasGroupAnnouncement: d.value != null,
    groupParent: C.value,
    hasGroupNoFrequentlyForwarded: b.value != null,
    groupEphemeral: M.value,
    hasGroupShadow: S.value != null,
    groupMembershipApprovalMode: T.value,
    hasGroupBreakout: w.value != null,
    groupLinkedParent: A.value,
    hasGroupAllowNonAdminSubGroupCreation: P.value != null,
    hasGroupGroupHistory: O.value != null,
    groupParticipant: H.value
  });
};
exports.parseCreateResponseSuccessGroupDescription = g;
exports.parseCreateResponseSuccessGroupEphemeral = v;
exports.parseCreateResponseSuccessGroupLinkedParent = y;
exports.parseCreateResponseSuccessGroupMembershipApprovalMode = _;
exports.parseCreateResponseSuccessGroupParent = E;
exports.parseCreateResponseSuccessGroupParticipant = h;
var a = require("../app/135781.js");
var r = require("./162144.js");
var o = require("../app/120892.js");
var l = require("../app/699342.js");
var i = require("../app/682751.js");
var u = require("../app/131594.js");
var s = require("../app/261918.js");
var c = require("../app/418473.js");
var d = require("../app/665751.js");
var f = require("../app/568113.js");
var p = require("../app/591439.js");
var m = require("../app/686310.js");
function h(e) {
  const t = (0, m.assertTag)(e, "participant");
  if (!t.success) {
    return t;
  }
  const n = (0, r.parseCreateParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup)(e);
  if (n.success) {
    return (0, a.makeResult)({
      createParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup: n.value
    });
  } else {
    return n;
  }
}
function g(e) {
  const t = (0, m.assertTag)(e, "description");
  if (!t.success) {
    return t;
  }
  const n = (0, m.attrString)(e, "id");
  if (!n.success) {
    return n;
  }
  const r = (0, m.optional)(m.attrStringEnum, e, "error", l.ENUM_406_500);
  if (r.success) {
    return (0, a.makeResult)({
      id: n.value,
      error: r.value
    });
  } else {
    return r;
  }
}
function E(e) {
  const t = (0, m.assertTag)(e, "parent");
  if (!t.success) {
    return t;
  }
  const n = (0, d.parseParentGroupDefaultMembershipApprovalModeMixin)(e);
  return (0, a.makeResult)({
    parentGroupDefaultMembershipApprovalModeMixin: n.success ? n.value : null
  });
}
function v(e) {
  const t = (0, m.assertTag)(e, "ephemeral");
  if (!t.success) {
    return t;
  }
  const n = (0, m.attrIntRange)(e, "expiration", 0, 2147483647);
  if (n.success) {
    return (0, a.makeResult)({
      expiration: n.value
    });
  } else {
    return n;
  }
}
function _(e) {
  const t = (0, m.assertTag)(e, "membership_approval_mode");
  if (!t.success) {
    return t;
  }
  const n = (0, s.parseMembershipApprovalGroupJoinModeEnabledMixin)(e);
  n.success;
  return n;
}
function y(e) {
  const t = (0, m.assertTag)(e, "linked_parent");
  if (!t.success) {
    return t;
  }
  const n = (0, f.attrGroupJid)(e, "jid");
  if (n.success) {
    return (0, a.makeResult)({
      jid: n.value
    });
  } else {
    return n;
  }
}