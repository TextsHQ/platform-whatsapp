Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  (0, r.getStorage)().add("session-store").version((0, i.sessionCreateTable)(), [s("address"), o("session")]).view(e => ({
    address: e.address,
    session: e.session
  }));
};
exports.getTable = function () {
  return (0, r.getStorage)().table("session-store");
};
var r = require("./22399.js");
var i = require("./661062.js");
var a = require("./322511.js");
const {
  addColumn: o,
  addUserDefinedPrimaryKey: s
} = (0, a.columnBuilder)();