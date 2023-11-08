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
  e.add("ctwa-suggestion").version((0, i.ctwaSuggestionsCreateTable)(), [n("id"), t("type"), t("expiresAt"), o("expiresAt"), t("heading"), t("body"), t("highlight"), t("actionLink"), t("display"), t("ts")]).version((0, i.ctwaSuggestionsAddTrackingData)(), [t("nuxData"), t("coolOffData")]).view(e => e);
};
exports.getCTWASuggestionTable = function () {
  return (0, r.getStorage)().table("ctwa-suggestion");
};
var r = require("./732011.js");
var i = require("./612975.js");
var a = require("./322511.js");