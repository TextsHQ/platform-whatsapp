Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  const e = (0, r.getStorage)();
  const {
    addColumn: t,
    addUserDefinedPrimaryKey: n
  } = (0, a.columnBuilder)(e.config);
  e.add("agent").version((0, i.agentCreateTable)(), [n("id"), t("deviceId"), t("name"), t("isDeleted")]).view(e => e);
};
exports.getAgentTable = function () {
  return (0, r.getStorage)().table("agent");
};
var r = require("./732011.js");
var i = require("./612975.js");
var a = require("./322511.js");