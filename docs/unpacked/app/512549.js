Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  const e = (0, r.getStorage)();
  const {
    addColumn: t,
    addUserDefinedPrimaryKey: n
  } = (0, a.columnBuilder)(e.config);
  e.add("label").version((0, i.labelCreateTable)(), [n("id"), t("name"), t("colorIndex"), t("predefinedId")]).view(e => e);
};
exports.getLabelTable = function () {
  return (0, r.getStorage)().table("label");
};
var r = require("./732011.js");
var i = require("./612975.js");
var a = require("./322511.js");