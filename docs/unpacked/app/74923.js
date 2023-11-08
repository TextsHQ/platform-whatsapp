var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("./297198.js"));
var a = r(require("./556869.js"));
var o = r(require("../vendor/441143.js"));
class s extends i.default {
  constructor(e, t) {
    super(t);
    (0, o.default)(this.constructor.name !== "AbstractPrimaryKey", "Cannot instantiate abstract class AbstractPrimaryKey");
    if (Array.isArray(e)) {
      this.columns = [...e];
    } else {
      this.columns = [e];
    }
  }
  validate(e) {
    (0, o.default)(e.columns.length === 0, "Attempted to add primary key after other columns");
  }
  apply() {
    throw (0, a.default)("Subclass of `AbstractPrimaryKey` must implement `apply` method");
  }
}
exports.default = s;