Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TABLE_NAME = undefined;
exports.addTable = function () {
  (0, i.getStorage)().add(d).version((0, a.ftsV3IndexCreateTable)(), [l("ftsRowId"), s("id"), u("id"), s("chatId"), u("chatId"), s("timestamp"), s("prefixes"), c("prefixes")]).view(e => e ? (0, r.buildDBEntry)(e.ftsRowId, e.id, e.chatId, e.timestamp, e.prefixes) : null);
};
exports.getTable = function () {
  return (0, i.getStorage)().table(d);
};
var r = require("./980047.js");
var i = require("./965363.js");
var a = require("./131736.js");
var o = require("./322511.js");
const {
  addColumn: s,
  addAutoIncrementingPrimaryKey: l,
  addIndex: u,
  addArrayIndex: c
} = (0, o.columnBuilder)();
const d = "fts-v3-index";
exports.TABLE_NAME = d;