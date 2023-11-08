var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RecentEmojiCollectionImpl = exports.RecentEmojiCollection = undefined;
var i = r(require("../vendor/23279.js"));
var a = require("./997853.js");
var o = require("./392125.js");
var s = require("./70354.js");
var l = r(require("./642267.js"));
var u = require("./94872.js");
class c extends o.BaseCollection {
  constructor() {
    super();
    this.dirty = false;
    this.listenTo(this, "change:weight change:length", (0, i.default)(this._sortTrimScale, 100));
  }
  _sortTrimScale() {
    const e = this.length;
    if (e) {
      this.sort();
      if (e > 36) {
        this.remove(this.slice(36));
      }
    }
  }
  delete() {
    super.delete();
    this.dirty = false;
  }
  increment(e) {
    const t = s.EmojiUtil.getSkinToneBase(e) || e;
    if (!this.get(t)) {
      this.add({
        id: t,
        weight: 0
      });
    }
    this.forEach(e => {
      if (e.id === t) {
        e.weight += 1;
      } else {
        e.weight *= 0.9;
      }
    });
    this.dirty = true;
  }
}
exports.RecentEmojiCollectionImpl = c;
c.cachePolicy = {
  id: u.COLLECTIONS_KEYS.RECENT_EMOJI_COLLECTION,
  policy: a.CACHE_POLICY.LOAD,
  delay: 2000
};
c.comparator = (e, t) => e.weight > t.weight ? -1 : 1;
c.model = l.default;
const d = new c();
exports.RecentEmojiCollection = d;