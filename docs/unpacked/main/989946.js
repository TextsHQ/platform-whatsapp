var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  var n;
  let {
    subgroupMetadata: a,
    source: R,
    onSuccess: x
  } = e;
  const [L, j] = (0, D.useState)(null);
  const [B, F] = (0, D.useState)(null);
  const [G, U] = (0, D.useState)(null);
  const [W, H] = (0, D.useState)(false);
  const [V, q] = (0, D.useState)(false);
  const Y = (0, I.default)(v.default, `group_participant_change_${(0, P.getMeUser)().toString()}`, () => {
    const e = v.default.get(a.id);
    return Boolean(e == null ? undefined : e.participants.iAmMember());
  });
  let z;
  if (B != null) {
    z = V ? (0, E.getCancelRequestErrorStr)(B) : (0, E.getErrorStr)(B);
  }
  const K = (0, D.useCallback)((0, r.default)(function* () {
    try {
      if (S.Stream.displayInfo === S.StreamInfo.OFFLINE) {
        throw new l.ServerStatusCodeError(503);
      }
      const e = yield (0, M.querySubgroupInfo)(a.id, a.parentGroupId);
      U(e);
      H(Boolean(e == null ? undefined : e.membershipApprovalMode));
      q(Boolean(e == null ? undefined : e.membershipApprovalRequest));
    } catch (e) {
      F(e);
      j(N.Error);
    }
  }), [a]);
  (0, D.useEffect)(() => {
    K();
  }, [K]);
  if (L === N.Error) {
    return D.default.createElement(d.ConfirmPopup, {
      onOK: () => {
        b.ModalManager.close();
      }
    }, D.default.createElement(w.TextParagraph, {
      size: "16"
    }, z));
  }
  if (!G) {
    return null;
  }
  const {
    groupType: Q,
    id: X,
    participants: Z,
    subject: J,
    adminRequestRequired: $
  } = G;
  const ee = !!(0, o.getABPropConfigValue)("group_join_request_m2") && W;
  const te = (0, o.getABPropConfigValue)("parent_group_tap_to_request_enabled") && Q === _.GroupType.LINKED_SUBGROUP && $;
  const ne = Q === _.GroupType.LINKED_ANNOUNCEMENT_GROUP;
  const ae = (0, E.getGroupInviteActionText)({
    groupType: Q,
    inGroup: Y,
    error: B,
    adminRequestRequired: $,
    membershipApprovalMode: ee,
    requestSent: V
  });
  const re = (0, E.getDismissText)(V);
  let oe;
  if (!ne) {
    oe = Z.filter(e => {
      const t = f.ContactCollection.get(e.id);
      return t != null && (0, p.getIsMyContact)(t);
    });
  }
  const le = function () {
    var e = (0, r.default)(function* () {
      const e = yield (0, h.findChat)(a.id, "subgroupJoinModal");
      if (yield u.Cmd.openChatFromUnread(e)) {
        j(N.Success);
        c.ComposeBoxActions.focus(e);
        b.ModalManager.close();
        x();
      }
    });
    return function () {
      return e.apply(this, arguments);
    };
  }();
  const ie = function () {
    var e = (0, r.default)(function* () {
      j(N.Loading);
      try {
        yield (0, C.cancelMembershipApprovalRequest)(X);
        j(N.Success);
        q(false);
      } catch (e) {
        j(N.Complete);
        F(e);
      }
    });
    return function () {
      return e.apply(this, arguments);
    };
  }();
  const ue = function () {
    var e = (0, r.default)(function* () {
      var e;
      if ((e = v.default.get(a.id)) === null || e === undefined ? undefined : e.participants.iAmMember()) {
        yield le();
      } else {
        if (te) {
          b.ModalManager.close();
          return void function (e, t, n) {
            var a;
            let r = e.participants.getAdmins();
            const o = a => {
              b.ModalManager.open(D.default.createElement(T.SubgroupSendRequestModal, {
                adminContact: a,
                subgroupInfo: e,
                participants: t,
                source: n
              }));
            };
            if (r.length === 1) {
              return void o(r[0].contact);
            }
            const l = v.default.get(e.parentGroupId.toString());
            const i = l == null || (a = l.participants.getSuperAdmin()) === null || a === undefined ? undefined : a.id;
            var u;
            if (i) {
              if (!((u = r[0]) === null || u === undefined ? undefined : u.id.equals(i))) {
                if (r.some(e => e.id.equals(i))) {
                  r = r.sort((e, t) => e.id.equals(i) ? -1 : t.id.equals(i) ? 1 : 0);
                }
              }
            }
            const s = r.map(e => e.contact);
            b.ModalManager.open(D.default.createElement(m.default, {
              title: k.fbt._("Select a group admin", null, {
                hk: "1Cr5CW"
              }),
              contacts: s,
              filter: () => true,
              onCancel: () => b.ModalManager.close(),
              onSelect: o
            }));
          }(G, oe, R);
        }
        if (V && (0, o.getABPropConfigValue)("group_join_request_m3")) {
          yield ie();
        } else {
          j(N.Loading);
          F(null);
          try {
            if (B instanceof l.ServerStatusCodeError && B.status === 426) {
              yield (0, A.updateApp)();
              return void j(N.Success);
            }
            if (ne) {
              const e = yield (0, y.joinAnnouncementGroup)(a.parentGroupId, a.id);
              const t = s.CommunityGroupJourneyEvent.inviteModalSourceToSurface(R);
              if (t && (e == null ? undefined : e.status) === 200) {
                if (ee) {
                  new s.CommunityGroupJourneyEvent({
                    action: O.CHAT_FILTER_ACTION_TYPES.GROUP_JOIN_REQUEST,
                    surface: t,
                    chat: i.ChatCollection.get(a.id)
                  }).commit();
                } else {
                  new s.CommunityGroupJourneyEvent({
                    action: O.CHAT_FILTER_ACTION_TYPES.GROUP_JOIN,
                    surface: t,
                    chat: i.ChatCollection.get(a.id)
                  }).commit();
                }
              }
            }
            if (a.groupType === _.GroupType.LINKED_SUBGROUP || a.groupType === _.GroupType.LINKED_GENERAL_GROUP) {
              const e = yield (0, y.joinSubgroup)(a.parentGroupId, a.id, ee);
              const t = s.CommunityGroupJourneyEvent.inviteModalSourceToSurface(R);
              if (t && (e == null ? undefined : e.status) === 200) {
                if (ee) {
                  new s.CommunityGroupJourneyEvent({
                    action: O.CHAT_FILTER_ACTION_TYPES.GROUP_JOIN_REQUEST,
                    surface: t,
                    chat: i.ChatCollection.get(a.id)
                  }).commit();
                } else {
                  new s.CommunityGroupJourneyEvent({
                    action: O.CHAT_FILTER_ACTION_TYPES.GROUP_JOIN,
                    surface: t,
                    chat: i.ChatCollection.get(a.id)
                  }).commit();
                }
              }
            }
            if (ee) {
              j(N.Success);
              return void q(true);
            }
            yield le();
          } catch (e) {
            if (e instanceof l.UnexpectedJoinSubgroupResponse) {
              H(e.membershipApprovalMode);
              return void (e.membershipApprovalMode ? (j(N.Success), q(true)) : yield le());
            }
            if (e.status === 304) {
              j(N.Success);
              return void q(true);
            }
            F(e);
            j(N.Complete);
          }
        }
      }
    });
    return function () {
      return e.apply(this, arguments);
    };
  }();
  const se = V && !(0, o.getABPropConfigValue)("group_join_request_m3");
  return D.default.createElement(g.default, {
    image: {
      groupId: X
    },
    title: J,
    subtitle: (0, E.getGroupInviteSubtitle)({
      groupMetadata: G
    }),
    contacts: oe,
    actionText: ae,
    onAction: ue,
    actionDisabled: se,
    onCancel: () => {
      b.ModalManager.close();
    },
    description: G.displayedDesc,
    cancelText: re,
    finePrint: {
      text: (t = z) !== null && t !== undefined ? t : (0, E.getFinePrint)({
        groupType: Q,
        isCommunityParticipant: true,
        membershipApprovalMode: ee,
        requestSent: V
      }),
      isError: z != null
    },
    loading: L === N.Loading,
    participantsCount: (n = G.size) !== null && n !== undefined ? n : Z.length,
    groupType: G.groupType,
    source: R
  });
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/287461.js");
var l = require("../app/984330.js");
var i = require("../app/351053.js");
var u = require("../app/780549.js");
var s = require("../app/359198.js");
var c = require("../app/877171.js");
var d = require("../app/103440.js");
var f = require("../app/177938.js");
var p = require("../app/660666.js");
var m = a(require("./402085.js"));
var h = require("../app/581354.js");
var g = a(require("./223965.js"));
var E = require("./148999.js");
var v = a(require("../app/667845.js"));
var _ = require("../app/862159.js");
var y = require("./916955.js");
var C = require("./956932.js");
var b = require("../app/114850.js");
var M = require("./510900.js");
var S = require("../app/973981.js");
var T = require("./381385.js");
var w = require("../app/180519.js");
var A = require("./405585.js");
var P = require("../app/459857.js");
var O = require("../app/571444.js");
var k = require("../vendor/548360.js");
var D = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = R(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var a = {};
  var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e) {
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
      if (l && (l.get || l.set)) {
        Object.defineProperty(a, o, l);
      } else {
        a[o] = e[o];
      }
    }
  }
  a.default = e;
  if (n) {
    n.set(e, a);
  }
  return a;
}(require("../vendor/667294.js"));
var I = a(require("../app/524578.js"));
function R(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (R = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const N = require("../vendor/76672.js").Mirrored(["Loading", "Success", "Error", "Complete"]);