var r = require("./530066.js").default;
var i = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOAD_PRIORITY = exports.AssetLoaderImpl = undefined;
var a = i(require("../vendor/348926.js"));
var o = i(require("../vendor/252628.js"));
var s = i(require("../vendor/618446.js"));
var l = require("./898817.js");
var u = require("./250655.js");
var c = i(require("./670983.js"));
var d = i(require("./758216.js"));
var p = i(require("./229922.js"));
var f = i(require("./861474.js"));
var _ = i(require("./729519.js"));
var g = i(require("./219314.js"));
var m = require("./70354.js");
var h = require("./343168.js");
var y = require("./708733.js");
var E = require("./325568.js");
var S = require("./73170.js");
var v = require("./189662.js");
var T = i(require("./556869.js"));
var M = i(require("../vendor/441143.js"));
var A = i(require("./631873.js"));
const b = {
  INITIAL_EMOJI_LOAD: 1,
  INITIAL_ASSET_LOAD: 2,
  THEME_ASSET_LOAD: 2,
  HELP_ANIMATED_DOODLE: 2,
  LAZY_LOAD_EMOJI: 2,
  NOTIFICATION_ICON: 2
};
exports.LOAD_PRIORITY = b;
exports.AssetLoaderImpl = class {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 90;
    this._assetStyle = new _.default("asset-style");
    this._requestedAssets = {};
    this._loadingDataMap = {};
    this._getEmojiForPlatform = null;
    this._currentResolution = f.default.currentRes;
    this._currentlyLoadingCount = 0;
    this._queue = new d.default(e => -e.priority);
    this._hasLoggedDecrementBelowZero = false;
    this.loadAssetsForCurrentDpi = () => {
      const e = f.default.currentRes;
      const t = this._currentResolution;
      if (e !== t) {
        this._currentResolution = e;
        Object.keys(this._requestedAssets).forEach(e => {
          this._cancelLoad(e, t);
        });
        this._loadAssets((0, o.default)(this._requestedAssets), b.INITIAL_EMOJI_LOAD, {
          forceCheck: false
        }).catch((0, l.catchAbort)(() => {}));
      }
    };
    this._maxConcurrentRequests = e;
  }
  initEmojiAsset(e) {
    this._getEmojiForPlatform = e;
  }
  loadInitialAssets(e) {
    const t = new v.WebcAssetLoadWamEvent({
      webcAssetName: "initial-assets",
      webcAssetFromCache: false,
      webcAssetCacheType: S.WEBC_ASSET_CACHE_TYPE_CODE.UNCACHED
    });
    this._loadAssets(e, b.INITIAL_ASSET_LOAD, {
      estimateStorage: true
    }).then(() => {
      t.markWebcAssetLoadT();
      t.commit();
      const e = t.webcAssetLoadT;
      __LOG__(2)`AssetLoader:loadInitialAssets complete in ${e}ms`;
    }).catch((0, l.catchAbort)(() => {
      __LOG__(2)`AssetLoader:loadInitialAssets cancelled by more recent request.`;
    }));
  }
  loadEmoji(e, t) {
    if (this._getEmojiForPlatform && this._currentPlatform) {
      const n = this._getEmojiForPlatform(this._currentPlatform);
      const r = m.EmojiUtil.getBucket(e);
      const i = this._getEmojiPrefix();
      const a = n.get(`${i}b${r}`);
      const o = this._currentResolution;
      if (a) {
        return this.loadAsset(a, t, false).catch((0, l.catchAbort)(() => {
          __LOG__(2)`AssetLoader: loadEmoji Cancelled by more recent request: ${a.id}-${o}`;
        }));
      } else {
        return Promise.reject((0, T.default)("The given emoji glyph id was not found"));
      }
    }
    return Promise.reject((0, T.default)("emojiForPlatform or currentPlatform are not set"));
  }
  loadEmojis() {
    const e = (0, c.default)(this._currentPlatform, "this._currentPlatform");
    (0, M.default)(this._getEmojiForPlatform != null, "Emojis were loaded before initializing the emoji assets!");
    const t = Array.from(this._getEmojiForPlatform(e).values());
    const n = new v.WebcAssetLoadWamEvent({
      webcAssetName: "emojis",
      webcAssetFromCache: false,
      webcAssetCacheType: S.WEBC_ASSET_CACHE_TYPE_CODE.UNCACHED
    });
    this._loadAssets(t, b.INITIAL_EMOJI_LOAD, {
      estimateStorage: true
    }).then(() => {
      n.markWebcAssetLoadT();
      n.commit();
      const e = n.webcAssetLoadT;
      __LOG__(2)`AssetLoader:loadEmojis complete in ${e}ms`;
    }).catch((0, l.catchAbort)(() => {
      __LOG__(2)`AssetLoader:loadEmojis cancelled by more recent request.`;
    }));
  }
  loadAsset(e, t) {
    let n = !(arguments.length > 2 && arguments[2] !== undefined) || arguments[2];
    const {
      id: i
    } = e;
    const a = f.default.currentRes;
    const o = this._requestedAssets[i];
    if (o && !(0, s.default)(e, o)) {
      return Promise.reject((0, T.default)(["Attempted to load an asset using an already used ID"].join("\n")));
    }
    this._requestedAssets[i] = e;
    this._loadingDataMap[i] = this._loadingDataMap[i] || {};
    const u = a === "high" ? "low" : "high";
    this._cancelLoad(i, u);
    const c = this._loadingDataMap[i][a];
    if (c && !n) {
      return c.promise;
    }
    const d = new g.default(e, a, t);
    const p = new r();
    const {
      signal: _
    } = p;
    const m = this._buildPromise(d, p).then(t => {
      if (_.aborted) {
        throw new l.AbortError();
      }
      const {
        selectors: n
      } = e;
      if (n) {
        this._assetStyle.setRule(`${n.join(", ")}`, {
          "background-image": `url('${t}')`
        });
      }
      return t;
    }).catch(e => {
      const t = this._loadingDataMap[i][a];
      const n = h !== t;
      if (!n) {
        this._loadingDataMap[i][a] = null;
      }
      if (e.name === l.ABORT_ERROR && (__LOG__(2)`Asset load cancelled by more recent request: ${i}-${a}`, n && t)) {
        return t.promise;
      }
      throw e;
    });
    d.setConsumerPromise(m);
    const h = {
      promise: m,
      abort: e => {
        this._abortUrlPromise(d, e);
      }
    };
    this._loadingDataMap[i][a] = h;
    if (c) {
      c.abort(false);
    }
    this._startLoad();
    return m;
  }
  _buildPromise(e, t) {
    const n = new Promise(n => {
      e.setConsumerPromiseResolve(n, t);
      this._queue.push(e);
    });
    return (0, p.default)(n, t.signal);
  }
  _startLoad() {
    if (!(this._currentlyLoadingCount >= this._maxConcurrentRequests)) {
      for (let e = 0; e < this._maxConcurrentRequests - this._currentlyLoadingCount; e++) {
        const e = this._queue.pull();
        if (!e) {
          return;
        }
        this._currentlyLoadingCount += 1;
        (0, E.loadUrl)(e).then(() => {
          this._decrementCurrentlyLoadingCount();
          this._startLoad();
        }).catch((0, l.catchAbort)(() => {
          this._decrementCurrentlyLoadingCount();
          this._startLoad();
        })).catch(t => {
          this._decrementCurrentlyLoadingCount();
          e.retryCount += 1;
          const n = (0, u.expBackoff)(e.retryCount, 120000, 1000, 0.1);
          self.setTimeout(() => {
            this._queue.push(e);
            this._startLoad();
          }, n);
          this._startLoad();
          (0, E.getSupportedImageFormatUrl)(e).then(e => {
            const n = e.split("/");
            __LOG__(3)`Asset: ${n[n.length - 1]} failed. Retrying... ${t.toString()}`;
          });
        });
      }
    }
  }
  _abortUrlPromise(e) {
    let t = !(arguments.length > 1 && arguments[1] !== undefined) || arguments[1];
    if (e.getLoadUrlPromise()) {
      e.abortLoadUrlPromise();
      const n = e.getConsumerPromise();
      if (t && n) {
        e.abortConsumerPromise();
      }
    }
    this._startLoad();
  }
  _cancelLoad(e, t) {
    var n;
    const r = (n = this._loadingDataMap[e]) === null || n === undefined ? undefined : n[t];
    if (r) {
      this._loadingDataMap[e][t] = null;
      r.abort(true);
    }
  }
  setPlatform(e) {
    if (e === this._currentPlatform) {
      return;
    }
    this._currentPlatform = e;
    const t = ((0, h.getEmojiTypeFromPlatform)(e) === y.EMOJI_TYPE.APPLE ? y.EMOJI_TYPE.WHATSAPP : y.EMOJI_TYPE.APPLE) === y.EMOJI_TYPE.APPLE ? "emoji-apple-" : "emoji-wa-";
    Object.keys(this._requestedAssets).forEach(e => {
      if (e.startsWith(t)) {
        this._cancelLoad(e, "high");
        this._cancelLoad(e, "low");
      }
    });
    if (this._getEmojiForPlatform == null) {
      return;
    }
    const n = Array.from(this._getEmojiForPlatform(e).values());
    this._loadAssets(n, b.INITIAL_EMOJI_LOAD, {
      forceCheck: false
    });
  }
  _getEmojiPrefix() {
    if ((0, h.getEmojiTypeFromPlatform)(this._currentPlatform) === y.EMOJI_TYPE.APPLE) {
      return "emoji-apple-";
    } else {
      return "emoji-wa-";
    }
  }
  _loadAssets(e, t, n) {
    var r = this;
    return (0, a.default)(function* () {
      const i = (n == null ? undefined : n.forceCheck) !== false;
      const a = (n == null ? undefined : n.estimateStorage) === true;
      const s = yield Promise.all(e.map(e => r.loadAsset(e, t, i)));
      if (A.default) {
        (0, A.default)({
          keep: (0, o.default)(r._requestedAssets),
          estimateStorage: a
        });
      }
      return s;
    })();
  }
  _decrementCurrentlyLoadingCount() {
    if (this._currentlyLoadingCount <= 0 && !this._hasLoggedDecrementBelowZero) {
      this._hasLoggedDecrementBelowZero = true;
      __LOG__(4, undefined, new Error(), true)`Assertion failed!`;
      SEND_LOGS("Tried to decrease _loadingCount below zero, would have been negative.");
    }
    this._currentlyLoadingCount = Math.max(0, this._currentlyLoadingCount - 1);
  }
};