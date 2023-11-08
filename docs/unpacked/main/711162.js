var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommunityMembersSearchTheme = exports.CommunityMembersSearch = undefined;
exports.ViewCommunityMembersModal = function (e) {
  const {
    parentChat: t,
    onInviteMembersClick: n
  } = e;
  const a = (0, U.useMemo)(() => (0, d.getCommunityAnnouncementGroup)(t.groupMetadata), [t.groupMetadata]);
  const {
    members: o = [],
    announcementGroupParticipants: l,
    parentGroupParticipants: i,
    loading: u
  } = (0, H.useCommunityMembers)(t, a);
  const s = Boolean(i == null ? undefined : i.iAmAdmin());
  const {
    membersInCAG: c,
    membersNotInCAG: h
  } = (0, U.useMemo)(() => {
    if (s) {
      return (0, m.splitCommunityParticipants)(l, o);
    }
  }, [l, s, o]) || {};
  const g = {
    parentChat: t,
    announcementGroupParticipants: l,
    parentGroupParticipants: i,
    loading: u,
    onInviteMembersClick: n
  };
  if ((0, f.communityTabbedInfoEnabled)()) {
    return U.default.createElement(p.CommunityMembersFlow, (0, r.default)({
      members: s ? c : o,
      membersNotInCAG: s ? h : []
    }, g));
  }
  return U.default.createElement(K, (0, r.default)({
    members: o
  }, g));
};
exports.getMemberContextMenuItems = z;
var r = a(require("../vendor/967154.js"));
var o = a(require("../app/670983.js"));
var l = require("../app/287461.js");
var i = a(require("./775025.js"));
var u = require("./570588.js");
var s = require("../app/351053.js");
var c = require("../app/780549.js");
var d = require("./474103.js");
var f = require("../app/174834.js");
var p = require("./215969.js");
var m = require("./515111.js");
var h = require("../app/877171.js");
var g = require("../app/660666.js");
var E = a(require("./402085.js"));
var v = require("./36045.js");
var _ = require("../app/900316.js");
var y = require("../app/675085.js");
var C = require("../app/305521.js");
var b = require("../app/581354.js");
var M = require("../app/714574.js");
var S = require("./81095.js");
var T = require("../app/299950.js");
var w = require("./406506.js");
var A = require("../app/114850.js");
var P = require("./197988.js");
var O = require("./507877.js");
var k = a(require("./671401.js"));
var D = a(require("./802211.js"));
var I = require("../app/163139.js");
var R = require("../app/180519.js");
var N = require("../app/392632.js");
var x = a(require("../app/37875.js"));
var L = require("../app/459857.js");
var j = a(require("./804477.js"));
var B = a(require("../app/124928.js"));
var F = require("../vendor/548360.js");
var G = a(require("../vendor/441143.js"));
var U = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = V(t);
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
var W = a(require("../app/156720.js"));
var H = require("./574396.js");
function V(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (V = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const q = {
  disclaimer: {
    paddingTop: "tvsr5v2h",
    paddingEnd: "l9g3jx6n",
    paddingStart: "lyvj5e2u",
    paddingBottom: "lzi2pvmc",
    textAlign: "qfejxiq4"
  },
  dropdownText: {
    display: "p357zi0d",
    alignItems: "gndfcl4n"
  },
  firstRow: {
    minHeight: "lignnmtc",
    borderTop: "swyb62mu"
  }
};
const Y = require("../vendor/76672.js").Mirrored(["Members", "MembersNotInAnnouncements"]);
function z(e) {
  var t;
  let {
    parentChat: n,
    parentGroupParticipants: a,
    announcementGroupParticipants: r,
    contact: o,
    origin: l
  } = e;
  const i = (t = a == null ? undefined : a.get(o.id)) !== null && t !== undefined ? t : r == null ? undefined : r.get(o.id);
  const u = [];
  const s = () => {
    (0, b.findChat)(o.id, l).then(e => {
      c.Cmd.openChatFromUnread(e).then(t => {
        if (t) {
          h.ComposeBoxActions.focus(e);
          A.ModalManager.close();
        }
      });
    });
  };
  const d = () => {
    (0, b.findChat)(o.id, l).then(e => {
      A.ModalManager.close();
      _.DrawerManager.openDrawerRight(U.default.createElement(S.InfoFlowLoadable, {
        chat: (0, I.unproxy)(e),
        key: `info-${e.id.toString()}`
      }), {
        transition: "slide-left",
        focusType: T.FocusType.TABBABLE
      });
    });
  };
  if (!(0, L.isMeAccount)(o.id)) {
    const e = F.fbt._("Message {name}", [F.fbt._param("name", (0, M.getFormattedShortName)(o))], {
      hk: "4xgfDZ"
    });
    u.push(U.default.createElement(y.DropdownItem, {
      testid: "message-community-participant",
      key: "message-community-participant",
      action: s,
      ariaLabel: e,
      addSpacing: true
    }, U.default.createElement(C.EmojiText, {
      text: e,
      xstyle: q.dropdownText
    })));
    if ((0, g.getIsMyContact)(o)) {
      const e = F.fbt._("View {name}", [F.fbt._param("name", (0, M.getFormattedShortName)(o))], {
        hk: "4v1Eeg"
      });
      u.push(U.default.createElement(y.DropdownItem, {
        testid: "view-community-participant",
        key: "view-community-participant",
        action: d,
        ariaLabel: e,
        addSpacing: true
      }, U.default.createElement(C.EmojiText, {
        text: e,
        xstyle: q.dropdownText
      })));
    }
    const t = F.fbt._("Verify security code", null, {
      hk: "4ztVWF"
    });
    u.push(U.default.createElement(y.DropdownItem, {
      testid: "community-verify-identity",
      key: "verify-identity",
      ariaLabel: t,
      action: () => {
        A.ModalManager.close();
        _.DrawerManager.openDrawerRight(U.default.createElement(j.default.VerificationDrawerLoadable, {
          contact: o,
          isFirstLevel: true
        }), {
          transition: "slide-left"
        });
      }
    }, t));
  }
  if (i) {
    if (a == null ? undefined : a.canPromote(i)) {
      const e = F.fbt._("Make admin", null, {
        hk: "1eedeq"
      });
      u.push(U.default.createElement(y.DropdownItem, {
        testid: "promote-community-admin",
        key: "promote-community-admin",
        ariaLabel: e,
        action: () => (0, O.openCommunityParticipantPromoteConfirmation)(n, i, r)
      }, e));
    } else if (a == null ? undefined : a.canDemote(i)) {
      const e = F.fbt._("Dismiss as admin", null, {
        hk: "TWPP1"
      });
      u.push(U.default.createElement(y.DropdownItem, {
        testid: "demote-community-admin",
        key: "demote-community-admin",
        ariaLabel: e,
        action: () => (0, P.openCommunityParticipantDemoteConfirmation)(i, n)
      }, e));
    }
    if ((a == null ? undefined : a.canRemove(i)) && !i.isSuperAdmin) {
      const e = F.fbt._("Remove from community", null, {
        hk: "4E9Qsh"
      });
      u.push(U.default.createElement(y.DropdownItem, {
        testid: "remove-from-community-identity",
        key: "remove-from-community",
        ariaLabel: e,
        action: () => {
          A.ModalManager.close();
          A.ModalManager.open(U.default.createElement(k.default, {
            contact: o,
            parentGroupChat: n
          }));
        }
      }, e));
    }
  }
  return u;
}
exports.CommunityMembersSearchTheme = Y;
const K = (0, U.forwardRef)((e, t) => {
  const {
    parentChat: n,
    onInviteMembersClick: a,
    onMembersNotInAnnouncementsClick: r,
    members: c,
    announcementGroupParticipants: p,
    parentGroupParticipants: m,
    theme: h = Y.Members,
    loading: g,
    onBack: _
  } = e;
  const [y, C] = (0, U.useState)();
  const b = Boolean(m == null ? undefined : m.iAmAdmin());
  const M = () => {
    var e;
    const t = (e = (0, d.getCommunityAnnouncementGroup)(n.groupMetadata)) === null || e === undefined ? undefined : e.id;
    if (t == null) {
      return void __LOG__(4, undefined, new Error())`Community add participants clicked but no CAG found`;
    }
    const a = s.ChatCollection.assertGet(t);
    const r = U.default.createElement(i.default, {
      chat: (0, I.unproxy)(a),
      pushTransition: "none",
      popTransition: "none",
      communityName: n.formattedTitle
    });
    A.ModalManager.open(r, {
      transition: "modal-flow"
    });
  };
  const S = () => {
    C(null);
  };
  let T;
  if (y) {
    T = U.default.createElement(N.UIE, {
      displayName: "ChatContextMenu",
      escapable: true,
      popable: true,
      dismissOnWindowResize: true,
      requestDismiss: S
    }, U.default.createElement(x.default, {
      contextMenu: y
    }));
  }
  const P = Boolean(m == null ? undefined : m.iAmAdmin());
  let O;
  let k;
  let L;
  let j;
  let H;
  let V;
  switch (h) {
    case Y.Members:
      {
        if (!P) {
          O = (0, f.communityTabbedInfoEnabled)() ? F.fbt._("Only community admins can see all members", null, {
            hk: "2Vfpoh"
          }) : F.fbt._("Only community admins can see members", null, {
            hk: "4wtRmi"
          });
        }
        const e = F.fbt._("Members", null, {
          hk: "38TSgc"
        });
        const t = P && c ? F.fbt._("Members ({number_of_participants})", [F.fbt._param("number_of_participants", c.length)], {
          hk: "3W54OY"
        }) : e;
        k = g ? e : t;
        const n = F.fbt._("Invite to community via link", null, {
          hk: "2VHcbJ"
        });
        L = b ? U.default.createElement(v.DrawerButtonSimple, {
          testid: "invite-to-community-row",
          className: (0, W.default)(q.firstRow),
          icon: U.default.createElement(D.default, {
            theme: "group-modal"
          }, U.default.createElement(w.LinkIcon, null)),
          ariaLabel: n,
          onClick: () => {
            A.ModalManager.close();
            if (!(a == null)) {
              a();
            }
          }
        }, U.default.createElement(R.Text, {
          as: "span",
          color: "dark",
          size: "16"
        }, n)) : null;
        const r = F.fbt._("Add members", null, {
          hk: "1kUADS"
        });
        j = b ? U.default.createElement(v.DrawerButtonSimple, {
          testid: "add-to-community-row",
          className: (0, W.default)(q.firstRow),
          icon: U.default.createElement(D.default, {
            theme: "group-modal"
          }, U.default.createElement(u.AddUserIcon, {
            directional: true
          })),
          ariaLabel: r,
          onClick: M
        }, U.default.createElement(R.Text, {
          as: "span",
          color: "dark",
          size: "16"
        }, r)) : null;
        H = F.fbt._("Search members", null, {
          hk: "l6TVZ"
        });
        break;
      }
    case Y.MembersNotInAnnouncements:
      O = F.fbt._("People who are community members but are not in the community announcement group", null, {
        hk: "1hXGZy"
      });
      k = F.fbt._("Members not in announcements", null, {
        hk: "tl8Nr"
      });
      H = F.fbt._("Search members not in announcements", null, {
        hk: "kwYLZ"
      });
  }
  if (r && b) {
    V = {
      text: F.fbt._("Members not in announcements", null, {
        hk: "tl8Nr"
      }),
      onClick: r
    };
  }
  const K = U.default.createElement(R.TextParagraph, {
    xstyle: q.disclaimer,
    size: "14",
    color: "secondary"
  }, O);
  (0, G.default)(k != null, "modalTitle cannot be null or undefined.");
  return U.default.createElement("div", {
    ref: t
  }, U.default.createElement(E.default, {
    contacts: c,
    title: k,
    filter: () => true,
    onCancel: _ ? undefined : () => {
      A.ModalManager.close();
    },
    onBack: _,
    participantCollection: (0, o.default)(m, "parentGroupParticipants"),
    listenForAdminChange: true,
    isParentGroup: true,
    showNotifyName: true,
    elevatedPushNamesEnabled: (0, l.getABPropConfigValue)("elevated_push_names_v2_m2_enabled"),
    onContext: (e, t) => ((e, t) => {
      const a = z({
        parentChat: n,
        parentGroupParticipants: m,
        announcementGroupParticipants: p,
        contact: t,
        origin: "communityParticipantSearch"
      });
      const r = e.type === "click" ? undefined : e.target;
      C({
        contactId: t.id,
        menu: a,
        anchor: r,
        event: e.anchor ? undefined : e
      });
    })(e, t),
    contextMenu: e => (e => !!y && B.default.equals(e, y.contactId))(e),
    contextEnabled: () => false,
    openContextOnClick: true,
    firstRows: [L, j],
    lastRow: K,
    button: V,
    searchPlaceholder: H,
    spinnerInHeader: g,
    loadOnlyContactPictures: true
  }), T);
});
exports.CommunityMembersSearch = K;
K.displayName = "CommunityMembersSearch";