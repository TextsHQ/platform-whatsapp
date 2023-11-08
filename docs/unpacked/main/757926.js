var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  var n;
  const {
    groupCode: a,
    source: N
  } = e;
  const [L, j] = (0, I.useState)(x.Loading);
  const [B, F] = (0, I.useState)(undefined);
  const [G, U] = (0, I.useState)(undefined);
  const [W, H] = (0, I.useState)(undefined);
  const [V, q] = (0, I.useState)(undefined);
  const [Y, z] = (0, I.useState)(undefined);
  const [K, Q] = (0, I.useState)(false);
  const [X, Z] = (0, I.useState)(false);
  const J = (0, R.default)();
  const $ = e => {
    let t;
    let n;
    if (e != null) {
      t = e.id;
      n = e.groupType;
    } else if (G) {
      t = G.id;
      n = G.groupType;
    }
    if (t != null) {
      if (n === M.GroupType.COMMUNITY) {
        d.Cmd.openCommunityHome(t);
      } else {
        const e = c.ChatCollection.assertGet(t);
        d.Cmd.openChatFromUnread(e).then(t => {
          if (t) {
            new f.CommunityGroupJourneyEvent({
              action: O.CHAT_FILTER_ACTION_TYPES.GROUP_NAVIGATION,
              surface: k.SURFACE_TYPE.CHAT,
              chat: e
            }).commit();
          }
        });
      }
    }
    w.ModalManager.close();
  };
  (0, I.useEffect)(() => {
    if ((0, b.shouldSendInviteRequest)()) {
      (0, i.default)((0, A.queryGroupInviteInfo)(a), J).then(e => {
        if (e.groupMetadata.hasJoined()) {
          $(e.groupMetadata);
        } else {
          F(undefined);
          U(e.groupMetadata);
          Q(e.groupMetadata.membershipApprovalMode);
          H(e.subject);
          q(e.parentGroupSubject);
          Z(e.membershipApprovalRequest);
          j(x.Success);
          (0, S.queryGroupInviteLinkProfilePicURL)(e.groupMetadata.id, a).then(e => {
            z(e);
          }).catch((0, l.filteredCatch)(s.ServerStatusCodeError, e => {
            if (e.status !== 404) {
              __LOG__(3)`group_invite_modal: fetch group profile pic with error ${e.status}`;
            }
          }));
        }
      }).catch((0, l.filteredCatch)(s.ServerStatusCodeError, e => {
        F(e);
        j(x.Error);
      })).catch((0, o.catchAbort)(() => {}));
    }
  }, []);
  const ee = () => {
    w.ModalManager.close();
  };
  if (B instanceof s.ServerStatusCodeError && B.status === 436) {
    return I.default.createElement(y.GrowthLockedModal, null);
  }
  const te = (0, b.getDismissText)(X);
  let ne;
  if (L === x.Error && B != null) {
    ne = X ? (0, b.getCancelRequestErrorStr)(B) : (0, b.getGroupInviteAcceptErrorStr)(B, G == null ? undefined : G.groupType);
  }
  if (!G) {
    let e;
    e = L === x.Loading ? I.default.createElement(E.LoadingWithText, {
      text: D.fbt._("Checking invite link", null, {
        hk: "4r4AlB"
      })
    }) : ne;
    return I.default.createElement(m.ConfirmPopup, {
      onCancel: ee
    }, e);
  }
  const {
    groupType: ae,
    numSubgroups: re,
    id: oe
  } = G;
  const le = !!(0, u.getABPropConfigValue)("group_join_request_m2") && K;
  const ie = e => {
    d.Cmd.openChatFromUnread(e).then(t => {
      if (t) {
        j(x.Success);
        p.ComposeBoxActions.focus(e);
      }
    }).then(() => {
      if (ae === M.GroupType.COMMUNITY) {
        d.Cmd.openCommunityHome(oe);
      }
      w.ModalManager.close();
    });
  };
  const ue = () => {
    j(x.Loading);
    (0, i.default)((0, _.joinGroupViaInvite)(a, le), J).then(e => {
      if (!le) {
        e.contact.set({
          name: W
        });
        return ie(e);
      }
      j(x.Success);
      Z(true);
    }).catch((0, o.catchAbort)(() => {})).catch((0, l.filteredCatch)(s.ServerStatusCodeError, e => {
      if (e.status === 304) {
        j(x.Success);
        return void Z(true);
      }
      j(x.Error);
      F(e);
    })).catch((0, l.filteredCatch)(s.UnexpectedJoinGroupViaInviteResponse, function () {
      var e = (0, r.default)(function* (e) {
        Q(e.membershipApprovalMode);
        if (e.membershipApprovalMode) {
          j(x.Success);
          Z(true);
        } else {
          const t = yield (0, v.findChat)(e.gid, "newGroupInviteLink");
          yield ie(t);
        }
      });
      return function () {
        return e.apply(this, arguments);
      };
    }())).catch(() => {
      j(x.Error);
      F(new s.ServerStatusCodeError(500));
    }).finally(() => {
      if (L === x.Success) {
        if (le) {
          new f.CommunityGroupJourneyEvent({
            action: O.CHAT_FILTER_ACTION_TYPES.GROUP_JOIN_REQUEST,
            surface: k.SURFACE_TYPE.CHAT,
            chat: c.ChatCollection.get(G.id)
          }).commit();
        } else {
          new f.CommunityGroupJourneyEvent({
            action: O.CHAT_FILTER_ACTION_TYPES.GROUP_JOIN,
            surface: k.SURFACE_TYPE.CHAT,
            chat: c.ChatCollection.get(G.id)
          }).commit();
        }
      }
    });
  };
  const se = function () {
    var e = (0, r.default)(function* () {
      j(x.Loading);
      try {
        if (J.aborted) {
          return;
        }
        yield (0, T.cancelMembershipApprovalRequest)(G.id);
        j(x.Success);
        Z(false);
      } catch (e) {
        j(x.Error);
        F(e);
      }
    });
    return function () {
      return e.apply(this, arguments);
    };
  }();
  const ce = (0, b.getGroupInviteSubtitle)({
    groupMetadata: G,
    numSubgroups: re,
    parentGroupSubject: V
  });
  let de;
  if (ae !== M.GroupType.LINKED_ANNOUNCEMENT_GROUP) {
    de = G.participants.filter(e => {
      const t = h.ContactCollection.get(e.id);
      return t != null && (0, g.getIsMyContact)(t);
    });
  }
  const fe = G.hasJoined();
  const pe = function () {
    var e = (0, r.default)(function* () {
      if (B instanceof s.ServerStatusCodeError && B.status === 426) {
        yield (0, P.updateApp)();
      } else if (fe) {
        $();
      } else if (X && (0, u.getABPropConfigValue)("group_join_request_m3")) {
        yield se();
      } else {
        ue();
      }
    });
    return function () {
      return e.apply(this, arguments);
    };
  }();
  const me = (0, b.getGroupInviteActionText)({
    inGroup: fe,
    groupType: ae,
    error: B,
    membershipApprovalMode: le,
    requestSent: X
  });
  const he = G.displayedDesc;
  const ge = X && !(0, u.getABPropConfigValue)("group_join_request_m3");
  return I.default.createElement(C.default, {
    image: {
      src: Y || "",
      groupId: oe
    },
    title: W,
    subtitle: ce,
    contacts: de,
    description: he,
    actionText: me,
    onAction: pe,
    actionDisabled: ge,
    onCancel: ee,
    cancelText: te,
    finePrint: {
      text: (t = ne) !== null && t !== undefined ? t : (0, b.getFinePrint)({
        groupType: ae,
        isCommunityParticipant: G.isParentGroupParticipant(),
        parentGroupSubject: V,
        membershipApprovalMode: le,
        requestSent: X
      }),
      isError: ne != null
    },
    participantsCount: (n = G.size) !== null && n !== undefined ? n : G.participants.length,
    groupType: G.groupType,
    loading: L === x.Loading,
    source: N
  });
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/898817.js");
var l = require("../app/122583.js");
var i = a(require("../app/229922.js"));
var u = require("../app/287461.js");
var s = require("../app/984330.js");
var c = require("../app/351053.js");
var d = require("../app/780549.js");
var f = require("../app/359198.js");
var p = require("../app/877171.js");
var m = require("../app/103440.js");
var h = require("../app/177938.js");
var g = require("../app/660666.js");
var E = require("./811720.js");
var v = require("../app/581354.js");
var _ = require("./651696.js");
var y = require("./393609.js");
var C = a(require("./223965.js"));
var b = require("./148999.js");
var M = require("../app/862159.js");
var S = require("./95019.js");
var T = require("./956932.js");
var w = require("../app/114850.js");
var A = require("./461018.js");
var P = require("./405585.js");
var O = require("../app/571444.js");
var k = require("../app/965927.js");
var D = require("../vendor/548360.js");
var I = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = N(t);
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
var R = a(require("../app/895851.js"));
function N(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (N = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const x = require("../vendor/76672.js").Mirrored(["Loading", "Success", "Error"]);