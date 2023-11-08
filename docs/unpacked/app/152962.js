Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  (0, r.getStorage)().add("signed-prekey-store").version((0, i.signedPreKeyCreateTable)(), [s("keyId"), o("keyPair"), o("signature")]).view(e => ({
    keyId: e.keyId,
    keyPair: e.keyPair,
    signature: e.signature
  }));
};
exports.getTable = function () {
  return (0, r.getStorage)().table("signed-prekey-store");
};
var r = require("./22399.js");
var i = require("./661062.js");
var a = require("./322511.js");
const {
  addColumn: o,
  addAutoIncrementingPrimaryKey: s
} = (0, a.columnBuilder)();