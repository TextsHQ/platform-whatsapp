var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shouldShowOrderUpdateStatusAction = exports.shouldShowOrderAction = exports.getOrderUpdateStatusAction = undefined;
var r = a(require("./120162.js"));
var o = require("./779743.js");
var l = a(require("../app/753110.js"));
var i = a(require("../app/182394.js"));
var u = require("../app/787742.js");
var s = require("./272493.js");
var c = require("../app/620982.js");
var d = require("../vendor/548360.js");
const f = e => {
  const {
    nativeFlowName: t,
    interactiveType: n
  } = e;
  return n === i.default.NATIVE_FLOW && t === l.default.ORDER_DETAILS && (0, u.getIsSentByMe)(e);
};
exports.shouldShowOrderAction = f;
const p = (e, t) => !(t === c.OrderStatus.Canceled || t === c.OrderStatus.Complete) && f(e);
exports.shouldShowOrderUpdateStatusAction = p;
exports.getOrderUpdateStatusAction = (e, t, n, a) => (0, s.isContactCountrySupported)(a) && p(e, t) ? {
  label: d.fbt._("Update status", null, {
    hk: "29q6vk"
  }),
  onClick() {
    (0, o.openOrderStatusUpdateDrawer)(e, n, r.default.FROM_CHAT);
  }
} : null;