Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    json: t
  } = e;
  if (t.itemCount || t.message || t.orderId || t.orderTitle || t.sellerJid || t.status || t.surface || t.thumbnail || t.token || t.totalAmount1000 || t.totalCurrencyCode) {
    return {
      orderMessage: {
        itemCount: t.itemCount,
        message: t.message,
        orderId: t.orderId,
        orderTitle: t.orderTitle,
        sellerJid: t.sellerJid,
        status: t.status,
        surface: t.surface,
        thumbnail: (0, r.encodeBytes)(t.thumbnail),
        token: t.token,
        totalAmount1000: t.totalAmount1000,
        totalCurrencyCode: t.totalCurrencyCode
      }
    };
  }
  return {
    conversation: t.body
  };
};
var r = require("./974637.js");