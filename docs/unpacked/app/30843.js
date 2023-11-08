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
    (0, o.default)((0, a.findIndex)(e, this._getIndex()) !== -1, `Attempted to remove non-existent index "${this.column}" on "${e.name}"`);
  }
  apply(e) {
    const t = (0, a.cloneSchema)(e);
    const n = (0, a.findIndex)(e, this._getIndex());
    t.indexes.splice(n, 1);
    return t;
  }
  _getIndex() {
    return {
      type: a.INDEX_TYPE.SIMPLE,
      column: this.column
    };
  }
}
exports.default = s;