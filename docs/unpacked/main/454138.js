var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("../app/287461.js");
var o = a(require("./751734.js"));
var l = require("./767173.js");
var i = a(require("./120162.js"));
var u = require("../app/72696.js");
var s = a(require("./586406.js"));
var c = require("../app/778945.js");
var d = require("../app/542358.js");
var f = require("./581442.js");
require("../app/351053.js");
var p = require("./181748.js");
var m = a(require("./777621.js"));
require("../app/713105.js");
require("../app/2754.js");
var h = require("./440067.js");
var g = require("./430855.js");
var E = require("./260854.js");
var v = require("../app/174834.js");
var _ = a(require("./903996.js"));
var y = require("../app/103440.js");
var C = require("../app/445729.js");
var b = require("../app/177938.js");
a(require("./695681.js"));
var M = require("../app/215267.js");
var S = require("../app/792522.js");
var T = require("../app/29054.js");
var w = require("./626194.js");
var A = require("../app/900316.js");
var P = require("../app/664149.js");
var O = require("../app/675085.js");
var k = require("../app/299950.js");
var D = require("./82967.js");
var I = require("../app/804334.js");
require("./969169.js");
var R = a(require("./108748.js"));
var N = require("../app/97858.js");
var x = require("../app/114850.js");
var L = require("../app/61113.js");
var j = require("./219548.js");
var B = require("./427181.js");
var F = a(require("./94530.js"));
var G = require("./873994.js");
var U = a(require("./627759.js"));
var W = require("./937445.js");
var H = require("../app/446474.js");
var V = require("../app/316348.js");
var q = require("../app/555622.js");
var Y = require("./437083.js");
var z = require("./523233.js");
var K = require("./748483.js");
var Q = require("./111971.js");
var X = require("../app/802703.js");
var Z = require("../app/476473.js");
var J = require("../app/454905.js");
var $ = require("../app/676345.js");
require("../app/397516.js");
var ee = require("../app/459857.js");
var te = require("../app/499264.js");
var ne = require("../app/455915.js");
var ae = require("./135516.js");
var re = require("./909588.js");
require("./980611.js");
var oe = require("./76195.js");
var le = require("./896492.js");
var ie = require("./332165.js");
var ue = require("../app/239097.js");
var se = require("../app/965259.js");
var ce = require("../vendor/548360.js");
var de = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = me(t);
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
var fe = a(require("../app/156720.js"));
var pe = require("../app/505046.js");
function me(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (me = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const he = {
  communityTabItem: {
    "@media screen and (min-width: 961px)": {
      display: "kk3urnf0"
    }
  },
  desktopUpsellCtaHorizontalRule: {
    borderEnd: "jkanexlp",
    borderBottom: "thn59n0e",
    borderStart: "nsmrnv0a",
    borderTop: "swyb62mu"
  }
};
function ge() {
  (0, d.goToCommerceManager)(c.BusinessProfileCollection.get((0, ee.getMaybeMeUser)()));
  (0, K.logShopsManagementEvent)(le.SHOPS_MANAGEMENT_ACTION.ACTION_CLICK_COMMERCE_MANAGER_IN_CATALOG_SETTING);
}
function Ee() {
  (0, m.default)(ie.WEBC_MENU_ITEM_LABEL.LOG_OUT);
  (0, se.forceFlushAllWamBuffers)().finally(() => __LOG__(2, undefined, undefined, undefined, ["wam"])`force flushed all buffers`);
  x.ModalManager.open(de.default.createElement(_.default, {
    checkUnsent: true
  }));
}
function ve() {
  A.DrawerManager.openDrawerLeft(de.default.createElement(z.SettingsFlowLoadable, {
    onEnd: () => A.DrawerManager.closeDrawerLeft()
  }), {
    focusType: k.FocusType.TABBABLE
  });
  (0, m.default)(ie.WEBC_MENU_ITEM_LABEL.SETTINGS);
}
function _e() {
  A.DrawerManager.openDrawerLeft(de.default.createElement(l.ArchivedFlowLoadable, {
    onEnd: () => A.DrawerManager.closeDrawerLeft()
  }));
  new p.ChatFolderOpenWamEvent({
    folderType: "Archive"
  }).commit();
  (0, m.default)(ie.WEBC_MENU_ITEM_LABEL.ARCHIVED);
}
function ye() {
  const e = (0, ee.getMaybeMeUser)();
  const t = Z.StatusCollection.assertGet(e);
  const n = H.ProfilePicThumbCollection.assertGet(e);
  const a = b.ContactCollection.assertGet(e);
  A.DrawerManager.openDrawerLeft(de.default.createElement(W.ProfileDrawerFlowLoadable, {
    status: t,
    profilePicThumb: n,
    contact: a,
    conn: C.Conn
  }), {
    focusType: k.FocusType.TABBABLE
  });
  (0, m.default)(ie.WEBC_MENU_ITEM_LABEL.PROFILE);
}
function Ce() {
  new G.OrderDetailsActionsSmbWamEvent({
    orderDetailsCreationAction: oe.ORDER_DETAILS_CREATION_ACTION.VIEW_ORDER_DETAILS_HUB,
    actionCategory: String(F.default.ORDER_DETAILS_MANAGEMENT),
    orderDetailEntryPoint: String(i.default.FROM_BUSINESS_TOOLS),
    hasCatalog: (0, d.hasCatalog)(c.BusinessProfileCollection.get((0, ee.getMaybeMeUser)()))
  }).commit();
  A.DrawerManager.openDrawerLeft(de.default.createElement(U.default, null));
}
function be() {
  A.DrawerManager.openDrawerLeft(de.default.createElement(D.LabelFlowLoadable, null));
  (0, m.default)(ie.WEBC_MENU_ITEM_LABEL.LABELS);
}
function Me() {
  A.DrawerManager.openDrawerLeft(de.default.createElement(Q.StarredDrawerLoadable, {
    starredMsgs: X.AllStarredMsgsCollection,
    onClose: () => A.DrawerManager.closeDrawerLeft(),
    headerType: w.DRAWER_HEADER_TYPE.LARGE
  }), {
    focusType: k.FocusType.TABBABLE
  });
  (0, m.default)(ie.WEBC_MENU_ITEM_LABEL.STARRED);
}
function Se() {
  A.DrawerManager.openDrawerLeft(de.default.createElement(j.NewCommunityFlowLoadable, null), {
    focusType: k.FocusType.TABBABLE
  });
  h.UiCommunityCreationAction.startSession(re.COMMUNITY_CREATION_ENTRYPOINT_TYPE.CHATS_TAB);
  h.UiCommunityCreationAction.enter(ae.COMMUNITY_CREATION_CURRENT_SCREEN_TYPE.CHATS_TAB);
}
function Te() {
  (0, g.incrementCommunityTabEvent)(g.CommunityDailyTabMetricsType.TAB_VIEWS_VIA_CONTEXT_MENU);
  A.DrawerManager.openDrawerLeft(de.default.createElement(E.CommunityFlowLoadable, null), {
    focusType: k.FocusType.TABBABLE
  });
}
function we() {
  A.DrawerManager.openDrawerLeft(de.default.createElement(B.NewGroupFlowLoadable, {
    onEnd: () => A.DrawerManager.closeDrawerLeft(),
    onCreateGroup: () => A.DrawerManager.closeDrawerLeft()
  }));
  (0, m.default)(ie.WEBC_MENU_ITEM_LABEL.NEW_GROUP);
}
function Ae() {
  x.ModalManager.open(de.default.createElement(s.default, {
    onViewShopClick: () => {
      (0, K.logShopsManagementEvent)(le.SHOPS_MANAGEMENT_ACTION.ACTION_CLICK_VIEW_SHOPS_IN_SHOPS_SETTING);
    },
    onCommerceManagerClick: () => {
      (0, K.logShopsManagementEvent)(le.SHOPS_MANAGEMENT_ACTION.ACTION_CLICK_COMMERCE_MANAGER_IN_SHOPS_SETTING);
    },
    onCancelClick: () => {
      (0, K.logShopsManagementEvent)(le.SHOPS_MANAGEMENT_ACTION.ACTION_CLICK_CANCEL_IN_SHOPS_SETTING);
    }
  }));
  (0, K.logShopsManagementEvent)(le.SHOPS_MANAGEMENT_ACTION.ACTION_CLICK_SHOPS_SETTING);
}
function Pe() {
  if (L.MsgCollection.hasUnsentMessages()) {
    x.ModalManager.open(de.default.createElement(y.ConfirmPopup, {
      title: ce.fbt._("Lock screen?", null, {
        hk: "1PWS5m"
      }),
      onOK: () => {
        (0, I.lockScreenAndTriggerUnlockFlow)();
      },
      okText: ce.fbt._("Lock", null, {
        hk: "2wYW2V"
      }),
      onCancel: () => x.ModalManager.close(),
      cancelText: ce.fbt._("Cancel", null, {
        hk: "H0gNq"
      })
    }, ce.fbt._("Some of your messages are still sending.", null, {
      hk: "pBe7O"
    })));
  } else {
    (0, I.lockScreenAndTriggerUnlockFlow)();
  }
}
function Oe() {
  return !!C.Conn.isSMB && (0, d.hasShop)(c.BusinessProfileCollection.get((0, ee.getMaybeMeUser)()));
}
function ke(e) {
  e.preventDefault();
  if (Oe()) {
    const e = (0, u.bannedShopsEnabled)() && (0, d.isShopBanned)(c.BusinessProfileCollection.get((0, ee.getMaybeMeUser)()));
    x.ModalManager.open(de.default.createElement(y.ConfirmPopup, {
      title: ce.fbt._("Catalog disabled", null, {
        hk: "2OkL2n"
      }),
      onOK: ge,
      okText: ce.fbt._("Commerce Manager", null, {
        hk: "2ZKedl"
      }),
      onCancel: () => {
        x.ModalManager.close();
        (0, K.logShopsManagementEvent)(le.SHOPS_MANAGEMENT_ACTION.ACTION_CLICK_CANCEL_IN_CATALOG_SETTING);
      }
    }, e ? ce.fbt._("You can't restore your catalog at this time because we have disabled your shop for not complying with our policies. Learn more in Commerce Manager.", null, {
      hk: "2J2Znq"
    }) : ce.fbt._("Your catalog is temporarily disabled because WhatsApp is a sales channel for your shop. To restore your catalog, go to Commerce Manager and set the shop's visibility to \"hidden\", or remove WhatsApp from the Business Manager account.", null, {
      hk: "4axvy1"
    })));
    (0, K.logShopsManagementEvent)(le.SHOPS_MANAGEMENT_ACTION.ACTION_CLICK_CATALOG_SETTING);
  } else {
    q.QPL.markerStart(V.QuickLogMarkerId.WHATSAPP_CATALOG_COLLECTIONS_VIEW, {
      annotations: {
        string: {
          EntryPoint: "ToolsMenu"
        }
      }
    });
    (0, f.openCatalogManagementFlow)(null, ne.CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_SETTINGS);
    (0, m.default)(ie.WEBC_MENU_ITEM_LABEL.CATALOG);
  }
}
function De(e) {
  e.preventDefault();
  A.DrawerManager.openDrawerLeft(de.default.createElement(Y.QuickRepliesFlowLoadable, null), {
    focusType: k.FocusType.TABBABLE
  });
}
function Ie(e, t) {
  (0, de.useRef)(-1);
  const n = e.dirX || P.DirX.LEFT;
  const a = e.dirY || P.DirY.BOTTOM;
  const {
    chatListCollapsed: l,
    isMultiSelectMode: i,
    activeAccountInfo: s
  } = e;
  (0, de.useEffect)(() => {
    (0, m.default)(ie.WEBC_MENU_ITEM_LABEL.OPEN);
  }, []);
  const f = de.default.createElement(O.DropdownItem, {
    testid: "mi-new-group menu-item",
    action: we
  }, ce.fbt._("New group", null, {
    hk: "43A4qP"
  }));
  const p = (0, v.communitiesEnabled)() && (0, v.communitiesCreationEnabled)() ? de.default.createElement(O.DropdownItem, {
    testid: "mi-new-community menu-item",
    action: Se
  }, ce.fbt._("New community", null, {
    hk: "2fzGYI"
  })) : null;
  const h = (0, v.communitiesEnabledSmb)() ? de.default.createElement(O.DropdownItem, {
    testid: "mi-communities menu-item",
    xstyle: he.communityTabItem,
    action: Te
  }, ce.fbt._("Communities", null, {
    hk: "3O6Kkr"
  })) : null;
  const g = de.default.createElement(O.DropdownItem, {
    testid: "mi-starred menu-item",
    action: Me
  }, ce.fbt._("Starred messages", null, {
    hk: "4Da0Qc"
  }));
  const E = (0, u.canEditLabelAssociation)() && de.default.createElement(O.DropdownItem, {
    testid: "mi-setting menu-item",
    action: be
  }, ce.fbt._("Labels", null, {
    hk: "t1hII"
  }));
  const _ = !(0, r.getABPropConfigValue)("multi_select_from_chat_list") || C.Conn.isSMB || Boolean(l) || i ? null : de.default.createElement(O.DropdownItem, {
    testid: "mi-select-chats",
    action: e.startMultiSelect
  }, ce.fbt._("Select chats", null, {
    hk: "2Tqa1y"
  }));
  const y = C.Conn.isSMB && (0, u.orderManagementEnabled)() && de.default.createElement(O.DropdownItem, {
    testid: "mi-orders menu-item",
    action: Ce
  }, (0, u.isOrderContentOptimizationEnabled)() ? ce.fbt._("Charges", null, {
    hk: "3r7NCk"
  }) : ce.fbt._("Orders", null, {
    hk: "brape"
  }));
  let b;
  const w = (0, ee.getMaybeMeUser)();
  if (w) {
    b = c.BusinessProfileCollection.get(w);
  }
  const A = C.Conn.isSMB && !(0, u.blockCatalogCreationECommerceComplianceIndia)(b) ? de.default.createElement(O.DropdownItem, {
    testid: "mi-catalog menu-item",
    action: ke
  }, Oe() ? ce.fbt._("Catalog (temporarily disabled)", null, {
    hk: "1386cg"
  }) : ce.fbt._("Catalog", null, {
    hk: "3QDkTE"
  })) : null;
  const k = C.Conn.isSMB ? de.default.createElement(O.DropdownItem, {
    testid: "mi-profile-status menu-item",
    action: ye
  }, ce.fbt._("Profile", null, {
    hk: "3cevxF"
  })) : null;
  const D = Oe() ? de.default.createElement(O.DropdownItem, {
    testid: "mi-shop menu-item",
    action: Ae
  }, (0, u.bannedShopsEnabled)() && (0, d.isShopBanned)(c.BusinessProfileCollection.get((0, ee.getMaybeMeUser)())) ? ce.fbt._("Shop (disabled)", null, {
    hk: "26yLAy"
  }) : ce.fbt._("Shop", null, {
    hk: "T4w0U"
  })) : null;
  const I = (0, u.quickRepliesManagementEnabled)() ? de.default.createElement(O.DropdownItem, {
    action: De
  }, ce.fbt._("Quick Replies", null, {
    hk: "18fT0J"
  })) : null;
  const x = (0, S.useWAWebDesktopUpsellAbPropCheck)("chatlist_dropdown");
  const L = (0, S.useWAWebDesktopUpsellPlatformAwareCTACheckSynchronous)();
  const j = x && L;
  (0, pe.useWAWebDesktopUpsellWamImpression)({
    isCtaVisible: j === true,
    source: ue.WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.CHATLIST_DROPDOWN
  });
  const B = j === true ? de.default.createElement(O.DropdownItem, {
    action: () => {
      (0, T.openExternalWhatsAppDesktopDownloadUrl)(ue.WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.CHATLIST_DROPDOWN);
    },
    theme: O.ThemeOptions.COMPACT
  }, (0, M.getChatlistDropdownBtnLabel)()) : null;
  const F = s != null && (0, u.shouldShowAdCreationDropdown)() ? de.default.createElement(o.default, {
    activeAccountInfo: s
  }) : null;
  const G = s != null && (0, u.shouldShowManageAdsDropdown)(s) ? de.default.createElement(R.default, {
    activeAccountInfo: s
  }) : null;
  let U = null;
  if ((0, N.screenLockFeatureSupported)() && (0, te.getScreenLockEnabled)()) {
    U = de.default.createElement(O.DropdownItem, {
      testid: "mi-screen-lock menu-item",
      action: Pe
    }, ce.fbt._("Lock screen", null, {
      hk: "3SVykZ"
    }));
  }
  const W = U == null ? de.default.createElement(O.DropdownItem, {
    testid: "mi-logout menu-item",
    action: Ee
  }, ce.fbt._("Log out", null, {
    hk: "1qOHlo"
  })) : null;
  const H = (0, N.archiveV2Supported)() && e.settings.showArchiveV2 || (0, J.topMenuRedesignEnabled)();
  const V = de.default.createElement(O.DropdownItem, {
    testid: "mi-archived menu-item",
    action: _e
  }, ce.fbt._("Archived", null, {
    hk: "2Sj4rE"
  }));
  const q = de.default.createElement(O.DropdownItem, {
    action: ve,
    testid: "chatlist-dropdown-item-settings"
  }, ce.fbt._("Settings", null, {
    hk: "csrEJ"
  }));
  return de.default.createElement(P.Dropdown, {
    ref: t,
    type: P.MenuType.DropdownMenu,
    flipOnRTL: true,
    key: "ChatlistHeader",
    dirX: n,
    dirY: a,
    style: e.style,
    testid: "chatlist-header-dropdown"
  }, !(0, J.topMenuRedesignEnabled)() && f, !(0, J.topMenuRedesignEnabled)() && p, h, null, null, !(0, J.topMenuRedesignEnabled)() && k, D, F, G, A, y, !H && V, I, !(0, J.topMenuRedesignEnabled)() && g, _, E, null, !(0, J.topMenuRedesignEnabled)() && q, null, U, !(0, J.topMenuRedesignEnabled)() && W, B != null ? de.default.createElement(de.default.Fragment, null, de.default.createElement("hr", {
    className: (0, fe.default)([he.desktopUpsellCtaHorizontalRule, $.uiMargin.vert4, $.uiMargin.horiz1])
  }), B) : null);
}
var Re = (0, de.forwardRef)(Ie);
exports.default = Re;