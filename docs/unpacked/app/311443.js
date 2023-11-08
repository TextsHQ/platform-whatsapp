Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  const e = (0, r.getStorage)();
  const {
    addColumn: t,
    addCompositePrimaryKey: n,
    addIndex: o
  } = (0, a.columnBuilder)(e.config);
  e.add("subgroup-suggestion-v2").version((0, i.subgroupSuggestionV2CreateTable)(), [n(["parentGroupId", "id", "owner"]), o("parentGroupId"), t("subject"), t("desc"), t("t"), t("isExistingGroup"), t("participantCount")]).view(e => e);
};
exports.getSubgroupSuggestionTable = function () {
  return (0, r.getStorage)().table("subgroup-suggestion-v2");
};
var r = require("./732011.js");
var i = require("./612975.js");
var a = require("./322511.js");