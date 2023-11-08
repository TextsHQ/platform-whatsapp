Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SmaxParsingFailure = undefined;
class n extends Error {
  constructor(e) {
    super(`SmaxParsingFailure: ${e}`);
    this.name = "SmaxParsingFailure";
    this.reason = e;
  }
  toString() {
    return `SmaxParsingFailure: ${this.reason}`;
  }
}
exports.SmaxParsingFailure = n;