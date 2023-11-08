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
    (0, o.default)(this.columns && this.columns.length > 1, "Attempted to add composite primary key for only 1 column");
  }
  apply(e) {
    const t = (0, a.cloneSchema)(e);
    this.columns.forEach(e => {
      t.columns.push({
        name: e.name,
        packedName: e.packedName,
        primaryKey: a.PRIMARY_KEY_TYPE.COMPOSITE
      });
    });
    return t;
  }
}
exports.default = s;