Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var n = new class {
  constructor() {
    this.utmReadChatIds = new Set();
  }
  deleteChatId(e) {
    this.utmReadChatIds.delete(e);
  }
  hasRead(e) {
    return this.utmReadChatIds.has(e);
  }
  read(e) {
    this.utmReadChatIds.add(e);
  }
  clearAll() {
    this.utmReadChatIds.clear();
  }
}();
exports.default = n;