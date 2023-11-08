var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RecentStickerCollectionMd = exports.RecentStickerCollection = exports.RECENT_STICKERS_LIMIT = undefined;
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./632157.js");
var s = require("./287461.js");
var l = require("./392125.js");
var u = require("./33786.js");
var c = require("./806279.js");
var d = require("./744526.js");
var p = require("./231385.js");
var f = require("./61113.js");
var _ = r(require("./389779.js"));
var g = require("./102671.js");
var m = require("./164832.js");
exports.RECENT_STICKERS_LIMIT = 32;
class h extends l.BaseCollection {
  constructor() {
    super(...arguments);
    this._emojiToCollection = new Map();
    this._hasInitializedFromCache = false;
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
        const r = (n = this._emojiToCollection.get(t)) !== null && n !== undefined ? n : new u.GroupedRecentStickerCollection();
        r.add(e, {
          sort: true
        });
        this._emojiToCollection.set(t, r);
      });
    }
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
  reset() {
    super.reset();
    if ((0, s.getABPropConfigValue)("web_sticker_suggestions_enable")) {
      this._emojiToCollection.forEach(e => {
        e.reset();
      });
      this._emojiToCollection.clear();
    }
  }
  _comparator(e, t) {
    if (e.weight !== t.weight) {
      if (e.weight < t.weight) {
        return 1;
      } else {
        return -1;
      }
    } else if (e.timestamp < t.timestamp) {
      return 1;
    } else {
      return -1;
    }
  }
  _dbDataToModel(e) {
    var t;
    return new _.default({
      id: e.id,
      timestamp: e.timestamp,
      msgId: e.msgId,
      sticker: new m.StickerModel(e.sticker),
      weight: (t = e.weight) !== null && t !== undefined ? t : 1,
      isNewSticker: e.isNewSticker
    });
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
    return (0, a.default)(function* () {
      const t = e.toArray().map(e => {
        const t = e.sticker.toDbData();
        return {
          id: e.id,
          timestamp: e.timestamp,
          msgId: e.msgId,
          weight: e.weight,
          sticker: {
            id: t.id,
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
          }
        };
      });
      __LOG__(2)`Recent Stickers: need to save stickers in DB with length: ${t.length}`;
      try {
        const e = (0, g.getRecentStickersTable)();
        let n = yield e.count();
        __LOG__(2)`Recent Stickers: before save, stickers in DB with length: ${n}`;
        yield e.clear();
        yield e.bulkCreateOrReplace(t);
        n = yield e.count();
        __LOG__(2)`Recent Stickers: after save, stickers in DB with length: ${n}`;
      } catch (e) {
        __LOG__(4, undefined, new Error(), true)`RecentStickerCollection attempt to save to database failed`;
        SEND_LOGS(e);
      }
    })();
  }
  addStickerWithMediaData(e) {
    const {
      mediaKey: t,
      mediaData: n,
      encFilehash: r,
      id: a,
      stickerSentTs: o
    } = e;
    this.addNewSticker(new m.StickerModel((0, i.default)((0, i.default)({}, n), {}, {
      mediaKey: t,
      encFilehash: r
    })), a.toString(), o);
  }
  addNewSticker(e, t, n) {
    if (!e.id) {
      e.id = e.filehash;
    }
    const r = this.get(e.id) == null;
    this.addStickersAndPersistToDB([[e, n != null ? n : (0, o.unixTimeMs)(), t]], r);
  }
  addStickersAndPersistToDB(e) {
    let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    __LOG__(2)`Recent Stickers: length of stickers will be enqueued: ${e.length}`;
    if (e.length === 0) {
      return;
    }
    const n = new Set(e.map(e => e[0].id));
    const r = e.reduce((e, t) => {
      let [r, i, a] = t;
      if (n.has(r.id)) {
        n.delete(r.id);
        return [[r, i, a]].concat(e);
      } else {
        return e;
      }
    }, []);
    const i = [];
    const a = [];
    r.forEach(e => {
      let [n, r, o] = e;
      const s = this.get(n.id);
      if (s) {
        if (s.timestamp <= r) {
          s.timestamp = r;
        }
        a.push(s);
      } else {
        const e = this._dbDataToModel({
          id: n.id,
          timestamp: r,
          sticker: {
            id: n.id,
            index: n.index,
            width: n.width,
            height: n.height,
            size: n.size,
            mimetype: n.mimetype,
            filehash: n.filehash,
            directPath: n.directPath,
            mediaKey: n.mediaKey,
            mediaKeyTimestamp: n.mediaKeyTimestamp,
            encFilehash: n.encFilehash,
            deprecatedMms3Url: n.deprecatedMms3Url,
            type: "sticker"
          },
          msgId: o,
          weight: n.weight != null ? Number(n.weight.toFixed(2)) : 1,
          isNewSticker: t
        });
        i.push(e);
        a.push(e);
      }
    });
    if (a.length > 0) {
      __LOG__(2)`Recent Stickers: adjust weight and resort stickers.`;
      this.adjustWeight(a);
      this.addAndSort(i);
      if (this._hasInitializedFromCache) {
        __LOG__(2)`Recent Stickers: need to save collection to DB.`;
        this._addSaveTask();
      }
    }
  }
  replaceAndEnqueue(e) {
    let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    if (this.length > 0) {
      const e = this.map(e => e.id);
      this.remove(e);
    }
    if (e.length !== 0) {
      this.addStickersAndPersistToDB(e, t);
    } else {
      this._addSaveTask();
    }
  }
  updateDirectPath(e, t) {
    const n = this.get(e);
    if (n == null ? undefined : n.sticker) {
      n.sticker.directPath = t;
      this.set([n], {
        remove: false,
        add: false,
        silent: true,
        sort: false
      });
      this._addSaveTask();
    } else {
      __LOG__(4, undefined, new Error())`updateDirectPaths called with a stickerId that doesn't match any in the collection`;
    }
  }
  updateStickerMediaData(e, t) {
    const n = this.get(e);
    if (t != null && n != null) {
      if (t.directPath != null) {
        n.sticker.directPath = t.directPath;
      }
      if (t.encFilehash != null) {
        n.sticker.encFilehash = t.encFilehash;
      }
      if (t.mediaKey) {
        n.sticker.mediaKey = t.mediaKey;
      }
      if (t.mediaKeyTimestamp) {
        n.sticker.mediaKeyTimestamp = t.mediaKeyTimestamp;
      }
      this.set([n], {
        remove: false,
        add: false,
        silent: true,
        sort: false
      });
      this._addSaveTask();
    }
  }
  updateRecentStickerWithNewSticker(e, t) {
    const n = this.get(e);
    if (n != null) {
      n.sticker = new m.StickerModel(t);
      this.set([n], {
        remove: false,
        add: false,
        silent: true,
        sort: false
      });
      this._addSaveTask();
    }
  }
  associateStickerWithMsg(e, t) {
    return (0, a.default)(function* () {
      var n;
      const {
        messages: r
      } = yield f.MsgCollection.getMessagesById([t]);
      const i = ((n = e.mediaObject) === null || n === undefined ? undefined : n.associatedMsgs()) || [];
      if (!(!e.mediaObject || i.length !== 0 && r.some(e => i.includes(e)))) {
        (0, p.associateMediaWithMsg)(e.mediaObject, r[r.length - 1]);
      }
    })();
  }
  initializeFromCache(e) {
    this._hasInitializedFromCache = true;
    const t = e.map(e => {
      const t = this._dbDataToModel(e);
      if (t.msgId != null) {
        this.associateStickerWithMsg(t.sticker, t.msgId);
      }
      return t;
    });
    const n = this.toArray();
    if (n.length > 0) {
      t.forEach(e => e.weight = Number((e.weight * 0.9 ** n.length).toFixed(2)));
    }
    this.addAndSort(t);
    if (n.length) {
      const e = new Set(t.map(e => e.id));
      if (n.some(t => !e.has(t))) {
        this._addSaveTask();
      }
    }
  }
  addAndSort(e) {
    this.add(e);
    this.sort();
    if (this.length > 32 && this._hasInitializedFromCache) {
      __LOG__(2)`Recent Stickers: stickers length ${this.length} is over the limit.`;
      this.set(this.toArray().slice(0, 32));
    }
  }
  removeAndSave(e) {
    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const n = this.remove(e, t);
    if (n.length) {
      this._addSaveTask();
    }
    __LOG__(2)`Recent Stickers: stickers length ${this.length} after remove.`;
    return n;
  }
  adjustWeight(e) {
    const t = new Set(e.map(e => e.id));
    this.filter(e => !t.has(e.id)).forEach(e => e.weight = Number((e.weight * 0.9).toFixed(2)));
    e.forEach(e => {
      if (e.isNewSticker === true) {
        e.isNewSticker = undefined;
      } else {
        e.weight = Number((e.weight + 1).toFixed(2));
      }
    });
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
exports.RecentStickerCollection = h;
h.model = _.default;
const y = new h();
exports.RecentStickerCollectionMd = y;