var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createProductInquiry = function (e, t, n, r) {
  const d = {
    ack: a.ACK.CLOCK,
    id: new s.default({
      id: `product_inquiry_${s.default.newId_DEPRECATED()}`,
      remote: t,
      fromMe: true
    }),
    from: t,
    t: (0, i.unixTime)(),
    type: u.MSG_TYPE.PRODUCT,
    title: e.name,
    description: e.description,
    businessOwnerJid: t.toString({
      legacy: true
    }),
    productId: e.id.toString(),
    url: e.url,
    productImageCount: e.getProductImageCollectionCount(),
    body: n.preview instanceof o.default ? n.preview.getBase64() : null,
    currencyCode: e.currency,
    priceAmount1000: e.priceAmount1000,
    salePriceAmount1000: (0, c.isSalePriceActive)(e) ? e.salePriceAmount1000 : null,
    sessionId: r,
    retailerId: e.retailerId
  };
  const p = new l.Msg(d);
  p.mediaData.set(n);
  return p;
};
var i = require("./632157.js");
var a = require("./402994.js");
var o = r(require("./756680.js"));
var s = r(require("./565754.js"));
var l = require("./772358.js");
var u = require("./373070.js");
var c = require("./607592.js");