var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("./708093.js"));
var a = r(require("./128882.js"));
class o extends i.default {
  oldestUnreadMention() {
    var e;
    const t = (e = this.last()) !== null && e !== undefined ? e : null;
    if (t) {
      this.remove(t);
    }
    return t;
  }
}
exports.default = o;
o.model = a.default;
o.comparator = (e, t) => t.timestamp - e.timestamp;