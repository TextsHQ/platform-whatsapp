var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("./297198.js"));
var a = require("./918720.js");
var o = r(require("../vendor/441143.js"));
class s extends i.default {
  constructor(e, t, n) {
    super(n);
    this.name = e;
    this.packedName = t;
  }
  validate(e) {
    (0, o.default)(!e.columns.find(e => e.name === this.name), `Attempted to add column "${this.name}" to "${e.name}" but it already exists`);
  }
  apply(e) {
    const t = (0, a.cloneSchema)(e);
    t.columns.push({
      name: this.name,
      packedName: this.packedName
    });
    return t;
  }
}
exports.default = s;