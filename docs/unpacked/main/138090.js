var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommerceButton = undefined;
var r = require("../app/72696.js");
var o = require("../app/778945.js");
var l = require("../app/817649.js");
var i = require("../app/542358.js");
var u = require("../app/830439.js");
var s = require("../app/900316.js");
var c = require("./526795.js");
var d = require("../app/932523.js");
var f = require("../app/242677.js");
var p = require("./639793.js");
var m = require("../app/316348.js");
var h = require("../app/555622.js");
var g = require("./956469.js");
var E = require("../main-chunk/931109.js");
var v = require("../app/618112.js");
var _ = require("../app/455915.js");
var y = require("../vendor/548360.js");
var C = a(require("../vendor/667294.js"));
var b = a(require("../app/321201.js"));
exports.CommerceButton = e => {
  var t;
  let {
    chat: n
  } = e;
  const a = (0, b.default)();
  const {
    businessProfile: M
  } = n.contact;
  if ((0, i.hasShop)(M)) {
    if ((0, r.bannedShopsEnabled)() && (0, i.isShopBanned)(M)) {
      return null;
    } else {
      return C.default.createElement(c.MenuBarItem, {
        tabOrder: E.TAB_ORDER.CHAT_HEADER_BUTTON,
        testid: "shop-button",
        icon: C.default.createElement(g.ShopIcon, null),
        title: y.fbt._("Shop", null, {
          hk: "3KsdlE"
        }),
        onClick: e => {
          e.preventDefault();
          (0, i.goToShop)(n.contact.businessProfile);
        }
      });
    }
  } else if ((M == null || (t = M.profileOptions) === null || t === undefined ? undefined : t.commerceExperience) === l.COMMERCE_EXPERIENCE_TYPES.CATALOG || (M == null ? undefined : M.catalogStatus) === o.CATALOG_EXISTS) {
    return C.default.createElement(c.MenuBarItem, {
      tabOrder: E.TAB_ORDER.CHAT_HEADER_BUTTON,
      testid: "product_catalog-button",
      icon: C.default.createElement(u.CatalogEntrypointIcon, null),
      title: y.fbt._("Catalog", null, {
        hk: "3t362Y"
      }),
      onClick: e => {
        e.preventDefault();
        h.QPL.markerStart(m.QuickLogMarkerId.WHATSAPP_CATALOG_COLLECTIONS_VIEW, {
          annotations: {
            string: {
              EntryPoint: "ChatHeader"
            }
          }
        });
        const t = (0, d.buildProductCatalogContext)(new f.ProductCatalogSession(), v.BIZ_PLATFORM.SMB, _.CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_CHAT);
        const r = n.contact.id;
        s.DrawerManager.openDrawerRight(C.default.createElement(p.ProductDetailsFlowLoadable, {
          chat: n,
          catalogOwnerJid: r.toJid()
        }), {
          transition: "slide-left",
          uim: a,
          newDrawerContext: t
        });
      }
    });
  } else {
    return null;
  }
};