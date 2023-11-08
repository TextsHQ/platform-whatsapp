var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logAddProductClick = function (e) {
  new s.CatalogBizWamEvent({
    catalogBizAction: p.CATALOG_BIZ_ACTION.ACTION_PRODUCT_ADD_CLICKED,
    catalogSessionId: e.session.toString(),
    catalogEntryPoint: e.entryPoint
  }).commit();
};
exports.logAddProductFailed = function (e) {
  new s.CatalogBizWamEvent({
    catalogBizAction: p.CATALOG_BIZ_ACTION.ACTION_PRODUCT_ADD_FAILED,
    catalogEntryPoint: e.entryPoint,
    catalogSessionId: e.session.toString()
  }).commit();
};
exports.logAddProductSuccess = function (e) {
  new s.CatalogBizWamEvent({
    catalogBizAction: p.CATALOG_BIZ_ACTION.ACTION_PRODUCT_ADD_SUCCESS,
    catalogEntryPoint: e.entryPoint,
    catalogSessionId: e.session.toString()
  }).commit();
};
exports.logAppealProductCatalogClick = function (e) {
  new s.CatalogBizWamEvent({
    catalogBizAction: p.CATALOG_BIZ_ACTION.ACTION_APPEAL_PRODUCT_CLICKED,
    catalogEntryPoint: f.CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_SETTINGS,
    catalogSessionId: e
  }).commit();
};
exports.logAppealProductCatalogFailed = function (e, t) {
  new s.CatalogBizWamEvent({
    catalogBizAction: p.CATALOG_BIZ_ACTION.ACTION_APPEAL_PRODUCT_FAILED,
    catalogEntryPoint: f.CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_SETTINGS,
    errorCode: t,
    catalogSessionId: e
  }).commit();
};
exports.logAppealProductCatalogSuccess = function (e) {
  new s.CatalogBizWamEvent({
    catalogBizAction: p.CATALOG_BIZ_ACTION.ACTION_APPEAL_PRODUCT_SUCCESS,
    catalogEntryPoint: f.CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_SETTINGS,
    catalogSessionId: e
  }).commit();
};
exports.logBusinessProfileCatalogView = function (e) {
  let {
    catalogOwnerWid: t,
    catalogContext: n
  } = e;
  (0, u.logCatalogViewOrBizEvent)((0, i.default)((0, i.default)({}, (0, l.toDataForCatalogViewEvents)(n)), {}, {
    isOwner: (0, u.isCatalogOwner)({
      catalogOwnerWid: t
    }),
    catalogOwnerJid: t.toJid()
  }));
};
exports.logCarouselViewMoreClick = function (e) {
  let {
    catalogOwnerWid: t,
    catalogContext: n
  } = e;
  (0, u.logCatalogViewOrBizEvent)((0, i.default)({
    isOwner: (0, u.isCatalogOwner)({
      catalogOwnerWid: t
    }),
    catalogBizAction: p.CATALOG_BIZ_ACTION.ACTION_CARD_MORE_CLICK,
    catalogOwnerJid: t.toJid()
  }, (0, l.toDataForCatalogViewEvents)(n)));
};
exports.logCatalogAttachmentButtonClick = function (e) {
  new s.CatalogBizWamEvent({
    catalogBizAction: p.CATALOG_BIZ_ACTION.ACTION_CATALOG_IN_CONVERSATION_CLICK,
    catalogEntryPoint: f.CATALOG_ENTRY_POINT.CATALOG_ENTRY_POINT_ATTACHMENT_PANEL,
    catalogSessionId: e
  }).commit();
};
exports.logCatalogContextMenuClick = function (e, t) {
  new s.CatalogBizWamEvent({
    catalogBizAction: p.CATALOG_BIZ_ACTION.ACTION_MENU_CLICK,
    catalogEntryPoint: t == null ? undefined : t.entryPoint,
    catalogSessionId: t == null ? undefined : t.session.toString(),
    productId: e
  }).commit();
};
exports.logCatalogListDetailClick = function (e) {
  let {
    product: t,
    catalogContext: n
  } = e;
  (0, u.logCatalogViewOrBizEvent)((0, i.default)({
    catalogOwnerJid: t.catalogWid.toJid(),
    isOwner: (0, u.isCatalogOwner)({
      product: t
    })
  }, (0, l.toDataForCatalogViewEvents)(n)));
};
exports.logCatalogListView = function (e) {
  let {
    catalogOwnerWid: t,
    catalogContext: n,
    cartToggle: r
  } = e;
  (0, u.logCatalogViewOrBizEvent)((0, i.default)({
    isOwner: (0, u.isCatalogOwner)({
      catalogOwnerWid: t
    }),
    catalogViewAction: _.CATALOG_VIEW_ACTION.ACTION_LIST_IMPRESSION,
    catalogOwnerJid: t.toJid(),
    cartToggle: r
  }, (0, l.toDataForCatalogViewEvents)(n)));
};
exports.logCatalogProductHideCancelled = function (e, t) {
  new s.CatalogBizWamEvent({
    catalogBizAction: p.CATALOG_BIZ_ACTION.ACTION_PRODUCT_HIDE_CANCELLED,
    catalogEntryPoint: t.entryPoint,
    catalogSessionId: t.session.toString(),
    productId: e
  }).commit();
};
exports.logCatalogProductHideClick = function (e, t) {
  new s.CatalogBizWamEvent({
    catalogBizAction: p.CATALOG_BIZ_ACTION.ACTION_PRODUCT_HIDE_CLICKED,
    catalogEntryPoint: t.entryPoint,
    catalogSessionId: t.session.toString(),
    productId: e
  }).commit();
};
exports.logCatalogProductHideFailed = function (e, t) {
  new s.CatalogBizWamEvent({
    catalogBizAction: p.CATALOG_BIZ_ACTION.ACTION_PRODUCT_HIDE_FAILED,
    catalogEntryPoint: t.entryPoint,
    catalogSessionId: t.session.toString(),
    productId: e
  }).commit();
};
exports.logCatalogProductHideSuccess = function (e, t) {
  new s.CatalogBizWamEvent({
    catalogBizAction: p.CATALOG_BIZ_ACTION.ACTION_PRODUCT_HIDE_SUCCESS,
    catalogEntryPoint: t.entryPoint,
    catalogSessionId: t.session.toString(),
    productId: e
  }).commit();
};
exports.logCatalogProductShowCancelled = function (e, t) {
  new s.CatalogBizWamEvent({
    catalogBizAction: p.CATALOG_BIZ_ACTION.ACTION_PRODUCT_UNHIDE_CANCELLED,
    catalogEntryPoint: t.entryPoint,
    catalogSessionId: t.session.toString(),
    productId: e
  }).commit();
};
exports.logCatalogProductShowClick = function (e, t) {
  new s.CatalogBizWamEvent({
    catalogBizAction: p.CATALOG_BIZ_ACTION.ACTION_PRODUCT_UNHIDE_CLICKED,
    catalogEntryPoint: t.entryPoint,
    catalogSessionId: t.session.toString(),
    productId: e
  }).commit();
};
exports.logCatalogProductShowFailed = function (e, t) {
  new s.CatalogBizWamEvent({
    catalogBizAction: p.CATALOG_BIZ_ACTION.ACTION_PRODUCT_UNHIDE_FAILED,
    catalogEntryPoint: t.entryPoint,
    catalogSessionId: t.session.toString(),
    productId: e
  }).commit();
};
exports.logCatalogProductShowSuccess = function (e, t) {
  new s.CatalogBizWamEvent({
    catalogBizAction: p.CATALOG_BIZ_ACTION.ACTION_PRODUCT_UNHIDE_SUCCESS,
    catalogEntryPoint: t.entryPoint,
    catalogSessionId: t.session.toString(),
    productId: e
  }).commit();
};
exports.logCatalogShareLinkClick = function (e) {
  let {
    catalogOwnerWid: t,
    catalogContext: n
  } = e;
  const r = (0, u.isCatalogOwner)({
    catalogOwnerWid: t
  });
  (0, u.logCatalogViewOrBizEvent)((0, i.default)({
    isOwner: r,
    catalogBizAction: p.CATALOG_BIZ_ACTION.ACTION_SHARE_CATALOG_LINK_CLICK,
    catalogViewAction: _.CATALOG_VIEW_ACTION.ACTION_SHARE_CATALOG_LINK_CLICK,
    catalogOwnerJid: t.toJid()
  }, (0, l.toDataForCatalogViewEvents)(n)));
};
exports.logCreateProductCatalogClick = function (e) {
  new s.CatalogBizWamEvent({
    catalogBizAction: p.CATALOG_BIZ_ACTION.ACTION_CREATE_PRODUCT_CATALOG,
    catalogEntryPoint: e.entryPoint,
    catalogSessionId: e.session.toString()
  }).commit();
};
exports.logCreateProductCatalogFailed = function (e, t) {
  new s.CatalogBizWamEvent({
    catalogBizAction: p.CATALOG_BIZ_ACTION.ACTION_CREATE_PRODUCT_CATALOG_FAILED,
    catalogEntryPoint: e.entryPoint,
    errorCode: t,
    catalogSessionId: e.session.toString()
  }).commit();
};
exports.logCreateProductCatalogSuccess = function (e) {
  new s.CatalogBizWamEvent({
    catalogBizAction: p.CATALOG_BIZ_ACTION.ACTION_CREATE_PRODUCT_CATALOG_SUCCESS,
    catalogEntryPoint: e.entryPoint,
    catalogSessionId: e.session.toString()
  }).commit();
};
exports.logDeleteProductClick = function (e, t, n) {
  new s.CatalogBizWamEvent({
    catalogBizAction: p.CATALOG_BIZ_ACTION.ACTION_PRODUCT_DELETE_CLICKED,
    catalogEntryPoint: n.entryPoint,
    productId: e.id.toString(),
    productCount: t,
    catalogSessionId: n.session.toString()
  }).commit();
};
exports.logDeleteProductFailed = function (e, t, n, r) {
  new s.CatalogBizWamEvent({
    catalogBizAction: p.CATALOG_BIZ_ACTION.ACTION_PRODUCT_DELETE_FAILED,
    catalogEntryPoint: n.entryPoint,
    productId: e.id.toString(),
    productCount: t,
    errorCode: r,
    catalogSessionId: n.session.toString()
  }).commit();
};
exports.logDeleteProductSuccess = function (e, t, n) {
  new s.CatalogBizWamEvent({
    catalogBizAction: p.CATALOG_BIZ_ACTION.ACTION_PRODUCT_DELETE_SUCCESS,
    catalogEntryPoint: n.entryPoint,
    productId: e.id.toString(),
    productCount: t,
    catalogSessionId: n.session.toString()
  }).commit();
};
exports.logDetailImageClick = function (e) {
  let {
    product: t,
    catalogContext: n
  } = e;
  (0, u.logCatalogViewOrBizEvent)((0, i.default)({
    isOwner: (0, u.isCatalogOwner)({
      product: t
    }),
    catalogBizAction: p.CATALOG_BIZ_ACTION.ACTION_DETAIL_IMAGE_CLICK,
    catalogViewAction: _.CATALOG_VIEW_ACTION.ACTION_DETAIL_IMAGE_CLICK,
    catalogOwnerJid: t.catalogWid.toJid(),
    productId: t.id.toString()
  }, (0, l.toDataForCatalogViewEvents)(n)));
};
exports.logDetailLinkClick = function (e) {
  let {
    product: t,
    catalogContext: n
  } = e;
  (0, u.logCatalogViewOrBizEvent)((0, i.default)({
    catalogOwnerJid: t.catalogWid.toJid(),
    isOwner: (0, u.isCatalogOwner)({
      product: t
    }),
    catalogBizAction: p.CATALOG_BIZ_ACTION.ACTION_DETAIL_LINK_CLICK,
    catalogViewAction: _.CATALOG_VIEW_ACTION.ACTION_DETAIL_LINK_CLICK,
    productId: t.id.toString()
  }, (0, l.toDataForCatalogViewEvents)(n)));
};
exports.logEditProductClick = function (e, t) {
  new s.CatalogBizWamEvent({
    catalogBizAction: p.CATALOG_BIZ_ACTION.ACTION_PRODUCT_EDIT_CLICKED,
    productId: e.id.toString(),
    catalogEntryPoint: t.entryPoint,
    catalogSessionId: t.session.toString()
  }).commit();
};
exports.logEditProductFailed = function (e, t, n) {
  new s.CatalogBizWamEvent({
    catalogBizAction: p.CATALOG_BIZ_ACTION.ACTION_PRODUCT_EDIT_FAILED,
    catalogEntryPoint: t.entryPoint,
    productId: e.id.toString(),
    errorCode: n,
    catalogSessionId: t.session.toString()
  }).commit();
};
exports.logEditProductSuccess = function (e, t) {
  new s.CatalogBizWamEvent({
    catalogBizAction: p.CATALOG_BIZ_ACTION.ACTION_PRODUCT_EDIT_SUCCESS,
    catalogEntryPoint: t.entryPoint,
    productId: e.id.toString(),
    catalogSessionId: t.session.toString()
  }).commit();
};
exports.logFullImageView = function (e) {
  let {
    product: t,
    catalogSessionId: n
  } = e;
  (0, u.logCatalogViewOrBizEvent)({
    catalogOwnerJid: t.catalogWid.toJid(),
    isOwner: (0, u.isCatalogOwner)({
      product: t
    }),
    catalogSessionId: n
  });
};
exports.logImageCarouselModalView = function (e) {
  let {
    product: t,
    catalogSessionId: n
  } = e;
  (0, u.logCatalogViewOrBizEvent)({
    catalogOwnerJid: t.catalogWid.toJid(),
    isOwner: (0, u.isCatalogOwner)({
      product: t
    }),
    catalogSessionId: n
  });
};
exports.logImageListClick = function (e) {
  let {
    product: t,
    catalogSessionId: n
  } = e;
  (0, u.logCatalogViewOrBizEvent)({
    catalogOwnerJid: t.catalogWid.toJid(),
    isOwner: (0, u.isCatalogOwner)({
      product: t
    }),
    catalogSessionId: n
  });
};
exports.logImageNavigate = function (e) {
  let {
    product: t,
    catalogSessionId: n
  } = e;
  (0, u.logCatalogViewOrBizEvent)({
    catalogOwnerJid: t.catalogWid.toJid(),
    isOwner: (0, u.isCatalogOwner)({
      product: t
    }),
    catalogBizAction: p.CATALOG_BIZ_ACTION.ACTION_FULL_IMAGE_SWIPE,
    catalogViewAction: _.CATALOG_VIEW_ACTION.ACTION_FULL_IMAGE_SWIPE,
    catalogSessionId: n,
    productId: t.id.toString()
  });
};
exports.logProductDetailView = function (e) {
  let {
    product: t,
    catalogContext: n,
    cartToggle: r,
    collectionId: o
  } = e;
  const s = (0, a.getProductStatsInFetched)(t.catalogWid.toString(), o, t);
  (0, u.logCatalogViewOrBizEvent)((0, i.default)((0, i.default)({
    catalogOwnerJid: t.catalogWid.toJid(),
    isOwner: (0, u.isCatalogOwner)({
      product: t
    }),
    catalogBizAction: p.CATALOG_BIZ_ACTION.ACTION_DETAIL_IMPRESSION,
    catalogViewAction: _.CATALOG_VIEW_ACTION.ACTION_DETAIL_IMPRESSION,
    cartToggle: r
  }, s), (0, l.toDataForCatalogViewEvents)(n)));
};
exports.logProductInquiryClick = function (e) {
  let {
    product: t,
    catalogContext: n
  } = e;
  const r = (0, u.isCatalogOwner)({
    product: t
  });
  (0, u.logCatalogViewOrBizEvent)((0, i.default)({
    isOwner: r,
    catalogOwnerJid: t.catalogWid.toJid(),
    catalogBizAction: p.CATALOG_BIZ_ACTION.ACTION_QUOTED_PRODUCT_IN_CONVERSATION_CLICK
  }, (0, l.toDataForCatalogViewEvents)(n)));
};
exports.logProductMessageBusinessClick = function (e, t) {
  (0, u.logCatalogViewOrBizEvent)((0, i.default)({
    isOwner: (0, u.isCatalogOwner)({
      product: e
    }),
    catalogBizAction: p.CATALOG_BIZ_ACTION.ACTION_MESSAGE_BUSINESS_BUTTON_CLICK,
    catalogOwnerJid: e.catalogWid.toJid(),
    catalogViewAction: _.CATALOG_VIEW_ACTION.ACTION_MESSAGE_BUSINESS_BUTTON_CLICK,
    productId: e.id.toString()
  }, (0, l.toDataForCatalogViewEvents)(t)));
};
exports.logProductMessageBusinessSend = function (e, t) {
  var n;
  let r = false;
  let i = "";
  if (e.businessOwnerJid != null) {
    i = e.businessOwnerJid;
    r = (0, d.getMeUser)().equals((0, g.createWid)(i));
  }
  (0, u.logCatalogViewOrBizEvent)({
    isOwner: r,
    catalogOwnerJid: i,
    catalogBizAction: p.CATALOG_BIZ_ACTION.ACTION_QUOTED_PRODUCT_MESSAGE_SEND,
    catalogViewAction: _.CATALOG_VIEW_ACTION.ACTION_QUOTED_PRODUCT_MESSAGE_SEND,
    productId: e == null || (n = e.productId) === null || n === undefined ? undefined : n.toString(),
    catalogSessionId: t || new c.ProductCatalogSession().toString()
  });
};
exports.logProductMessageSent = function (e) {
  let {
    product: t,
    catalogSessionId: n
  } = e;
  (0, u.logCatalogViewOrBizEvent)({
    isOwner: (0, u.isCatalogOwner)({
      product: t
    }),
    catalogBizAction: p.CATALOG_BIZ_ACTION.ACTION_SEND_PRODUCT_MESSAGE,
    catalogOwnerJid: t.catalogWid.toJid(),
    catalogViewAction: _.CATALOG_VIEW_ACTION.ACTION_SEND_PRODUCT_MESSAGE,
    catalogSessionId: n,
    productId: t.id.toString()
  });
};
exports.logProductMsgClick = function (e) {
  let {
    product: t,
    catalogContext: n
  } = e;
  (0, u.logCatalogViewOrBizEvent)((0, i.default)({
    isOwner: (0, u.isCatalogOwner)({
      product: t
    }),
    catalogOwnerJid: t.catalogWid.toJid(),
    catalogBizAction: p.CATALOG_BIZ_ACTION.ACTION_PRODUCT_IN_CONVERSATION_CLICK
  }, (0, l.toDataForCatalogViewEvents)(n)));
};
exports.logProductShareLinkClick = function (e) {
  let {
    product: t,
    catalogContext: n
  } = e;
  (0, u.logCatalogViewOrBizEvent)((0, i.default)({
    isOwner: (0, u.isCatalogOwner)({
      product: t
    }),
    catalogBizAction: p.CATALOG_BIZ_ACTION.ACTION_SHARE_PRODUCT_LINK_CLICK,
    catalogOwnerJid: t.catalogWid.toJid(),
    catalogViewAction: _.CATALOG_VIEW_ACTION.ACTION_SHARE_PRODUCT_LINK_CLICK,
    productId: t.id.toString()
  }, (0, l.toDataForCatalogViewEvents)(n)));
};
exports.logProfileProductClick = function (e) {
  let {
    product: t,
    catalogContext: n
  } = e;
  (0, u.logCatalogViewOrBizEvent)((0, i.default)((0, i.default)({
    isOwner: (0, u.isCatalogOwner)({
      product: t
    }),
    catalogBizAction: p.CATALOG_BIZ_ACTION.ACTION_CARD_ITEM_CLICK
  }, (0, l.toDataForCatalogViewEvents)(n)), {}, {
    catalogOwnerJid: t.catalogWid.toJid()
  }));
};
exports.logReportProductFailure = function (e) {
  let {
    product: t,
    catalogSessionId: n,
    reason: r
  } = e;
  new o.BizCatalogViewWamEvent({
    catalogViewAction: _.CATALOG_VIEW_ACTION.ACTION_REPORT_PRODUCT_FAILURE,
    catalogOwnerJid: t.catalogWid.toJid(),
    catalogSessionId: n,
    catalogReportReasonCode: r,
    productId: t.id.toString()
  }).commit();
};
exports.logReportProductSuccess = function (e) {
  let {
    product: t,
    catalogSessionId: n,
    reason: r
  } = e;
  new o.BizCatalogViewWamEvent({
    catalogViewAction: _.CATALOG_VIEW_ACTION.ACTION_REPORT_PRODUCT_SUCCESS,
    catalogSessionId: n,
    catalogOwnerJid: t.catalogWid.toJid(),
    catalogReportReasonCode: r,
    productId: t.id.toString()
  }).commit();
};
exports.logSendCatalogClick = function (e) {
  let {
    catalogOwnerWid: t,
    catalogSessionId: n
  } = e;
  new s.CatalogBizWamEvent({
    catalogBizAction: p.CATALOG_BIZ_ACTION.ACTION_SEND_CATALOG_CLICK,
    catalogSessionId: n
  }).commit();
};
exports.logShareCatalogCopyLinkClick = function (e) {
  let {
    catalogOwnerWid: t,
    catalogContext: n
  } = e;
  (0, u.logCatalogViewOrBizEvent)((0, i.default)({
    isOwner: (0, u.isCatalogOwner)({
      catalogOwnerWid: t
    }),
    catalogBizAction: p.CATALOG_BIZ_ACTION.ACTION_SHARE_CATALOG_COPY_LINK_CLICK,
    catalogOwnerJid: t.toJid(),
    catalogViewAction: _.CATALOG_VIEW_ACTION.ACTION_SHARE_CATALOG_COPY_LINK_CLICK
  }, (0, l.toDataForCatalogViewEvents)(n)));
};
exports.logShareCatalogViaWALinkClick = function (e) {
  let {
    catalogOwnerWid: t,
    catalogContext: n
  } = e;
  (0, u.logCatalogViewOrBizEvent)((0, i.default)({
    catalogOwnerJid: t.toJid(),
    isOwner: (0, u.isCatalogOwner)({
      catalogOwnerWid: t
    }),
    catalogBizAction: p.CATALOG_BIZ_ACTION.ACTION_SHARE_CATALOG_VIA_WA_LINK_CLICK,
    catalogViewAction: _.CATALOG_VIEW_ACTION.ACTION_SHARE_CATALOG_VIA_WA_LINK_CLICK
  }, (0, l.toDataForCatalogViewEvents)(n)));
};
exports.logShareProductCopyLinkClick = function (e) {
  let {
    product: t,
    catalogContext: n
  } = e;
  (0, u.logCatalogViewOrBizEvent)((0, i.default)({
    isOwner: (0, u.isCatalogOwner)({
      product: t
    }),
    catalogBizAction: p.CATALOG_BIZ_ACTION.ACTION_SHARE_PRODUCT_COPY_LINK_CLICK,
    catalogOwnerJid: t.catalogWid.toJid(),
    catalogViewAction: _.CATALOG_VIEW_ACTION.ACTION_SHARE_PRODUCT_COPY_LINK_CLICK,
    productId: t.id.toString()
  }, (0, l.toDataForCatalogViewEvents)(n)));
};
exports.logShareProductViaWALinkClick = function (e) {
  let {
    product: t,
    catalogContext: n
  } = e;
  (0, u.logCatalogViewOrBizEvent)((0, i.default)({
    isOwner: (0, u.isCatalogOwner)({
      product: t
    }),
    catalogOwnerJid: t.catalogWid.toJid(),
    catalogBizAction: p.CATALOG_BIZ_ACTION.ACTION_SHARE_PRODUCT_VIA_WA_LINK_CLICK,
    catalogViewAction: _.CATALOG_VIEW_ACTION.ACTION_SHARE_PRODUCT_VIA_WA_LINK_CLICK,
    productId: t.id.toString()
  }, (0, l.toDataForCatalogViewEvents)(n)));
};
var i = r(require("../vendor/81109.js"));
var a = require("./477627.js");
var o = require("./298471.js");
var s = require("./104209.js");
var l = require("./932523.js");
var u = require("./537066.js");
var c = require("./242677.js");
var d = require("./459857.js");
var p = require("./937789.js");
var f = require("./455915.js");
var _ = require("./115879.js");
var g = require("./669050.js");