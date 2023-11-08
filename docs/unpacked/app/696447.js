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
    this.cypher = (0, i.prop)();
    this.cypherExpirationTimestamp = (0, i.prop)();
    this.cypherType = (0, i.prop)();
    this.postcode = (0, i.prop)();
    this.postcodeSetByUser = (0, i.prop)();
    this.postcodeLocationName = (0, i.prop)();
  }
}
o.Proxy = "business_direct_connection";
o.idClass = a.default;
var s = (0, i.defineModel)(o);
exports.default = s;