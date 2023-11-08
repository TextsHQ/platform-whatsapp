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
  e.add("message-history").version((0, i.messageHistoryCreateTable)(), [n("msgKey"), t("parentMsgKey"), o("parentMsgKey")]).view(e => e);
};
exports.getMessageHistoryTable = function () {
  return (0, r.getStorage)().table("message-history");
};
var r = require("./732011.js");
var i = require("./612975.js");
var a = require("./322511.js");