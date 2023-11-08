Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TABLE_NAME = undefined;
exports.addTable = function () {
  (0, r.getStorage)().add(o).version((0, i.ftsV2TokenToPrefixesCreateTable)(), [l("token"), s("prefixes"), u("prefixes")]).delete((0, i.ftsV2DeleteTokenPrefixes)());
};
var r = require("./965363.js");
var i = require("./131736.js");
var a = require("./322511.js");
const o = "fts-v2-token-prefixes";
exports.TABLE_NAME = o;
const {
  addColumn: s,
  addUserDefinedPrimaryKey: l,
  addArrayIndex: u
} = (0, a.columnBuilder)();