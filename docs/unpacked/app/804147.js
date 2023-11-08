Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GeosuspendedCountry = undefined;
var r = require("./481173.js");
class i extends r.BaseModel {
  constructor() {
    super(...arguments);
    this.id = (0, r.prop)();
    this.geosuspended = (0, r.prop)();
  }
  initialize() {
    super.initialize();
  }
}
i.Proxy = "newsletter_geosuspended_country";
const a = (0, r.defineModel)(i);
exports.GeosuspendedCountry = a;