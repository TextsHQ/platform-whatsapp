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
  e.add("quick-promotions").version((0, i.quickPromotionsCreateTable)(), [n("id"), t("surfaceId"), o("surfaceId"), t("ts"), t("data"), t("tracking")]).view(e => e);
};
exports.getQuickPromotionsTable = function () {
  return (0, r.getStorage)().table("quick-promotions");
};
var r = require("./732011.js");
var i = require("./612975.js");
var a = require("./322511.js");