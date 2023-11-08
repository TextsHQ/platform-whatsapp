Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  const e = (0, r.getStorage)();
  const {
    addColumn: t,
    addUserDefinedPrimaryKey: n,
    addEncryptedColumn: s,
    addIndex: l
  } = (0, a.columnBuilder)(e.config);
  e.add("comments").version((0, i.commentCreateTable)(), [n("msgKey"), t("parentMsgKey"), l("parentMsgKey"), t("t"), t("ack"), t("sender"), s("msgRowOpaqueData", o.ENCRYPTED_VALUE_TYPE.ARRAY_BUFFER)]).view(e => e);
};
exports.getTable = function () {
  return (0, r.getStorage)().table("comments");
};
var r = require("./732011.js");
var i = require("./612975.js");
var a = require("./322511.js");
var o = require("./918720.js");