Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.XmlParsingFailure = undefined;
exports.XmlParsingFailure = class {
  constructor(e, t) {
    this.parser = e;
    this.reason = t;
  }
  toString() {
    return `XmlParsingFailure: ${this.parser}: ${this.reason}`;
  }
};