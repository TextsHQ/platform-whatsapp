var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  (0, a.getStorage)().add("local_storage").version((0, o.localStorageCreateTable)(), [u("key"), l("value")]).view(e => ({
    key: e.key,
    value: e.value
  }));
};
exports.getTable = function () {
  return (0, a.getStorage)().table("local_storage");
};
var i = require("./322511.js");
var a = require("./722136.js");
var o = require("./772832.js");
var s = r(require("../vendor/441143.js"));
const {
  addColumn: l,
  addUserDefinedPrimaryKey: u
} = (0, i.columnBuilder)();
(0, s.default)(true, "only for use in worker");