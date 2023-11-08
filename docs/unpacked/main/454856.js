var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    displayAuthor: t,
    msg: n
  } = e;
  const a = (0, P.getMaybeMeUser)();
  const F = (0, _.getSender)(n).equals(a);
  const G = (0, x.default)();
  const [U] = (0, N.default)((0, f.getChat)(n));
  const W = e => {
    if (e) {
      e.stopPropagation();
    }
    if (!U) {
      return;
    }
    new b.OrderDetailsActionsSmbWamEvent({
      orderDetailsCreationAction: k.ORDER_DETAILS_CREATION_ACTION.CLICK_VIEW_RECEIVED_CART,
      actionCategory: String(C.default.RECEIVED_CART),
      orderDetailEntryPoint: String(r.default.FROM_CART),
      hasCatalog: (0, u.hasCatalog)(i.BusinessProfileCollection.get((0, P.getMaybeMeUser)()))
    }).commit();
    const {
      orderId: t,
      sellerJid: a,
      token: o
    } = n;
    if (t != null && a != null && o != null) {
      const e = (0, S.buildProductCatalogContext)(new T.ProductCatalogSession(), (0, s.getMaybeBizPlatformForLogging)(a), O.CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_ORDER_MESSAGE);
      (0, M.logOrderMessageClick)({
        catalogContext: e,
        catalogOwnerJid: a,
        orderId: t
      });
      if (n.orderId != null) {
        (0, h.qplStartOrderView)(!!y.OrderCollection.get(t));
        c.DrawerManager.openDrawerRight(I.default.createElement(w.ProductDetailsFlowLoadable, {
          chat: (0, f.getChat)(n),
          orderMessage: n,
          orderId: t,
          token: o,
          userIsCartOwner: F,
          sellerJid: a
        }), {
          transition: "slide-left",
          uim: G,
          newDrawerContext: e
        });
      }
    }
  };
  const H = I.default.createElement(d.EmojiText, {
    text: n.message,
    dirMismatch: (0, f.getRtl)(n) !== p.default.isRTL(),
    direction: (0, f.getDir)(n),
    inferLinesDirection: true
  });
  const V = I.default.createElement("div", {
    className: (0, R.default)(L)
  }, I.default.createElement(g.Meta, {
    msg: n
  }));
  const q = (0, o.isBuyerOrderRequestVariantEnabled)() ? D.fbt._("View details", null, {
    hk: "1zj8E4"
  }) : D.fbt._("View sent cart", null, {
    hk: "30iXXv"
  });
  const Y = (0, o.isSellerOrderRevampEnabled)() ? D.fbt._("View order request", null, {
    hk: "1JgVm"
  }) : D.fbt._("View received cart", null, {
    hk: "1y3IbA"
  });
  const z = I.default.createElement(m.BubbleActions, {
    items: [{
      label: F ? q : Y,
      testid: "view-cart-button",
      onClick: W
    }]
  });
  return I.default.createElement(v.default, {
    msg: n,
    displayAuthor: t,
    hideMeta: true
  }, I.default.createElement("div", {
    className: (0, R.default)(j)
  }, I.default.createElement(l.OrderPreview, {
    msg: n.unsafe(),
    onClick: W
  })), I.default.createElement(E.default, {
    msg: n.unsafe(),
    "data-id": n.id,
    className: (0, R.default)(B)
  }, H, V), U && (!(0, o.isSellerOrderRevampEnabled)() || n.status === A.Message$OrderMessage$OrderStatus.INQUIRY) && z);
};
var r = a(require("./120162.js"));
var o = require("../app/72696.js");
var l = require("./754904.js");
var i = require("../app/778945.js");
var u = require("../app/542358.js");
var s = require("./834110.js");
var c = require("../app/900316.js");
var d = require("../app/305521.js");
var f = require("../app/163755.js");
var p = a(require("../app/932325.js"));
var m = require("./20493.js");
var h = require("./609181.js");
var g = require("./789955.js");
var E = a(require("./19805.js"));
var v = a(require("./398685.js"));
var _ = require("../app/787742.js");
var y = require("../app/699411.js");
var C = a(require("./94530.js"));
var b = require("./873994.js");
var M = require("./71977.js");
var S = require("../app/932523.js");
var T = require("../app/242677.js");
var w = require("./639793.js");
var A = require("../app/533494.js");
var P = require("../app/459857.js");
var O = require("../app/455915.js");
var k = require("./76195.js");
var D = require("../vendor/548360.js");
var I = a(require("../vendor/667294.js"));
var R = a(require("../app/156720.js"));
var N = a(require("./144903.js"));
var x = a(require("../app/321201.js"));
const L = {
  position: "lhggkp7q",
  end: "ebjesfe0",
  bottom: "pgz13gmm"
};
const j = {
  marginTop: "if44n927",
  marginEnd: "isg5rw3j",
  marginBottom: "ngycyvoj",
  marginStart: "heai6z19"
};
const B = {
  width: "lk9bdx0e"
};