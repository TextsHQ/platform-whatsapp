Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  const e = (0, r.getStorage)();
  const {
    addColumn: t,
    addAutoIncrementingPrimaryKey: n,
    addIndex: o
  } = (0, a.columnBuilder)(e.config);
  e.add("self-addon-message-type").version((0, i.selfMessageTypeCreateTable)(), [n("rowId"), t("msgId"), t("msgType"), o("msgId")]).view(e => e);
};
exports.getSelfAddonMessageTypeTable = function () {
  return (0, r.getStorage)().table("self-addon-message-type");
};
var r = require("./732011.js");
var i = require("./612975.js");
var a = require("./322511.js");