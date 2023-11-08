var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    messageProtobuf: t,
    baseMessage: n
  } = e;
  const {
    orderMessage: r
  } = t;
  if (r == null) {
    return;
  }
  const {
    thumbnail: l,
    message: u,
    orderId: c,
    itemCount: d,
    status: p,
    surface: f,
    sellerJid: _,
    orderTitle: g,
    token: m,
    totalAmount1000: h,
    totalCurrencyCode: y,
    contextInfo: E
  } = r;
  return {
    msgData: (0, i.default)((0, i.default)({}, n), {}, {
      type: s.MSG_TYPE.ORDER,
      thumbnail: (0, o.decodeBytes)(l),
      message: u || "",
      orderId: c,
      itemCount: d || 0,
      status: p,
      surface: f,
      sellerJid: _,
      orderTitle: g || "",
      token: m || "",
      totalAmount1000: (0, a.numberOrThrowIfTooLarge)(h != null ? h : 0),
      totalCurrencyCode: y,
      body: ""
    }),
    contextInfo: E
  };
};
var i = r(require("../vendor/81109.js"));
var a = require("./229079.js");
var o = require("./21094.js");
var s = require("./373070.js");