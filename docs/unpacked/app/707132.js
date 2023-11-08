Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MediaNotOnPhone = undefined;
var r = require("./984330.js");
class i extends r.ServerStatusCodeError {
  constructor() {
    super(404);
    this.name = "MediaNotOnPhone";
  }
}
exports.MediaNotOnPhone = i;