Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
exports.default = class {
  constructor() {
    this.initSessionId();
  }
  initSessionId() {
    this.sessionId = this.newSessionId();
  }
  newSessionId() {
    this.sessionId = Math.floor(Math.random() * 2147483648);
    return this.sessionId;
  }
};