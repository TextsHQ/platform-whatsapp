Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  (0, r.getStorage)().add("peer-read-receipt").version((0, r.getStorage)().versions.version(2), [o("id"), a("msgKeys"), a("ts"), a("ack")]).view(e => e);
};
exports.getTable = function () {
  return (0, r.getStorage)().table("peer-read-receipt");
};
var r = require("./242794.js");
var i = require("./322511.js");
const {
  addColumn: a,
  addAutoIncrementingPrimaryKey: o
} = (0, i.columnBuilder)();