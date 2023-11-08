var r = require("./530066.js").default;
var i = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StickerPackCollectionMd = exports.StickerPackCollection = exports.FETCH_STATE = undefined;
var a = i(require("../vendor/348926.js"));
var o = require("./898817.js");
var s = require("./632157.js");
var l = require("./392125.js");
var u = require("./937715.js");
var c = i(require("./932325.js"));
var d = require("./432938.js");
var p = require("./604281.js");
const f = require("../vendor/76672.js").Mirrored(["INITIAL", "PENDING", "SUCCESS", "ERROR"]);
exports.FETCH_STATE = f;
class _ extends l.BaseCollection {
  constructor() {
    super();
    this.fetchState = f.INITIAL;
    this.packFetchState = new Map();
    this._fetchTimestamp = null;
    this._packFetchTimestamp = new Map();
    this._abortController = null;
    this._packAbortController = new Map();
    this.listenTo(c.default, "locale_change", () => this._resetState());
  }
  _resetState() {
    this._resetStickerPacksFetchState();
    this.reset();
  }
  _resetStickerPacksFetchState() {
    var e;
    if (!((e = this._abortController) === null || e === undefined)) {
      e.abort();
    }
    this._abortController = null;
    this._packAbortController.forEach(e => e.abort());
    this._packAbortController.clear();
    this._resetFetchState();
    this._resetPackFetchState();
    this._fetchTimestamp = null;
    this._packFetchTimestamp.clear();
  }
  _setFetchState(e) {
    if (e !== this.fetchState) {
      this.fetchState = e;
      this.trigger("change:fetchState", e);
    }
  }
  _resetFetchState() {
    this._setFetchState(f.INITIAL);
  }
  _setPackFetchState(e, t) {
    if (t !== this.packFetchState.get(e)) {
      this.packFetchState.set(e, t);
      this.trigger("change:packFetchState", e, t);
    }
  }
  _resetPackFetchState() {
    this.packFetchState.clear();
    this.trigger("change:packFetchState");
  }
  _resetRange(e, t, n) {
    this._forEachInRange(e, t, (t, r) => {
      const i = n[r - e];
      if (t) {
        if (i) {
          if (t.id !== i.id || t.imageDataHash === i.imageDataHash && t.index === i.index) {
            this.remove(t);
            this.add(i);
          } else {
            this.remove(t, {
              silent: true
            });
            this.add(i);
          }
        } else {
          let e = t;
          for (; e;) {
            this.remove(e);
            e = this.at(r);
          }
        }
      } else if (i) {
        this.add(i);
      }
    });
    this._resetPackFetchState();
    this._packFetchTimestamp.clear();
  }
  _forEachInRange(e, t, n) {
    for (let r = e; r < t; r++) {
      n(this.at(r), r);
    }
  }
  fetch() {
    var e = this;
    return (0, a.default)(function* () {
      var t;
      if (!(e.fetchState === f.PENDING || e.fetchState === f.SUCCESS && (0, s.unixTime)() - ((t = e._fetchTimestamp) !== null && t !== undefined ? t : 0) < d.STICKER_PACK_FETCH_TIMEOUT)) {
        e._setFetchState(f.PENDING);
        e._fetchTimestamp = (0, s.unixTime)();
        e._abortController = new r();
        try {
          const t = yield (0, u.fetchFirstPartyStickerPacks)({
            signal: e._abortController.signal
          });
          const n = Math.max(e.length, t.length);
          e._resetRange(0, n, t);
          e._setFetchState(f.SUCCESS);
        } catch (t) {
          e._setFetchState(f.ERROR);
          if (t.name === o.ABORT_ERROR) {
            return void __LOG__(2)`First party sticker packs request cancelled`;
          }
          __LOG__(3, undefined, undefined, true)`First party sticker packs request failed: error: ${t}`;
          SEND_LOGS("sticker-packs-fetch-request-failed");
        }
      }
    })();
  }
  fetchStickerPack(e) {
    var t = this;
    return (0, a.default)(function* () {
      var n;
      if (!e) {
        return;
      }
      if (t.get(e)) {
        return;
      }
      const i = t.packFetchState.get(e);
      const a = (n = t._packFetchTimestamp.get(e)) !== null && n !== undefined ? n : 0;
      if (i === f.PENDING || i === f.SUCCESS && (0, s.unixTime)() - a < d.STICKER_PACK_FETCH_TIMEOUT) {
        return;
      }
      t._setPackFetchState(e, f.PENDING);
      t._packFetchTimestamp.set(e, (0, s.unixTime)());
      const l = new r();
      t._packAbortController.set(e, l);
      try {
        const n = yield (0, u.fetchFirstPartyStickerPack)({
          id: e,
          signal: l.signal
        });
        t._setPackFetchState(e, f.SUCCESS);
        t.add(n);
      } catch (n) {
        t._setPackFetchState(e, f.ERROR);
        if (n.name === o.ABORT_ERROR) {
          return void __LOG__(2)`First party sticker pack request cancelled`;
        }
        __LOG__(3, undefined, undefined, true)`First party sticker pack request failed: error: ${n}`;
        SEND_LOGS("sticker-packs-fetch-request-failed");
      }
    })();
  }
  delete() {
    super.delete();
    this.stopListening();
    this._resetStickerPacksFetchState();
  }
}
exports.StickerPackCollection = _;
_.model = p.StickerPackModel;
_.comparator = (e, t) => e.index < t.index ? -1 : e.index > t.index ? 1 : 0;
const g = new _();
exports.StickerPackCollectionMd = g;