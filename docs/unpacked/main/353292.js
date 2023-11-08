var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("../app/898817.js");
var o = require("../app/122583.js");
var l = require("../app/8304.js");
var i = a(require("../app/229922.js"));
var u = require("../app/287461.js");
var s = require("../app/984330.js");
var c = a(require("../main-chunk/170206.js"));
var d = a(require("./745699.js"));
var f = require("../app/306703.js");
var p = require("../app/23641.js");
var m = a(require("./908081.js"));
var h = a(require("./324093.js"));
var g = require("./36045.js");
var E = require("./626194.js");
var v = require("../app/305521.js");
var _ = require("./811720.js");
var y = require("../app/690495.js");
var C = a(require("../app/469733.js"));
var b = a(require("../app/335540.js"));
var M = require("./651696.js");
var S = a(require("./377337.js"));
var T = require("./393609.js");
var w = require("../app/113269.js");
var A = require("../app/862159.js");
var P = K(require("../app/288057.js"));
var O = require("../app/114850.js");
var k = require("./828720.js");
var D = require("./525827.js");
var I = require("./386682.js");
var R = a(require("./338931.js"));
var N = require("../app/180519.js");
var x = require("../app/625786.js");
var L = require("../app/390737.js");
var j = require("../app/454905.js");
var B = require("../app/676345.js");
var F = a(require("../app/625903.js"));
var G = require("../vendor/548360.js");
var U = K(require("../vendor/667294.js"));
var W = a(require("../app/156720.js"));
var H = a(require("../app/401715.js"));
var V = require("../app/808446.js");
var q = require("../app/655241.js");
var Y = a(require("../app/895851.js"));
function z(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (z = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function K(e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = z(t);
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
}
const Q = {
  groupInfo: {
    backgroundColor: "g6kkip0l",
    borderTopStartRadius: "bbr44loe",
    borderTopEndRadius: "ooj5yc5b",
    borderBottomEndRadius: "m8i16etx",
    borderBottomStartRadius: "cw0ivh8j"
  },
  groupInfoAvatar: {
    minWidth: "nucpke6t"
  },
  groupInfoName: {
    fontSize: "enbbiyaj",
    lineHeight: "l85iiqla",
    color: "tviruh8d"
  },
  groupInfoLink: {
    maxWidth: "laorhtua"
  },
  linkContainer: {
    wordWrap: "b6f1x6w7",
    whiteSpace: "hmy10g0s"
  },
  link: {
    color: "e1vllz7m",
    lineHeight: "jgi8eev7"
  },
  descContainer: {
    marginTop: "ignnouf6",
    marginEnd: "poiibwu2",
    marginBottom: "du8bjn1j",
    marginStart: "dl2ettod"
  },
  descText: {
    fontSize: "f8jlpxt4",
    lineHeight: "jgi8eev7"
  },
  icon: {
    color: "cs9t9or5"
  },
  iconContainer: {
    minWidth: "mhp1pqu9"
  },
  divider: {
    width: "ln8gz9je",
    height: "kanlod6e",
    backgroundColor: "i86xphuw"
  },
  linkButton: {
    color: "jq3rn4u7"
  }
};
const X = "group-invite-link-anchor";
const Z = 0;
const J = 1;
const $ = 2;
function ee(e, t) {
  const {
    onBack: n,
    chat: a,
    isCommunity: z = false,
    fromInfo: K = false,
    onGroupSettings: ee
  } = e;
  const [te, ne] = (0, U.useState)(Z);
  const ae = (0, Y.default)();
  const re = (0, H.default)();
  (0, V.useListener)(O.ModalManager, ["close_modal"], () => b.default.focus(re.current));
  const oe = (0, q.useModelValues)(e.groupMetadata, ["inviteCode", "groupInviteLink", "groupType", "membershipApprovalMode"]);
  if (z && oe.groupType !== A.GroupType.COMMUNITY) {
    __LOG__(4, undefined, new Error(), true)`GroupInviteLinkDrawer: expected group of type community, found: ${oe.groupType}`;
    SEND_LOGS("group-invite-link-drawer-invalid-group-type");
  }
  const le = e => {
    switch (e) {
      case 401:
        return G.fbt._("You can't view this group's invite link because you're not an admin.", null, {
          hk: "4zodJq"
        });
      case 403:
        return G.fbt._("You can't view this group's invite link because you're no longer a participant.", null, {
          hk: "4fEfyY"
        });
      case 404:
        return G.fbt._("You can't view this group's invite link because this group has ended.", null, {
          hk: "2fhpj0"
        });
      case 436:
        return G.fbt._("Invite via link is temporarily unavailable for this group.", null, {
          hk: "11ALNM"
        });
      default:
        return G.fbt._("This invite link doesn't match any WhatsApp groups.", null, {
          hk: "A22V7"
        });
    }
  };
  (0, U.useEffect)(() => {
    (0, i.default)((0, M.queryGroupInviteCode)(oe), ae).then(() => {
      ne($);
    }).catch((0, o.filteredCatch)(s.ServerStatusCodeError, e => {
      (e => {
        const t = le(e);
        n();
        if (e === 436) {
          (0, w.queryAndUpdateGroupMetadataById)(a.id);
          (0, T.openGrowthLockedModal)(true);
        }
        L.ToastManager.open(U.default.createElement(x.Toast, {
          msg: t
        }));
      })(e.statusCode);
    })).catch((0, r.catchAbort)(() => {}));
  }, []);
  const ie = () => {
    ne(J);
    const e = (0, M.revokeGroupInvite)(oe);
    (0, l.delayMs)(500).then(() => e).then(() => {
      L.ToastManager.open(U.default.createElement(x.Toast, {
        msg: G.fbt._("The previous invite link is now reset and a new invite link has been created.", null, {
          hk: "2RPI3K"
        })
      }));
      ne($);
    }).catch((0, o.filteredCatch)(s.ServerStatusCodeError, e => {
      (e => {
        const t = le(e);
        n();
        L.ToastManager.open(U.default.createElement(x.Toast, {
          msg: t
        }));
      })(e.statusCode);
    })).catch((0, o.filteredCatch)(P.Unmount, () => {}));
  };
  const ue = () => {
    O.ModalManager.open(U.default.createElement(S.default, {
      chat: a,
      onConfirm: ie
    }), {
      transition: "modal-flow"
    });
  };
  const se = () => {
    O.ModalManager.open(U.default.createElement(I.SendGroupInviteFlowLoadable, {
      chat: a
    }), {
      transition: "modal-flow"
    });
  };
  const ce = oe.groupType === A.GroupType.COMMUNITY ? G.fbt._("Invite to community via link", null, {
    hk: "1osKQp"
  }) : G.fbt._("Invite to group via link", null, {
    hk: "3vDtFL"
  });
  let de;
  if (te === Z) {
    de = U.default.createElement(_.LoadingWithText, {
      text: G.fbt._("Checking invite link", null, {
        hk: "4r4AlB"
      })
    });
  } else if (te === J) {
    de = U.default.createElement(_.LoadingWithText, {
      text: G.fbt._("Resetting the invite link for {groupName}.", [G.fbt._param("groupName", a.contact.name)], {
        hk: "4xsKEw"
      })
    });
  } else {
    const e = oe.groupInviteLink;
    let t = null;
    if (document.queryCommandSupported("copy")) {
      t = U.default.createElement(d.default, {
        elementId: X,
        divider: !(0, u.getABPropConfigValue)("group_join_request_m3")
      });
    }
    const n = oe.groupType === A.GroupType.COMMUNITY || oe.groupType === A.GroupType.LINKED_ANNOUNCEMENT_GROUP;
    const r = U.default.createElement(p.DetailImage, {
      id: a.id,
      size: (0, u.getABPropConfigValue)("group_join_request_m3") ? 48 : 82,
      quality: p.DetailImageQuality.High,
      shape: n ? p.DetailImageShape.Squircle : p.DetailImageShape.Circle
    });
    const o = U.default.createElement("span", {
      className: (0, W.default)(Q.linkContainer)
    }, U.default.createElement(f.SelectableLink, {
      id: X,
      href: e,
      selectable: true
    }, U.default.createElement(N.TextSpan, {
      xstyle: !(0, u.getABPropConfigValue)("group_join_request_m3") && Q.link,
      size: (0, u.getABPropConfigValue)("group_join_request_m3") ? "13" : "15",
      color: (0, u.getABPropConfigValue)("group_join_request_m3") ? "link" : undefined
    }, e)));
    let l;
    let i;
    let s;
    l = (0, u.getABPropConfigValue)("group_join_request_m3") ? U.default.createElement(y.FlexRow, {
      xstyle: [Q.groupInfo, B.uiMargin.top16, B.uiMargin.horiz16, B.uiPadding.vert12, B.uiPadding.horiz8],
      align: "center"
    }, U.default.createElement(C.default, {
      xstyle: [Q.groupInfoAvatar, B.uiPadding.horiz8]
    }, r), U.default.createElement(C.default, {
      xstyle: B.uiPadding.horiz8
    }, U.default.createElement(y.FlexColumn, {
      justify: "start"
    }, U.default.createElement(C.default, null, U.default.createElement(v.EmojiText, {
      text: a.contact.name,
      direction: "auto",
      xstyle: Q.groupInfoName
    })), U.default.createElement(C.default, {
      xstyle: Q.groupInfoLink
    }, o)))) : U.default.createElement(c.default, {
      image: r,
      primary: U.default.createElement(v.EmojiText, {
        text: a.contact.name,
        direction: "auto"
      }),
      theme: "identity",
      secondary: o
    });
    if (n) {
      i = U.default.createElement("div", {
        className: (0, W.default)(Q.descContainer, Q.descText)
      }, G.fbt._("Anyone with WhatsApp can follow this link to join this community. Only share it with people you trust.", null, {
        hk: "1uzspN"
      }));
    } else if ((0, u.getABPropConfigValue)("group_join_request_m3")) {
      i = U.default.createElement(y.FlexRow, {
        align: "center",
        xstyle: B.uiPadding.vert16
      }, U.default.createElement(C.default, {
        xstyle: [Q.iconContainer, B.uiPadding.horiz25]
      }, U.default.createElement(k.PendingParticipantsIcon, {
        xstyle: Q.icon
      })), U.default.createElement(C.default, {
        xstyle: B.uiPadding.end24
      }, U.default.createElement(N.TextSpan, {
        color: "dark",
        xstyle: Q.descText
      }, oe.membershipApprovalMode ? G.fbt._("Participants need approval from an admin to join this group. Edit in {=m2}", [G.fbt._implicitParam("=m2", U.default.createElement(F.default, {
        onClick: ee,
        xstyle: Q.linkButton
      }, G.fbt._("group settings", null, {
        hk: "nKsyC"
      })))], {
        hk: "3HZ0C3"
      }) : G.fbt._("People can join this group without admin approval. Edit in {=m2}", [G.fbt._implicitParam("=m2", U.default.createElement(F.default, {
        onClick: ee,
        xstyle: Q.linkButton
      }, G.fbt._("group settings", null, {
        hk: "2jlYE8"
      })))], {
        hk: "1ZjxRy"
      }))));
      s = U.default.createElement(y.FlexRow, {
        xstyle: [B.uiMargin.vert4, B.uiMargin.horiz24]
      }, U.default.createElement("div", {
        className: (0, W.default)(Q.divider)
      }));
    } else {
      i = U.default.createElement("div", {
        className: (0, W.default)(Q.descContainer, Q.descText)
      }, G.fbt._("Anyone with WhatsApp can follow this link to join this group. Only share it with people you trust.", null, {
        hk: "2oXmVg"
      }));
    }
    de = U.default.createElement(h.default, null, l, i, s, U.default.createElement(R.default, {
      onClick: se,
      divider: !(0, u.getABPropConfigValue)("group_join_request_m3")
    }), t, U.default.createElement(g.DrawerButtonSimple, {
      testid: "li-revoke-link",
      icon: U.default.createElement(D.RevokeIcon, {
        className: (0, W.default)(Q.icon)
      }),
      onClick: ue,
      divider: !(0, u.getABPropConfigValue)("group_join_request_m3")
    }, G.fbt._("Reset link", null, {
      hk: "37cdK4"
    })));
  }
  return U.default.createElement(m.default, {
    ref: t,
    theme: (0, u.getABPropConfigValue)("group_join_request_m3") ? "invite" : undefined,
    testid: "group-invite-link-drawer"
  }, U.default.createElement(E.DrawerHeader, {
    title: ce,
    onBack: e.onBack,
    rtlFixIfOnDarwin: true,
    type: !z || K || (0, j.topMenuRedesignEnabled)() ? E.DRAWER_HEADER_TYPE.SMALL : E.DRAWER_HEADER_TYPE.LARGE
  }), U.default.createElement("div", {
    ref: re,
    tabIndex: "-1"
  }, de));
}
var te = (0, U.forwardRef)(ee);
exports.default = te;