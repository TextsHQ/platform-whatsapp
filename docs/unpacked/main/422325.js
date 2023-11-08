var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../vendors-main/29521.js"));
var o = require("../app/287461.js");
var l = require("../app/374660.js");
var i = require("../app/174834.js");
var u = a(require("./908081.js"));
var s = a(require("./831269.js"));
var c = a(require("./324093.js"));
var d = require("./626194.js");
var f = a(require("./969358.js"));
var p = require("../app/753233.js");
var m = require("../app/258105.js");
var h = require("../app/682144.js");
var g = a(require("./561535.js"));
var E = require("../app/862159.js");
var v = require("../app/97858.js");
var _ = require("../app/114850.js");
var y = require("./33014.js");
var C = require("../app/591800.js");
var b = require("../app/98742.js");
var M = require("./61740.js");
var S = require("./792882.js");
var T = require("../app/180519.js");
var w = require("../app/676345.js");
var A = require("../app/459857.js");
var P = a(require("../app/124928.js"));
var O = require("../vendor/548360.js");
var k = function (e, t) {
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
var D = a(require("../app/156720.js"));
var I = require("../app/655241.js");
var R = a(require("../app/321201.js"));
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
const x = e => {
  let {
    isRestricted: t,
    onClick: n
  } = e;
  return k.default.createElement(s.default, {
    onClick: n,
    multiline: true,
    testid: "restricted-setting"
  }, k.default.createElement("div", {
    className: (0, D.default)(w.uiMargin.bottom2)
  }, k.default.createElement(T.TextSpan, {
    theme: "title"
  }, O.fbt._("Edit group settings", null, {
    hk: "3gxBT7"
  }))), k.default.createElement(T.TextDiv, {
    theme: "muted"
  }, t ? O.fbt._("Only admins", null, {
    hk: "1shXeT"
  }) : O.fbt._("All participants", null, {
    hk: "2YNQNN"
  })));
};
const L = e => {
  let {
    isAnnouncement: t,
    onClick: n
  } = e;
  return k.default.createElement(s.default, {
    onClick: n,
    multiline: true,
    testid: "announcement-setting"
  }, k.default.createElement("div", {
    className: (0, D.default)(w.uiMargin.bottom2)
  }, k.default.createElement(T.TextSpan, {
    theme: "title"
  }, O.fbt._("Send messages", null, {
    hk: "2zKwxL"
  }))), k.default.createElement(T.TextDiv, {
    theme: "muted"
  }, t ? O.fbt._("Only admins", null, {
    hk: "1shXeT"
  }) : O.fbt._("All participants", null, {
    hk: "2YNQNN"
  })));
};
const j = e => {
  let {
    memberAddMode: t,
    onClick: n
  } = e;
  return k.default.createElement(s.default, {
    onClick: n,
    multiline: true,
    testid: "anyone-can-add-setting"
  }, k.default.createElement("div", {
    className: (0, D.default)(w.uiMargin.bottom2)
  }, k.default.createElement(T.TextSpan, {
    theme: "title"
  }, O.fbt._("Add other participants", null, {
    hk: "1vKQyR"
  }))), k.default.createElement(T.TextDiv, {
    theme: "muted"
  }, t === b.MEMBER_ADD_MODE.ALL_MEMBER_ADD ? O.fbt._("All participants", null, {
    hk: "2YNQNN"
  }) : O.fbt._("Only admins", null, {
    hk: "1shXeT"
  })));
};
const B = e => {
  let {
    isNoFrequentlyForwarded: t,
    onClick: n
  } = e;
  return k.default.createElement(s.default, {
    onClick: n,
    multiline: true,
    testid: "no-frequently-forwarded-setting"
  }, k.default.createElement("div", {
    className: (0, D.default)(w.uiMargin.bottom2)
  }, k.default.createElement(T.TextSpan, {
    theme: "title"
  }, O.fbt._("Messages forwarded many times", null, {
    hk: "2Neytn"
  }))), k.default.createElement(T.TextDiv, {
    theme: "muted"
  }, t ? O.fbt._("Don't allow", null, {
    hk: "3uBuwQ"
  }) : O.fbt._("Allow", null, {
    hk: "2pdVOn"
  })));
};
const F = e => {
  let {
    isEnabled: t,
    onClick: n
  } = e;
  return k.default.createElement(k.default.Fragment, null, k.default.createElement(f.default, {
    animation: false
  }, k.default.createElement(s.default, {
    onClick: n,
    multiline: true,
    testid: "rta-mode-setting"
  }, k.default.createElement("div", {
    className: (0, D.default)(w.uiMargin.bottom2)
  }, k.default.createElement(T.TextSpan, {
    theme: "title"
  }, O.fbt._("Send for admin review", null, {
    hk: "Htci8"
  }))), k.default.createElement(T.TextDiv, {
    theme: "muted",
    testid: "rta-mode-setting-state"
  }, t ? O.fbt._("On", null, {
    hk: "2HozXJ"
  }) : O.fbt._("Off", null, {
    hk: "3wJYLn"
  })))), k.default.createElement("div", {
    className: (0, D.default)(w.uiMargin.all30, w.uiMargin.top0)
  }, k.default.createElement(T.TextSpan, {
    theme: "muted"
  }, O.fbt._("If on, group participants will be able to send messages to group admins for review. Admins will be notified. {=m2}", [O.fbt._implicitParam("=m2", k.default.createElement(p.ExternalLink, {
    href: (0, m.getReportToAdminFaqUrl)()
  }, O.fbt._("Learn more", null, {
    hk: "3H0LeE"
  })))], {
    hk: "38YY04"
  }))));
};
const G = e => {
  let {
    isEnabled: t,
    onClick: n
  } = e;
  return k.default.createElement(k.default.Fragment, null, k.default.createElement(f.default, {
    animation: false
  }, k.default.createElement(s.default, {
    onClick: n,
    multiline: true,
    testid: "membership-approval-mode-setting"
  }, k.default.createElement("div", {
    className: (0, D.default)(w.uiMargin.bottom2)
  }, k.default.createElement(T.TextSpan, {
    theme: "title"
  }, O.fbt._("Approve new participants", null, {
    hk: "2yuWS7"
  }))), k.default.createElement(T.TextDiv, {
    theme: "muted",
    testid: "membership-approval-mode-setting-state"
  }, t ? O.fbt._("On", null, {
    hk: "nU82j"
  }) : O.fbt._("Off", null, {
    hk: "2U3mCO"
  })))), k.default.createElement("div", {
    className: (0, D.default)(w.uiMargin.all30, w.uiMargin.top0)
  }, k.default.createElement(T.TextSpan, {
    theme: "muted"
  }, O.fbt._("When turned on, admins must approve anyone who wants to join this group. {=m2}", [O.fbt._implicitParam("=m2", k.default.createElement(p.ExternalLink, {
    href: (0, m.getMembershipApprovalModeFaqUrl)()
  }, O.fbt._("Learn more", null, {
    hk: "hSUU3"
  })))], {
    hk: "3Xn5Kd"
  }))));
};
function U(e, t) {
  const n = (0, I.useModelValues)(e.chat, ["id", "isNewsletter"]);
  const a = (0, I.useModelValues)(e.groupMetadata, ["restrict", "announce", "noFrequentlyForwarded", "participants", "owner", "groupType", "isParentGroup", "membershipApprovalMode", "reportToAdminMode", "memberAddMode"]);
  const p = (0, R.default)();
  const m = e => {
    _.ModalManager.open(k.default.createElement(g.default, {
      settingType: e,
      chat: n,
      groupMetadata: a
    }), {
      transition: "modal",
      uim: p
    });
  };
  const b = () => a.participants.filter(e => e.isAdmin).map(e => e.contact);
  const N = e => !!a.participants.get(e.id);
  const U = e => {
    const t = P.default.equals(e.id, a.owner);
    const n = (0, A.getMaybeMeUser)().equals(e.id);
    const r = a.groupType === E.GroupType.COMMUNITY && (0, i.communitiesEnabled)();
    return t || n && !r;
  };
  const W = e => {
    const t = a.participants;
    const o = t.filter(e => e.isAdmin);
    const l = (0, r.default)(e, o, (e, t) => e.id.equals(t.id)).map(e => t.assertGet(e.id));
    const i = (0, r.default)(o, e, (e, t) => e.id.equals(t.id));
    if (l.length > 0) {
      l.forEach(e => {
        e.contact.pendingAction++;
      });
      (0, y.promoteParticipants)(n, l).finally(() => {
        l.forEach(e => {
          e.contact.pendingAction--;
        });
      });
    }
    if (i.length > 0) {
      i.forEach(e => {
        e.contact.pendingAction++;
      });
      (0, y.demoteParticipants)(n, i).finally(() => {
        i.forEach(e => {
          e.contact.pendingAction--;
        });
      });
    }
    _.ModalManager.close();
  };
  let H;
  H = (0, C.isPinnedMessagesM1SenderEnabled)() ? O.fbt._("Choose who can change this group's subject, icon and description. They can also edit the disappearing message timer, keep and unkeep messages, and pin and unpin messages.", null, {
    hk: "3SarBg"
  }) : O.fbt._("Choose who can change this group's subject, icon, and description. They can also edit the disappearing message timer and keep or unkeep messages.", null, {
    hk: "2l2jvX"
  });
  const V = (0, o.getABPropConfigValue)("group_join_request_m2_setting") || (0, o.getABPropConfigValue)("group_join_request_m2") && a.membershipApprovalMode;
  const q = (0, o.getABPropConfigValue)("report_to_admin_kill_switch") && !(0, l.isCommunityAnnouncementGroup)(n) && !n.isNewsletter && (a.reportToAdminMode || (0, o.getABPropConfigValue)("report_to_admin_enabled"));
  const Y = (0, o.getABPropConfigValue)("web_anyone_can_add_group_setting_enabled");
  return k.default.createElement(u.default, {
    ref: t,
    theme: "striped",
    testid: "group-settings-drawer"
  }, k.default.createElement(d.DrawerHeader, {
    title: O.fbt._("Group settings", null, {
      hk: "3sS0Vl"
    }),
    type: d.DRAWER_HEADER_TYPE.SMALL,
    onBack: e.onClose
  }), k.default.createElement(c.default, null, k.default.createElement(f.default, {
    animation: false
  }, k.default.createElement(x, {
    onClick: () => {
      m(h.GROUP_SETTING_TYPE.RESTRICT);
    },
    isRestricted: a.restrict
  })), k.default.createElement("div", {
    className: (0, D.default)(w.uiMargin.all30, w.uiMargin.top0)
  }, k.default.createElement(T.TextSpan, {
    theme: "muted"
  }, H)), k.default.createElement(f.default, {
    animation: false
  }, a.groupType !== E.GroupType.LINKED_ANNOUNCEMENT_GROUP ? k.default.createElement(L, {
    onClick: () => {
      m(h.GROUP_SETTING_TYPE.ANNOUNCEMENT);
    },
    isAnnouncement: a.announce
  }) : null, (0, v.isAdminHfmToggleEnabled)() ? k.default.createElement(B, {
    onClick: () => {
      m(h.GROUP_SETTING_TYPE.NO_FREQUENTLY_FORWARDED);
    },
    isNoFrequentlyForwarded: a.noFrequentlyForwarded
  }) : null), k.default.createElement(f.default, {
    animation: false
  }, Y ? k.default.createElement(j, {
    memberAddMode: a.memberAddMode,
    onClick: () => {
      m(h.GROUP_SETTING_TYPE.MEMBER_ADD_MODE);
    }
  }) : null), a.groupType !== E.GroupType.LINKED_ANNOUNCEMENT_GROUP ? k.default.createElement(f.default, {
    animation: false
  }, k.default.createElement(s.default, {
    onClick: () => {
      _.ModalManager.open(k.default.createElement(M.SelectModal, {
        onConfirm: W,
        getInitialItems: b,
        isDisabled: U,
        isSelected: U,
        filter: N,
        title: O.fbt._("Edit group admins", null, {
          hk: "1BOEkM"
        }),
        useShortName: true,
        useAllContacts: true,
        listType: M.ListType.ParticipantManageModal,
        singleSelectionFooterType: S.FooterType.CONFIRM,
        multipleSelectionFooterType: S.FooterType.CONFIRM,
        shouldShowSelectionSummary: false
      }));
    },
    multiline: true,
    testid: "edit-group-admins"
  }, k.default.createElement("div", {
    className: (0, D.default)(w.uiMargin.bottom2)
  }, k.default.createElement(T.TextSpan, {
    theme: "title"
  }, O.fbt._("Edit group admins", null, {
    hk: "1BOEkM"
  }))))) : null, V ? k.default.createElement(G, {
    isEnabled: a.membershipApprovalMode,
    onClick: () => {
      m(h.GROUP_SETTING_TYPE.MEMBERSHIP_APPROVAL_MODE);
    }
  }) : null, q ? k.default.createElement(F, {
    isEnabled: a.reportToAdminMode,
    onClick: () => {
      m(h.GROUP_SETTING_TYPE.REPORT_TO_ADMIN_MODE);
    }
  }) : null));
}
var W = (0, k.forwardRef)(U);
exports.default = W;