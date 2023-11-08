Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("./481173.js");
class i extends r.BaseModel {
  constructor() {
    super(...arguments);
    this.id = (0, r.prop)();
    this.displayText = (0, r.prop)();
    this.selected = (0, r.session)(false);
  }
}
i.Proxy = "replyButton";
var a = (0, r.defineModel)(i);
exports.default = a;