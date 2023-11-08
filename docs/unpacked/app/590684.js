var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = require("./481173.js");
var a = r(require("./124928.js"));
class o extends i.BaseModel {
  constructor() {
    super(...arguments);
    this.id = (0, i.prop)();
    this.status = (0, i.prop)();
    this.stale = (0, i.session)(true);
  }
  getCollection() {
    return require("./476473.js").StatusCollection;
  }
}
o.Proxy = "status";
o.idClass = a.default;
var s = (0, i.defineModel)(o);
exports.default = s;