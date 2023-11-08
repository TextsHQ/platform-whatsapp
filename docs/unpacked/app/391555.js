Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  (0, r.getStorage)().add("baseKey-store").version((0, i.baseKeyCreateTable)(), [s("id"), o("address"), o("originalMsgId"), o("baseKey"), l(["address", "originalMsgId"])]).view(e => ({
    id: e.id,
    address: e.address,
    originalMsgId: e.originalMsgId,
    baseKey: e.baseKey
  }));
};
exports.getTable = function () {
  return (0, r.getStorage)().table("baseKey-store");
};
var r = require("./22399.js");
var i = require("./661062.js");
var a = require("./322511.js");
const {
  addColumn: o,
  addAutoIncrementingPrimaryKey: s,
  addCompositeIndex: l
} = (0, a.columnBuilder)();