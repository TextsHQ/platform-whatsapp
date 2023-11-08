var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("./297198.js"));
var a = require("./918720.js");
var o = r(require("../vendor/441143.js"));
class s extends i.default {
  constructor(e, t) {
    super(t);
    this.name = e;
  }
  validate(e) {
    const t = e.columns.find(e => e.name === this.name);
    (0, o.default)(t, `Attempted to remove column "${this.name}" from "${e.name}" but it doesn't exist`);
    (0, o.default)(!t.primaryKey, `Attempted to remove primary key column "${this.name}". Removing primary keys is not supported.`);
    (0, o.default)(!e.indexes.some(e => (0, a.indexContainsColumn)(e, this.name)), `Attempted to remove column "${this.name}" from "${e.name}" but an index exists with the column`);
  }
  apply(e) {
    const t = (0, a.cloneSchema)(e);
    t.columns.splice(t.columns.findIndex(e => e.name === this.name), 1);
    return t;
  }
}
exports.default = s;