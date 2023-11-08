Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  const e = (0, r.getStorage)();
  const {
    addColumn: t,
    addUserDefinedPrimaryKey: n
  } = (0, a.columnBuilder)(e.config);
  e.add("abpropConfigs").version((0, i.abpropsConfigCreateTable)(), [n("configCode"), t("configValue"), t("configExpoKey"), t("overriddenConfigValue")]).version((0, i.addHasAccessedToAbpropsConfigTable)(), [t("hasAccessed")]).view(e => ({
    configCode: e.configCode,
    configValue: e.configValue,
    configExpoKey: e.configExpoKey,
    hasAccessed: e.hasAccessed,
    overriddenConfigValue: e.overriddenConfigValue
  }));
};
exports.getAbpropConfigsTable = function () {
  return (0, r.getStorage)().table("abpropConfigs");
};
var r = require("./732011.js");
var i = require("./612975.js");
var a = require("./322511.js");