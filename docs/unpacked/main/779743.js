var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openOrderStatusUpdateDrawer = function (e, t, n) {
  const a = (0, i.getOrderInfo)(e);
  if (a == null) {
    return;
  }
  r.DrawerManager.openDrawerRight(s.default.createElement(u.OrderStatusUpdateFlowLoadable, {
    entryPoint: n,
    chat: (0, o.getChat)(e.unsafe()),
    sellerJid: (0, l.getSender)(e).toJid(),
    orderInfo: a
  }), {
    transition: "slide-left",
    uim: t
  });
};
var r = require("../app/900316.js");
var o = require("../app/163755.js");
var l = require("../app/787742.js");
var i = require("../app/706197.js");
var u = require("./877447.js");
var s = a(require("../vendor/667294.js"));