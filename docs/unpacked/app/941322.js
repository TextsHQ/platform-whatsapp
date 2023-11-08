Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  const e = (0, r.getStorage)();
  const {
    addColumn: t,
    addCompositePrimaryKey: n,
    addEncryptedColumn: s,
    addIndex: l
  } = (0, a.columnBuilder)(e.config);
  e.add("poll-votes").version((0, i.pollVotesCreateTable)(), [n(["parentMsgKey", "sender"]), t("msgKey"), l("parentMsgKey"), s("selectedOptionLocalIds", o.ENCRYPTED_VALUE_TYPE.ARRAY_BUFFER), t("senderTimestampMs"), t("ack"), t("t"), t("read")]).version((0, i.pollVotesAddMsgKeyIndex)(), [l("msgKey")]).view(e => e);
};
exports.getTable = function () {
  return (0, r.getStorage)().table("poll-votes");
};
var r = require("./732011.js");
var i = require("./612975.js");
var a = require("./322511.js");
var o = require("./918720.js");