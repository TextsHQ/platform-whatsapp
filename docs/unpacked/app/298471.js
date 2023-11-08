Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BizCatalogViewWamEvent = undefined;
var r = require("./901032.js");
var i = require("./618112.js");
var a = require("./455915.js");
var o = require("./115879.js");
var s = require("./632726.js");
var l = require("./541203.js");
const {
  BOOLEAN: u,
  INTEGER: c,
  STRING: d
} = r.TYPES;
const p = (0, r.defineEvents)({
  BizCatalogView: [3006, {
    bizPlatform: [14, i.BIZ_PLATFORM],
    cartToggle: [13, u],
    catalogCategoryId: [19, d],
    catalogEntryPoint: [2, a.CATALOG_ENTRY_POINT],
    catalogEventSampled: [11, u],
    catalogOwnerJid: [10, d],
    catalogReportReasonCode: [8, d],
    catalogSessionId: [3, d],
    catalogViewAction: [1, o.CATALOG_VIEW_ACTION],
    collectionId: [15, d],
    collectionIndex: [16, d],
    deepLinkOpenFrom: [12, s.DEEP_LINK_OPEN_FROM],
    entryPointConversationInitiated: [22, l.ENTRY_POINT_CONVERSATION_INITIATED],
    entryPointConversionApp: [20, d],
    entryPointConversionSource: [21, d],
    hasVariants: [23, u],
    isNewProductAddedToCart: [7, u],
    isOrderMsgAttached: [5, u],
    orderId: [4, d],
    productId: [9, d],
    productIndex: [17, d],
    quantity: [6, c],
    sequenceNumber: [18, c]
  }, [1, 1, 1], "private", 0]
});
exports.BizCatalogViewWamEvent = p;