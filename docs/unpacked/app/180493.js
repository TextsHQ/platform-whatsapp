Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  const e = (0, r.getStorage)();
  const {
    addColumn: t,
    addUserDefinedPrimaryKey: n,
    addIndex: o,
    removeColumn: s
  } = (0, a.columnBuilder)(e.config);
  e.add("lid-pn-mapping").version((0, i.lidPnMappingCreateTable)(), [n("id"), t("phoneNumber"), o("phoneNumber"), t("createdAtTimestamp"), t("displayName")]).version((0, i.lidPnMappingRemoveDisplayName)(), [s("displayName")]).view(e => e);
};
var r = require("./732011.js");
var i = require("./612975.js");
var a = require("./322511.js");