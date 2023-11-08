Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  const e = (0, r.getStorage)();
  const {
    addColumn: t,
    addUserDefinedPrimaryKey: n
  } = (0, a.columnBuilder)(e.config);
  e.add("device-list").version((0, i.deviceListCreateTable)(), [n("id"), t("devices"), t("rawId"), t("timestamp"), t("validIndexes"), t("currentIndex")]).version((0, i.deviceListAddDelete)(), [t("deleted")]).version((0, i.deviceListAddV2Fields)(), [t("expectedTs"), t("expectedTsLastDeviceJobTs"), t("expectedTsUpdateTs"), t("advAccountType")]).view(e => e);
};
exports.getDeviceListTable = function () {
  return (0, r.getStorage)().table("device-list");
};
var r = require("./732011.js");
var i = require("./612975.js");
var a = require("./322511.js");