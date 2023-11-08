Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.qplAnnotateCartView = function (e, t) {
  r.QPL.markerAnnotate(a.QuickLogMarkerId.WHATSAPP_CART_VIEW, {
    bool: {
      IsConsumer: e
    },
    int: {
      ProductsCount: t
    }
  });
};
exports.qplAnnotateCatalogView = function (e) {
  r.QPL.markerAnnotate(a.QuickLogMarkerId.WHATSAPP_CATALOG_VIEW, {
    bool: {
      IsCached: e
    }
  });
};
exports.qplAnnotateOrderView = function (e) {
  r.QPL.markerAnnotate(a.QuickLogMarkerId.WHATSAPP_ORDER_VIEW, {
    int: {
      ProductsCount: e
    }
  });
};
exports.qplAnnotateProductView = function (e) {
  r.QPL.markerAnnotate(a.QuickLogMarkerId.WHATSAPP_PRODUCT_VIEW, {
    bool: {
      IsConsumer: e
    }
  });
};
exports.qplAnnotateProfileCatsView = function (e) {
  r.QPL.markerAnnotate(a.QuickLogMarkerId.WHATSAPP_PROFILE_CATS_VIEW, {
    int: {
      CategoryCount: e
    }
  });
};
exports.qplDropCatalogView = function () {
  r.QPL.markerDrop(a.QuickLogMarkerId.WHATSAPP_CATALOG_VIEW);
};
exports.qplDropOrderView = function () {
  r.QPL.markerDrop(a.QuickLogMarkerId.WHATSAPP_ORDER_VIEW);
};
exports.qplDropProductView = function () {
  r.QPL.markerDrop(a.QuickLogMarkerId.WHATSAPP_PRODUCT_VIEW);
};
exports.qplEndCartView = function (e) {
  r.QPL.markerEnd(a.QuickLogMarkerId.WHATSAPP_CART_VIEW, e);
};
exports.qplEndCatalogView = function (e) {
  r.QPL.markerEnd(a.QuickLogMarkerId.WHATSAPP_CATALOG_VIEW, e);
};
exports.qplEndOrderCreate = function (e) {
  r.QPL.markerEnd(a.QuickLogMarkerId.WHATSAPP_ORDER_CREATE, e);
};
exports.qplEndOrderView = function (e) {
  r.QPL.markerEnd(a.QuickLogMarkerId.WHATSAPP_ORDER_VIEW, e);
};
exports.qplEndProductView = function (e) {
  r.QPL.markerEnd(a.QuickLogMarkerId.WHATSAPP_PRODUCT_VIEW, e);
};
exports.qplEndProfileCatsView = function (e) {
  r.QPL.markerEnd(a.QuickLogMarkerId.WHATSAPP_PROFILE_CATS_VIEW, e);
};
exports.qplEndProfileSave = function (e) {
  r.QPL.markerEnd(a.QuickLogMarkerId.WHATSAPP_PROFILE_SAVE, e);
};
exports.qplStartCartView = function (e) {
  r.QPL.markerStart(a.QuickLogMarkerId.WHATSAPP_CART_VIEW, {
    annotations: {
      string: {
        EntryPoint: e
      }
    }
  });
};
exports.qplStartCatalogView = function (e) {
  r.QPL.markerStart(a.QuickLogMarkerId.WHATSAPP_CATALOG_VIEW, {
    annotations: {
      string: {
        EntryPoint: e
      }
    }
  });
};
exports.qplStartCollectionViewAll = function (e) {
  r.QPL.markerStart(a.QuickLogMarkerId.WHATSAPP_COLLECTION_VIEW_ALL, {
    annotations: {
      string: {
        EntryPoint: e
      }
    }
  });
};
exports.qplStartOrderCreate = function (e) {
  r.QPL.markerStart(a.QuickLogMarkerId.WHATSAPP_ORDER_CREATE, {
    annotations: {
      int: {
        ProductsCount: e
      }
    }
  });
};
exports.qplStartProductView = function (e) {
  r.QPL.markerStart(a.QuickLogMarkerId.WHATSAPP_PRODUCT_VIEW, {
    annotations: {
      string: {
        EntryPoint: e
      }
    }
  });
};
exports.qplStartProfileCatsView = function (e) {
  r.QPL.markerStart(a.QuickLogMarkerId.WHATSAPP_PROFILE_CATS_VIEW, {
    annotations: {
      string: {
        EntryPoint: e
      }
    }
  });
};
exports.qplStartProfileSave = function (e) {
  r.QPL.markerStart(a.QuickLogMarkerId.WHATSAPP_PROFILE_SAVE, {
    annotations: {
      string: {
        Field: e
      }
    }
  });
};
var a = require("../app/316348.js");
var r = require("../app/555622.js");