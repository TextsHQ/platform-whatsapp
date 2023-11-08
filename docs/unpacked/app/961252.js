var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/478718.js"));
var o = require("./632157.js");
var s = require("./65754.js");
var l = require("./301876.js");
var u = require("./432938.js");
var c = r(require("./556869.js"));
class d extends l.StickerCollectionImpl {
  constructor(e, t) {
    super();
    this._parseStickersRes = e => {
      if (e.status !== 200 || !e.data) {
        throw (0, c.default)("sticker pack stickers query error");
      }
      return e.data.map((e, t) => (0, i.default)((0, i.default)({}, (0, a.default)(e, ["directPath", "mimetype", "mediaKey", "filehash", "width", "height"])), {}, {
        index: t,
        id: e.filehash,
        deprecatedMms3Url: e.url,
        encFilehash: e.encFilehash,
        mediaKeyTimestamp: 0
      }));
    };
    this.stickerPackId = e;
    this.isFirstParty = t;
    this._firstPartyFetchTimestamp = null;
    const n = d._cache[this.stickerPackId];
    if (n) {
      return n;
    }
    let r;
    const o = this;
    Object.defineProperty(this, "fetchState", {
      get: () => r,
      set(e) {
        if (r !== e) {
          r = e;
          o.trigger("change:fetchState", e);
        }
      }
    });
  }
  fetch(e) {
    var t;
    const r = this.isFirstParty && (0, o.unixTime)() - ((t = this._firstPartyFetchTimestamp) !== null && t !== undefined ? t : 0) >= u.STICKER_PACK_FETCH_TIMEOUT;
    if ((e || r) && this.fetchState !== l.FETCH_STATE.PENDING) {
      delete this._fetchPromise;
    }
    if (this._fetchPromise) {
      return this._fetchPromise;
    }
    this.fetchState = l.FETCH_STATE.PENDING;
    if (require("./745482.js").StickerPackModel.isPlaceholderId(this.stickerPackId)) {
      this._fetchPromise = new Promise(() => {});
      return this._fetchPromise;
    }
    let i;
    if (this.isFirstParty) {
      this._firstPartyFetchTimestamp = (0, o.unixTime)();
      i = (0, s.fetchFirstPartyStickers)(this.stickerPackId);
      this._fetchPromise = i.then(e => {
        const t = Math.max(this.length || e.length);
        this._resetRange(0, t, e);
        this.fetchState = l.FETCH_STATE.SUCCESS;
      }).catch(() => {
        this.fetchState = l.FETCH_STATE.ERROR;
      });
      return this._fetchPromise;
    } else {
      return Promise.resolve();
    }
  }
  _resetRange(e, t, n) {
    this._forEachInRange(e, t, (t, r) => {
      const i = n[r - e];
      if (t) {
        if (i) {
          if (t.id === i.id) {
            t.set(i);
          } else {
            this.remove(t);
            this.add(i);
          }
        } else {
          this.remove(t);
        }
      } else if (i) {
        this.add(i);
      }
    });
  }
  _forEachInRange(e, t, n) {
    for (let r = e; r < t; r++) {
      n(this.at(r), r);
    }
  }
}
exports.default = d;
d._cache = {};
d.comparator = (e, t) => e.index < t.index ? -1 : e.index > t.index ? 1 : 0;