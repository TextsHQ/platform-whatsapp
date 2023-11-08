var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("./74923.js"));
var a = require("./918720.js");
var o = r(require("../vendor/441143.js"));
class s extends i.default {
  validate(e) {
    super.validate(e);
    (0, o.default)(this.columns && this.columns.length === 1, "Attempted to add UserDefinedPrimaryKey over wrong number of columns");
  }
  apply(e) {
    const t = (0, a.cloneSchema)(e);
    t.columns.unshift({
      name: this.columns[0].name,
      packedName: this.columns[0].packedName,
      primaryKey: a.PRIMARY_KEY_TYPE.USER_DEFINED
    });
    return t;
  }
}
exports.default = s;