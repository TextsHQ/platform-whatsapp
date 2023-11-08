Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogBizWamEvent = undefined;
var r = require("./901032.js");
var i = require("./937789.js");
var a = require("./455915.js");
var o = require("./632726.js");
const {
  BOOLEAN: s,
  INTEGER: l,
  STRING: u
} = r.TYPES;
const c = (0, r.defineEvents)({
  CatalogBiz: [1722, {
    cartToggle: [13, s],
    catalogAppealReason: [4, u],
    catalogBizAction: [1, i.CATALOG_BIZ_ACTION],
    catalogEntryPoint: [7, a.CATALOG_ENTRY_POINT],
    catalogSessionId: [3, u],
    collectionCount: [18, l],
    collectionId: [14, u],
    collectionIndex: [15, u],
    deepLinkOpenFrom: [8, o.DEEP_LINK_OPEN_FROM],
    errorCode: [5, l],
    isOrderMsgAttached: [10, s],
    orderId: [9, u],
    productCount: [6, l],
    productId: [2, u],
    productIds: [12, u],
    productIndex: [16, u],
    quantity: [11, l]
  }, [1, 1, 1], "regular"]
});
exports.CatalogBizWamEvent = c;