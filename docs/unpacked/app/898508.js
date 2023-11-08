Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  const e = (0, r.getStorage)();
  const {
    addColumn: t,
    addUserDefinedPrimaryKey: n
  } = (0, a.columnBuilder)(e.config);
  e.add("cart").version((0, i.cartCreateTable)(), [n("id"), t("products"), t("message"), t("total"), t("currency"), t("itemCount")]).view(e => e);
};
exports.getCartTable = function () {
  return (0, r.getStorage)().table("cart");
};
var r = require("./732011.js");
var i = require("./612975.js");
var a = require("./322511.js");