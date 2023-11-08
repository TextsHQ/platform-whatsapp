var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = require("./481173.js");
var a = r(require("./296159.js"));
class o extends i.BaseModel {
  constructor() {
    super(...arguments);
    this.unreadMentionCollection = (0, i.prop)();
    this.pendingUnreadMentionCount = (0, i.prop)();
  }
  initialize() {
    this.unreadMentionCollection = new a.default();
    this.pendingUnreadMentionCount = 0;
  }
  hasMentionId(e) {
    return this.unreadMentionCollection.get(e) != null;
  }
  addUnreadMentions(e) {
    this.unreadMentionCollection.add(e);
  }
  removeUnreadMentions(e) {
    this.unreadMentionCollection.remove(e);
  }
  oldestUnreadMention() {
    return this.unreadMentionCollection.oldestUnreadMention();
  }
  reset() {
    this.pendingUnreadMentionCount = 0;
    this.unreadMentionCollection.reset();
  }
  getUnreadMentionCount() {
    return this.pendingUnreadMentionCount + this.unreadMentionCollection.length;
  }
}
var s = (0, i.defineModel)(o);
exports.default = s;