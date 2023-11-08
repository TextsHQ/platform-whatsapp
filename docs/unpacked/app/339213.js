var r = require("./530066.js").default;
var i = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadProductImage = function () {
  return c.apply(this, arguments);
};
var a = i(require("../vendor/348926.js"));
var o = require("./698210.js");
var s = require("./708761.js");
var l = i(require("./92577.js"));
var u = require("./495588.js");
function c() {
  return (c = (0, a.default)(function* (e, t) {
    const n = yield (0, o.blobToArrayBuffer)(e.forceToBlob()).then(e => l.default.unencryptedUpload({
      file: e,
      hash: t,
      signal: new r().signal,
      type: s.MEDIA_TYPES.PRODUCT_CATALOG_IMAGE,
      uploadOrigin: u.UPLOAD_ORIGIN_TYPE.PRODUCT_CATALOG,
      isViewOnce: false
    }));
    return new URL(n.directPath, "https://mmg.whatsapp.net").toString();
  })).apply(this, arguments);
}