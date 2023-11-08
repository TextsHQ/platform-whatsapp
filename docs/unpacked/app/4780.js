Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("./477689.js");
class i extends (0, r.customError)("ForwardError") {
  constructor(e) {
    super();
    this.reasons = e;
  }
}
exports.default = i;