Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  (0, r.getStorage)().add("prekey-store").version((0, i.preKeyCreateTable)(), [s("keyId"), o("keyPair"), o("isDirectDistribution")]).view(e => ({
    keyId: e.keyId,
    keyPair: e.keyPair,
    isDirectDistribution: e.isDirectDistribution
  }));
};
exports.getTable = function () {
  return (0, r.getStorage)().table("prekey-store");
};
var r = require("./22399.js");
var i = require("./661062.js");
var a = require("./322511.js");
const {
  addColumn: o,
  addAutoIncrementingPrimaryKey: s
} = (0, a.columnBuilder)();