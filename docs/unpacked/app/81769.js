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
  e.add("subgroup-suggestion").version((0, i.subgroupSuggestionCreateTable)(), [n("id"), t("parentGroupId"), o("parentGroupId"), t("subject"), t("desc"), t("owner"), t("t")]).view(e => e);
};
var r = require("./732011.js");
var i = require("./612975.js");
var a = require("./322511.js");