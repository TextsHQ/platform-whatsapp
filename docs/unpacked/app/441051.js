var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StickerSearchCollectionImpl = exports.StickerSearchCollection = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./392125.js");
var o = require("./70354.js");
var s = require("./708838.js");
var l = require("./955851.js");
var u = require("./164832.js");
var c = require("./364382.js");
const d = {
  HAPPY: ["😂", "🤣", "😀", "😁", "😆", "🙂", "😇", "☺️", "😄", "😃"],
  LOVE: ["😍", "😘", "❤️", "💕", "🥰", "😗", "😙", "😻", "👩‍❤️‍👩", "💐", "💌", "💛", "💚", "💙", "💜", "💓", "💘", "💏", "💑", "🌹", "🤟", "🏩"],
  GREETINGS: ["👋", "😂", "🤣", "🙏", "✋", "🧕", "🚶‍♀️", "🚶", "👠", "🥾", "🙈", "🦛", "🌺", "⚡", "🎯", "🚄", "🚅", "💒", "🛕", "🛣️", "🕉️", "🔊"],
  SAD: ["😭", "😔", "😢", "😞", "😟", "😕", "🙁", "☹️", "😖", "😫", "😩", "🥺", "😥", "😓", "😪", "😿", "💧", "💔"],
  ANGRY: ["😠", "😡", "😤", "👺", "💢", "🗯️", "👿"],
  CELEBRATE: ["🥳", "🥂", "🎈", "🎊", "🎉"]
};
class p extends a.BaseCollection {
  constructor() {
    super(...arguments);
    this._cache = new Map();
    this._hasFetched = false;
    this._isFetching = true;
  }
  isFetchingData() {
    return this._isFetching;
  }
  hasFetchedData() {
    return this._hasFetched;
  }
  setStartFetching() {
    this._isFetching = true;
    this.trigger("start_fetching");
  }
  setStopFetching() {
    this._isFetching = false;
    this.trigger("stop_fetching");
  }
  search(e) {
    var t = () => super.delete;
    var n = this;
    return (0, i.default)(function* () {
      if (n._lastQuery !== e && n._hasFetched) {
        t().call(n);
      }
      const r = e.trim().toUpperCase();
      if (n._cache.has(e)) {
        const t = n._cache.get(e);
        if (t != null) {
          n.add(t);
          return void (n._lastQuery = e);
        }
        __LOG__(2)`StickerMoodCollection cache was invalid, re-searching.`;
      }
      const i = [];
      if (d.hasOwnProperty(r)) {
        i.push(...d[r]);
      } else {
        const a = o.EmojiUtil.containsOnlyEmoji(r) ? o.EmojiUtil.splitEmojis(r) : (0, s.emojiKeywordToUnicodeSearch)(r);
        if (a == null || a.length === 0) {
          n._lastQuery = e;
          n.setStopFetching();
          return void t().call(n);
        }
        i.push(...a);
      }
      n.setStartFetching();
      let a = [];
      try {
        a = yield (0, l.searchFirstPartyStickers)(i);
      } catch (e) {
        __LOG__(3, undefined, undefined, true)`Sticker search request failed: error: ${e}`;
        SEND_LOGS("sticker-search-request-failed");
        return void n.setStopFetching();
      }
      n._cache.set(e, a);
      n._hasFetched = true;
      n._lastQuery = e;
      n.add(a);
      n.setStopFetching();
    })();
  }
  searchMood(e) {
    return this.search(e);
  }
  delete() {
    super.delete();
    this._cache = new Map();
    this._hasFetched = false;
    this._isFetching = false;
  }
  getSuggestionsFromEmoji(e) {
    const t = [];
    var n;
    this._cache.forEach(n => {
      n.forEach(n => {
        if ((0, c.stickerMatchEmoji)(n, e)) {
          t.push(n);
        }
      });
    });
    if (this._cache.has(e)) {
      t.push(...((n = this._cache.get(e)) !== null && n !== undefined ? n : []));
    }
    return [...this.filter(t => {
      var n;
      if ((n = t.mediaData.emojis) === null || n === undefined) {
        return undefined;
      } else {
        return n.includes(e);
      }
    }), ...t];
  }
}
exports.StickerSearchCollectionImpl = p;
p.model = u.StickerModel;
const f = new p();
exports.StickerSearchCollection = f;