Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductCatalogSession = exports.ACCIDENTAL_SESSION = undefined;
const n = "accidental_session";
exports.ACCIDENTAL_SESSION = n;
exports.ProductCatalogSession = class {
  constructor(e) {
    this.accidental = e || false;
    this.initSessionId();
  }
  isAccidental() {
    return this.accidental;
  }
  initSessionId() {
    this.sessionId = this.newSessionId();
  }
  newSessionId() {
    this.sessionId = Math.floor(Math.random() * 2147483648);
    return this.sessionId;
  }
  toString() {
    let e = `${this.sessionId}`;
    if (this.accidental) {
      __LOG__(4, undefined, new Error())`Session ID requested without being set, returning a randon accidental session. Please investigate.`;
      e = `accidental_session_${e}`;
    }
    return e;
  }
};