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
  }
  contact() {
    return require("./177938.js").ContactCollection.gadd(this.id);
  }
  getCollection() {
    return require("./474596.js").BlocklistCollection;
  }
}
o.Proxy = "blocklist";
o.idClass = a.default;
var s = (0, i.defineModel)(o);
exports.default = s;