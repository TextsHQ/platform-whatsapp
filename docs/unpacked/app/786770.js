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
    this.column = e;
  }
  validate(e) {
    const t = e.columns.find(e => e.packedName === this.column);
    (0, o.default)(t, `Attempted to add index on non-existent column "${this.column}" in "${e.name}"`);
    (0, o.default)(t && (!t.primaryKey || t.primaryKey === a.PRIMARY_KEY_TYPE.COMPOSITE), `Cannot add index on primary key on table "${e.name}"`);
    (0, o.default)(!e.indexes.some(e => (e.type === a.INDEX_TYPE.ARRAY || e.type === a.INDEX_TYPE.SIMPLE || e.type === a.INDEX_TYPE.UNIQUE) && (0, a.indexContainsColumn)(e, this.column)), `Attempted to add index "${this.column}" which already exists in "${e.name}"`);
  }
  apply(e) {
    const t = (0, a.cloneSchema)(e);
    t.indexes.push(this._getIndex());
    return t;
  }
  _getIndex() {
    return {
      type: a.INDEX_TYPE.UNIQUE,
      column: this.column
    };
  }
}
exports.default = s;