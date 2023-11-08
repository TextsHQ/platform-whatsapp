Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  (0, r.getStorage)().add("identity-store").version((0, i.identityCreateTable)(), [s("identifier"), o("identityKey"), o("rowId"), o("sentAddonRowId")]).view(e => ({
    identifier: e.identifier,
    identityKey: e.identityKey,
    rowId: e.rowId,
    sentAddonRowId: e.sentAddonRowId
  }));
};
exports.getTable = function () {
  return (0, r.getStorage)().table("identity-store");
};
var r = require("./22399.js");
var i = require("./661062.js");
var a = require("./322511.js");
const {
  addColumn: o,
  addUserDefinedPrimaryKey: s
} = (0, a.columnBuilder)();