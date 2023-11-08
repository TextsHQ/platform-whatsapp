var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addProduct = function (e, t, n) {
  h.QPL.markerPoint(m.QuickLogMarkerId.WHATSAPP_PRODUCT_SAVE, "datasource_start");
  const r = (0, a.addProductMD)(e, t, n);
  r.then(() => h.QPL.markerPoint(m.QuickLogMarkerId.WHATSAPP_PRODUCT_SAVE, "datasource_end"));
  return r.then(C).catch(e => {
    if (e instanceof i.ServerStatusCodeError && e.statusCode === 406 || e instanceof i.CatalogEditServerError && e.statusCode === 406) {
      throw e;
    }
    __LOG__(4, true, new Error(), true)`Add product failed, error: ${e}`;
    SEND_LOGS("Add product failed");
    throw e;
  });
};
exports.appealProduct = function (e, t) {
  h.QPL.markerPoint(m.QuickLogMarkerId.WHATSAPP_PRODUCT_APPEAL, "datasource_start");
  const n = (0, o.appealProductMD)(e, t);
  n.then(() => h.QPL.markerPoint(m.QuickLogMarkerId.WHATSAPP_PRODUCT_APPEAL, "datasource_end"));
  return (0, i.attachErrorLogger)(n, "Appeal product failed");
};
exports.createCatalog = function () {
  h.QPL.markerPoint(m.QuickLogMarkerId.WHATSAPP_CATALOG_CREATE, "datasource_start");
  const e = (0, c.createProductCatalog)();
  e.then(() => {
    h.QPL.markerPoint(m.QuickLogMarkerId.WHATSAPP_CATALOG_CREATE, "datasource_end");
  });
  return (0, i.attachErrorLogger)(e, "Create catalog failed");
};
exports.deleteProducts = function (e) {
  h.QPL.markerPoint(m.QuickLogMarkerId.WHATSAPP_PRODUCT_DELETE, "datasource_start");
  const t = (0, s.deleteProductsMD)(e).then(e => {
    h.QPL.markerPoint(m.QuickLogMarkerId.WHATSAPP_PRODUCT_DELETE, "datasource_end");
    return e;
  });
  return (0, i.attachErrorLogger)(t, "Delete product failed");
};
exports.editProduct = function (e, t, n) {
  h.QPL.markerPoint(m.QuickLogMarkerId.WHATSAPP_PRODUCT_SAVE, "datasource_start");
  const r = (0, l.default)(e, t, n);
  r.then(() => h.QPL.markerPoint(m.QuickLogMarkerId.WHATSAPP_PRODUCT_SAVE, "datasource_end"));
  return r.then(C).catch(e => {
    if (e instanceof i.ServerStatusCodeError && e.statusCode === 406 || e instanceof i.CatalogEditServerError && e.statusCode === 406) {
      throw e;
    }
    __LOG__(4, true, new Error(), true)`Edit product failed, error: ${e}`;
    SEND_LOGS("Edit product failed");
    throw e;
  });
};
exports.mapMsgToProductModel = function (e) {
  let t;
  if (e.businessOwnerJid) {
    t = (0, T.createWid)(e.businessOwnerJid);
  }
  return {
    catalogWid: t,
    id: e.productId || "",
    url: e.url,
    name: e.title,
    description: e.description,
    imageCdnUrl: e.mediaData.renderableUrl,
    reviewStatus: "",
    currency: e.currencyCode,
    priceAmount1000: e.priceAmount1000,
    salePriceAmount1000: e.salePriceAmount1000,
    retailerId: e.retailerId,
    productMsgMediaData: e.mediaData,
    imageCount: e.productImageCount != null && e.productImageCount !== 0 ? e.productImageCount : 1,
    fetchedFromServer: false,
    t: e.t,
    isHidden: false
  };
};
exports.mapProductResponseToModel = C;
exports.parseDateValue = b;
exports.productVisibilitySet = function (e) {
  h.QPL.markerPoint(m.QuickLogMarkerId.WHATSAPP_PRODUCT_SET_VISIBLE, "datasource_start");
  const t = (0, u.default)(e);
  t.then(() => h.QPL.markerPoint(m.QuickLogMarkerId.WHATSAPP_PRODUCT_SET_VISIBLE, "datasource_end"));
  return (0, i.attachErrorLogger)(t, "Product visibility change failed");
};
exports.queryCatalog = function (e, t, n, r, a, o, s) {
  return (0, f.attemptWithDirectConnectionRetry)(e, i => (0, y.default)({
    catalogWid: e,
    afterCursor: t,
    limit: n,
    width: r,
    height: a,
    checkmarkCollectionId: o,
    allowShopSource: s,
    directConnectionEncryptedInfo: i
  })).catch(e => {
    if (e instanceof i.ServerStatusCodeError && e.statusCode === 404) {
      throw e;
    }
    __LOG__(4, true, new Error(), true)`Query catalog failed, error: ${e}`;
    SEND_LOGS("Query catalog failed");
    throw e;
  });
};
exports.queryCatalogHasCategories = function (e) {
  return (0, f.attemptWithDirectConnectionRetry)(e, t => (0, E.queryCatalogHasCategories)({
    catalogWid: e,
    directConnectionEncryptedInfo: t
  }));
};
exports.queryProduct = function (e, t, n, r, a, o) {
  if (o === true) {
    (0, p.qplPointProductView)("datasource_start");
  }
  const s = (0, f.attemptWithDirectConnectionRetry)(e, i => (0, S.default)(e, t, n, r, a, i));
  s.then(() => o === true && (0, p.qplPointProductView)("datasource_end"));
  return (0, i.attachErrorLogger)(s, "Query product failed");
};
exports.queryProductList = function (e, t, r, a, o) {
  if ((0, d.commerceFeaturesDisabledBySanctions)()) {
    return Promise.reject(new i.E451());
  }
  if (o) {
    (0, p.qplPointPLMDetailsView)("datasource_start");
  }
  const s = require("./628905.js").getJobManager;
  const l = (0, f.attemptWithDirectConnectionRetry)(e, n => s().waitUntilCompleted(_.jobSerializers.queryProductList(e, t, n, r, a)));
  l.then(() => o && (0, p.qplPointPLMDetailsView)("datasource_end")).catch(e => {
    if (e.errorCode === 451) {
      throw new i.E451();
    }
  });
  return l;
};
exports.reportProduct = function (e, t, n) {
  h.QPL.markerPoint(m.QuickLogMarkerId.WHATSAPP_PRODUCT_REPORT, "datasource_start");
  const r = (0, v.default)(e, t, n);
  r.then(() => h.QPL.markerPoint(m.QuickLogMarkerId.WHATSAPP_PRODUCT_REPORT, "datasource_end"));
  return (0, i.attachErrorLogger)(r, "Report product failed");
};
var i = require("./984330.js");
var a = require("./524503.js");
var o = require("./650184.js");
var s = require("./728408.js");
var l = r(require("./519897.js"));
var u = r(require("./621753.js"));
var c = require("./168965.js");
var d = require("./72696.js");
var p = require("./650809.js");
var f = require("./831426.js");
var _ = require("./323829.js");
var g = require("./694630.js");
var m = require("./316348.js");
var h = require("./555622.js");
var y = r(require("./818576.js"));
var E = require("./471564.js");
var S = r(require("./340591.js"));
var v = r(require("./901671.js"));
var T = require("./669050.js");
var M = r(require("../vendor/730381.js"));
function A(e) {
  if (e == null) {
    return null;
  } else {
    return parseInt(e, 10);
  }
}
function b(e) {
  if (e) {
    return M.default.utc(e, M.default.ISO_8601).valueOf();
  } else {
    return null;
  }
}
function C(e, t) {
  var n;
  var r;
  const i = ((n = e.capability_to_review_status[0]) === null || n === undefined ? undefined : n.value) || "APPROVED";
  const a = {
    catalogWid: t,
    id: e.id,
    isHidden: e.is_hidden || false,
    url: e.url || "",
    name: e.name,
    description: e.description || "",
    availability: (r = g.ProductAvailability.cast(e.availability)) !== null && r !== undefined ? r : g.ProductAvailability.UNKNOWN,
    maxAvailable: e.max_available,
    additionalImageCdnUrl: e.additional_image_cdn_urls.map(e => e[1].value),
    additionalImageHashes: e.image_hashes_for_whatsapp.slice(1),
    imageCdnUrl: e.image_cdn_urls[1].value,
    imageHash: e.image_hashes_for_whatsapp[0],
    reviewStatus: i,
    currency: e.currency,
    priceAmount1000: A(e.price),
    salePriceAmount1000: A(e.sale_price),
    salePriceStartDate: b(e.sale_start_date),
    salePriceEndDate: b(e.sale_end_date),
    retailerId: e.retailer_id || "",
    productMsgMediaData: null,
    imageCount: e.additional_image_cdn_urls.length + 1,
    fetchedFromServer: true,
    t: Date.now() / 1000,
    old: false,
    canAppeal: e.whatsapp_product_can_appeal,
    checkmark: e.checkmark
  };
  if (e.compliance_info) {
    a.complianceInfo = function (e) {
      const t = {
        countryCodeOrigin: e.country_code_origin
      };
      if (e.importer_name) {
        t.importerName = e.importer_name;
      }
      if (e.importer_address) {
        t.importerAddress = function (e) {
          const t = {
            street1: e.street1,
            city: e.city,
            countryCode: e.country_code
          };
          if (e.street2) {
            t.street2 = e.street2;
          }
          if (e.postal_code) {
            t.postalCode = e.postal_code;
          }
          if (e.region) {
            t.region = e.region;
          }
          if (e.country_code) {
            t.countryCode = e.country_code;
          }
          return t;
        }(e.importer_address);
      }
      return t;
    }(e.compliance_info);
  }
  return a;
}