var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let t;
  let {
    json: n,
    mediaMetadata: r,
    contextInfo: a
  } = e;
  if (r != null) {
    t = (0, i.default)({
      json: n,
      mediaMetadata: r,
      contextInfo: a
    }).imageMessage;
  }
  return {
    productMessage: {
      product: {
        productImage: t,
        productId: n.productId,
        title: n.title,
        description: n.description,
        currencyCode: n.currencyCode,
        priceAmount1000: n.priceAmount1000 || undefined,
        salePriceAmount1000: n.salePriceAmount1000 || undefined,
        retailerId: n.retailerId,
        url: n.url,
        productImageCount: n.productImageCount
      },
      businessOwnerJid: n.businessOwnerJid,
      contextInfo: a,
      body: n.caption,
      footer: n.footer
    }
  };
};
var i = r(require("./920697.js"));