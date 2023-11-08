Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  const e = (0, r.getStorage)();
  const {
    addColumn: t,
    addUserDefinedPrimaryKey: n
  } = (0, a.columnBuilder)(e.config);
  e.add("orphan-revoke").version((0, i.orphanRevokeCreateTable)(), [n("msgKey"), t("sender"), t("timestamp"), t("subtype")]).view(e => e);
};
exports.getOrphanRevokeTable = function () {
  return (0, r.getStorage)().table("orphan-revoke");
};
var r = require("./732011.js");
var i = require("./612975.js");
var a = require("./322511.js");