var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("./556869.js"));
class a {
  static match() {
    throw (0, i.default)("Subclasses of `Mutator` must override `match()`");
  }
  static mutate(e) {
    return e;
  }
}
exports.default = a;
a.nestable = () => true;
a.format = true;
a.fragment = false;
a.compatibility = false;
a.mutates = false;