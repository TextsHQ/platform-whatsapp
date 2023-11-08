var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Subscription = undefined;
var i = r(require("../vendor/766678.js"));
var a = require("./481173.js");
class o extends a.BaseModel {
  constructor() {
    super(...arguments);
    this.id = (0, a.prop)();
    this.isDeactivated = (0, a.prop)(false);
    this.isAutoRenewing = (0, a.prop)(false);
    this.expirationDate = (0, a.prop)();
  }
  equal(e) {
    return !!e && e.id === this.id && e.isAutoRenewing === this.isAutoRenewing && e.isDeactivated === this.isDeactivated && e.expirationDate === this.expirationDate;
  }
  clone() {
    return (0, i.default)(this);
  }
}
o.Proxy = "subscription";
const s = (0, a.defineModel)(o);
exports.Subscription = s;