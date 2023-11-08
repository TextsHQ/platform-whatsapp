Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnattributedMessage = undefined;
var r = require("./481173.js");
class i extends r.BaseModel {
  constructor() {
    super(...arguments);
    this.id = (0, r.prop)();
    this.deviceId = (0, r.prop)();
  }
  getCollection() {
    return require("./645485.js").UnattributedMessageCollection;
  }
}
i.Proxy = "unattributed_message";
const a = (0, r.defineModel)(i);
exports.UnattributedMessage = a;