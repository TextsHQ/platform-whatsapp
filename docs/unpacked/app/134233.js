Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  (0, r.getStorage)().add("read-receipt").version((0, r.getStorage)().versions.version(0), [o("id"), a("externalIds")]).delete((0, r.getStorage)().versions.version(3)).view(e => e);
};
exports.getTable = function () {
  return (0, r.getStorage)().table("read-receipt");
};
var r = require("./242794.js");
var i = require("./322511.js");
const {
  addColumn: a,
  addUserDefinedPrimaryKey: o
} = (0, i.columnBuilder)();