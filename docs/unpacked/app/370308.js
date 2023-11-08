var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RecentReactionsCollectionImpl = exports.RecentReactionsCollection = exports.RECENT_REACTIONS_LIMIT = exports.LISTENER_DEBOUNCE_WAIT = undefined;
var i = r(require("../vendor/23279.js"));
var a = require("./997853.js");
var o = require("./392125.js");
var s = r(require("./33955.js"));
var l = require("./94872.js");
exports.RECENT_REACTIONS_LIMIT = 16;
exports.LISTENER_DEBOUNCE_WAIT = 100;
class u extends o.BaseCollection {
  constructor() {
    super();
    this.findImpl = e => Promise.resolve({
      id: e
    });
    this.listenTo(this, "add", (0, i.default)(this._sortTrim, 100));
  }
  _sortTrim() {
    const e = this.length;
    if (e) {
      this.sort();
      if (e > 16) {
        this.remove(this.slice(16));
      }
    }
  }
}
exports.RecentReactionsCollectionImpl = u;
u.model = s.default;
u.cachePolicy = {
  id: l.COLLECTIONS_KEYS.RECENT_REACTIONS_COLLECTION,
  policy: a.CACHE_POLICY.LOAD,
  delay: 2000
};
u.comparator = (e, t) => t.timestamp - e.timestamp;
const c = new u();
exports.RecentReactionsCollection = c;