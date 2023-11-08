var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MediaHost = exports.HOST_TYPE = undefined;
var i = r(require("../vendor/81109.js"));
var a = require("./708761.js");
const o = new Set(a.MEDIA_TYPE_VALUES);
const s = Object.freeze({
  PRIMARY: "primary",
  FALLBACK: "fallback"
});
exports.HOST_TYPE = s;
class l {
  constructor(e) {
    this.hostname = e.hostname;
    this.ips = e.ips || [];
    this.type = e.type;
    this.class = e.class;
    const {
      downloadBuckets: t,
      supportedDownloadTypes: n,
      supportedUploadTypes: r
    } = function (e) {
      var t;
      var n;
      const r = e || [];
      let i;
      let a;
      let s;
      for (const e of r) {
        if (e.download) {
          var l;
          i = (l = i) !== null && l !== undefined ? l : new Set();
          for (const t of e.download) {
            i.add(t);
          }
        }
        if (e.upload) {
          var u;
          a = (u = a) !== null && u !== undefined ? u : new Set();
          for (const t of e.upload) {
            a.add(t);
          }
        }
        if (e.downloadBuckets) {
          s = e.downloadBuckets.map(e => parseInt(e, 10));
        }
      }
      return {
        supportedDownloadTypes: (t = i) !== null && t !== undefined ? t : o,
        supportedUploadTypes: (n = a) !== null && n !== undefined ? n : o,
        downloadBuckets: s
      };
    }(e.rules);
    this.downloadBuckets = t;
    this._supportedDownloadTypes = n;
    this._supportedUploadTypes = r;
    this.fallback = e.fallback != null ? new l((0, i.default)((0, i.default)((0, i.default)({}, e), e.fallback), {}, {
      type: "fallback",
      fallback: undefined
    })) : null;
  }
  equals(e) {
    return this.hostname === (e == null ? undefined : e.hostname);
  }
  isFallback() {
    return this.type === s.FALLBACK;
  }
  supportsDownloadMediaType(e) {
    return this._supportedDownloadTypes.has(function (e) {
      if (e === "ptv") {
        return a.MEDIA_TYPES.VIDEO;
      }
      return e;
    }(e));
  }
  supportsUploadMediaType(e) {
    return this._supportedUploadTypes.has(function (e) {
      switch (e) {
        case "ptv":
          return a.MEDIA_TYPES.VIDEO;
        case "product-catalog-image":
          return a.MEDIA_TYPES.PRODUCT;
        default:
          return e;
      }
    }(e));
  }
  setSelectedBucket(e) {
    this.selectedBucket = e;
  }
}
exports.MediaHost = l;