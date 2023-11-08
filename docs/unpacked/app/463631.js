Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  const e = (0, r.getStorage)();
  const {
    addColumn: t,
    addUserDefinedPrimaryKey: n
  } = (0, a.columnBuilder)(e.config);
  e.add("orphan-receipt").version((0, i.orphanReceiptCreateTable)(), [n("msgKey"), t("delivery"), t("read"), t("played")]).view(e => e);
};
exports.getOrphanReceiptTable = function () {
  return (0, r.getStorage)().table("orphan-receipt");
};
var r = require("./732011.js");
var i = require("./612975.js");
var a = require("./322511.js");