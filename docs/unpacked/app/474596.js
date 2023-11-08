var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlocklistCollectionImpl = exports.BlocklistCollection = undefined;
var i = require("./392125.js");
var a = r(require("./991274.js"));
class o extends i.BaseCollection {
  dedupedList() {
    return this.filter(e => {
      const t = e.contact();
      const n = t.phoneNumber;
      return !t.id.isLid() || n == null || this.get(n) == null;
    });
  }
}
exports.BlocklistCollectionImpl = o;
o.model = a.default;
const s = new o();
exports.BlocklistCollection = s;