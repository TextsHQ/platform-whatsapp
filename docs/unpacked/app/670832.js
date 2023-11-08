Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("./481173.js");
class i extends r.BaseModel {
  constructor() {
    super(...arguments);
    this.id = (0, r.prop)();
    this.variant = (0, r.prop)();
  }
}
i.Proxy = "emojiVariant";
var a = (0, r.defineModel)(i);
exports.default = a;