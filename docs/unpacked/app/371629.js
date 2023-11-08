Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  (0, r.getStorage)().add("premium-message").version((0, i.premiumMessageCreateTable)(), [s("id"), o("name"), o("type"), o("message"), o("isDeleted"), o("mediaId"), o("sentMessageIds")]).view(e => e);
};
exports.getPremiumMessageTable = function () {
  return (0, r.getStorage)().table("premium-message");
};
var r = require("./732011.js");
var i = require("./612975.js");
var a = require("./322511.js");
const {
  addColumn: o,
  addUserDefinedPrimaryKey: s
} = (0, a.columnBuilder)();