Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdModel = undefined;
var r = require("./481173.js");
class i extends r.BaseModel {
  constructor() {
    super(...arguments);
    this.ad = (0, r.prop)();
  }
}
i.Proxy = "Ad";
const a = (0, r.defineModel)(i);
exports.AdModel = a;