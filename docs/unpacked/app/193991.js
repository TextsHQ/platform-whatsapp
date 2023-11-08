var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuickReplyCollectionImpl = exports.QuickReplyCollection = undefined;
var i = require("./392125.js");
var a = r(require("./582492.js"));
var o = require("./912705.js");
class s extends i.BaseCollection {
  constructor() {
    super(...arguments);
    this.smartDefaultsAdded = false;
    this.sortQuickReply = (e, t) => e.totalCount === t.totalCount ? e.id < t.id ? -1 : 1 : e.totalCount > t.totalCount ? -1 : 1;
  }
  addSmartDefaultsIfNeeded() {
    if (this.smartDefaultsAdded === false) {
      (0, o.addSmartDefaults)();
      this.smartDefaultsAdded = true;
    }
  }
  filterShortcuts(e) {
    return this.filter(t => {
      let {
        shortcut: n
      } = t;
      return n.toLowerCase().startsWith(e.toLowerCase());
    }).sort(this.sortQuickReply);
  }
}
exports.QuickReplyCollectionImpl = s;
s.model = a.default;
const l = new s();
exports.QuickReplyCollection = l;