var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    settings: t,
    chatListCollapsed: n,
    headerRef: a,
    onSelectChatClick: ve,
    isMultiSelectMode: ye,
    activeAccountInfo: Ce
  } = e;
  const be = (0, fe.default)();
  const Me = (0, he.useModelValues)(e.mute, ["isMuted"]);
  const Se = (0, ue.useRef)(false);
  const Te = (0, ue.useRef)(false);
  const we = (0, ue.useMemo)(ae.assertGetMeUser, []);
  const Ae = C.ContactCollection.assertGet(we);
  (0, ge.default)({
    contact: Ae
  });
  const [Pe, Oe, ke, De] = (0, ce.useContactValues)(Ae.id, [O.getTextStatusString, O.getTextStatusEmoji, O.getTextStatusLastUpdateTime, O.getTextStatusExpiryTs]);
  const Ie = (0, $.shouldDisplayTextStatus)(Pe, Oe, ke, De);
  let Re;
  if (Oe != null && Ie === true) {
    const e = w.EmojiUtil.normalizeEmojiFromString(Oe);
    if (e != null) {
      Re = ue.default.createElement(A.default, {
        key: "low-res",
        emoji: e,
        size: "small",
        className: (0, se.default)(_e.emojiScale)
      });
    }
  }
  const [Ne, xe] = (0, ue.useState)(false);
  const [Le, je] = (0, ue.useState)(false);
  const [Be] = (0, Ee.useTimeout)(() => xe(false), 100);
  (0, ue.useEffect)(() => {
    if (y.Conn.isSMB) {
      s.BusinessProfileCollection.find(we).then(() => {
        je(true);
      });
    }
  }, [we]);
  const Fe = () => {
    Te.current = true;
  };
  (0, me.useListener)(null, "BrowserWindow:focus", () => {});
  (0, me.useListener)(null, "BrowserWindow:move", function () {
    if (!Se.current) {
      Fe(...arguments);
    }
  });
  const Ge = (0, ue.useMemo)(() => s.BusinessProfileCollection.get(we), [we]);
  (0, me.useListener)(Ge, "change:profileOptions", be);
  const Ue = () => {
    L.MuteCollection.globalMute().unmute();
    te.ToastManager.open(ue.default.createElement(ee.Toast, {
      msg: ie.fbt._("Notifications enabled", null, {
        hk: "mZYyC"
      })
    }));
  };
  const We = () => {
    V.QPL.markerStart(H.QuickLogMarkerId.WHATSAPP_CATALOG_COLLECTIONS_VIEW, {
      annotations: {
        string: {
          EntryPoint: "ChatHeader"
        }
      }
    });
    (0, f.openCatalogManagementFlow)(null, oe.CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_TOP_BAR);
  };
  const He = () => {
    x.ModalManager.open(ue.default.createElement(i.default, null));
  };
  let Ve = null;
  if (Me.isMuted) {
    Ve = ue.default.createElement(I.MenuBarItem, {
      testid: "menu-bar-unmute",
      tabOrder: Z.TAB_ORDER.CHATLIST_HEADER,
      icon: ue.default.createElement(M.DndIcon, null),
      title: ie.fbt._("Alerts and sounds off. Click to restore.", null, {
        hk: "AByLx"
      }),
      onClick: Ue,
      key: "btn-dnd"
    });
  }
  const qe = ue.default.createElement("div", {
    className: (0, h.classnamesConvertMeToStylexPlease)((0, se.default)(Re != null && _e.headerWithEmojiBadge), p.default.listUser)
  }, ue.default.createElement(b.DetailImage, {
    ariaLabel: ie.fbt._("profile photo", null, {
      hk: "1cPbcq"
    }),
    testId: "chatlist_header_profile_photo",
    theme: "chatlist_header_profile_photo",
    tabIndex: -1,
    tabOrder: Z.TAB_ORDER.CHATLIST_HEADER,
    id: we,
    size: 40,
    onClick: () => {
      const e = Q.StatusCollection.assertGet(we);
      const t = W.ProfilePicThumbCollection.assertGet(we);
      S.DrawerManager.openDrawerLeft(ue.default.createElement(U.ProfileDrawerFlowLoadable, {
        status: e,
        profilePicThumb: t,
        contact: Ae,
        conn: y.Conn,
        onClose: () => S.DrawerManager.closeDrawerLeft()
      }), {
        focusType: k.FocusType.TABBABLE
      });
    },
    emojiBadge: Re
  }));
  let Ye = null;
  const [ze] = (0, de.useExternalBetaOptIn)();
  if (ze) {
    Ye = ue.default.createElement(I.MenuBarItem, {
      tabOrder: Z.TAB_ORDER.CHATLIST_HEADER,
      icon: ue.default.createElement(P.FlexRow, {
        align: "center",
        justify: "center",
        xstyle: _e.betaIndicator
      }, ue.default.createElement(J.Text, {
        as: "span",
        size: "10",
        weight: "bold"
      }, le.default._("BETA", null, {
        hk: "2AbO8q"
      }))),
      vertical: n,
      onClick: e => {
        e.preventDefault();
        S.DrawerManager.openDrawerLeft(ue.default.createElement(z.SettingsFlowLoadable, {
          onEnd: () => S.DrawerManager.closeDrawerLeft(),
          initialStep: Y.SettingsSteps.Help
        }));
      },
      title: ""
    });
  }
  const Ke = Ce != null && (0, l.shouldShowAdCreationIcon)() ? ue.default.createElement(o.default, {
    activeAccountInfo: Ce,
    iconStyle: p.default.commerceIconContainer,
    vertical: n
  }) : null;
  let Qe;
  if (Le && !(0, l.blockCatalogCreationECommerceComplianceIndia)(Ge) && y.Conn.isSMB && (0, r.getABPropConfigValue)("web_abprop_catalog_icon_on_top_bar")) {
    let e;
    const t = (0, l.bannedShopsEnabled)() && (0, c.isShopBanned)(Ge);
    if ((0, c.hasShop)(Ge)) {
      if (!t) {
        e = ue.default.createElement(I.MenuBarItem, {
          testid: "menu-bar-shops",
          tabOrder: Z.TAB_ORDER.CHATLIST_HEADER,
          icon: ue.default.createElement(K.ShopFilledIcon, {
            directional: true,
            className: p.default.shopsIcon
          }),
          title: ie.fbt._("Shop", null, {
            hk: "Xb7yl"
          }),
          onClick: He
        });
      }
    } else {
      e = ue.default.createElement(I.MenuBarItem, {
        tabOrder: Z.TAB_ORDER.CHATLIST_HEADER,
        testid: "menu-bar-catalog",
        icon: ue.default.createElement(d.CatalogFilledIcon, {
          directional: true
        }),
        title: ie.fbt._("Catalog", null, {
          hk: "8mkiP"
        }),
        onClick: We
      });
    }
    Qe = ue.default.createElement("div", {
      className: p.default.commerceIconContainer
    }, e);
  }
  const Xe = n ? {
    right: "auto",
    left: "calc(100% + 8px)",
    top: "0px"
  } : undefined;
  const Ze = n ? T.DirX.RIGHT : undefined;
  const Je = (0, pe.default)() ? ue.default.createElement(G.default, {
    onClick: () => {
      (0, u.bootstrapNewsletterBackend)();
      S.DrawerManager.openDrawerLeft(ue.default.createElement(F.NewsletterTabFlowLoadable, null), {
        focusType: k.FocusType.TABBABLE
      });
    },
    vertical: n
  }) : null;
  const $e = n || !(0, ne.topMenuRedesignEnabled)() ? ue.default.createElement(I.MenuBarItem, {
    testid: "menu-bar-chat",
    tabOrder: Z.TAB_ORDER.CHATLIST_HEADER,
    icon: ue.default.createElement(B.NewChatIcon, {
      directional: true
    }),
    title: ie.fbt._("New chat", null, {
      hk: "2FNCEZ"
    }),
    onClick: e => {
      e.preventDefault();
      S.DrawerManager.openDrawerLeft(ue.default.createElement(j.NewChatFlowLoadable, {
        onEnd: () => S.DrawerManager.closeDrawerLeft()
      }), {
        focusType: k.FocusType.TABBABLE
      });
      N.UiMessageYourselfNewChatAction.startSession();
      N.UiMessageYourselfNewChatAction.newChatPressed();
    },
    vertical: n
  }) : null;
  return ue.default.createElement(D.MaybeStrictMode, null, ue.default.createElement("header", {
    ref: a,
    className: (0, se.default)(_e.header, n && _e.privateHeader, false),
    onMouseDown: () => {},
    onClickCapture: () => {}
  }, qe, ue.default.createElement("div", {
    className: p.default.listControls
  }, ue.default.createElement(I.MenuBar, {
    key: "chatlist-header"
  }, ue.default.createElement(re.default, {
    transitionName: "btn",
    className: (0, se.default)(n && _e.privateMenuItems)
  }, Ye, Ve, Ke, Qe, ue.default.createElement(_.default, {
    onClick: () => {
      (0, E.incrementCommunityTabEvent)(E.CommunityDailyTabMetricsType.TAB_VIEWS);
      S.DrawerManager.openDrawerLeft(ue.default.createElement(v.CommunityFlowLoadable, null), {
        focusType: k.FocusType.TABBABLE
      });
    },
    vertical: n
  }), ue.default.createElement(X.default, {
    vertical: n
  }), Je, $e, n ? ue.default.createElement(I.MenuBarItem, {
    testid: "menu-bar-search",
    tabOrder: Z.TAB_ORDER.CHATLIST_HEADER,
    icon: ue.default.createElement(q.SearchIcon, null),
    title: ie.fbt._("Search", null, {
      hk: "lLS8i"
    }),
    onClick: () => g.Cmd.openCommandPalette(),
    vertical: n
  }) : ue.default.createElement("span", null), ue.default.createElement(I.MenuBarItem, {
    testid: "menu-bar-menu",
    tabOrder: Z.TAB_ORDER.CHATLIST_HEADER,
    icon: ue.default.createElement(R.MenuIcon, null),
    vertical: n,
    title: ie.fbt._("Menu", null, {
      hk: "H0fkV"
    })
  }, ue.default.createElement(m.default, {
    settings: t,
    chatListCollapsed: n,
    style: Xe,
    dirX: Ze,
    startMultiSelect: ve,
    isMultiSelectMode: ye,
    activeAccountInfo: Ce
  })))))));
};
var r = require("../app/287461.js");
var o = a(require("./340658.js"));
var l = require("../app/72696.js");
var i = a(require("./586406.js"));
var u = require("../app/612462.js");
var s = require("../app/778945.js");
var c = require("../app/542358.js");
var d = require("./211238.js");
var f = require("./581442.js");
var p = a(require("./534181.js"));
var m = a(require("./454138.js"));
var h = require("../app/396574.js");
var g = require("../app/780549.js");
var E = require("./430855.js");
var v = require("./260854.js");
var _ = a(require("./987622.js"));
var y = require("../app/445729.js");
var C = require("../app/177938.js");
var b = require("../app/23641.js");
var M = require("./640581.js");
var S = require("../app/900316.js");
var T = require("../app/664149.js");
var w = require("../app/70354.js");
var A = a(require("../app/225148.js"));
var P = require("../app/690495.js");
var O = require("../app/714574.js");
var k = require("../app/299950.js");
var D = require("../app/48343.js");
var I = require("./526795.js");
var R = require("./107600.js");
var N = require("../main-chunk/165433.js");
var x = require("../app/114850.js");
var L = require("../app/971804.js");
var j = require("./494095.js");
var B = require("./708935.js");
var F = require("./163441.js");
var G = a(require("./717328.js"));
var U = require("./937445.js");
var W = require("../app/446474.js");
var H = require("../app/316348.js");
var V = require("../app/555622.js");
var q = require("../main-chunk/447514.js");
var Y = require("./73016.js");
var z = require("./523233.js");
var K = require("./337951.js");
var Q = require("../app/476473.js");
var X = a(require("./62077.js"));
require("./414493.js");
var Z = require("../main-chunk/931109.js");
var J = require("../app/180519.js");
var $ = require("../app/596328.js");
var ee = require("../app/625786.js");
var te = require("../app/390737.js");
var ne = require("../app/454905.js");
var ae = require("../app/459857.js");
var re = a(require("../app/844453.js"));
var oe = require("../app/455915.js");
var le = a(require("../app/286816.js"));
var ie = require("../vendor/548360.js");
var ue = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = ve(t);
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
var se = a(require("../app/156720.js"));
var ce = require("../app/379811.js");
var de = require("./597518.js");
var fe = a(require("../app/969651.js"));
var pe = a(require("./256184.js"));
var me = require("../app/808446.js");
var he = require("../app/655241.js");
var ge = a(require("./261684.js"));
var Ee = require("../app/441673.js");
function ve(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (ve = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const _e = {
  header: {
    position: "g0rxnol2",
    zIndex: "ercejckq",
    boxSizing: "cm280p3y",
    display: "p357zi0d",
    alignItems: "gndfcl4n",
    justifyContent: "kcgo1i74",
    width: "ln8gz9je",
    height: "e8h85j61",
    paddingTop: "emrlamx0",
    paddingBottom: "aiput80m",
    paddingStart: "lyvj5e2u",
    paddingEnd: "l9g3jx6n",
    backgroundColor: "f6ipylw5"
  },
  headerWithEmojiBadge: {
    display: "p357zi0d"
  },
  privateHeader: {
    flexDirection: "f8m0rgwh",
    alignItems: "gndfcl4n",
    height: "bvcnfjzh"
  },
  electronPrivateHeader: {
    paddingTop: "gq7nj7y3"
  },
  privateMenuItems: {
    flexDirection: "f8m0rgwh",
    alignItems: "r15c9g6i"
  },
  betaIndicator: {
    width: "i94gqilv",
    height: "bmot90v7"
  },
  emojiScale: {
    transform: "l0t00mun"
  }
};