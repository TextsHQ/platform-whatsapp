Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatAssignment = undefined;
var r = require("./481173.js");
class i extends r.BaseModel {
  constructor() {
    super(...arguments);
    this.id = (0, r.prop)();
    this.chatId = (0, r.prop)();
    this.agent = (0, r.prop)();
    this.agentId = (0, r.prop)();
    this.chatOpenedByAgent = (0, r.prop)();
  }
  getCollection() {
    return require("./412380.js").ChatAssignmentCollection;
  }
}
i.Proxy = "chat_assignment";
const a = (0, r.defineModel)(i);
exports.ChatAssignment = a;