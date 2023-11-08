var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  let {
    chat: n,
    showDeleteOrExit: a = true,
    onDeactivateCommunity: l
  } = e;
  const {
    participants: u,
    parentGroup: s
  } = (t = (0, D.useOptionalModelValues)(n.groupMetadata, ["parentGroup", "participants"])) !== null && t !== undefined ? t : {};
  const c = (u == null ? undefined : u.iAmAdmin()) && (0, r.isCommunityAnnouncementGroup)(n);
  const d = a ? P.default.createElement(j, {
    chat: n
  }) : null;
  const f = (0, r.isTerminatedGroup)(n) ? null : P.default.createElement(L, {
    chat: n,
    showAdditionalAction: !c,
    onDeactivateCommunity: l != null ? l : () => {}
  });
  const p = !(0, i.communitiesEnabled)() || (0, r.isCommunityAnnouncementGroup)(n) || s == null ? null : P.default.createElement(B, {
    chat: n,
    parentGroup: s
  });
  return P.default.createElement(o.ChatInfoDrawerButtonsSection, null, p, d, f);
};
var r = require("../app/374660.js");
var o = require("./464659.js");
var l = require("../app/780549.js");
var i = require("../app/174834.js");
var u = require("./493678.js");
var s = require("./36045.js");
var c = require("./69943.js");
var d = require("../app/690495.js");
var f = require("./278201.js");
var p = a(require("../app/667845.js"));
var m = require("./736371.js");
var h = require("../app/97858.js");
var g = require("../app/114850.js");
var E = require("./210807.js");
var v = require("./753284.js");
var _ = a(require("./338695.js"));
var y = require("../app/383296.js");
var C = require("../app/453603.js");
var b = require("./77848.js");
var M = require("./983271.js");
var S = require("./647890.js");
var T = require("../app/757453.js");
var w = require("./232918.js");
var A = require("../vendor/548360.js");
var P = function (e, t) {
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
var O = a(require("./847116.js"));
var k = a(require("../app/524578.js"));
var D = require("../app/655241.js");
var I = a(require("../app/895851.js"));
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
function N(e) {
  let {
    isExit: t
  } = e;
  (0, P.useEffect)(() => {
    new E.PrivacyTipActionWamEvent({
      privacyTipActionType: w.PRIVACY_TIP_ACTION_TYPE.VIEW
    }).commit();
  }, []);
  return P.default.createElement(b.SuccessPopup, {
    title: A.fbt._("Thank you for reporting", null, {
      hk: "2IqS97"
    }),
    description: P.default.createElement(P.default.Fragment, null, t === true ? A.fbt._("You're no longer a participant of this group. Reports are sent to WhatsApp. This helps keep WhatsApp safe for everyone.", null, {
      hk: "1sFzkw"
    }) : A.fbt._("Reports are sent to WhatsApp. This helps keep WhatsApp safe for everyone.", null, {
      hk: "1olqOG"
    })),
    extraContent: P.default.createElement(d.FlexRow, {
      paddingTop: 40
    }, P.default.createElement(f.GroupAddPrivacyTipBanner, {
      onAction: () => {
        new E.PrivacyTipActionWamEvent({
          privacyTipActionType: w.PRIVACY_TIP_ACTION_TYPE.CLICK_PRIVACY_TIP
        }).commit();
        g.ModalManager.close();
      }
    })),
    onOkClick: () => {
      new E.PrivacyTipActionWamEvent({
        privacyTipActionType: w.PRIVACY_TIP_ACTION_TYPE.CLICK_OK
      }).commit();
    },
    onOverlayClick: () => {
      new E.PrivacyTipActionWamEvent({
        privacyTipActionType: w.PRIVACY_TIP_ACTION_TYPE.CLICK_OUTSIDE
      }).commit();
      g.ModalManager.close();
    }
  });
}
function x(e) {
  let {
    isExit: t
  } = e;
  if (!(0, v.groupsPrivacyTipsEnabled)()) {
    return;
  }
  if ((0, T.getUserPrivacySettings)().groupAdd === "all") {
    g.ModalManager.open(P.default.createElement(N, {
      isExit: t
    }));
  }
}
function L(e) {
  var t;
  let {
    chat: n,
    showAdditionalAction: a,
    onDeactivateCommunity: o
  } = e;
  const l = (0, r.isCommunityAnnouncementGroup)(n) && !(0, r.isIntegritySuspendedDefaultSubgroup)(n) && !(0, r.isTerminatedGroup)(n) && ((t = n.groupMetadata) === null || t === undefined ? undefined : t.participants.iAmMember()) === true;
  return P.default.createElement(s.DrawerButtonSimple, {
    testid: "li-report-spam",
    color: "danger",
    icon: P.default.createElement(S.ThumbsDownIcon, null),
    theme: "chat-info",
    onClick: () => {
      g.ModalManager.open(P.default.createElement(_.default, {
        isMessage: false,
        isGroupChat: true,
        isCommunityAnnouncementGroup: l,
        showAdditionalActionCheckbox: a,
        onReport: () => {
          (0, y.sendReport)({
            chat: n,
            spamFlow: C.SpamFlow.GroupInfoReport
          });
          g.ModalManager.close();
          x({
            isExit: false
          });
        },
        onReportExitClear: () => {
          var e;
          const t = (e = n.groupMetadata) === null || e === undefined ? undefined : e.getParentGroupChat();
          if (l && t) {
            (0, y.sendReport)({
              chat: n,
              spamFlow: C.SpamFlow.GroupInfoReport
            }).then(() => {
              g.ModalManager.open(P.default.createElement(m.LeaveCommunityModal, {
                chat: t,
                onDeactivateCommunity: o
              }), {
                transition: "modal-flow"
              });
            });
          } else {
            (0, y.sendSpamExitClear)(n, C.SpamFlow.GroupInfoReport);
            g.ModalManager.close();
            x({
              isExit: true
            });
          }
        },
        onCancel: () => g.ModalManager.close()
      }));
    }
  }, l ? A.fbt._("Report announcements", null, {
    hk: "mujsu"
  }) : A.fbt._("Report group", null, {
    hk: "23NLqw"
  }));
}
function j(e) {
  const t = () => {
    (0, M.openExitAndDeleteGroupModal)(e.chat);
  };
  const n = (0, D.useModelValues)(e.chat, ["isReadOnly"]);
  let a;
  let o = () => {
    var t;
    const n = (t = e.chat.groupMetadata) === null || t === undefined ? undefined : t.getParentGroupChat();
    if (n != null && (0, r.isCommunityAnnouncementGroup)(e.chat) && (0, i.communityAnnouncementImprovementM3Enabled)()) {
      g.ModalManager.open(P.default.createElement(m.LeaveCommunityModal, {
        chat: n
      }));
    } else {
      l.Cmd.deleteOrExitChat(e.chat);
    }
  };
  if (n.isReadOnly) {
    a = A.fbt._("Delete group", null, {
      hk: "2MKJYs"
    });
  } else if (!(0, r.isCommunityAnnouncementGroup)(n) && (0, r.isSuspendedGroup)(n) && (0, h.isGroupSuspendV2Enabled)()) {
    a = A.fbt._("Exit group and delete", null, {
      hk: "1Szubg"
    });
    o = t;
  } else {
    a = (0, r.isCommunityAnnouncementGroup)(n) && (0, i.communityAnnouncementImprovementM3Enabled)() ? A.fbt._("Exit community", null, {
      hk: "3KaKZa"
    }) : A.fbt._("Exit group", null, {
      hk: "3EOkxm"
    });
  }
  return P.default.createElement(s.DrawerButtonSimple, {
    testid: "li-delete-group",
    icon: P.default.createElement(c.ExitIcon, {
      directional: true
    }),
    color: "danger",
    theme: "chat-info",
    onClick: o
  }, a);
}
function B(e) {
  let {
    chat: t,
    parentGroup: n
  } = e;
  const a = (0, I.default)();
  const {
    groupMetadata: r,
    isReadOnly: o,
    id: l,
    formattedTitle: i
  } = (0, D.useModelValues)(t, ["groupMetadata", "isReadOnly", "id", "formattedTitle"]);
  const d = p.default.get(n.toString());
  const f = Boolean((0, k.default)(d == null ? undefined : d.participants, ["bulk_add", "bulk_remove"], () => d == null ? undefined : d.participants.iAmAdmin()));
  const m = Boolean((0, k.default)(r == null ? undefined : r.participants, ["bulk_add", "bulk_remove"], () => r == null ? undefined : r.participants.iAmAdmin()));
  const {
    joinedSubgroups: h,
    unjoinedSubgroups: g,
    subgroupCount: E
  } = (0, O.default)(d);
  const [v, _] = (0, P.useState)(false);
  if (o || h == null || g == null || !f && !m) {
    return null;
  }
  return P.default.createElement(s.DrawerButtonSimple, {
    testid: "li-remove-group-from-community",
    icon: P.default.createElement(c.ExitIcon, {
      directional: true
    }),
    disabled: v,
    color: "danger",
    theme: "chat-info",
    onClick: () => {
      if (!(v || a.aborted)) {
        (0, u.handleRemoveSubgroup)({
          parentId: n,
          currentSubgroupCount: E,
          removedSubgroupWid: l,
          removedSubgroupTitle: i,
          setLoading: _,
          iAmCommunityAdmin: f
        });
        a.aborted;
      }
    }
  }, A.fbt._("Remove from community", null, {
    hk: "3xZmj5"
  }));
}