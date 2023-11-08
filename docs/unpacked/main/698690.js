var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  const {
    onClick: n,
    checkbox: a,
    isMuted: V,
    disableOutOfStockAppearance: Y,
    theme: z,
    collectionId: K,
    onProductHideShow: Q,
    onProductDelete: X,
    onProductShare: Z,
    onCartOpen: J,
    canManageCatalog: $ = false,
    detail: ee,
    managedFocus: te = false
  } = e;
  const ne = (0, U.default)();
  const ae = (0, F.useContext)(f.DrawerContext);
  const re = (0, H.useModelValues)(e.product, ["id", "name", "description", "availability", "url", "retailerId", "currency", "priceAmount1000", "salePriceAmount1000", "salePriceStartDate", "salePriceEndDate", "reviewStatus", "catalogWid", "productImageCollection", "imageHash", "imageCdnUrl", "isHidden", "maxAvailable"]);
  const oe = (0, F.useRef)(null);
  const le = (0, F.useRef)(null);
  const [ie, ue] = (0, F.useState)(null);
  const [se, ce] = (0, F.useState)(false);
  const [de, fe] = (0, F.useState)(false);
  const pe = () => {
    var e;
    if (!((e = oe.current) === null || e === undefined)) {
      e.mouseLeave();
    }
    ce(false);
  };
  (0, W.useListener)(e.active, re.id.toString(), ne);
  const me = e => {
    const t = (0, b.getProductCatalogContext)(ae);
    k.QPL.markerStart(O.QuickLogMarkerId.WHATSAPP_CART_ADD, {
      annotations: {
        string: {
          EntryPoint: "Catalog"
        }
      }
    });
    if (t.session.isAccidental()) {
      k.QPL.markerDrop(O.QuickLogMarkerId.WHATSAPP_CART_ADD);
    } else {
      (0, C.addToCart)(re, t, K);
      e.preventDefault();
      e.stopPropagation();
    }
  };
  const he = e => {
    e.preventDefault();
    e.stopPropagation();
    if (Q) {
      Q((0, D.unproxy)(re));
    }
  };
  const ge = e => {
    e.preventDefault();
    e.stopPropagation();
    if (X) {
      X(re);
    }
  };
  const Ee = () => {
    ue(null);
    v.default.focus(le.current);
  };
  const ve = (t = re.getPreviewImage()) === null || t === undefined ? undefined : t.mediaData;
  const _e = z || (!Y == true && P.PRODUCT_AVAILABILITY_UNAVAILABLE_VALUES.includes(re.availability) ? "product-out-of-stock" : "product");
  let ye;
  let Ce;
  let be;
  switch (re.reviewStatus) {
    case w.PRODUCT_REVIEW_STATUS.NO_REVIEW:
    case w.PRODUCT_REVIEW_STATUS.OUTDATED:
    case w.PRODUCT_REVIEW_STATUS.PENDING:
      ye = F.default.createElement(i.default, {
        theme: "pending",
        Icon: s.BusinessHoursIcon
      });
      break;
    case w.PRODUCT_REVIEW_STATUS.REJECTED:
      ye = F.default.createElement(i.default, {
        theme: "warning",
        Icon: h.ErrorIcon
      });
  }
  if (re.isHidden) {
    Ce = F.default.createElement(j.VisibilityOffIcon, null);
    be = F.default.createElement(o.InvisibleLabel, null, B.fbt._("Item is hidden", null, {
      hk: "3JLPDQ"
    }));
  }
  const Me = ve ? F.default.createElement(T.ProductThumb, {
    theme: "list",
    mediaData: ve,
    badge: ye,
    overlayContent: Ce
  }) : null;
  const Se = F.default.createElement(m.EmojiText, {
    text: re.name,
    ellipsify: true,
    titlify: true
  });
  const Te = (0, A.isEmptyPrice)(re) ? null : F.default.createElement(S.default, {
    product: re,
    showAvailabilityNotice: true
  });
  const we = Te != null || re.description != null && re.description.length > 0 ? F.default.createElement(F.default.Fragment, null, F.default.createElement(g.FlexRow, null, F.default.createElement(m.EmojiText, {
    text: re.description,
    ellipsify: true
  })), F.default.createElement(g.FlexRow, null, Te), be) : null;
  let Ae;
  let Pe;
  if (ie) {
    Ae = F.default.createElement(R.UIE, {
      displayName: "ChatContextMenu",
      escapable: true,
      popable: true,
      dismissOnWindowResize: true,
      requestDismiss: Ee
    }, F.default.createElement(N.default, {
      contextMenu: ie
    }));
  }
  Pe = (0, u.isQuantityControlsFeatureEnabled)() ? re.availability === P.ProductAvailability.IN_STOCK ? F.default.createElement(c.default, {
    product: re,
    context: ae,
    collectionId: K
  }) : null : F.default.createElement(l.default, {
    onClick: me
  });
  const Oe = F.default.createElement(g.FlexRow, {
    xstyle: x.uiMargin.horiz5
  }, J != null && re.reviewStatus === w.PRODUCT_REVIEW_STATUS.APPROVED ? Pe : null);
  const ke = F.default.createElement(g.FlexRow, {
    xstyle: x.uiMargin.horiz5
  }, Z != null && re.reviewStatus === w.PRODUCT_REVIEW_STATUS.APPROVED ? F.default.createElement(I.default, {
    "aria-label": "",
    className: (0, G.default)(q.shareButton),
    onClick: e => {
      e.stopPropagation();
      Z((0, D.unproxy)(re));
    },
    Icon: y.LinkIcon
  }) : null);
  const De = ee != null ? ee : $ ? null : F.default.createElement("div", {
    className: (0, G.default)(q.detailContainer, (de || se || (0, u.isQuantityControlsFeatureEnabled)()) && q.showDetailContainer)
  }, Oe, ke);
  return F.default.createElement(_.HotKeys, (0, r.default)({
    ref: le,
    handlers: {
      space: e => {
        e.preventDefault();
        e.stopPropagation();
        E.default.shouldIndicateFocus();
        if (!(n == null)) {
          n();
        }
      },
      right: () => {
        var e;
        v.default.focus((e = oe.current) === null || e === undefined ? undefined : e.getContextMenuRef());
      }
    },
    tabIndex: 0,
    role: "button",
    onMouseEnter: () => fe(true),
    onMouseLeave: () => fe(false)
  }, te ? undefined : {
    onFocus: e => {
      var t;
      e.stopPropagation();
      e.preventDefault();
      if (!((t = oe.current) === null || t === undefined)) {
        t.mouseOver();
      }
      ce(true);
    },
    onBlur: pe,
    onMouseLeave() {
      pe();
      fe(false);
    }
  }), F.default.createElement(d.default, {
    testid: "product-catalog-item",
    key: re.id.toString(),
    customImage: true,
    image: Me,
    primary: Se,
    onClick: n,
    secondary: we,
    theme: _e,
    active: se || !!ie,
    checkbox: a,
    idle: V,
    detail: De,
    contextEnabled: () => $,
    onContext: e => {
      if (ie) {
        return void ue(null);
      }
      const t = (() => {
        var e;
        const t = [];
        if (Z != null && re.reviewStatus === w.PRODUCT_REVIEW_STATUS.APPROVED && re.isHidden === false) {
          t.push(F.default.createElement(p.DropdownItem, {
            testid: "mi-share-label",
            action: e => {
              e.stopPropagation();
              Z((0, D.unproxy)(re));
            },
            key: "ShareLabel"
          }, B.fbt._("Share", null, {
            hk: "3MHbpW"
          })));
        }
        const n = ((e = (0, L.getMaybeMeUser)()) === null || e === undefined ? undefined : e.equals(re.catalogWid)) === true;
        if (n && Q) {
          if (re.isHidden) {
            t.push(F.default.createElement(p.DropdownItem, {
              testid: "mi-show-label",
              action: he,
              key: "ShowLabel"
            }, B.fbt._("Show item", null, {
              hk: "1TSS6f"
            })));
          } else {
            t.push(F.default.createElement(p.DropdownItem, {
              testid: "mi-hide-label",
              action: he,
              key: "HideLabel"
            }, B.fbt._("Hide item", null, {
              hk: "a7Kx1"
            })));
          }
        }
        if (!(re.isHidden || re.reviewStatus !== w.PRODUCT_REVIEW_STATUS.APPROVED || J == null)) {
          t.push(F.default.createElement(p.DropdownItem, {
            testid: "mi-addcart-label",
            action: me,
            key: "AddToCartLabel"
          }, B.fbt._("Add to cart", null, {
            hk: "hOzFs"
          })));
        }
        if (n && X) {
          t.push(F.default.createElement(p.DropdownItem, {
            testid: "mi-edit-label",
            action: ge,
            key: "DeleteLabel"
          }, B.fbt._("Delete", null, {
            hk: "336mVv"
          })));
        }
        return t;
      })();
      const n = (0, b.getProductCatalogContext)(ae);
      (0, M.logCatalogContextMenuClick)(re.id.toString(), n.session.isAccidental() ? undefined : n);
      ue({
        menu: t,
        event: e.event,
        anchor: e.anchor
      });
    },
    ref: oe,
    contextMenuControlled: true
  }), Ae);
};
var r = a(require("../vendor/967154.js"));
var o = require("./464520.js");
var l = a(require("./327820.js"));
var i = a(require("./712278.js"));
var u = require("../app/72696.js");
var s = require("./979504.js");
var c = a(require("./894138.js"));
var d = a(require("./991370.js"));
var f = require("./568550.js");
var p = require("../app/675085.js");
var m = require("../app/305521.js");
var h = require("./342052.js");
var g = require("../app/690495.js");
var E = a(require("../app/988410.js"));
var v = a(require("../app/335540.js"));
var _ = require("../app/81644.js");
var y = require("./406506.js");
var C = require("./758121.js");
var b = require("../app/932523.js");
var M = require("../app/77548.js");
var S = a(require("./269261.js"));
var T = require("./493770.js");
var w = require("../app/530485.js");
var A = require("../app/607592.js");
var P = require("../app/694630.js");
var O = require("../app/316348.js");
var k = require("../app/555622.js");
var D = require("../app/163139.js");
var I = a(require("../app/397778.js"));
var R = require("../app/392632.js");
var N = a(require("../app/37875.js"));
var x = require("../app/676345.js");
var L = require("../app/459857.js");
var j = require("../app/54052.js");
var B = require("../vendor/548360.js");
var F = function (e, t) {
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
var G = a(require("../app/156720.js"));
var U = a(require("../app/969651.js"));
var W = require("../app/808446.js");
var H = require("../app/655241.js");
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
  shareButton: {
    color: "svlsagor",
    ":hover": {
      color: "kbf8aj4n"
    },
    ":focus": {
      color: "g6x36tgh"
    }
  },
  detailContainer: {
    display: "qibyn6m3"
  },
  showDetailContainer: {
    display: "p357zi0d"
  }
};