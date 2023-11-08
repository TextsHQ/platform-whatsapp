Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("./477689.js");
class i extends (0, r.customError)("RetryableError") {
  constructor(e) {
    super("see error at this.source");
    this.source = e;
  }
}
exports.default = i;