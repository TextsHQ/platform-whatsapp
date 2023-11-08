Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.STATUS_IMAGE_RATIO_THRESHOLD = exports.HQ_PREVIEW_LIFESPAN = undefined;
exports.displayHighQualityLinkPreview = function (e, t) {
  if (!Boolean(e.thumbnailDirectPath || e.thumbnailHQ) || e.thumbnailHeight == null || e.thumbnailWidth == null) {
    return false;
  }
  if (o(e.t)) {
    return false;
  }
  if (t === i.DISPLAY_TYPE.GALLERY) {
    return false;
  }
  if (t === i.DISPLAY_TYPE.STATUS && e.thumbnailHeight != null && e.thumbnailWidth != null) {
    return e.thumbnailWidth / e.thumbnailHeight >= 1.4;
  }
  return true;
};
exports.hqLinkPreviewExpired = o;
var r = require("./632157.js");
var i = require("./356097.js");
const a = 2592000;
function o(e) {
  return (0, r.unixTime)() - e > a;
}
exports.HQ_PREVIEW_LIFESPAN = a;
exports.STATUS_IMAGE_RATIO_THRESHOLD = 1.4;