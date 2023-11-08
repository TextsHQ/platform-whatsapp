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
  e.add("pinned-messages").version((0, i.pinInChatCreateTable)(), [n("parentMsgKey"), t("chatId"), t("msgKey"), t("senderTimestampMs"), t("ack"), t("t"), t("pinType"), t("pinExpiryDuration"), t("sender"), o("msgKey"), o("chatId")]).view(e => e);
};
exports.getTable = function () {
  return (0, r.getStorage)().table("pinned-messages");
};
var r = require("./732011.js");
var i = require("./612975.js");
var a = require("./322511.js");