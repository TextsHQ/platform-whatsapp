Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  (0, r.getStorage)().add("pending-device-sync").version((0, r.getStorage)().versions.version(4), [a("id")]).view(e => e);
};
exports.getTable = function () {
  return (0, r.getStorage)().table("pending-device-sync");
};
var r = require("./242794.js");
var i = require("./322511.js");
const {
  addUserDefinedPrimaryKey: a
} = (0, i.columnBuilder)();