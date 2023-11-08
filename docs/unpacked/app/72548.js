Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  const e = (0, r.getStorage)();
  const {
    addColumn: t,
    addUserDefinedPrimaryKey: n
  } = (0, a.columnBuilder)(e.config);
  e.add("bot-profile").version((0, i.botProfileCreateTable)(), [n("id"), t("name"), t("attrs"), t("description"), t("category"), t("isDefault"), t("prompts"), t("personaId"), t("commands"), t("commandsDescription")]).view(e => e);
};
exports.getBotProfileTable = function () {
  return (0, r.getStorage)().table("bot-profile");
};
var r = require("./732011.js");
var i = require("./612975.js");
var a = require("./322511.js");