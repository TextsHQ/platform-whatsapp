var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConversationHeader = function (e) {
  var t;
  var n;
  const a = (0, re.default)();
  const _ = (0, ee.default)();
  const S = (0, J.useRef)(false);
  const k = (0, J.useRef)(false);
  const x = (0, J.useRef)(null);
  const le = (0, J.useRef)(null);
  const fe = (0, ne.useModelValues)(e.chat, ["id", "formattedTitle", "presence", "isUser", "isNewsletter", "isGroup", "isBroadcast", "groupMetadata", "isPSA", "contact", "name", "assignedAgent", "isAssignedToMe", "mute", "newsletterMetadata"]);
  const pe = (0, ne.useModelValues)(fe.mute, ["isMuted"]);
  const me = (0, ne.useModelValues)(fe.presence.chatstate, ["type"]);
  const [he, ge, Ee, ve] = (0, $.useContactValues)(e.contact.id, [E.getIsMe, E.getShowBusinessCheckmarkAsPrimary, E.getShowBusinessCheckmarkAsSecondary, E.getShouldForceBusinessUpdate]);
  const _e = (0, ne.useOptionalModelValues)(e.chat.newsletterMetadata, ["membershipType", "suspended", "terminated", "isSuspendedOrTerminated"]);
  const ye = (0, oe.default)();
  const [Ce, be] = (0, J.useState)(false);
  const [Me, Se] = (0, J.useState)(null);
  (0, J.useEffect)(() => {
    function e() {
      return (e = (0, r.default)(function* () {
        yield u.BusinessProfileCollection.find(fe.contact.id);
        _();
      })).apply(this, arguments);
    }
    if (ve) {
      (function () {
        e.apply(this, arguments);
      })();
    }
  }, []);
  const [Te, we] = (0, J.useState)(true);
  const [Ae] = (0, ae.useTimeout)(() => {
    be(false);
  }, 100);
  const Pe = () => {
    k.current = true;
  };
  (0, te.useListener)(null, ["BrowserWindow:focus"], () => {});
  (0, te.useListener)(null, "BrowserWindow:move", function () {
    if (S.current) {
      Pe(...arguments);
    }
  });
  (0, te.useListener)(fe.contact.businessProfile, ["change:profileOptions", "change:catalogStatus"], _);
  (0, te.useListener)(null, "change:activeCall", _);
  (0, te.useListener)(null, "change:participants", _);
  (0, te.useListener)(g.Conn, "change:isVoipInitialized", _);
  (0, te.useListener)(p.Cmd, "get_conversation_header_offset", e => {
    if (x.current) {
      const t = x.current.getBoundingClientRect();
      e((0, o.default)(t, ["right", "bottom"]));
    } else {
      e(null);
    }
  });
  (0, te.useListener)(p.Cmd, "update_chatlist_selection", () => de());
  const Oe = (0, y.useWAWebDesktopUpsellAbPropCheck)("call_btn");
  const ke = (0, y.useWAWebDesktopUpsellPlatformCheck)();
  const {
    pushname: De
  } = (0, ne.useModelValues)(g.Conn, ["pushname"]);
  const [Ie, Re] = (0, J.useState)(null);
  let Ne;
  let xe;
  let Le;
  (0, J.useEffect)(() => {
    if ((0, c.canAssignChats)() && fe.assignedAgent != null) {
      const e = fe.isAssignedToMe ? Z.fbt._("Assigned to you", null, {
        hk: "eJXQx"
      }) : Z.fbt._("Assigned to {agentName}", [Z.fbt._param("agentName", fe.assignedAgent.name)], {
        hk: "2nzwVN"
      });
      Re(e);
    }
  }, [De, fe, fe.assignedAgent, fe.isAssignedToMe]);
  if (fe.isUser) {
    Ne = J.default.createElement(v.default, {
      chat: fe,
      contact: fe.contact,
      onSelectMessages: e.onSelectMessages,
      toContextMenuManager: true,
      enableChatThreadLogging: true
    });
    xe = J.default.createElement(Q.default, {
      contact: fe.contact,
      presence: fe.presence,
      chatstate: fe.presence.chatstate,
      location: "title",
      showBusinessCheckmark: Ee,
      assignmentSubtitle: Ie,
      chatId: fe.id
    });
  } else if (fe.isBroadcast) {
    Ne = J.default.createElement(i.default, {
      chat: (0, q.unproxy)(fe),
      onSelectMessages: e.onSelectMessages,
      toContextMenuManager: true
    });
    xe = null;
  } else if (fe.isGroup) {
    var je;
    var Be;
    Ne = J.default.createElement(w.default, {
      chat: (0, q.unproxy)(fe),
      onSelectMessages: e.onSelectMessages,
      toContextMenuManager: true
    });
    xe = ((je = fe.groupMetadata) === null || je === undefined ? undefined : je.isSuspendedOrTerminated()) ? null : (0, l.getABPropConfigValue)("ugr_enabled") && ((Be = fe.groupMetadata) === null || Be === undefined ? undefined : Be.isUnnamed) ? me.type === "typing" ? J.default.createElement(A.default, {
      chatstate: fe.presence.chatstate,
      groupMetadata: fe.groupMetadata,
      presence: fe.presence,
      placeholder: se(fe),
      location: "title",
      assignmentSubtitle: Ie,
      chatId: fe.id
    }) : null : J.default.createElement(A.default, {
      chatstate: fe.presence.chatstate,
      groupMetadata: fe.groupMetadata,
      presence: fe.presence,
      placeholder: se(fe),
      location: "title",
      assignmentSubtitle: Ie,
      chatId: fe.id
    });
  } else if (fe.isNewsletter) {
    Ne = (_e == null ? undefined : _e.isSuspendedOrTerminated) ? null : J.default.createElement(B.NewsletterChatMenuDropdown, {
      chat: fe,
      toContextMenuManager: true,
      onSelectMessages: e.onSelectMessages
    });
    xe = (_e == null ? undefined : _e.suspended) === true ? null : J.default.createElement(j.default, {
      newsletterMetadata: _e
    });
  }
  if (Me && Ne) {
    const e = {
      menu: Ne,
      anchor: Me,
      autoFocus: true,
      dirX: I.default.isRTL() ? M.DirX.RIGHT : M.DirX.LEFT,
      dirY: M.DirY.BOTTOM,
      offsetY: 5,
      type: M.MenuType.DropdownMenu
    };
    Le = J.default.createElement(K.default, {
      contextMenu: e
    });
  }
  let Fe = null;
  if (!(((t = fe.groupMetadata) === null || t === undefined ? undefined : t.groupType) === P.GroupType.LINKED_ANNOUNCEMENT_GROUP || he || fe.isNewsletter || fe.id.isBot() || (Oe && ke) !== true)) {
    Fe = J.default.createElement(ue, {
      chat: fe,
      onClick: () => {}
    });
  }
  let Ge = null;
  if (fe.isGroup && pe.canMute() && (0, l.getABPropConfigValue)("quick_mute_enabled")) {
    const e = pe.isMuted ? Z.fbt._("Unmute", null, {
      hk: "1A7Ci4"
    }) : Z.fbt._("Mute", null, {
      hk: "4zbVSn"
    });
    Ge = J.default.createElement(R.MenuBarItem, {
      tabOrder: z.TAB_ORDER.CHAT_HEADER_BUTTON,
      testid: "mute-button",
      icon: pe.isMuted ? J.default.createElement(U.NotificationsOffIcon, null) : J.default.createElement(W.NotificationsOnIcon, null),
      title: e,
      onClick: () => {
        if (fe.isPSA) {
          p.Cmd.muteChatFromEntryPoint(fe, !pe.isMuted, 3, false);
        } else {
          p.Cmd.muteChat(fe, !pe.isMuted, false);
        }
      }
    });
  }
  const Ue = ((n = fe.groupMetadata) === null || n === undefined ? undefined : n.parentGroup) != null && fe.groupMetadata.participants.iAmMember() && (0, h.communitySubgroupSwitcherEntrypointEnabled)() ? J.default.createElement(Y.SubgroupSwitcherIcon, {
    chat: fe
  }) : null;
  const We = fe.isNewsletter || (0, d.isSuspendedGroup)(fe) ? null : J.default.createElement(R.MenuBarItem, {
    tabOrder: z.TAB_ORDER.CHAT_HEADER_BUTTON,
    testid: "search-button",
    icon: J.default.createElement(H.SearchAltIcon, null),
    title: Z.fbt._("Search…", null, {
      hk: "rSmJp"
    }),
    onClick: e => {
      e.preventDefault();
      b.DrawerManager.existsDrawerMid(e => {
        if (!e) {
          b.DrawerManager.openDrawerRight(J.default.createElement(f.default, {
            chat: (0, q.unproxy)(fe),
            key: `chat-search-${fe.id.toString()}`
          }), {
            transition: "slide-left",
            uim: a,
            focusType: D.FocusType.TABBABLE
          });
        }
      });
    }
  });
  if (fe.isPSA) {
    xe = J.default.createElement(Q.default, {
      contact: fe.contact,
      presence: fe.presence,
      chatstate: fe.presence.chatstate,
      location: "title",
      showBusinessCheckmark: Ee,
      chatId: fe.id
    });
  }
  let He;
  if (Te) {
    He = J.default.createElement(s.default, {
      targetRef: le,
      chat: fe
    });
  }
  if (ye.aborted) {
    return null;
  }
  return J.default.createElement("header", {
    ref: x,
    className: O.default.chatHeader,
    onClickCapture: () => {},
    onMouseDown: () => {}
  }, J.default.createElement("div", {
    className: O.default.chatAvatar,
    onClick: () => ce(fe, a, X.PROFILE_ENTRY_POINT.CHAT_HEADER),
    title: Z.fbt._("Profile Details", null, {
      hk: "22n3V4"
    }),
    role: fe.isPSA ? null : "button"
  }, J.default.createElement(T.default, {
    chat: fe,
    theme: V.SubgroupImageTheme.CHAT_HEADER,
    regularChatImage: J.default.createElement(C.DetailImage, {
      id: fe.id,
      size: 40,
      ephemeralIcon: "conversation-header"
    }),
    showCommunityInfo: true
  })), J.default.createElement("div", {
    className: O.default.chatBody,
    onClick: () => ce(fe, a, X.PROFILE_ENTRY_POINT.CHAT_HEADER),
    role: fe.isPSA ? null : "button"
  }, J.default.createElement("div", {
    className: O.default.chatMain
  }, J.default.createElement("div", {
    className: O.default.chatTitle
  }, J.default.createElement(L.Name, {
    chat: fe,
    ellipsify: true,
    showBusinessCheckmark: ge,
    testid: "conversation-info-header-chat-title",
    showMessageYourselfName: he
  }))), xe), J.default.createElement("div", {
    className: O.default.chatControls
  }, J.default.createElement(R.MenuBar, {
    key: "conversation-header"
  }, Ue, Fe, null, undefined, J.default.createElement(m.CommerceButton, {
    chat: fe
  }), (0, G.isNewsletterEnabled)() && J.default.createElement(F.default, {
    chat: fe
  }), We, Ge, Ne != null && J.default.createElement("div", {
    className: O.default.menuItemContainer,
    ref: Se
  }, J.default.createElement(R.MenuBarItem, {
    ref: le,
    tabOrder: z.TAB_ORDER.CHAT_HEADER_BUTTON,
    icon: J.default.createElement(N.MenuIcon, {
      xstyle: ie.menuIcon
    }),
    title: Z.fbt._("Menu", null, {
      hk: "H0fkV"
    }),
    onClick: e => {
      we(false);
      (e => {
        b.DrawerManager.existsDrawerMid(t => {
          if (t) {
            e.preventDefault();
          }
        });
      })(e);
    },
    testid: "conversation-menu-button"
  }, Le)))), He);
};
exports.closeInfoPanel = de;
exports.openInfoPanel = ce;
var r = a(require("../vendor/348926.js"));
var o = a(require("../vendor/478718.js"));
var l = require("../app/287461.js");
var i = a(require("./411007.js"));
var u = require("../app/778945.js");
var s = a(require("./976094.js"));
var c = require("../app/560861.js");
var d = require("../app/374660.js");
var f = a(require("./207598.js"));
var p = require("../app/780549.js");
var m = require("./138090.js");
var h = require("../app/174834.js");
var g = require("../app/445729.js");
a(require("../app/846870.js"));
var E = require("../app/660666.js");
var v = a(require("./920347.js"));
var _ = require("./636257.js");
var y = require("../app/792522.js");
var C = require("../app/23641.js");
var b = require("../app/900316.js");
var M = require("../app/664149.js");
var S = require("../app/714574.js");
var T = a(require("./131247.js"));
var w = a(require("./565497.js"));
var A = a(require("./793090.js"));
var P = require("../app/862159.js");
var O = a(require("./974385.js"));
var k = require("./81095.js");
var D = require("../app/299950.js");
var I = a(require("../app/932325.js"));
var R = require("./526795.js");
var N = require("./107600.js");
var x = require("./609181.js");
require("../app/114850.js");
var L = require("../app/21645.js");
var j = a(require("./414376.js"));
var B = require("./648298.js");
var F = a(require("./434463.js"));
var G = require("../app/73225.js");
var U = require("./293883.js");
var W = require("./746186.js");
require("./417016.js");
var H = require("./625606.js");
var V = require("./260818.js");
var q = require("../app/163139.js");
var Y = require("./625022.js");
var z = require("../main-chunk/931109.js");
var K = a(require("../app/37875.js"));
var Q = a(require("./555517.js"));
require("./743005.js");
require("./65105.js");
a(require("../app/961745.js"));
a(require("./990704.js"));
a(require("./132683.js"));
var X = require("./679281.js");
var Z = require("../vendor/548360.js");
var J = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = le(t);
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
a(require("../app/156720.js"));
var $ = require("../app/379811.js");
var ee = a(require("../app/969651.js"));
var te = require("../app/808446.js");
var ne = require("../app/655241.js");
var ae = require("../app/441673.js");
var re = a(require("../app/321201.js"));
var oe = a(require("../app/895851.js"));
function le(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (le = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const ie = {
  menuIcon: {
    marginTop: "kiiy14zj"
  }
};
function ue(e) {
  let {
    chat: t,
    onClick: n
  } = e;
  if (!(0, E.getIsMe)(t.contact)) {
    (0, d.shouldBlockCall)(t);
  }
  if (t.isUser) {
    Z.fbt._("Video call", null, {
      hk: "1q9mNK"
    });
  } else {
    Z.fbt._("Group video call", null, {
      hk: "4rrIQR"
    });
  }
  return J.default.createElement(_.WAWebDesktopCallingMenuButton, null);
}
function se(e) {
  var t;
  var n;
  var a;
  var r;
  var o;
  var l;
  const i = (e == null || (t = e.groupMetadata) === null || t === undefined ? undefined : t.participants.iAmAdmin()) && ((n = e.groupMetadata) === null || n === undefined ? undefined : n.announce) ? Z.fbt._("Only admins can send messages", null, {
    hk: "4vOQrI"
  }) : Z.fbt._("click here for group info", null, {
    hk: "1jLkn1"
  });
  let u;
  var s;
  if (((a = e.groupMetadata) === null || a === undefined ? undefined : a.groupType) === P.GroupType.LINKED_ANNOUNCEMENT_GROUP) {
    u = (e == null || (s = e.groupMetadata) === null || s === undefined ? undefined : s.participants.iAmAdmin()) ? Z.fbt._("Only admins can send messages", null, {
      hk: "1o6LSN"
    }) : Z.fbt._("Announcements", null, {
      hk: "4mmLYA"
    });
  } else if ((0, h.communitiesEnabled)() && ((r = e.groupMetadata) === null || r === undefined ? undefined : r.groupType) === P.GroupType.LINKED_SUBGROUP && ((o = e.groupMetadata) === null || o === undefined ? undefined : o.participants.iAmMember())) {
    var c;
    const t = (c = e.groupMetadata) === null || c === undefined ? undefined : c.getParentGroupChat();
    const n = t == null ? undefined : t.contact;
    const a = n != null ? (0, S.getFormattedName)(n) : null;
    if (a != null) {
      u = Z.fbt._("{community}", [Z.fbt._param("community", a)], {
        hk: "YC2Xn"
      });
    }
  }
  if ((l = u) !== null && l !== undefined) {
    return l;
  } else {
    return i;
  }
}
function ce(e, t, n) {
  b.DrawerManager.existsDrawerMid(a => {
    if (!a) {
      if (e.contact.isBusiness) {
        (0, x.qplStartProfileView)("Header");
      }
      if (e.isUser || e.isBroadcast || e.isGroup || e.isNewsletter) {
        b.DrawerManager.openDrawerRight(J.default.createElement(k.InfoFlowLoadable, {
          chat: (0, q.unproxy)(e),
          key: `info-${e.id.toString()}`,
          profileEntryPoint: n
        }), {
          transition: "slide-left",
          uim: t,
          focusType: D.FocusType.TABBABLE
        });
      }
    }
  });
}
function de() {
  b.DrawerManager.existsDrawerRight(e => {
    if (e) {
      b.DrawerManager.closeDrawerRight();
    }
  });
}