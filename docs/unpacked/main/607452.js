var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavBar = function (e) {
  const {
    settings: t,
    headerRef: n,
    activeAccountInfo: a,
    leftDrawerClosed: _e,
    activeNavBarItem: Ce,
    setActiveNavBarItem: be
  } = e;
  const Me = (0, me.default)();
  const Se = (0, se.useRef)(false);
  const Te = (0, se.useRef)(false);
  const we = (0, se.useMemo)(re.assertGetMeUser, []);
  const [Ae, Pe] = (0, se.useState)(false);
  const [Oe, ke] = (0, se.useState)(false);
  const [De] = (0, ve.useTimeout)(() => Pe(false), 100);
  (0, se.useEffect)(() => {
    if (w.Conn.isSMB) {
      m.BusinessProfileCollection.find(we).then(() => {
        ke(true);
      });
    }
  }, [we]);
  (0, se.useEffect)(() => {
    if (_e) {
      be(I.NavbarItems.Chats);
    }
  }, [_e, be]);
  const Ie = () => {
    Te.current = true;
  };
  (0, ge.useListener)(null, "BrowserWindow:focus", () => {});
  (0, ge.useListener)(null, "BrowserWindow:move", function () {
    if (!Se.current) {
      Ie(...arguments);
    }
  });
  const Re = (0, se.useMemo)(() => m.BusinessProfileCollection.get(we), [we]);
  (0, ge.useListener)(Re, "change:profileOptions", Me);
  const Ne = () => {
    U.QPL.markerStart(G.QuickLogMarkerId.WHATSAPP_CATALOG_COLLECTIONS_VIEW, {
      annotations: {
        string: {
          EntryPoint: "ChatHeader"
        }
      }
    });
    be(I.NavbarItems.Catalog);
    (0, E.openCatalogManagementFlow)(null, le.CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_TOP_BAR);
  };
  const xe = () => {
    L.ModalManager.open(se.default.createElement(f.default, null));
  };
  const Le = se.default.createElement("div", {
    className: (0, b.classnamesConvertMeToStylexPlease)({
      [j.default.listUser]: true
    })
  }, se.default.createElement(A.DetailImage, {
    ariaLabel: ue.fbt._("profile photo", null, {
      hk: "1cPbcq"
    }),
    testId: "chatlist_header_profile_photo",
    theme: "chatlist_header_profile_photo",
    tabIndex: -1,
    tabOrder: ee.TAB_ORDER.CHATLIST_HEADER,
    id: we,
    size: 40,
    onClick: () => {
      be(null);
      O.DrawerManager.openDrawerLeft(se.default.createElement(H.SettingsFlowLoadable, {
        onEnd: () => O.DrawerManager.closeDrawerLeft()
      }), {
        focusType: D.FocusType.TABBABLE,
        transition: "pop-drawer-fast"
      });
    }
  }));
  let je = null;
  const [Be] = (0, pe.useExternalBetaOptIn)();
  if (Be) {
    je = se.default.createElement(N.MenuBarItem, {
      tabOrder: ee.TAB_ORDER.CHATLIST_HEADER,
      icon: se.default.createElement(k.FlexRow, {
        align: "center",
        justify: "center",
        xstyle: ye.menuItemSize24
      }, se.default.createElement(te.Text, {
        as: "span",
        size: "10",
        weight: "bold",
        xstyle: Ce === I.NavbarItems.Beta && ye.activeIcon
      }, ie.default._("BETA", null, {
        hk: "2AbO8q"
      }))),
      vertical: true,
      onClick: e => {
        e.preventDefault();
        be(I.NavbarItems.Beta);
        O.DrawerManager.openDrawerLeft(se.default.createElement(H.SettingsFlowLoadable, {
          onEnd: () => O.DrawerManager.closeDrawerLeft(),
          initialStep: W.SettingsSteps.Help
        }), {
          transition: "pop-drawer-fast"
        });
      },
      title: ie.default._("BETA", null, {
        hk: "2AbO8q"
      })
    });
  }
  const Fe = a != null && (0, d.shouldShowAdCreationIcon)() ? se.default.createElement(o.default, {
    activeAccountInfo: a,
    iconStyle: j.default.commerceIconContainer,
    vertical: true
  }) : null;
  let Ge;
  if (Oe && !(0, d.blockCatalogCreationECommerceComplianceIndia)(Re) && w.Conn.isSMB) {
    let e;
    const t = (0, d.bannedShopsEnabled)() && (0, h.isShopBanned)(Re);
    if ((0, h.hasShop)(Re)) {
      if (!t) {
        e = se.default.createElement(N.MenuBarItem, {
          testid: "menu-bar-shops",
          tabOrder: ee.TAB_ORDER.CHATLIST_HEADER,
          icon: se.default.createElement(k.FlexRow, {
            align: "center",
            justify: "center",
            xstyle: ye.menuItemSize24
          }, se.default.createElement(V.ShopFilledIcon, {
            directional: true,
            width: 20,
            height: 20
          })),
          title: ue.fbt._("Shop", null, {
            hk: "Xb7yl"
          }),
          onClick: xe
        });
      }
    } else {
      e = se.default.createElement(N.MenuBarItem, {
        tabOrder: ee.TAB_ORDER.CHATLIST_HEADER,
        testid: "menu-bar-catalog",
        icon: se.default.createElement(k.FlexRow, {
          align: "center",
          justify: "center",
          xstyle: ye.menuItemSize24
        }, se.default.createElement(g.CatalogFilledIcon, {
          directional: true,
          iconXstyle: Ce === I.NavbarItems.Catalog && ye.activeIcon
        })),
        title: ue.fbt._("Catalog", null, {
          hk: "8mkiP"
        }),
        onClick: Ne
      });
    }
    Ge = se.default.createElement("div", {
      className: j.default.commerceIconContainer
    }, e);
  }
  const Ue = (0, he.default)() ? se.default.createElement(F.default, {
    onClick: () => {
      (0, p.bootstrapNewsletterBackend)();
      be(I.NavbarItems.Newsletters);
      O.DrawerManager.openDrawerLeft(se.default.createElement(B.NewsletterTabFlowLoadable, null), {
        focusType: D.FocusType.TABBABLE,
        transition: "pop-drawer-fast"
      });
    },
    vertical: true,
    isActiveNavBarItem: Ce === I.NavbarItems.Newsletters,
    iconXstyle: Ce === I.NavbarItems.Newsletters && ye.activeIcon
  }) : null;
  const We = se.default.createElement(T.default, {
    onClick: () => {
      be(I.NavbarItems.Communities);
      (0, M.incrementCommunityTabEvent)(M.CommunityDailyTabMetricsType.TAB_VIEWS);
      O.DrawerManager.openDrawerLeft(se.default.createElement(S.CommunityFlowLoadable, null), {
        focusType: D.FocusType.TABBABLE,
        transition: "pop-drawer-fast"
      });
    },
    vertical: true,
    isActiveNavBarItem: Ce === I.NavbarItems.Communities,
    iconXstyle: Ce === I.NavbarItems.Communities && ye.activeIcon
  });
  const {
    hasActivity: He
  } = (0, fe.useWAWebChatsActivityIndicator)();
  let Ve;
  Ve = Ce === I.NavbarItems.Chats ? He ? se.default.createElement(y.ChatsUnreadFilledIcon, {
    directional: true,
    iconXstyle: ye.activeIcon
  }) : se.default.createElement(v.ChatsFilledIcon, {
    directional: true,
    iconXstyle: ye.activeIcon
  }) : He ? se.default.createElement(C.ChatsUnreadOutlineIcon, {
    directional: true
  }) : se.default.createElement(_.ChatsOutlineIcon, {
    directional: true
  });
  const qe = se.default.createElement(N.MenuBarItem, {
    testid: "menu-bar-chat",
    tabOrder: ee.TAB_ORDER.CHATLIST_HEADER,
    icon: Ve,
    title: ue.fbt._("", null, {
      hk: "eAxn2"
    }),
    onClick: e => {
      e.preventDefault();
      be(I.NavbarItems.Chats);
      O.DrawerManager.closeDrawerLeft();
    },
    vertical: true
  });
  const {
    unreadCount: Ye,
    showUnreadMentionIcon: ze
  } = (0, de.useWAWebArchivedChatsActivityIndicator)();
  const Ke = {
    width: 22,
    height: 22
  };
  let Qe;
  Qe = Ce === I.NavbarItems.Archived ? Ye !== 0 || ze ? se.default.createElement(s.ArchiveUnreadFilledIcon, (0, r.default)({
    directional: true
  }, Ke, {
    iconXstyle: ye.activeIcon
  })) : se.default.createElement(i.ArchiveFilledIcon, (0, r.default)({}, Ke, {
    iconXstyle: ye.activeIcon
  })) : Ye !== 0 || ze ? se.default.createElement(c.ArchiveUnreadOutlineIcon, (0, r.default)({}, Ke, {
    directional: true
  })) : se.default.createElement(u.ArchiveOutlineIcon, Ke);
  const Xe = Boolean((0, x.archiveV2Supported)() && t.showArchiveV2) ? se.default.createElement(N.MenuBarItem, {
    testid: "menu-bar-archived",
    tabOrder: ee.TAB_ORDER.CHATLIST_HEADER,
    icon: se.default.createElement(k.FlexRow, {
      align: "center",
      justify: "center",
      xstyle: ye.menuItemSize24
    }, Qe),
    title: ue.fbt._("Archived", null, {
      hk: "1PK2es"
    }),
    onClick: function () {
      be(I.NavbarItems.Archived);
      O.DrawerManager.openDrawerLeft(se.default.createElement(l.ArchivedFlowLoadable, {
        onEnd: () => O.DrawerManager.closeDrawerLeft()
      }), {
        transition: "pop-drawer-fast"
      });
    },
    vertical: true
  }) : null;
  const {
    hasUnread: Ze,
    clearUnreadActivity: Je
  } = (0, Ee.useWAWebStatusActivityIndicator)();
  let $e;
  $e = Ce === I.NavbarItems.Status ? Ze === true ? se.default.createElement($.StatusV3UnreadIcon, {
    directional: true,
    iconXstyle: ye.activeIcon
  }) : se.default.createElement(J.StatusV3Icon, {
    iconXstyle: ye.activeIcon
  }) : Ze === true ? se.default.createElement(Z.StatusUnreadOutlineIcon, {
    directional: true
  }) : se.default.createElement(X.StatusOutlineIcon, null);
  const et = se.default.createElement(N.MenuBarItem, {
    vertical: true,
    testid: "menu-bar-status",
    tabOrder: ee.TAB_ORDER.CHATLIST_HEADER,
    icon: $e,
    title: ue.fbt._("Status", null, {
      hk: "My6TT"
    }),
    onClick: e => {
      e.preventDefault();
      be(I.NavbarItems.Status);
      O.DrawerManager.openDrawerLeft(se.default.createElement(Q.StatusDrawerFlowLoadable, {
        onBack: () => O.DrawerManager.closeDrawerLeft()
      }), {
        focusType: D.FocusType.TABBABLE,
        transition: "pop-drawer-fast"
      });
      Je();
    }
  });
  const tt = Ce === I.NavbarItems.Starred ? se.default.createElement(q.StarFilledIcon, (0, r.default)({}, Ke, {
    iconXstyle: ye.activeIcon
  })) : se.default.createElement(Y.StarOutlineIcon, Ke);
  const nt = se.default.createElement(N.MenuBarItem, {
    testid: "menu-bar-starred",
    tabOrder: ee.TAB_ORDER.CHATLIST_HEADER,
    icon: tt,
    title: ue.fbt._("", null, {
      hk: "2ptKoq"
    }),
    onClick: function () {
      be(I.NavbarItems.Starred);
      O.DrawerManager.openDrawerLeft(se.default.createElement(z.StarredDrawerLoadable, {
        starredMsgs: K.AllStarredMsgsCollection,
        onClose: () => O.DrawerManager.closeDrawerLeft(),
        headerType: P.DRAWER_HEADER_TYPE.TAB
      }), {
        focusType: D.FocusType.TABBABLE,
        transition: "pop-drawer-fast"
      });
    },
    vertical: true
  });
  const at = se.default.createElement(N.MenuBarItem, {
    testid: "menu-bar-profile",
    tabOrder: ee.TAB_ORDER.CHATLIST_HEADER,
    icon: se.default.createElement(k.FlexRow, {
      align: "center",
      justify: "center",
      xstyle: ye.menuItemSize24
    }, Le),
    title: ue.fbt._("", null, {
      hk: "4lC2D0"
    }),
    vertical: true
  });
  const rt = (0, ne.showBizIconsOnToolBar)() ? se.default.createElement(k.FlexItem, {
    grow: 1
  }, se.default.createElement("hr", {
    className: (0, ce.default)([ye.menuSectionSeparator, ae.uiMargin.top16])
  }), Fe, Ge) : null;
  const ot = (0, ne.showBizIconsOnToolBar)() ? 0 : 1;
  return se.default.createElement(R.MaybeStrictMode, null, se.default.createElement("header", {
    ref: n,
    className: (0, ce.default)(ye.header),
    onMouseDown: () => {},
    onClickCapture: () => {}
  }, se.default.createElement(k.FlexColumn, {
    align: "center",
    style: {
      height: "100%"
    }
  }, se.default.createElement(k.FlexItem, {
    grow: 1
  }, se.default.createElement("div", {
    "data-js-navbar": true,
    style: {
      height: "100%"
    },
    className: j.default.listControls
  }, se.default.createElement(N.MenuBar, {
    key: "chatlist-header",
    theme: "nav-bar"
  }, se.default.createElement(oe.default, {
    transitionName: "btn",
    className: (0, ce.default)([ye.menuItems])
  }, se.default.createElement(k.FlexColumn, {
    style: {
      height: "100%"
    }
  }, se.default.createElement(k.FlexItem, {
    grow: ot
  }, qe, et, Ue, We, se.default.createElement("hr", {
    className: (0, ce.default)([ye.menuSectionSeparator, ae.uiMargin.top16])
  }), Xe, nt), rt, se.default.createElement(k.FlexItem, {
    align: "center"
  }, je)))))), se.default.createElement(k.FlexItem, {
    xstyle: [ae.uiMargin.bottom20, ae.uiMargin.top10, ye.menuItemSize40]
  }, at))));
};
var r = a(require("../vendor/967154.js"));
var o = a(require("./340658.js"));
var l = require("./767173.js");
var i = require("./4307.js");
var u = require("./46510.js");
var s = require("./540284.js");
var c = require("./880020.js");
var d = require("../app/72696.js");
var f = a(require("./586406.js"));
var p = require("../app/612462.js");
var m = require("../app/778945.js");
var h = require("../app/542358.js");
var g = require("./211238.js");
var E = require("./581442.js");
var v = require("./729843.js");
var _ = require("./238211.js");
var y = require("./197141.js");
var C = require("./676628.js");
var b = require("../app/396574.js");
var M = require("./430855.js");
var S = require("./260854.js");
var T = a(require("./987622.js"));
var w = require("../app/445729.js");
var A = require("../app/23641.js");
var P = require("./626194.js");
var O = require("../app/900316.js");
var k = require("../app/690495.js");
var D = require("../app/299950.js");
var I = require("./767280.js");
var R = require("../app/48343.js");
var N = require("./526795.js");
var x = require("../app/97858.js");
var L = require("../app/114850.js");
var j = a(require("./820875.js"));
var B = require("./163441.js");
var F = a(require("./717328.js"));
var G = require("../app/316348.js");
var U = require("../app/555622.js");
var W = require("./73016.js");
var H = require("./523233.js");
var V = require("./337951.js");
var q = require("./262624.js");
var Y = require("./162021.js");
var z = require("./111971.js");
var K = require("../app/802703.js");
var Q = require("./791870.js");
var X = require("./122049.js");
var Z = require("./37410.js");
var J = require("./322427.js");
var $ = require("./897243.js");
require("./414493.js");
var ee = require("../main-chunk/931109.js");
var te = require("../app/180519.js");
var ne = require("../app/454905.js");
var ae = require("../app/676345.js");
var re = require("../app/459857.js");
var oe = a(require("../app/844453.js"));
var le = require("../app/455915.js");
var ie = a(require("../app/286816.js"));
var ue = require("../vendor/548360.js");
var se = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = _e(t);
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
var ce = a(require("../app/156720.js"));
var de = require("./161119.js");
var fe = require("./56473.js");
var pe = require("./597518.js");
var me = a(require("../app/969651.js"));
var he = a(require("./256184.js"));
var ge = require("../app/808446.js");
var Ee = require("./547660.js");
var ve = require("../app/441673.js");
function _e(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (_e = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const ye = {
  header: {
    zIndex: "nbczt5ty",
    position: "g0rxnol2",
    boxSizing: "cm280p3y",
    display: "p357zi0d",
    alignItems: "gndfcl4n",
    justifyContent: "ac2vgrno",
    minWidth: "lmlf9p06",
    height: "ppled2lx",
    paddingBottom: "aiput80m",
    paddingStart: "lyvj5e2u",
    paddingEnd: "l9g3jx6n",
    backgroundColor: "ihvf49ua",
    borderEndWidth: "p7waza29",
    borderEndStyle: "gyj32ejw",
    borderEndColor: "o8jet371"
  },
  menuItems: {
    flexDirection: "f8m0rgwh",
    alignItems: "r15c9g6i",
    height: "ppled2lx"
  },
  menuItemSize24: {
    width: "i94gqilv",
    height: "bmot90v7"
  },
  menuItemSize40: {
    height: "lniyxyh2",
    width: "qssinsw9"
  },
  menuSectionSeparator: {
    width: "ln8gz9je",
    height: "vocn0z5r",
    borderTopWidth: "o6maxiec",
    borderTopStyle: "d1poss59",
    borderTopColor: "byg1pv47",
    borderEndStyle: "gius1q12",
    borderBottomStyle: "quq0flv2",
    borderStartStyle: "fa2dl4o3"
  },
  activeIcon: {
    color: "ky3f94nk"
  }
};