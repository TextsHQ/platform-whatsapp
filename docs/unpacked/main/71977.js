var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logOrderListImpression = function (e) {
  let {
    catalogContext: t,
    catalogOwnerJid: n,
    orderId: a,
    productCount: s
  } = e;
  (0, l.logCatalogViewOrBizEvent)((0, r.default)((0, r.default)({
    isOwner: (0, l.isCatalogOwner)({
      catalogOwnerJid: n
    }),
    catalogBizAction: i.CATALOG_BIZ_ACTION.ACTION_ORDER_LIST_IMPRESSION,
    catalogViewAction: u.CATALOG_VIEW_ACTION.ACTION_ORDER_LIST_IMPRESSION
  }, (0, o.toDataForCatalogViewEvents)(t)), {}, {
    bizActionConfig: {
      orderId: a,
      productCount: s
    },
    catalogOwnerJid: n
  }));
};
exports.logOrderListItemClick = function (e) {
  let {
    catalogOwnerJid: t,
    catalogContext: n,
    orderId: a
  } = e;
  (0, l.logCatalogViewOrBizEvent)((0, r.default)((0, r.default)({
    isOwner: (0, l.isCatalogOwner)({
      catalogOwnerJid: t
    }),
    catalogBizAction: i.CATALOG_BIZ_ACTION.ACTION_ORDER_LIST_ITEM_CLICK,
    catalogViewAction: u.CATALOG_VIEW_ACTION.ACTION_ORDER_LIST_ITEM_CLICK
  }, (0, o.toDataForCatalogViewEvents)(n)), {}, {
    bizActionConfig: {
      orderId: a
    },
    catalogOwnerJid: t
  }));
};
exports.logOrderMessageClick = function (e) {
  let {
    catalogContext: t,
    catalogOwnerJid: n,
    orderId: a
  } = e;
  (0, l.logCatalogViewOrBizEvent)((0, r.default)((0, r.default)({
    isOwner: (0, l.isCatalogOwner)({
      catalogOwnerJid: n
    }),
    catalogBizAction: i.CATALOG_BIZ_ACTION.ACTION_ORDER_MESSAGE_CLICK
  }, (0, o.toDataForCatalogViewEvents)(t)), {}, {
    catalogOwnerJid: n
  }));
};
exports.logSendOrderMessage = function (e) {
  let {
    orderId: t,
    catalogOwnerJid: n,
    catalogContext: a,
    isOrderMsgAttached: s,
    quantity: c
  } = e;
  (0, l.logCatalogViewOrBizEvent)((0, r.default)((0, r.default)({
    isOwner: (0, l.isCatalogOwner)({
      catalogOwnerJid: n
    }),
    catalogBizAction: i.CATALOG_BIZ_ACTION.ACTION_SEND_ORDER_MESSAGE,
    catalogViewAction: u.CATALOG_VIEW_ACTION.ACTION_SEND_ORDER_MESSAGE,
    isOrderMsgAttached: s
  }, (0, o.toDataForCatalogViewEvents)(a)), {}, {
    bizActionConfig: {
      orderId: t,
      quantity: c
    },
    catalogOwnerJid: n
  }));
};
var r = a(require("../vendor/81109.js"));
var o = require("../app/932523.js");
var l = require("../app/537066.js");
var i = require("../app/937789.js");
var u = require("../app/115879.js");