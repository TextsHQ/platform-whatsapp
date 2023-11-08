Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  const e = (0, r.getStorage)();
  const {
    addColumn: t,
    addUserDefinedPrimaryKey: n
  } = (0, a.columnBuilder)(e.config);
  e.add(o).version((0, i.chatAssignmentCreateTable)(), [n("id"), t("chatId"), t("agentId"), t("chatOpenedByAgent")]).view(e => e);
};
exports.getChatAssignmentTable = function () {
  return (0, r.getStorage)().table(o);
};
var r = require("./732011.js");
var i = require("./612975.js");
var a = require("./322511.js");
const o = "chat-assignment";