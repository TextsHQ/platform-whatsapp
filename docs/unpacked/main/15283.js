var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  var n;
  var a;
  const {
    chat: I,
    parentChat: R
  } = e;
  const N = R != null ? R : I == null || (t = I.groupMetadata) === null || t === undefined ? undefined : t.getParentGroupChat();
  const x = N == null ? undefined : N.groupMetadata;
  const L = ((n = (a = (0, O.useOptionalModelValues)(x, ["joinedSubgroups"])) === null || a === undefined ? undefined : a.joinedSubgroups) !== null && n !== undefined ? n : []).map(e => o.ChatCollection.assertGet(e)).sort(i.default);
  const j = (0, A.default)(N == null ? undefined : N.groupMetadata, ["change:allowNonAdminSubGroupCreation"], () => (0, l.canAddGroupToCommunity)(N));
  const B = S.fbt._("View community", null, {
    hk: "2m7qFM"
  });
  const F = T.default.createElement(m.DrawerButtonSimple, {
    testid: "view-community-row",
    className: (0, w.default)(D),
    ariaLabel: B,
    icon: T.default.createElement("div", {
      className: (0, w.default)(k)
    }, T.default.createElement(u.ChevronRightIcon, {
      directional: true
    })),
    onClick: () => {
      if (N == null ? undefined : N.id) {
        new c.CommunityFeatureUsageWamEvent({
          communityId: N == null ? undefined : N.id.user,
          communityUiAction: b.COMMUNITY_FEATURE_UI_ACTION_TAKEN_TYPE.COMMUNITY_NAV,
          communityUiFeature: M.COMMUNITY_UI_FEATURE_TYPE.SUBGROUP_SWITCH
        }).commit();
        s.Cmd.openCommunityHome(N.id);
        v.ModalManager.close();
      }
    }
  }, T.default.createElement(C.Text, {
    as: "span",
    color: "accent",
    size: "16"
  }, B));
  const G = (0, P.default)();
  const U = S.fbt._("Add group", null, {
    hk: "37NAos"
  });
  const W = j ? T.default.createElement(m.DrawerButtonSimple, {
    testid: "add-group-row",
    className: (0, w.default)(D),
    ariaLabel: U,
    icon: T.default.createElement(y.default, {
      theme: "group-modal"
    }, T.default.createElement(_.PeopleIcon, {
      height: 28
    })),
    onClick: () => {
      if ((N == null ? undefined : N.id) && (new c.CommunityFeatureUsageWamEvent({
        communityId: N == null ? undefined : N.id.user,
        communityUiAction: b.COMMUNITY_FEATURE_UI_ACTION_TAKEN_TYPE.GROUP_ADD,
        communityUiFeature: M.COMMUNITY_UI_FEATURE_TYPE.SUBGROUP_SWITCH
      }).commit(), v.ModalManager.close(), !(0, f.subgroupsMaxReached)(x))) {
        if ((x == null ? undefined : x.participants.iAmAdmin()) || (0, d.memberSuggestedGroupsM3SenderEnabled)()) {
          s.Cmd.openCommunityHomeManageGroups(N.id);
        } else {
          var e;
          const t = (I == null || (e = I.groupMetadata) === null || e === undefined ? undefined : e.groupType) === E.GroupType.LINKED_ANNOUNCEMENT_GROUP || I == null ? undefined : I.id;
          s.Cmd.communityAddNewGroup(N.id, G, t);
        }
      }
    }
  }, T.default.createElement(C.Text, {
    as: "span",
    color: "dark",
    size: "16"
  }, U)) : null;
  return T.default.createElement(g.default, {
    chats: L,
    onGroup: e => {
      new c.CommunityFeatureUsageWamEvent({
        communityId: N == null ? undefined : N.id.user,
        communityUiAction: b.COMMUNITY_FEATURE_UI_ACTION_TAKEN_TYPE.GROUP_NAV,
        communityUiFeature: M.COMMUNITY_UI_FEATURE_TYPE.SUBGROUP_SWITCH
      }).commit();
      s.Cmd.openChatFromUnread(e).then(t => {
        if (t) {
          p.ComposeBoxActions.focus(e);
        }
      });
      v.ModalManager.close();
    },
    onCancel: () => v.ModalManager.close(),
    mode: r.Mode.LAST,
    title: T.default.createElement(h.EmojiText, {
      text: N == null ? undefined : N.contact.name
    }),
    titleStr: N == null ? undefined : N.contact.name,
    firstRow: W,
    lastRow: F,
    tsNavigationData: {
      surface: "community-subgroup-switcher"
    },
    hideSearchBar: true,
    showSpeakerForCag: true,
    rotateList: true,
    type: "subgroup_switcher"
  });
};
var r = require("./700071.js");
var o = require("../app/351053.js");
var l = require("../app/394164.js");
var i = a(require("./494467.js"));
var u = require("./397454.js");
var s = require("../app/780549.js");
var c = require("./531359.js");
var d = require("../app/174834.js");
var f = require("./945488.js");
var p = require("../app/877171.js");
var m = require("./36045.js");
var h = require("../app/305521.js");
var g = a(require("./740068.js"));
var E = require("../app/862159.js");
var v = require("../app/114850.js");
var _ = require("./276012.js");
var y = a(require("./802211.js"));
var C = require("../app/180519.js");
var b = require("./276081.js");
var M = require("./572968.js");
var S = require("../vendor/548360.js");
var T = a(require("../vendor/667294.js"));
var w = a(require("../app/156720.js"));
var A = a(require("../app/524578.js"));
var P = a(require("./622008.js"));
var O = require("../app/655241.js");
const k = {
  display: "p357zi0d",
  alignItems: "gndfcl4n",
  justifyContent: "ac2vgrno",
  color: "hp667wtd",
  width: "nfc7olq2",
  height: "brqbuz94"
};
const D = {
  minHeight: "lignnmtc"
};