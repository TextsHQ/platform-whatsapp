var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RecentStickerCollectionImpl = exports.RecentStickerCollection = exports.RECENT_STICKERS_LIMIT = undefined;
var i = r(require("../vendor/348926.js"));
var a = r(require("./670983.js"));
var o = require("./392125.js");
var s = require("./445729.js");
var l = require("./94602.js");
var u = require("./164832.js");
const c = 32;
exports.RECENT_STICKERS_LIMIT = c;
class d extends o.BaseCollection {
  constructor() {
    super(...arguments);
    this._checksum = "";
    this._syncStatus = "NONE";
    this._weightMap = new Map();
    this._sortTrimScale = () => {
      const e = this.length;
      if (!e) {
        return;
      }
      this.sort();
      if (e > c) {
        for (let t = c; t < e; t++) {
          this._weightMap.delete((0, a.default)(this.at(t), "this.at(i)").id);
        }
        this.remove(this.slice(c));
      }
      const t = this.head();
      const n = this.last();
      if (!(t && n && this._getWeight(t) < 10 && this._getWeight(n) > 0.01)) {
        this.forEach((t, n) => {
          this._weightMap.set(t.id, 1 + (e - n) / e * 3);
        });
      }
    };
  }
  _comparator(e, t) {
    if (s.Conn.platform === l.PLATFORMS.ANDROID) {
      return this._getWeight(t) - this._getWeight(e);
    } else if (e.index > t.index) {
      return 1;
    } else {
      return -1;
    }
  }
  _getWeight(e) {
    return (0, a.default)(this._weightMap.get(e.id), "this._weightMap.get(sticker.id)");
  }
  enqueue(e) {
    if (e.length !== 0) {
      if (s.Conn.platform === l.PLATFORMS.ANDROID) {
        this._enqueueAndroid(e);
      } else {
        this._enqueueiOS(e);
      }
    }
  }
  addStickerWithMediaData(e) {
    const t = new u.StickerModel(e);
    if (!t.id) {
      t.id = t.filehash;
    }
    this.enqueue([t]);
  }
  _enqueueAndroid(e) {
    e.forEach(e => {
      if (!this.get(e.id)) {
        this._weightMap.set(e.id, 0);
        this.add(e);
      }
      this.forEach(t => {
        let n = this._getWeight(t);
        if (t.id === e.id) {
          n += 1;
        } else {
          n *= 0.9;
        }
        this._weightMap.set(t.id, Math.round(n * 1000) / 1000);
      });
    });
    this._sortTrimScale();
  }
  _enqueueiOS(e) {
    this.forEach((e, t) => {
      e.index = c + t;
    });
    const t = new Set(e.map(e => e.id));
    e.reduce((e, n) => t.has(n.id) ? (t.delete(n.id), [n].concat(e)) : e, []).slice(0, c).forEach((e, t) => {
      const n = this.get(e.id);
      if (n) {
        n.index = t;
      } else {
        this.add({
          id: e.id,
          deprecatedMms3Url: e.deprecatedMms3Url,
          directPath: e.directPath,
          filehash: e.filehash,
          encFilehash: e.encFilehash,
          mediaKey: e.mediaKey,
          mediaKeyTimestamp: e.mediaKeyTimestamp,
          width: e.width,
          height: e.height,
          size: e.size,
          mimetype: e.mimetype,
          type: e.type,
          index: t
        });
      }
    });
    this.sort();
    this.remove(this.slice(c));
  }
  setChecksum(e) {
    this._checksum = e;
  }
  sync(e) {
    var t = this;
    return (0, i.default)(function* () {
      if (!(e != null && e === t._checksum)) {
        yield t._sync();
      }
    })();
  }
  _sync() {
    var e = this;
    return (0, i.default)(function* () {
      if (e._syncStatus !== "INPROGRESS") {
        e._syncStatus = "INPROGRESS";
        try {
          yield e.findQuery({}, {
            set: true
          });
          e.sort();
          e._syncStatus = "SUCCESS";
        } catch (t) {
          __LOG__(3)`collection:recent_sticker:_sync error `;
          e._syncStatus = "FAILURE";
        }
      }
    })();
  }
  isSynced() {
    return this._syncStatus === "SUCCESS" || this._syncStatus === "FAILURE";
  }
  reset() {
    this._syncStatus = "NONE";
    this._weightMap.clear();
    return super.reset();
  }
}
exports.RecentStickerCollectionImpl = d;
d.model = u.StickerModel;
const p = new d();
exports.RecentStickerCollection = p;