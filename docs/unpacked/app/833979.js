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
    this.columns = [...e];
  }
  validate(e) {
    this.columns.forEach(t => {
      (0, o.default)(e.columns.find(e => e.packedName === t), `Attempted to add index on non-existent column "${t}" in "${e.name}"`);
    });
    (0, o.default)(this.columns.length > 1, "Attempted to add composite index for only 1 column");
    (0, o.default)((0, a.findIndex)(e, this._getIndex()) === -1, `Attempted to add index [${String(this.columns)}], which already exists in "${e.name}"`);
    const t = e.columns.filter(e => e.primaryKey && e.primaryKey === a.PRIMARY_KEY_TYPE.COMPOSITE).map(e => e.name);
    (0, o.default)(t.length !== this.columns.length || t.some(e => !this.columns.includes(e)), `Attempted to add index [${String(this.columns)}], which already is the primary key in "${e.name}"`);
  }
  apply(e) {
    const t = (0, a.cloneSchema)(e);
    t.indexes.push(this._getIndex());
    return t;
  }
  _getIndex() {
    return {
      type: a.INDEX_TYPE.COMPOSITE,
      columns: this.columns
    };
  }
}
exports.default = s;