Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  (0, r.getStorage)().add("senderkey-store").version((0, i.senderKeyCreateTable)(), [s("senderKeyName"), o("senderKey"), o("senderId"), l("senderId")]).view(e => ({
    senderKeyName: e.senderKeyName,
    senderKey: e.senderKey,
    senderId: e.senderId
  }));
};
exports.getTable = function () {
  return (0, r.getStorage)().table("senderkey-store");
};
var r = require("./22399.js");
var i = require("./661062.js");
var a = require("./322511.js");
const {
  addColumn: o,
  addUserDefinedPrimaryKey: s,
  addIndex: l
} = (0, a.columnBuilder)();