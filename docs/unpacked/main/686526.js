var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openOrderDetailDrawer = function (e, t, n) {
  r.DrawerManager.openDrawerRight(c.default.createElement(u.ProductDetailsFlowLoadable, {
    entryPoint: n,
    chat: (0, o.getChat)(e.unsafe()),
    sellerJid: (0, l.getSender)(e).toJid(),
    orderInfo: (0, i.getOrderInfo)(e),
    processedOrderMessage: e
  }), {
    transition: "slide-left",
    uim: t
  });
};
exports.openOrderRequestDrawer = function (e, t, n) {
  var a;
  var i;
  const {
    orderId: d,
    sellerJid: f,
    token: p
  } = e;
  const m = (0, s.getMeUser)();
  const h = (a = (i = (0, l.getSender)(e)) === null || i === undefined ? undefined : i.equals(m)) !== null && a !== undefined && a;
  if (d != null && f != null && p != null) {
    r.DrawerManager.openDrawerRight(c.default.createElement(u.ProductDetailsFlowLoadable, {
      entryPoint: n,
      chat: (0, o.getChat)(e),
      orderMessage: e,
      orderId: d,
      token: p,
      userIsCartOwner: h,
      sellerJid: f
    }), {
      transition: "slide-left",
      uim: t
    });
  }
};
var r = require("../app/900316.js");
var o = require("../app/163755.js");
var l = require("../app/787742.js");
var i = require("../app/706197.js");
var u = require("./639793.js");
var s = require("../app/459857.js");
var c = a(require("../vendor/667294.js"));