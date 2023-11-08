var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Product = exports.MIN_PRICE = exports.MAX_PRODUCT_IMAGES = exports.MAX_PRICE = undefined;
var i = require("./481173.js");
var a = require("./698210.js");
var o = r(require("./116253.js"));
var s = r(require("./756680.js"));
var l = require("./172259.js");
var u = require("./527587.js");
exports.MIN_PRICE = 0;
exports.MAX_PRICE = 4503599627370496;
exports.MAX_PRODUCT_IMAGES = 10;
class c extends i.BaseModel {
  constructor() {
    super(...arguments);
    this.old = (0, i.session)(false);
    this.checkmark = (0, i.session)(false);
    this.id = (0, i.prop)();
    this.isHidden = (0, i.prop)();
    this.catalogWid = (0, i.prop)();
    this.url = (0, i.prop)();
    this.name = (0, i.prop)();
    this.description = (0, i.prop)();
    this.availability = (0, i.prop)();
    this.maxAvailable = (0, i.prop)();
    this.reviewStatus = (0, i.prop)();
    this.canAppeal = (0, i.prop)();
    this.currency = (0, i.prop)();
    this.priceAmount1000 = (0, i.prop)();
    this.salePriceAmount1000 = (0, i.prop)();
    this.salePriceStartDate = (0, i.prop)();
    this.salePriceEndDate = (0, i.prop)();
    this.retailerId = (0, i.prop)();
    this.productImageCollection = (0, i.session)();
    this.imageCount = (0, i.prop)();
    this.index = (0, i.prop)();
    this.additionalImageCdnUrl = (0, i.prop)();
    this.additionalImageHashes = (0, i.prop)();
    this.imageCdnUrl = (0, i.prop)();
    this.imageHash = (0, i.prop)();
    this.complianceInfo = (0, i.prop)();
    this.productMsgMediaData = (0, i.session)();
    this.fetchedFromServer = (0, i.session)();
    this.t = (0, i.prop)();
  }
  initialize() {
    super.initialize();
    this.productImageCollection = new u.ProductImageCollection();
    this.listenTo(this, "change:imageCdnUrl", this.triggerMainImageUpdate);
    this.initImageUpdate();
  }
  triggerAdditionalImageUpdate() {
    var e;
    let t = 0;
    if (!((e = this.additionalImageCdnUrl) === null || e === undefined)) {
      e.forEach((e, n) => {
        this.productImageCollection.gadd({
          id: `_${n + 1}`,
          mediaUrl: e,
          fetchedFromServer: this.fetchedFromServer,
          old: false
        }, {
          merge: true
        });
        t = n + 1;
      });
    }
    this.productImageCollection.filter((e, n) => n > t).forEach(e => e.markOld());
  }
  triggerMainImageUpdate() {
    var e;
    if (this.imageCdnUrl) {
      this.productImageCollection.gadd({
        id: "_0",
        mediaUrl: this.imageCdnUrl,
        fetchedFromServer: this.fetchedFromServer,
        old: false
      }, {
        merge: true
      });
    } else if (!((e = this.productImageCollection.get("_0")) === null || e === undefined)) {
      e.markOld();
    }
  }
  initImageUpdate() {
    if (this.fetchedFromServer || !this.productMsgMediaData) {
      this.triggerMainImageUpdate();
    } else {
      for (let e = 0; e < this.imageCount; e++) {
        this.productImageCollection.gadd({
          id: `_${e}`,
          type: "product",
          mediaData: new o.default({
            mediaStage: l.MEDIA_DATA_STAGE.PREPARING
          }),
          fetchedFromServer: this.fetchedFromServer,
          old: false
        }, {
          merge: true
        });
      }
    }
  }
  markOld() {
    this.old = true;
  }
  lazyloadProductImageCollection() {
    this.triggerAdditionalImageUpdate();
    return this.productImageCollection;
  }
  getProductImageCollectionCount() {
    return this.productImageCollection.length;
  }
  getProductImageCollectionHead() {
    return this.productImageCollection.head();
  }
  getHeadImageFile() {
    var e;
    const {
      productImageCollection: t,
      name: n
    } = this;
    const r = t.head();
    if (!r) {
      return;
    }
    let i;
    const o = (e = r.mediaData) === null || e === undefined ? undefined : e.mediaBlob;
    if (o._blob != null) {
      i = o._blob;
    } else if (o instanceof s.default) {
      i = o.getBlob();
    }
    if (i == null) {
      return;
    }
    return (0, a.createFile)([i], `${n}.jpg`, {
      type: "image/jpeg"
    });
  }
  evictImagesFromCache() {
    this.productImageCollection.forEach(e => e.evictFromCache());
  }
  getPreviewImage() {
    return this.productImageCollection.head();
  }
  getCollection() {
    return this.collection;
  }
}
c.Proxy = "product";
const d = (0, i.defineModel)(c);
exports.Product = d;