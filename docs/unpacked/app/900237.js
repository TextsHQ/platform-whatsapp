Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TABLE_NAME = undefined;
exports.deprecateTable = function () {
  (0, r.getStorage)().add(u).version((0, i.ftsV1IndexCreateTable)(), [s("token"), o("ids"), l("ids"), o("prefixes"), l("prefixes")]).delete((0, i.ftsV1DeleteAndDeprecate)());
};
var r = require("./965363.js");
var i = require("./131736.js");
var a = require("./322511.js");
const {
  addColumn: o,
  addUserDefinedPrimaryKey: s,
  addArrayIndex: l
} = (0, a.columnBuilder)();
const u = "fts-v1-index";
exports.TABLE_NAME = u;