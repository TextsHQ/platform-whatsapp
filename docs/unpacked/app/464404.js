var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateMediaEventId = function () {
  return 1 + Math.floor(Number.MAX_SAFE_INTEGER * Math.random());
};
exports.getMetricBackendStore = function (e) {
  if (!e) {
    return u.BACKEND_STORE_TYPE.NON_DIRECT_PATH;
  }
  switch (e.slice(0, 2).toLowerCase()) {
    case "/v":
      return u.BACKEND_STORE_TYPE.EVERSTORE;
    case "/o":
      return u.BACKEND_STORE_TYPE.OIL;
    case "/m":
      return u.BACKEND_STORE_TYPE.MANIFOLD;
  }
  __LOG__(4, undefined, new Error(), true)`Unrecognized direct path type`;
  SEND_LOGS("unrecognized-direct-path-type");
  return null;
};
exports.getMetricDownloadErrorResultType = function (e) {
  if (e instanceof s.MMSThrottleError) {
    return d.MEDIA_DOWNLOAD_RESULT_TYPE.ERROR_THROTTLE;
  }
  if (e instanceof o.NoMediaHostsError) {
    return d.MEDIA_DOWNLOAD_RESULT_TYPE.ERROR_MEDIA_CONN;
  }
  if (e instanceof a.HttpNetworkError) {
    return d.MEDIA_DOWNLOAD_RESULT_TYPE.ERROR_NETWORK;
  }
  if (e instanceof a.HttpStatusCodeError) {
    switch (e.status) {
      case 404:
      case 410:
        return d.MEDIA_DOWNLOAD_RESULT_TYPE.ERROR_TOO_OLD;
      case 416:
        return d.MEDIA_DOWNLOAD_RESULT_TYPE.ERROR_CANNOT_RESUME;
      case 401:
        return d.MEDIA_DOWNLOAD_RESULT_TYPE.ERROR_INVALID_URL;
      case 429:
      case 507:
        return d.MEDIA_DOWNLOAD_RESULT_TYPE.ERROR_THROTTLE;
      default:
        return d.MEDIA_DOWNLOAD_RESULT_TYPE.ERROR_UNKNOWN;
    }
  }
  if (e.name === i.ABORT_ERROR) {
    return d.MEDIA_DOWNLOAD_RESULT_TYPE.ERROR_CANCEL;
  }
  if (e instanceof a.MmsDownloadFilehashMismatchError) {
    return d.MEDIA_DOWNLOAD_RESULT_TYPE.ERROR_ENC_HASH_MISMATCH;
  }
  return d.MEDIA_DOWNLOAD_RESULT_TYPE.ERROR_UNKNOWN;
};
exports.getMetricMediaType = function (e) {
  switch (e) {
    case "audio":
      return p.MEDIA_TYPE.AUDIO;
    case "document":
    case "thumbnail-document":
      return p.MEDIA_TYPE.DOCUMENT;
    case l.MEDIA_TYPES.NEWSLETTER_GIF:
    case "gif":
      return p.MEDIA_TYPE.GIF;
    case "image":
    case l.MEDIA_TYPES.NEWSLETTER_IMAGE:
    case "thumbnail-image":
      return p.MEDIA_TYPE.PHOTO;
    case "ppic":
      return p.MEDIA_TYPE.PROFILE_PIC;
    case "product":
      return p.MEDIA_TYPE.PRODUCT_IMAGE;
    case l.MEDIA_TYPES.NEWSLETTER_PTT:
    case "ptt":
      return p.MEDIA_TYPE.PTT;
    case l.MEDIA_TYPES.NEWSLETTER_STICKER:
    case "sticker":
      return p.MEDIA_TYPE.STICKER;
    case "video":
    case l.MEDIA_TYPES.NEWSLETTER_VIDEO:
      return p.MEDIA_TYPE.VIDEO;
    case "ptv":
      return p.MEDIA_TYPE.PUSH_TO_VIDEO;
    case "thumbnail-video":
      return p.MEDIA_TYPE.VIDEO;
    case "template":
      return p.MEDIA_TYPE.TEMPLATE;
    case "md-msg-hist":
      return p.MEDIA_TYPE.MD_HISTORY_SYNC;
    case "md-app-state":
      return p.MEDIA_TYPE.MD_APP_STATE;
    case "product-catalog-image":
      return p.MEDIA_TYPE.PRODUCT_IMAGE;
    case l.MEDIA_TYPES.NEWSLETTER_THUMBNAIL_LINK:
    case "thumbnail-link":
      return p.MEDIA_TYPE.URL;
    case "payment-bg-image":
    case "biz-cover-photo":
      return p.MEDIA_TYPE.NONE;
    default:
      throw (0, h.default)(`webMediaType is invalid: ${e}`);
  }
};
exports.getMetricOverallDownloadModeType = function (e, t, n) {
  if (y(e)) {
    return c.MEDIA_DOWNLOAD_MODE_TYPE.THUMBNAIL;
  }
  if (t === "manual") {
    return c.MEDIA_DOWNLOAD_MODE_TYPE.MANUAL;
  }
  if (n) {
    return c.MEDIA_DOWNLOAD_MODE_TYPE.PREFETCH;
  }
  return c.MEDIA_DOWNLOAD_MODE_TYPE.FULL;
};
exports.getMetricOverallUploadModeType = function (e) {
  if (y(e)) {
    return f.MEDIA_UPLOAD_MODE_TYPE.THUMBNAIL;
  }
  return f.MEDIA_UPLOAD_MODE_TYPE.REGULAR;
};
exports.getMetricUploadErrorResultType = function (e) {
  if (e instanceof s.MMSUnauthorizedError) {
    return _.MEDIA_UPLOAD_RESULT_TYPE.ERROR_NO_PERMISSIONS;
  }
  if (e instanceof s.MediaTooLargeError) {
    return _.MEDIA_UPLOAD_RESULT_TYPE.ERROR_BAD_MEDIA;
  }
  if (e instanceof s.MMSThrottleError) {
    return _.MEDIA_UPLOAD_RESULT_TYPE.ERROR_THROTTLE;
  }
  if (e instanceof a.HttpStatusCodeError && e.status >= 500) {
    return _.MEDIA_UPLOAD_RESULT_TYPE.ERROR_SERVER;
  }
  if (e instanceof o.NoMediaHostsError) {
    return _.MEDIA_UPLOAD_RESULT_TYPE.ERROR_MEDIA_CONN;
  }
  if (e.name === i.ABORT_ERROR) {
    return _.MEDIA_UPLOAD_RESULT_TYPE.ERROR_CANCEL;
  }
  if (e instanceof a.HttpNetworkError) {
    return _.MEDIA_UPLOAD_RESULT_TYPE.ERROR_UPLOAD;
  }
  return _.MEDIA_UPLOAD_RESULT_TYPE.ERROR_UNKNOWN;
};
exports.getStatusCode = function (e) {
  if (e instanceof a.HttpStatusCodeError) {
    return e.status;
  }
};
exports.logErrorUnknownDetails = function (e, t) {
  if (t == null) {
    return;
  }
  let n;
  if (e.overallDownloadResult === d.MEDIA_DOWNLOAD_RESULT_TYPE.ERROR_UNKNOWN) {
    n = g.WEBC_MEDIA_OPERATION_CODE.DOWNLOAD;
  } else if (e.overallUploadResult === _.MEDIA_UPLOAD_RESULT_TYPE.ERROR_UNKNOWN) {
    n = g.WEBC_MEDIA_OPERATION_CODE.UPLOAD;
  }
  if (n == null) {
    return;
  }
  new m.WebcMediaErrorUnknownDetailsWamEvent({
    mediaId: e.mediaId,
    webcMediaOperation: n,
    webcMediaErrorName: t.name,
    webcMediaErrorMessage: t.message
  }).commit();
};
var i = require("./898817.js");
var a = require("./791357.js");
var o = require("./271186.js");
var s = require("./263958.js");
var l = require("./708761.js");
var u = require("./542009.js");
var c = require("./648211.js");
var d = require("./432650.js");
var p = require("./684290.js");
var f = require("./123278.js");
var _ = require("./550407.js");
var g = require("./44753.js");
var m = require("./610777.js");
var h = r(require("./556869.js"));
function y(e) {
  switch (e) {
    case "thumbnail-document":
    case "thumbnail-image":
    case "thumbnail-video":
    case "thumbnail-link":
    case "newsletter-thumbnail-link":
      return true;
  }
  return false;
}