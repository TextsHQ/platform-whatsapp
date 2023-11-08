Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  const e = (0, r.getStorage)();
  const {
    addColumn: t,
    addUserDefinedPrimaryKey: n,
    addIndex: o
  } = (0, a.columnBuilder)(e.config);
  e.add("unjoined-subgroup-metadata").version((0, i.unjoinedSubgroupMetadataCreateTable)(), [n("id"), t("subject"), t("subjectTime"), t("defaultSubgroup"), t("generalSubgroup"), t("parentGroup")]).version((0, i.unjoinedSubgroupParentGroupIndex)(), [o("parentGroup")]).view(e => e);
};
exports.getUnjoinedSubgroupMetadataTable = function () {
  return (0, r.getStorage)().table("unjoined-subgroup-metadata");
};
var r = require("./732011.js");
var i = require("./612975.js");
var a = require("./322511.js");