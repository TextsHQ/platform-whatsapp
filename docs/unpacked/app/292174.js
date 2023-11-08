Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  const e = (0, r.getStorage)();
  const {
    addColumn: t,
    addUserDefinedPrimaryKey: n,
    addIndex: o,
    removeIndex: s
  } = (0, a.columnBuilder)(e.config);
  e.add("message-orphans").version((0, i.messageOrphansCreateTable)(), [n("msgKey"), t("parentMsgKey"), o("parentMsgKey"), t("sender"), t("parsedMsgPayload"), t("senderTimestampMs"), o("senderTimestampMs")]).version((0, i.messageOrphansAddColumns)(), [t("t"), o("t"), t("type"), s("senderTimestampMs"), t("read")]).view(e => e);
};
exports.getMessageOrphanTable = function () {
  return (0, r.getStorage)().table("message-orphans");
};
var r = require("./732011.js");
var i = require("./612975.js");
var a = require("./322511.js");