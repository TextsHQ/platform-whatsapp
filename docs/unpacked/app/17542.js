var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("./556869.js"));
exports.default = class {
  static onMutator() {
    throw (0, i.default)("Subclasses of `Serializer` must override `onMutator()`");
  }
  static onRoot() {
    throw (0, i.default)("Subclasses of `Serializer` must override `onRoot()`");
  }
  static onText() {
    throw (0, i.default)("Subclasses of `Serializer` must override `onText()`");
  }
  static onDelimiter() {
    throw (0, i.default)("Subclasses of `Serializer` must override `onDelimiter()`");
  }
};