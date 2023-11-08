var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InMemoryMediaBlobCacheImpl = exports.InMemoryMediaBlobCache = undefined;
var i = r(require("../vendor/823493.js"));
var a = require("./253972.js");
var o = require("./231385.js");
var s = require("./172259.js");
var l = r(require("./556869.js"));
class u {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 250000000;
    this._filehashesToCleanUp = new Set();
    this.getOrCreateURL = e => {
      if (this._filehashToUrl[e]) {
        this.touch(e);
        return this._filehashToUrl[e];
      }
      const t = this.get(e);
      if (!t) {
        throw (0, l.default)(`There is no blob matching filehash: ${e}.`);
      }
      const n = window.URL.createObjectURL(t);
      this._filehashToUrl[e] = n;
      return n;
    };
    this.revokeURL = (e, t) => {
      if (t) {
        if (this._filehashToUrl[e] !== t) {
          throw (0, l.default)("The url provided does not match the filehash.");
        }
        delete this._filehashToUrl[e];
        window.URL.revokeObjectURL(t);
      }
    };
    this._scheduleCleanup = (0, i.default)(() => {
      this._filehashesToCleanUp.forEach(e => {
        window.URL.revokeObjectURL(this._filehashToUrl[e]);
        delete this._filehashToUrl[e];
      });
      this._filehashesToCleanUp.clear();
    }, 0, {
      leading: false
    });
    if (e != null && e < 0) {
      throw (0, l.default)("Size limit cannot be a negative number.");
    }
    this._usageCounts = {};
    this._filehashToUrl = {};
    this._lruCache = new a.LruCache({
      sizeLimit: e,
      getSize: e => e.size,
      onEvict: e => {
        if (this._filehashToUrl[e] && this._getUsageCount(e) === 0) {
          this.revokeURL(e, this._filehashToUrl[e]);
          (0, o.getOrCreateMediaObject)(e).consolidate({
            downloadStage: s.DOWNLOAD_STAGE.INIT,
            progressiveStage: null
          });
        }
      },
      shouldEvict: e => this._getUsageCount(e) === 0
    });
  }
  get(e) {
    return this._lruCache.get(e);
  }
  has(e) {
    return this._lruCache.has(e);
  }
  touch(e) {
    this.get(e);
  }
  put(e, t) {
    this._lruCache.put(e, t);
  }
  clear() {
    this._scheduleCleanup.flush();
    this._usageCounts = {};
    Object.keys(this._filehashToUrl).forEach(e => {
      if (this._filehashToUrl[e]) {
        this.revokeURL(e, this._filehashToUrl[e]);
      }
    });
    this._filehashToUrl = {};
    this._lruCache.clear();
  }
  increaseUsageCount(e) {
    this._usageCounts[e] = this._getUsageCount(e) + 1;
    this._filehashesToCleanUp.delete(e);
  }
  decreaseUsageCount(e) {
    const t = this._getUsageCount(e);
    if (t <= 0) {
      __LOG__(4, undefined, new Error(), true, ["media-in-memory-blob-cache"])`InMemoryMediaBlobCache: Cannot decrease the usageCount to a negative number.`;
      return void SEND_LOGS("media-blob-cache-usage-count-negative-number", 1, "media-in-memory-blob-cache");
    }
    this._usageCounts[e] = t - 1;
    if (this._usageCounts[e] === 0) {
      delete this._usageCounts[e];
      this._filehashesToCleanUp.add(e);
      this._scheduleCleanup();
    }
  }
  _getUsageCount(e) {
    return this._usageCounts[e] || 0;
  }
}
exports.InMemoryMediaBlobCacheImpl = u;
const c = new u();
exports.InMemoryMediaBlobCache = c;