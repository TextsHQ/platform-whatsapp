var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddToCartStatus = undefined;
exports.addProductToCart = function (e) {
  const {
    id: t,
    name: n,
    imageHash: a,
    currency: p
  } = e;
  const m = e.catalogWid.toString();
  const h = i.CartCollection.findCart(m);
  const g = h.cartItemCollection.get(t);
  const E = (g == null ? undefined : g.quantity) || 0;
  const v = Math.min(E + 1, o.CART_ITEM_MAX_QUANTITY);
  const _ = {
    id: t,
    priceAmount1000: (0, u.getActivePrice)(e),
    currency: p,
    name: n,
    imageHash: a,
    quantity: v,
    maxAvailable: e.maxAvailable
  };
  const y = (0, d.getMaybeMeUser)();
  c.QPL.markerAnnotate(s.QuickLogMarkerId.WHATSAPP_CART_ADD, {
    bool: {
      IsConsumer: !(y == null ? undefined : y.equals(e.catalogWid))
    }
  });
  h.cartItemCollection.add(_, {
    merge: true
  });
  h.trigger("change:cartItemCollection");
  const C = h.itemCount;
  const b = E + 1 > o.CART_ITEM_MAX_QUANTITY ? f.QUANTITY_LIMIT_REACHED : f.SUCCESS;
  (0, l.default)(h, s.QuickLogMarkerId.WHATSAPP_CART_ADD).then(() => {
    if (b === f.SUCCESS) {
      c.QPL.markerEnd(s.QuickLogMarkerId.WHATSAPP_CART_ADD, r.QuickLogActionType.SUCCESS);
    } else if (b === f.QUANTITY_LIMIT_REACHED) {
      c.QPL.markerDrop(s.QuickLogMarkerId.WHATSAPP_CART_ADD);
    }
  }).catch(() => {
    c.QPL.markerEnd(s.QuickLogMarkerId.WHATSAPP_CART_ADD, r.QuickLogActionType.FAIL);
  });
  return {
    newCount: v,
    status: b,
    totalCartCount: C
  };
};
var r = require("../app/15842.js");
var o = require("../app/753958.js");
var l = a(require("./879366.js"));
var i = require("../app/290895.js");
var u = require("../app/607592.js");
var s = require("../app/316348.js");
var c = require("../app/555622.js");
var d = require("../app/459857.js");
const f = require("../vendor/76672.js").Mirrored(["SUCCESS", "QUANTITY_LIMIT_REACHED"]);
exports.AddToCartStatus = f;