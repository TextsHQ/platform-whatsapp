var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    messageProtobuf: t,
    baseMessage: n,
    msgContext: r
  } = e;
  const {
    productMessage: l
  } = t;
  if (l == null) {
    return;
  }
  const {
    product: u,
    businessOwnerJid: c,
    body: d,
    footer: p,
    contextInfo: f
  } = l;
  if (u == null) {
    return;
  }
  const {
    productImage: _,
    productId: g,
    currencyCode: m,
    priceAmount1000: h,
    salePriceAmount1000: y,
    retailerId: E,
    url: S,
    productImageCount: v,
    title: T,
    description: M
  } = u;
  let A = {};
  if (_ != null) {
    const e = (0, s.default)({
      messageProtobuf: {
        imageMessage: _
      },
      baseMessage: n,
      msgContext: r
    });
    if (e != null) {
      const {
        msgData: t
      } = e;
      A = {
        deprecatedMms3Url: t.deprecatedMms3Url,
        directPath: t.directPath,
        staticUrl: t.staticUrl,
        mimetype: t.mimetype,
        filehash: t.filehash,
        encFilehash: t.encFilehash,
        size: t.size,
        height: t.height,
        width: t.width,
        mediaKey: t.mediaKey,
        mediaKeyTimestamp: t.mediaKeyTimestamp,
        body: t.body,
        interactiveAnnotations: t.interactiveAnnotations,
        scanLengths: t.scanLengths,
        scansSidecar: t.scansSidecar,
        isViewOnce: t.isViewOnce,
        thumbnailDirectPath: t.thumbnailDirectPath,
        thumbnailSha256: t.thumbnailSha256,
        thumbnailEncSha256: t.thumbnailEncSha256
      };
    }
  }
  return {
    msgData: (0, i.default)((0, i.default)({}, n), {}, {
      type: o.MSG_TYPE.PRODUCT,
      businessOwnerJid: c,
      productId: g,
      currencyCode: m,
      priceAmount1000: (0, a.numberOrThrowIfTooLarge)(h != null ? h : 0) || undefined,
      salePriceAmount1000: (0, a.numberOrThrowIfTooLarge)(y != null ? y : 0) || undefined,
      retailerId: E,
      url: S,
      productImageCount: v,
      title: T,
      description: M,
      caption: d,
      footer: p
    }, A),
    contextInfo: f
  };
};
var i = r(require("../vendor/81109.js"));
var a = require("./229079.js");
var o = require("./373070.js");
var s = r(require("./969938.js"));