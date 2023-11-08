var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommunityHomeJoinedSubgroups = function (e) {
  const {
    chat: t,
    mini: n = false,
    onPendingGroupsClick: a,
    onAddNewGroupClick: r,
    type: o = "home"
  } = e;
  const c = (0, P.default)(() => new v.default([], e => e.itemKey));
  const f = (0, w.default)(t.groupMetadata, ["change:allowNonAdminSubGroupCreation"], () => (0, i.canAddGroupToCommunity)(t)) && n ? M.default.createElement(d.AddGroupCell, {
    onClick: r
  }) : null;
  const p = (0, A.default)();
  (0, O.useListener)(l.ChatCollection, ["sort"], p);
  const {
    joinedSubgroups: m,
    subgroupCount: g
  } = (0, T.default)(t.groupMetadata);
  const y = b.fbt._({
    "*": "Your groups: {other-groups} groups",
    _1: "Your groups: 1 group"
  }, [b.fbt._plural(m.length, "other-groups")], {
    hk: "1xcdQv"
  });
  const C = () => m.map(e => e.toString()).map(e => l.ChatCollection.assertGet(e)).sort(u.default).reduce((e, t) => {
    var a;
    const r = (a = t.groupMetadata) === null || a === undefined ? undefined : a.groupType;
    if (!(!r || n && r === h.GroupType.LINKED_ANNOUNCEMENT_GROUP)) {
      e.push({
        itemKey: t.id.toString(),
        subChat: t,
        groupType: r,
        height: 65
      });
    }
    return e;
  }, []);
  c.current.init(C());
  if (f == null && m.length < 1) {
    return null;
  }
  let S = null;
  S = n ? g === 1 ? b.fbt._("GROUPS", null, {
    hk: "43PSND"
  }) : b.fbt._("GROUPS YOU'RE IN", null, {
    hk: "2YVSJa"
  }) : b.fbt._("Your groups", null, {
    hk: "3rjROs"
  });
  return M.default.createElement(s.ChatInfoDrawerListSection, {
    testid: "section-your-groups",
    title: S,
    xstyle: n && _.uiMargin.bottom0,
    shadow: !n
  }, !n && M.default.createElement(d.SubgroupSuggestionsRow, {
    chat: t,
    onClick: a
  }), M.default.createElement(E.NavigableFlatList, {
    ariaLabel: y.toString(),
    listData: C(),
    onRenderItem: e => M.default.createElement(D, {
      data: e,
      active: c.current,
      mini: n,
      type: o
    }),
    selection: c.current,
    rotateList: true
  }), f);
};
exports.handleJoinedSubgroupClick = k;
var r = a(require("../app/670983.js"));
var o = require("./700071.js");
var l = require("../app/351053.js");
var i = require("../app/394164.js");
var u = a(require("./494467.js"));
var s = require("./464659.js");
var c = require("../app/780549.js");
var d = require("./648678.js");
var f = require("./430855.js");
var p = require("../app/359198.js");
var m = require("../app/877171.js");
var h = require("../app/862159.js");
var g = require("../app/81644.js");
var E = require("./164406.js");
var v = a(require("../app/237889.js"));
var _ = require("../app/676345.js");
var y = require("../app/571444.js");
var C = require("../app/965927.js");
var b = require("../vendor/548360.js");
var M = a(require("../vendor/667294.js"));
var S = a(require("../main-chunk/928361.js"));
var T = a(require("./847116.js"));
var w = a(require("../app/524578.js"));
var A = a(require("../app/969651.js"));
var P = a(require("../app/637660.js"));
var O = require("../app/808446.js");
function k(e, t) {
  var n;
  const a = (0, r.default)((n = e.groupMetadata) === null || n === undefined ? undefined : n.parentGroup, "subChat.groupMetadata?.parentGroup");
  let o;
  (0, f.incrementCommunityHomeEvent)(a, f.CommunityDailyHomeMetricsType.HOME_GROUP_NAVIGATIONS);
  o = t === "navigation" ? C.SURFACE_TYPE.COMMUNITY_NAV : C.SURFACE_TYPE.COMMUNITY_HOME;
  new p.CommunityGroupJourneyEvent({
    action: y.CHAT_FILTER_ACTION_TYPES.GROUP_NAVIGATION,
    surface: o,
    chat: e
  }).commit();
  c.Cmd.openChatFromUnread(e).then(t => {
    if (t) {
      m.ComposeBoxActions.focus(e);
    }
  });
}
function D(e) {
  const {
    subChat: t,
    groupType: n
  } = e.data;
  const {
    mini: a
  } = e;
  const [r, l] = (0, S.default)(e.active, t.id.toString());
  const i = b.fbt._("{subgroup-name}", [b.fbt._param("subgroup-name", t.formattedTitle)], {
    hk: "2xetrC"
  });
  const u = n => {
    n.preventDefault();
    k(t, e.type);
  };
  return M.default.createElement(g.HotKeys, {
    ref: r,
    handlers: (0, d.mapHandlers)(u),
    "aria-label": i.toString(),
    role: "button"
  }, M.default.createElement(o.Chat, {
    chat: t,
    theme: "subgroup",
    mode: o.Mode.LAST,
    onClick: u,
    key: t.id.toString(),
    noContext: true,
    smallUnread: !a,
    hidePin: true,
    fakePin: n === h.GroupType.LINKED_ANNOUNCEMENT_GROUP,
    hideArchivedIcon: true,
    forceActive: l,
    overrideCommunityAnnouncementGroupName: true,
    showSpeakerForCag: true
  }));
}