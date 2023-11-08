Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  (0, r.getStorage)().add("syncd-logs").version((0, i.syncdLogsCreateTable)(), [s("id"), o("ts"), o("collection"), l("collection"), o("log")]).view(e => e);
};
exports.getSyncdLogsTable = function () {
  return (0, r.getStorage)().table("syncd-logs");
};
var r = require("./732011.js");
var i = require("./612975.js");
var a = require("./322511.js");
const {
  addColumn: o,
  addAutoIncrementingPrimaryKey: s,
  addIndex: l
} = (0, a.columnBuilder)();