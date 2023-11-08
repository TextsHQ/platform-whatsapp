Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  (0, r.getStorage)().add("dangling-receipt").version((0, r.getStorage)().versions.version(1), [o("id"), a("receipts"), a("acks")]).view(e => e);
};
exports.getTable = function () {
  return (0, r.getStorage)().table("dangling-receipt");
};
var r = require("./242794.js");
var i = require("./322511.js");
const {
  addColumn: a,
  addAutoIncrementingPrimaryKey: o
} = (0, i.columnBuilder)();