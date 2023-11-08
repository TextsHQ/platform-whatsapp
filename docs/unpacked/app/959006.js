Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Agent = undefined;
var r = require("./481173.js");
class i extends r.BaseModel {
  constructor() {
    super(...arguments);
    this.id = (0, r.prop)();
    this.deviceId = (0, r.prop)();
    this.name = (0, r.prop)();
    this.isDeleted = (0, r.prop)(false);
  }
  getCollection() {
    return require("./919833.js").AgentCollection;
  }
}
i.Proxy = "agent";
const a = (0, r.defineModel)(i);
exports.Agent = a;