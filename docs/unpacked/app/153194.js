Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  const e = (0, r.getStorage)();
  const {
    addColumn: t,
    addUserDefinedPrimaryKey: n
  } = (0, a.columnBuilder)(e.config);
  e.add("business-profile").version((0, i.businessProfileCreateTable)(), [n("id"), t("commandsDescription"), t("commands"), t("prompts"), t("automatedType"), t("welcomeMsgProtocolMode")]).view(e => e);
};
exports.getBusinessProfileTable = function () {
  return (0, r.getStorage)().table("business-profile");
};
var r = require("./732011.js");
var i = require("./612975.js");
var a = require("./322511.js");