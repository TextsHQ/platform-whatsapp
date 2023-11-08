Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  const e = (0, r.getStorage)();
  const {
    addColumn: t,
    addEncryptedColumn: n,
    addUserDefinedPrimaryKey: s
  } = (0, a.columnBuilder)(e.config);
  e.add("orphan-tc-token").version((0, i.orphanTcTokenCreateTable)(), [s("chatId"), n("tcToken", o.ENCRYPTED_VALUE_TYPE.ARRAY_BUFFER), t("tcTokenTimestamp")]).view(e => e);
};
exports.getOrphanTcTokenTable = function () {
  return (0, r.getStorage)().table("orphan-tc-token");
};
var r = require("./732011.js");
var i = require("./612975.js");
var a = require("./322511.js");
var o = require("./918720.js");