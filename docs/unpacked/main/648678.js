var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActivityCell = function (e) {
  var t;
  const [n, a] = (0, ae.default)(e.active, `community-activity-${e.parentGroupWid.toString()}`);
  const r = (t = s.ChatCollection.get(e.parentGroupWid.toString())) === null || t === undefined ? undefined : t.formattedTitle;
  const l = (0, y.getActivityCellText)(e.activities);
  const i = ee.fbt._("New Activity in {community-name}: {community-activity}", [ee.fbt._param("community-name", r), ee.fbt._param("community-activity", l)], {
    hk: "1iRgBJ"
  });
  if (e.activities.length === 0 || l == null) {
    return null;
  }
  return te.default.createElement(N.HotKeys, {
    ref: n,
    handlers: ce(e.onClick),
    "aria-label": i.toString(),
    role: "button"
  }, te.default.createElement(u.default, {
    image: te.default.createElement(G.default, {
      xstyle: se.activityRoundIcon
    }, te.default.createElement(o.AlertBellIcon, {
      iconXstyle: se.activityBellIcon
    })),
    secondary: te.default.createElement(k.EmojiText, {
      text: l,
      direction: "auto"
    }),
    contextEnabled: () => false,
    onClick: e.onClick,
    theme: "community-tab-activity-cell",
    secondaryDetail: te.default.createElement(d.UnreadIndicator, {
      noMarginRight: true
    }),
    active: a
  }));
};
exports.AddExistingGroupsCell = function (e) {
  const t = ee.fbt._("Add existing group", null, {
    hk: "32gVBG"
  });
  const n = te.default.createElement(G.default, null, te.default.createElement(F.PlusIcon, null));
  return te.default.createElement(P.DrawerButtonSimple, {
    testid: "add-existing-group-row",
    icon: n,
    onClick: e.onClick,
    ariaLabel: t,
    xstyle: se.drawerButtonHeight
  }, ee.fbt._("Add existing group", null, {
    hk: "zy8Cr"
  }));
};
exports.AddGroupCell = function (e) {
  let {
    onClick: t
  } = e;
  const n = ee.fbt._("Add group", null, {
    hk: "3cOzVz"
  });
  return te.default.createElement(l.default, {
    theme: "subgroup",
    image: te.default.createElement(T.DefaultGroupIcon, {
      className: M.default.addNewGroupIcon
    }),
    primary: n,
    onClick: t,
    ariaLabel: n,
    focusable: true
  });
};
exports.CommunityCell = function (e) {
  let {
    parentGroupMetadata: t,
    parentGroupChat: n,
    chat: a,
    onClick: o,
    isNew: l = false,
    inTabDrawer: i,
    inCommandPalette: s = false,
    inChatList: f = false
  } = e;
  let h = (0, r.default)(e, ie);
  const [g, E] = (0, te.useState)(null);
  const v = (0, c.isIntegritySuspendedCommunity)(n);
  const {
    theme: _
  } = (0, te.useContext)(Y.ThemeContext);
  const y = (0, le.useModelValues)(n, ["formattedTitle"]).formattedTitle;
  const C = i === true ? `community-header-${n.id.toString()}` : n.id.toString();
  const b = ee.fbt._("Community: {community-name}", [ee.fbt._param("community-name", y)], {
    hk: "3yUqPu"
  });
  const [M, S] = (0, ae.default)(h.active, C);
  const T = () => {
    E(null);
  };
  let P;
  if (g) {
    P = te.default.createElement(z.UIE, {
      displayName: "CommunityContextMenu",
      escapable: true,
      popable: true,
      dismissOnWindowResize: true,
      requestDismiss: T
    }, te.default.createElement(K.default, {
      contextMenu: g
    }));
  }
  const D = t.getJoinedSubgroupsChat();
  const I = (0, re.default)(D, "change:unreadCount", () => D.map(e => Math.max(e.unreadCount, 0)).reduce((e, t) => e + t, 0));
  let R;
  let x;
  let j;
  let B;
  if (f && a != null) {
    R = te.default.createElement(m.default, {
      chat: a
    });
  }
  if (l) {
    x = ee.fbt._("New", null, {
      hk: "4ansAj"
    });
  } else if (v) {
    x = ee.fbt._("This community is no longer available.", null, {
      hk: "9J5Zf"
    });
  } else if (f && a != null) {
    x = te.default.createElement(p.default, {
      chat: a,
      fromCommunity: true
    });
  }
  if (f && a != null) {
    j = te.default.createElement(d.Icons, {
      chat: a,
      mute: a.mute,
      unreadCount: I,
      hideArchivedIcon: false,
      hideMuteIcon: false,
      settings: U.default,
      unreadMentionIcon: false
    });
  }
  if (n == null) {
    return null;
  }
  if (!(s || f)) {
    B = l ? "community-tab-home-new" : "community-tab-home";
  }
  const F = s || f ? "" : (0, ne.default)(_ === "dark" ? se.shadowTopDarkMode : se.shadowTop, se.communityHomeCell);
  const G = f && a != null && a.hasUnread;
  return te.default.createElement(N.HotKeys, {
    ref: M,
    handlers: ce(o),
    "aria-label": b.toString(),
    role: "button"
  }, te.default.createElement(u.default, {
    image: te.default.createElement(A.DetailImage, {
      id: t.id,
      shape: A.DetailImageShape.Squircle
    }),
    primary: te.default.createElement(k.EmojiText, {
      text: y,
      ellipsify: true,
      xstyle: se.communityTitle
    }),
    primaryDetail: R,
    secondary: x,
    secondaryDetail: j,
    unreadStyle: G,
    contextEnabled: () => v,
    onContext: e => {
      if (g) {
        return void E(null);
      }
      const t = (() => {
        const e = [];
        if (v) {
          const t = e => {
            n.pendingAction++;
            e.finally(() => {
              n.pendingAction--;
            });
          };
          e.push(te.default.createElement(O.DropdownItem, {
            testid: "mi-delete-community",
            action: () => {
              L.ModalManager.open(te.default.createElement(w.DeleteChatPopup, {
                chat: n,
                onDeleteOrExit: t
              }), {
                transition: "modal-flow"
              });
            },
            key: "DeleteCommunityDropdownItem",
            xstyle: se.dangerText
          }, ee.fbt._("Delete community", null, {
            hk: "3O9JJj"
          })));
        }
        return e;
      })();
      E({
        menu: t,
        event: e.event,
        anchor: e.anchor
      });
    },
    onClick: o,
    className: F,
    theme: B,
    active: S
  }), P);
};
exports.CommunityMenuButton = function (e) {
  let {
    testid: t,
    Icon: n,
    iconHeight: a = 24,
    onClick: r,
    title: o
  } = e;
  const l = ee.fbt._("{menu-title}", [ee.fbt._param("menu-title", o)], {
    hk: "3xCbtR"
  });
  return te.default.createElement(f.default, {
    ariaLabel: l.toString(),
    testid: t,
    side: "chevron",
    icon: te.default.createElement(n, {
      color: V.SvgColorProp.SECONDARY,
      height: a
    }),
    onClick: r,
    title: o,
    spaced: true
  });
};
exports.CreateNewGroupCell = function (e) {
  const t = ee.fbt._("Create new group", null, {
    hk: "1RBorM"
  });
  const n = te.default.createElement(G.default, null, te.default.createElement(B.PeopleIcon, null));
  return te.default.createElement(P.DrawerButtonSimple, {
    testid: "create-new-group-row",
    icon: n,
    onClick: e.onClick,
    ariaLabel: t,
    xstyle: se.drawerButtonHeight
  }, ee.fbt._("Create new group", null, {
    hk: "4hNxJp"
  }));
};
exports.NewCommunityCell = function (e) {
  const [t, n] = (0, ae.default)(e.active, "new-community-btn");
  return te.default.createElement(N.HotKeys, {
    ref: t,
    handlers: ce(e.onNewCommunity),
    className: (0, ne.default)(se.newCommunityCell, se.shadowBottom),
    "aria-label": ee.fbt._("Create new community", null, {
      hk: "1qu9Dv"
    }),
    role: "button"
  }, te.default.createElement(l.default, {
    image: te.default.createElement(W.default, null, te.default.createElement(C.CommunityGroupIcon, {
      directional: true
    })),
    primary: ee.fbt._("New community", null, {
      hk: "2fzGYI"
    }),
    onClick: e.onNewCommunity,
    theme: "no-border",
    active: n
  }));
};
exports.RemoveButton = undefined;
exports.RemoveButtonFactory = function () {
  return (0, te.forwardRef)(de);
};
exports.SeeExamplesLink = function () {
  const e = x.default.isRTL() ? h.ChevronLeftIcon : g.ChevronRightIcon;
  return te.default.createElement(R.FlexRow, {
    align: "center",
    justify: "center",
    xstyle: Q.uiMargin.vert8
  }, te.default.createElement(q.TextParagraph, {
    xstyle: se.examplesContainer
  }, te.default.createElement(D.ExternalLink, {
    xstyle: se.examplesLink,
    href: (0, I.getAboutCommunitiesFaqUrl)()
  }, ee.fbt._("See example communities", null, {
    hk: "4b8wdv"
  }))), te.default.createElement(e, {
    height: 24,
    width: 24,
    color: V.SvgColorProp.TEAL_LIGHTER
  }));
};
exports.SubgroupChatCell = function (e) {
  const [t, n] = (0, ae.default)(e.active, `community-subgroup-${e.subgroup.id.toString()}`);
  const a = t => {
    t.preventDefault();
    (0, v.incrementCommunityTabEvent)(v.CommunityDailyTabMetricsType.TAB_GROUP_NAVIGATIONS);
    new b.CommunityGroupJourneyEvent({
      action: Z.CHAT_FILTER_ACTION_TYPES.GROUP_NAVIGATION,
      surface: J.SURFACE_TYPE.COMMUNITY_TAB,
      chat: e.subgroup
    }).commit();
    E.Cmd.openChatFromUnread(e.subgroup).then(t => {
      if (t) {
        S.ComposeBoxActions.focus(e.subgroup);
      }
      return e.subgroup;
    });
  };
  const r = ee.fbt._("{sub-group-name} Subgroup", [ee.fbt._param("sub-group-name", e.subgroup.formattedTitle)], {
    hk: "3ED648"
  });
  return te.default.createElement(N.HotKeys, {
    ref: t,
    handlers: ce(a),
    "aria-label": r.toString(),
    role: "button"
  }, te.default.createElement(i.Chat, {
    onClick: a,
    chat: e.subgroup,
    forceActive: n,
    theme: "community-tab-subgroup",
    noContext: true,
    smallUnread: true,
    doNotBoldUnread: true,
    hideArchivedIcon: true,
    overrideCommunityAnnouncementGroupName: true,
    showSpeakerForCag: true
  }));
};
exports.SubgroupSuggestionsRow = function (e) {
  var t;
  var n;
  const {
    chat: a,
    onClick: r
  } = e;
  const o = (0, re.default)((t = a.groupMetadata) === null || t === undefined ? undefined : t.participants, ["bulk_add", "bulk_remove", "reset", "change:isAdmin"], () => {
    var e;
    return Boolean((e = a.groupMetadata) === null || e === undefined ? undefined : e.participants.iAmAdmin());
  });
  const i = (0, re.default)((n = a.groupMetadata) === null || n === undefined ? undefined : n.subgroupSuggestions, ["add", "remove", "reset"], () => {
    var e;
    var t;
    if ((e = (t = a.groupMetadata) === null || t === undefined ? undefined : t.getSubgroupSuggestions().length) !== null && e !== undefined) {
      return e;
    } else {
      return 0;
    }
  });
  if (i === 0 || !(0, _.memberSuggestedGroupsEnabled)()) {
    return null;
  }
  const u = te.default.createElement(W.default, {
    size: 40,
    transparent: true,
    xstyle: se.subgroupSuggestionsIconContainer
  }, o ? te.default.createElement(H.SubgroupsNuxIcon, {
    height: 24,
    iconXstyle: se.subgroupSuggestionsIcon
  }) : te.default.createElement(j.NewGroupIcon, {
    height: 24,
    color: V.SvgColorProp.SECONDARY
  }));
  const s = o ? ee.fbt._("Pending groups", null, {
    hk: "2tngym"
  }) : ee.fbt._("Groups you suggested", null, {
    hk: "4pleJl"
  });
  const c = o ? ee.fbt._({
    "*": "{number_of_group_suggestions} group suggestions",
    _1: "1 group suggestion"
  }, [ee.fbt._plural(i, "number_of_group_suggestions")], {
    hk: "4B3vYY"
  }) : ee.fbt._({
    "*": "{number_of_pending_groups} pending groups",
    _1: "1 pending group"
  }, [ee.fbt._plural(i, "number_of_pending_groups")], {
    hk: "3CMp43"
  });
  return te.default.createElement(l.default, {
    theme: "subgroup",
    image: u,
    primary: s,
    secondary: c,
    onClick: r,
    ariaLabel: s,
    focusable: true
  });
};
exports.ViewAllCell = function (e) {
  var t;
  const [n, a] = (0, ae.default)(e.active, `community-view-all-${e.parentGroupWid.toString()}`);
  const r = (t = s.ChatCollection.get(e.parentGroupWid.toString())) === null || t === undefined ? undefined : t.formattedTitle;
  const o = ee.fbt._("View all subgroups in {community-name}", [ee.fbt._param("community-name", r)], {
    hk: "3W7Jb9"
  });
  const {
    theme: l
  } = (0, te.useContext)(Y.ThemeContext);
  const i = (0, ne.default)(l === "dark" ? se.shadowBottomDarkMode : se.shadowBottom, se.viewAll);
  return te.default.createElement(N.HotKeys, {
    ref: n,
    handlers: ce(e.onClick),
    "aria-label": o.toString(),
    role: "button"
  }, te.default.createElement(u.default, {
    primary: ee.fbt._("View all", null, {
      hk: "3lbJeD"
    }),
    contextEnabled: () => false,
    onClick: e.onClick,
    theme: "community-tab-view-all",
    className: i,
    active: a
  }));
};
exports.mapHandlers = ce;
var r = a(require("../vendor/506479.js"));
var o = require("./524592.js");
var l = a(require("../main-chunk/170206.js"));
var i = require("./700071.js");
var u = a(require("./991370.js"));
var s = require("../app/351053.js");
var c = require("../app/394164.js");
var d = require("./457796.js");
var f = a(require("./306007.js"));
var p = a(require("./262290.js"));
var m = a(require("./829087.js"));
var h = require("./958548.js");
var g = require("./397454.js");
var E = require("../app/780549.js");
var v = require("./430855.js");
var _ = require("../app/174834.js");
var y = require("./952586.js");
var C = require("./216785.js");
var b = require("../app/359198.js");
var M = a(require("./517050.js"));
var S = require("../app/877171.js");
var T = require("../app/192562.js");
var w = require("./24957.js");
var A = require("../app/23641.js");
var P = require("./36045.js");
var O = require("../app/675085.js");
var k = require("../app/305521.js");
var D = require("../app/753233.js");
var I = require("../app/258105.js");
var R = require("../app/690495.js");
var N = require("../app/81644.js");
var x = a(require("../app/932325.js"));
var L = require("../app/114850.js");
var j = require("./312727.js");
var B = require("./276012.js");
var F = require("./992259.js");
var G = a(require("./802211.js"));
var U = a(require("../app/634152.js"));
var W = a(require("./928040.js"));
var H = require("./104423.js");
var V = require("../app/220584.js");
var q = require("../app/180519.js");
var Y = require("../app/667738.js");
var z = require("../app/392632.js");
var K = a(require("../app/37875.js"));
var Q = require("../app/676345.js");
var X = a(require("../app/625903.js"));
var Z = require("../app/571444.js");
var J = require("../app/965927.js");
var $ = require("../app/561912.js");
var ee = require("../vendor/548360.js");
var te = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = ue(t);
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
var ne = a(require("../app/156720.js"));
var ae = a(require("../main-chunk/928361.js"));
var re = a(require("../app/524578.js"));
var oe = a(require("../app/38085.js"));
var le = require("../app/655241.js");
const ie = ["parentGroupMetadata", "parentGroupChat", "chat", "onClick", "isNew", "inTabDrawer", "inCommandPalette", "inChatList"];
function ue(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (ue = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const se = {
  communityTitle: {
    fontWeight: "hnx8ox4h"
  },
  communityHomeCell: {
    borderBottom: "qmxv8cnq"
  },
  viewAll: {
    paddingStart: "jl1nm5p1",
    color: "jn5oezdz",
    fontWeight: "bcr6az0x"
  },
  shadowTop: {
    boxShadow: "ourv9g48"
  },
  shadowTopDarkMode: {
    boxShadow: "rsxuate7"
  },
  shadowBottom: {
    boxShadow: "srkn8evo"
  },
  shadowBottomDarkMode: {
    boxShadow: "f3tryo6w"
  },
  dangerText: {
    color: "mvxzr2tb"
  },
  activityRoundIcon: {
    backgroundColor: "se52eggw",
    height: "lniyxyh2",
    width: "qssinsw9"
  },
  activityBellIcon: {
    color: "jn5oezdz"
  },
  newCommunityCell: {
    paddingEnd: "iqx13udk",
    marginTop: "o9i7y497"
  },
  btnRemove: {
    color: "s4k44ver",
    verticalAlign: "fewfhwl7",
    cursor: "ajgl1lbb"
  },
  xColor: {
    color: "hp667wtd"
  },
  buttonFocused: {
    borderTopStartRadius: "dntxsmpk",
    borderTopEndRadius: "ixn6u0rb",
    borderBottomEndRadius: "s2vc4xk1",
    borderBottomStartRadius: "o0wkt7aw",
    boxShadow: "lgxs6e1q"
  },
  drawerButtonHeight: {
    height: "ga71456d"
  },
  subgroupSuggestionsIconContainer: {
    backgroundColor: "pjarawcm"
  },
  subgroupSuggestionsIcon: {
    color: "rdal4baz"
  },
  examplesContainer: {
    textAlign: "qfejxiq4",
    lineHeight: "e4qy2s3t"
  },
  examplesLink: {
    color: "fsk8o631"
  }
};
function ce(e) {
  return {
    enter: e,
    space: e
  };
}
function de(e, t) {
  var n;
  var a;
  const [r, o] = (0, ae.default)(e.active, `remove-button-${(n = e.subgroup) === null || n === undefined ? undefined : n.toString()}`);
  const l = (0, oe.default)(t, r);
  const i = ee.fbt._("Remove {sub-group-name}", [ee.fbt._param("sub-group-name", e.groupName)], {
    hk: "1hbNSG"
  }).toString();
  return te.default.createElement(N.HotKeys, {
    ref: l,
    handlers: ce(e.onClick),
    "aria-label": i,
    role: "button"
  }, te.default.createElement(X.default, {
    title: i,
    className: (0, ne.default)(se.btnRemove, o && se.buttonFocused),
    testid: "btn-remove-group",
    onClick: e.onClick,
    tabIndex: (a = e.tabIndex) !== null && a !== undefined ? a : -1
  }, te.default.createElement($.XIcon, {
    iconXstyle: se.xColor
  })));
}
const fe = (0, te.forwardRef)(de);
exports.RemoveButton = fe;
fe.displayName = "RemoveButton";