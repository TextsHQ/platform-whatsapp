Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var a = require("../app/481173.js");
class r extends a.BaseModel {
  constructor() {
    super(...arguments);
    this.id = (0, a.prop)();
    this.name = (0, a.prop)();
    this.label = (0, a.prop)();
    this.type = (0, a.prop)();
  }
}
r.Proxy = "command";
var o = (0, a.defineModel)(r);
exports.default = o;