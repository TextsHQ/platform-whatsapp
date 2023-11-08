Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  const e = (0, r.getStorage)();
  const {
    addColumn: t,
    addUserDefinedPrimaryKey: n
  } = (0, a.columnBuilder)(e.config);
  e.add("inactive-receipt").version((0, i.inactiveReceiptCreateTable)(), [n("msgId"), t("chatId"), t("participantId")]).view(e => e);
};
exports.getInactiveReceiptTable = function () {
  return (0, r.getStorage)().table("inactive-receipt");
};
var r = require("./732011.js");
var i = require("./612975.js");
var a = require("./322511.js");