Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("./481173.js");
class i extends r.BaseModel {
  constructor() {
    super(...arguments);
    this.id = (0, r.prop)();
    this.policyVersion = (0, r.prop)();
    this.privacyDisclosureModal = (0, r.prop)();
    this.endDate = (0, r.prop)();
    this.accepted = (0, r.session)();
    this.lastUpdated = (0, r.session)();
  }
  getCollection() {
    return require("./967910.js").UserDisclosureCollection;
  }
}
i.Proxy = "userDisclosure";
var a = (0, r.defineModel)(i);
exports.default = a;