Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TABLE_NAME = undefined;
exports.addTable = function () {
  (0, r.getStorage)().add(c).version((0, i.ftsV2IndexCreateTable)(), [s(["id", "chatId", "token"]), l("id"), l("chatId"), l("token"), u(["chatId", "token"]), o("timestamp"), u(["id", "token"])]).delete((0, i.ftsV2Delete)());
};
var r = require("./965363.js");
var i = require("./131736.js");
var a = require("./322511.js");
const {
  addColumn: o,
  addCompositePrimaryKey: s,
  addIndex: l,
  addCompositeIndex: u
} = (0, a.columnBuilder)();
const c = "fts-v2-index";
exports.TABLE_NAME = c;