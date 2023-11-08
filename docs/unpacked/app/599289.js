Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  const e = (0, r.getStorage)();
  const {
    addColumn: t,
    addAutoIncrementingPrimaryKey: n
  } = (0, a.columnBuilder)(e.config);
  e.add("encrypted-mutations").version((0, i.encryptedMutationsCreateTable)(), [n("id"), t("collectionName"), t("keyId"), t("indexMac"), t("operation"), t("indexAndValueCipherText")]).view(e => e);
};
exports.getEncryptedMutationsTable = function () {
  return (0, r.getStorage)().table("encrypted-mutations");
};
var r = require("./732011.js");
var i = require("./612975.js");
var a = require("./322511.js");