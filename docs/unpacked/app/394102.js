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
  e.add("pending-mutations").version((0, i.pendingMutationsCreateTable)(), [n("id"), t("collection"), t("index"), o("index"), t("timestamp"), o("collection"), t("version"), t("operation"), t("binarySyncAction")]).version((0, i.addActionToPendingMutations)(), [t("action"), o("action")]).view(e => e);
};
exports.convertToPendingMutationFromRow = function (e) {
  const {
    id: t,
    collection: n,
    index: r,
    binarySyncAction: i,
    version: a,
    operation: o,
    timestamp: s,
    action: l
  } = e;
  return {
    id: t,
    collection: n,
    index: r,
    binarySyncAction: i,
    version: a,
    operation: o,
    timestamp: s,
    action: l
  };
};
exports.getPendingMutationsTable = function () {
  return (0, r.getStorage)().table("pending-mutations");
};
var r = require("./732011.js");
var i = require("./612975.js");
var a = require("./322511.js");