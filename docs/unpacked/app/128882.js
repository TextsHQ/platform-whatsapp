Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("./481173.js");
class i extends r.BaseModel {
  constructor() {
    super(...arguments);
    this.id = (0, r.prop)();
    this.timestamp = (0, r.prop)();
  }
}
i.Proxy = "unreadMention";
var a = (0, r.defineModel)(i);
exports.default = a;