var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FavoriteStickerCollection = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./819416.js");
var o = require("./418987.js");
var s = require("./287461.js");
var l = require("./392125.js");
var u = r(require("./43085.js"));
var c = require("./806279.js");
var d = require("./744526.js");
var p = require("./719621.js");
var f = require("./211368.js");
var _ = require("./164832.js");
var g = r(require("./608938.js"));
function m(e, t) {
  if (e.timestamp < t.timestamp) {
    return 1;
  } else {
    return -1;
  }
}
class h extends l.BaseCollection {
  _comparator(e, t) {
    return m(e, t);
  }
}
h.model = u.default;
class y extends l.BaseCollection {
  constructor() {
    super(...arguments);
    this._emojiToCollection = new Map();
    this._hasInitializedFromCache = false;
  }
  _comparator(e, t) {
    return m(e, t);
  }
  _updateEmojiToCollection(e) {
    var t;
    var n;
    if (this.get(e.id) == null) {
      return;
    }
    const r = e == null || (t = e.sticker) === null || t === undefined || (n = t.mediaData) === null || n === undefined ? undefined : n.emojis;
    if (!(r == null)) {
      r.forEach(t => {
        var n;
        const r = (n = this._emojiToCollection.get(t)) !== null && n !== undefined ? n : new h();
        r.add(e, {
          sort: true
        });
        this._emojiToCollection.set(t, r);
      });
    }
  }
  add(e, t) {
    const n = super.add(e, t);
    if ((0, s.getABPropConfigValue)("web_sticker_suggestions_enable")) {
      n.forEach(e => {
        var t;
        var n;
        if (e) {
          if (((t = e.sticker) === null || t === undefined || (n = t.mediaData) === null || n === undefined ? undefined : n.emojis) != null) {
            this._updateEmojiToCollection(e);
          } else {
            this.listenToOnce(e.sticker, "sticker_mediaData_emojis_updated", () => {
              this._updateEmojiToCollection(e);
            });
            d.AutoDownloadQueue.enqueue(e.sticker, d.AUTO_DOWNLOAD_TYPES.MEDIA);
          }
        }
      });
    }
    return n;
  }
  remove(e, t) {
    const n = super.remove(e, t);
    if ((0, s.getABPropConfigValue)("web_sticker_suggestions_enable")) {
      n.forEach(e => {
        var t;
        var n;
        const r = e == null || (t = e.sticker) === null || t === undefined || (n = t.mediaData) === null || n === undefined ? undefined : n.emojis;
        if (!(r == null)) {
          r.forEach(t => {
            const n = this._emojiToCollection.get(t);
            if (e != null) {
              if (!(n == null)) {
                n.remove(e);
              }
            }
          });
        }
      });
    }
    return n;
  }
  reset() {
    super.reset();
    if ((0, s.getABPropConfigValue)("web_sticker_suggestions_enable")) {
      this._emojiToCollection.forEach(e => {
        e.reset();
      });
      this._emojiToCollection.clear();
    }
  }
  _addSaveTask() {
    if (!(this._idleTaskId && c.IdleCallbackTasks.isInQueue(this._idleTaskId))) {
      this._idleTaskId = c.IdleCallbackTasks.enqueue(() => {
        this._saveToDb();
      });
    }
  }
  _saveToDb() {
    var e = this;
    return (0, i.default)(function* () {
      const t = e.toArray().map(e => {
        const t = e.sticker.toDbData();
        return {
          id: e.id,
          timestamp: e.timestamp,
          sticker: {
            index: t.index,
            width: t.width,
            height: t.height,
            size: t.size,
            mimetype: t.mimetype,
            filehash: t.filehash,
            directPath: t.directPath,
            mediaKey: t.mediaKey,
            mediaKeyTimestamp: t.mediaKeyTimestamp,
            encFilehash: t.encFilehash,
            deprecatedMms3Url: t.deprecatedMms3Url,
            type: "sticker"
          },
          stickerHashWithoutMeta: e.stickerHashWithoutMeta,
          isFavorite: e.isFavorite,
          deviceId: e.deviceId
        };
      });
      __LOG__(2)`Favorite Stickers: need to save stickers in DB with length: ${t.length}`;
      try {
        const e = (0, f.getFavoriteStickersTable)();
        let n = yield e.count();
        __LOG__(2)`Favorite Stickers: before save, stickers in DB with length: ${n}`;
        yield e.clear();
        yield e.bulkCreateOrReplace(t);
        n = yield e.count();
        __LOG__(2)`Favorite Stickers: after save, stickers in DB with length: ${n}`;
      } catch (e) {
        __LOG__(4, undefined, new Error(), true)`FavoriteStickerCollection attempt to save to database failed`;
        SEND_LOGS(e);
      }
    })();
  }
  _dbDataToModel(e) {
    return new u.default({
      id: e.id,
      timestamp: e.timestamp,
      stickerHashWithoutMeta: e.stickerHashWithoutMeta,
      sticker: new _.StickerModel(e.sticker)
    });
  }
  _getStickerHashWithoutMeta(e) {
    return (0, i.default)(function* () {
      const t = yield p.LruMediaStore.get(e);
      if (t == null) {
        return e;
      } else {
        return (0, g.default)(t);
      }
    })();
  }
  addOrUpdateStickers(e, t) {
    var n = this;
    let r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (0, o.interpretAsNumber)((0, o.extractDeviceId)((0, a.getMyDeviceJid)()));
    return (0, i.default)(function* () {
      const a = e.filter(e => !n.get(e.id));
      __LOG__(2)`Favorite Stickers: length of stickers will be enqueued: ${e.length}`;
      if (a.length === 0) {
        return;
      }
      const o = yield Promise.all(a.map(function () {
        var e = (0, i.default)(function* (e) {
          return new u.default({
            id: e.filehash,
            sticker: e,
            stickerHashWithoutMeta: yield n._getStickerHashWithoutMeta(e.filehash),
            timestamp: t,
            isFavorite: true,
            deviceId: r
          });
        });
        return function () {
          return e.apply(this, arguments);
        };
      }()));
      n.addAndSort(o);
      if (n._hasInitializedFromCache) {
        __LOG__(2)`Favorite Stickers: need to save collection to DB.`;
        n._addSaveTask();
      }
    })();
  }
  addAndSort(e) {
    this.add(e);
    this.sort();
  }
  removeAndSave(e) {
    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const n = this.remove(e, t);
    if (n.length) {
      __LOG__(2)`Favorite Stickers: length of stickers will be removed: ${n.length}`;
      this._addSaveTask();
    }
    return n;
  }
  initializeFromCache(e) {
    __LOG__(2)`Favorite Stickers: need to initialize stickers from DB with length: ${e.length}`;
    const t = e.map(e => this._dbDataToModel(e));
    this.addAndSort(t);
    const n = this.toArray();
    if (n.length > 0) {
      const e = new Set(t.map(e => e.id));
      if (n.some(t => !e.has(t.id))) {
        this._addSaveTask();
      }
    }
    this._hasInitializedFromCache = true;
  }
  updateFavoriteStickerWithNewSticker(e, t) {
    const n = this.get(e);
    if (n != null) {
      n.sticker = new _.StickerModel(t);
      this.set([n], {
        remove: false,
        add: false,
        silent: true,
        sort: false
      });
      this._addSaveTask();
    }
  }
  getSuggestionsFromEmoji(e) {
    var t;
    if ((t = this._emojiToCollection.get(e)) === null || t === undefined) {
      return undefined;
    } else {
      return t.map(e => e.sticker);
    }
  }
}
y.model = u.default;
const E = new y();
exports.FavoriteStickerCollection = E;