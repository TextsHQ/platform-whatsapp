Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("./481173.js");
class i extends r.BaseModel {
  constructor() {
    super(...arguments);
    this.id = (0, r.prop)();
    this.parentType = (0, r.prop)();
    this.parentId = (0, r.prop)();
    this.labelId = (0, r.prop)();
  }
}
i.Proxy = "labelItem";
var a = (0, r.defineModel)(i);
exports.default = a;