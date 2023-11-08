Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  (0, r.getStorage)().add("signal-meta-store").version((0, i.metaCreateTable)(), [s("key"), o("value")]).view(e => ({
    key: e.key,
    value: e.value
  }));
};
exports.getTable = function () {
  return (0, r.getStorage)().table("signal-meta-store");
};
var r = require("./22399.js");
var i = require("./661062.js");
var a = require("./322511.js");
const {
  addColumn: o,
  addUserDefinedPrimaryKey: s
} = (0, a.columnBuilder)();