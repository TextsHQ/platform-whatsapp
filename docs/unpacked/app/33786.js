var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RecentStickerReverseCollectionMd = exports.GroupedRecentStickerCollection = undefined;
var i = require("./392125.js");
var a = r(require("./389779.js"));
class o extends i.BaseCollection {
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
}
exports.GroupedRecentStickerCollection = o;
o.model = a.default;
const s = new o();
exports.RecentStickerReverseCollectionMd = s;