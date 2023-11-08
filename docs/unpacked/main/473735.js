var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommunityFlowStep = exports.CommunityFlow = undefined;
var r = a(require("../vendor/967154.js"));
var o = a(require("../vendor/348926.js"));
var l = a(require("../app/670983.js"));
var i = require("../app/632157.js");
var u = require("../app/351053.js");
var s = require("../app/394164.js");
var c = require("../app/780549.js");
var d = a(require("../app/806711.js"));
var f = require("../app/255131.js");
var p = require("./474103.js");
var m = require("./440067.js");
var h = require("./430855.js");
var g = require("../app/174834.js");
var E = require("./355734.js");
var v = a(require("./396879.js"));
var _ = a(require("./293801.js"));
var y = require("./355351.js");
var C = a(require("./733158.js"));
var b = require("../app/877171.js");
var M = require("./243999.js");
var S = require("../app/900316.js");
var T = require("../app/581354.js");
var w = require("./408256.js");
var A = a(require("../app/667845.js"));
var P = require("./81095.js");
var O = require("./147550.js");
var k = require("./769081.js");
var D = require("./219548.js");
var I = require("./409062.js");
var R = require("./427181.js");
var N = a(require("./590911.js"));
var x = require("../app/673168.js");
var L = require("./135516.js");
var j = require("./909588.js");
var B = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = W(t);
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
var F = a(require("../app/524578.js"));
var G = require("./839062.js");
var U = a(require("../app/895851.js"));
function W(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (W = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const H = require("../vendor/76672.js").Mirrored(["CommunityTab", "CommunityHome", "NewCommunityFlow", "ManageGroupsFlow", "InviteMembersFlow", "NewGroupFlow", "DeactivateCommunityFlow", "CommunitySettings", "MediaGallery", "StarredMessages", "PendingGroups", "Ephemeral", "OldCommunityHome"]);
exports.CommunityFlowStep = H;
const V = (0, B.forwardRef)((e, t) => {
  const {
    onBack: n,
    initialStep: a = H.CommunityTab,
    jid: W,
    hasFetchedSubgroups: V,
    homeTheme: q,
    scrollToMemberList: Y,
    showFullDescription: z,
    initialTab: K = y.CommunityInfoTabs.Community
  } = e;
  const Q = (0, B.useRef)(true);
  const X = (0, B.useRef)(K);
  const Z = (0, B.useRef)(0);
  const J = () => {
    if (a === H.CommunityTab) {
      if (Q.current) {
        (0, h.incrementCommunityTabEvent)(h.CommunityDailyTabMetricsType.NO_ACTION_TAB_VIEWS);
      }
      const e = d.default.filter(e => e.type === f.ActivityTypeType.NEW_COMMUNITY);
      d.default.remove(e);
    }
    if (n) {
      n();
    } else {
      S.DrawerManager.closeDrawerLeft();
    }
  };
  const [$, ee] = (0, G.useFlow)(a, {
    transitions: G.FlowTransitions.DrawerLeft,
    onEnd: J
  });
  const te = {
    onBack: () => ee.pop(),
    onManageCommunityGroupsClick: () => ee.push(H.ManageGroupsFlow),
    onInviteMembersClick: () => ee.push(H.InviteMembersFlow),
    onDeactivateCommunity: () => ee.push(H.DeactivateCommunityFlow),
    onAddNewGroupClick: () => ee.push(H.NewGroupFlow),
    onCommunitySettingsClick: () => ee.push(H.CommunitySettings),
    onMediaGalleryClick: () => ee.push(H.MediaGallery),
    onStarredMessagesClick: () => ee.push(H.StarredMessages),
    onTabSwitch: e => {
      X.current = e;
    },
    onPendingGroupsClick: () => ee.push(H.PendingGroups),
    onEphemeralClick: () => ee.push(H.Ephemeral),
    onOldCommunityHomeClick: () => ee.push(H.OldCommunityHome)
  };
  const ne = (0, F.default)(A.default, ["add", "remove", "change"], () => A.default.filter(e => e.isParentGroup === true && (e.hasJoined() || (0, s.isIntegritySuspendedCommunity)(u.ChatCollection.get(e.id)) === true)));
  const [ae, re] = (0, B.useState)(W);
  const oe = (0, U.default)();
  const le = q === E.CommunityHomeTheme.TabbedInfo && (0, g.communityTabbedInfoEnabled)();
  function ie() {
    return (ie = (0, o.default)(function* (e) {
      const t = yield e;
      ee.pop();
      if (!(t == null || oe.aborted)) {
        (0, T.findChat)(t, "communityTabFlow").then(e => {
          c.Cmd.openChatBottom(e).then(t => {
            if (t) {
              b.ComposeBoxActions.focus(e);
            }
          });
        });
      }
    })).apply(this, arguments);
  }
  (0, B.useEffect)(() => {
    if (a === H.CommunityTab) {
      (0, x.setCommunityTabLastSeenTimestamp)((0, i.unixTime)());
      d.default.trigger("community_tab_view");
    }
  }, []);
  if (ee.step == null) {
    return null;
  }
  let ue;
  switch (ee.step) {
    case H.CommunityTab:
      ue = B.default.createElement(C.default, {
        parentGroups: ne,
        onBack: J,
        onNewCommunity: () => {
          Q.current = false;
          ee.push(H.NewCommunityFlow);
          m.UiCommunityCreationAction.startSession(j.COMMUNITY_CREATION_ENTRYPOINT_TYPE.COMMUNITIES_TAB);
          m.UiCommunityCreationAction.enter(L.COMMUNITY_CREATION_CURRENT_SCREEN_TYPE.COMMUNITIES_TAB);
        },
        onActivityCell: e => {
          re(e);
          ee.push(H.CommunityHome);
        },
        onCommunityHome: e => {
          X.current = y.CommunityInfoTabs.Community;
          Q.current = false;
          (0, h.incrementCommunityTabEvent)(h.CommunityDailyTabMetricsType.TAB_TO_HOME_VIEWS);
          (0, h.incrementCommunityHomeEvent)(e, h.CommunityDailyHomeMetricsType.HOME_VIEWS);
          re(e);
          ee.push(H.CommunityHome);
        },
        initialScrollTop: Z.current,
        setScrollTop: e => {
          Z.current = e;
        }
      });
      break;
    case H.CommunityHome:
      {
        const e = (0, l.default)(ae, "selectedCommunity");
        let t = {};
        if (q === E.CommunityHomeTheme.TabbedInfo && (0, g.communityTabbedInfoEnabled)()) {
          t = {
            theme: E.CommunityHomeTheme.TabbedInfo,
            initialTab: X.current,
            showFullDescription: z,
            scrollToMemberList: Y
          };
        } else if ((0, g.communityNavigationEnabled)()) {
          t = {
            theme: E.CommunityHomeTheme.Navigation
          };
        }
        ue = B.default.createElement(E.CommunityHomeWrapper, (0, r.default)({
          jid: e,
          callbacks: te,
          hasFetchedSubgroups: V
        }, t));
        break;
      }
    case H.NewCommunityFlow:
      ue = B.default.createElement(D.NewCommunityFlowLoadable, {
        onBack: () => ee.pop()
      });
      break;
    case H.DeactivateCommunityFlow:
      {
        const e = (0, l.default)(ae, "selectedCommunity");
        const t = u.ChatCollection.get(e);
        if (t == null) {
          ee.end();
          break;
        }
        ue = B.default.createElement(M.DeactivateCommunityDrawerLoadable, {
          onBack: () => ee.pop(),
          chat: t,
          fromInfo: le
        });
        break;
      }
    case H.ManageGroupsFlow:
      {
        const e = (0, l.default)(ae, "selectedCommunity");
        const t = A.default.assertGet(e);
        ue = B.default.createElement(k.ManageCommunityGroupsFlowLoadable, {
          parentGroupMetadata: t,
          onBack: () => ee.pop(),
          fromInfo: le
        });
        break;
      }
    case H.InviteMembersFlow:
      {
        const e = (0, l.default)(ae, "selectedCommunity");
        const t = u.ChatCollection.assertGet(e);
        ue = B.default.createElement(w.GroupInviteLinkDrawerLoadable, {
          chat: t,
          groupMetadata: (0, l.default)(t.groupMetadata, "chat.groupMetadata"),
          onBack: () => ee.pop(),
          fromInfo: le,
          isCommunity: true
        });
        break;
      }
    case H.NewGroupFlow:
      {
        const e = (0, l.default)(ae, "selectedCommunity");
        const t = A.default.assertGet(e).participants.iAmAdmin();
        if ((0, s.isSubgroupSuggestionCreation)(e)) {
          ue = B.default.createElement(N.default, {
            parentGroup: e,
            onBack: () => ee.pop()
          });
        } else {
          const n = (0, g.communityShortGroupCreationEnabled)();
          ue = B.default.createElement(R.NewGroupFlowLoadable, {
            onCreateGroup: function () {
              return ie.apply(this, arguments);
            },
            parentGroupWid: e,
            onEnd: () => ee.pop(),
            initialStep: t && !n ? I.NewGroupFlowStep.ADD_PARTICIPANTS_DRAWER : I.NewGroupFlowStep.SET_GROUP_INFO_DRAWER,
            shortenedCreationFlow: n
          });
        }
        break;
      }
    case H.CommunitySettings:
      {
        const e = (0, l.default)(ae, "selectedCommunity");
        const t = u.ChatCollection.assertGet(e);
        ue = B.default.createElement(v.default, {
          chat: t,
          onBack: () => ee.pop(),
          fromInfo: le
        });
        break;
      }
    case H.OldCommunityHome:
      {
        const e = (0, l.default)(ae, "selectedCommunity");
        ue = B.default.createElement(E.CommunityHomeWrapper, {
          jid: e,
          callbacks: te,
          hasFetchedSubgroups: V
        });
        break;
      }
    case H.MediaGallery:
    case H.StarredMessages:
    case H.Ephemeral:
      {
        const e = (0, l.default)(ae, "selectedCommunity");
        const t = u.ChatCollection.assertGet(e);
        const n = (0, p.getCommunityAnnouncementGroup)(t.groupMetadata);
        const a = u.ChatCollection.assertGet((0, l.default)(n == null ? undefined : n.id, "announcementGroupMetadata?.id"));
        let r;
        r = ee.step === H.MediaGallery ? O.InfoFlowStep.MediaGallery : ee.step === H.StarredMessages ? O.InfoFlowStep.Starred : O.InfoFlowStep.Ephemeral;
        ue = B.default.createElement(P.InfoFlowLoadable, {
          chat: a,
          initialStep: r,
          onEnd: () => ee.pop()
        });
        break;
      }
    case H.PendingGroups:
      {
        const e = (0, l.default)(ae, "selectedCommunity");
        const t = u.ChatCollection.assertGet(e);
        ue = B.default.createElement(_.default, {
          chat: t,
          onBack: () => {
            ee.pop();
          },
          callbacks: te
        });
        break;
      }
  }
  return B.default.createElement($, {
    flow: ee,
    ref: t,
    displayName: "CommunityFlow"
  }, ue);
});
exports.CommunityFlow = V;
V.displayName = "CommunityFlow";