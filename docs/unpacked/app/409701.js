Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("./477689.js");
var i = require("./288057.js");
class a extends (0, r.customError)("MediaFileTooLarge", true, i.MediaFileError) {
  constructor(e) {
    super(`File (${e.type()}) size = ${e.size()}`);
    this.opaqueData = e;
  }
}
exports.default = a;