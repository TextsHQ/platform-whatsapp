Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TABLE_NAME = undefined;
exports.addTable = function () {
  (0, r.getStorage)().add(l).version((0, i.purgeRangeQueueCreateTable)(), [s(["chatId", "tsOfLastMessage", "startRowId", "endRowId"]), o("offset")]).view(e => e);
};
exports.getTable = function () {
  return (0, r.getStorage)().table(l);
};
var r = require("./965363.js");
var i = require("./131736.js");
var a = require("./322511.js");
const {
  addColumn: o,
  addCompositePrimaryKey: s
} = (0, a.columnBuilder)();
const l = "fts-purge-range-queue";
exports.TABLE_NAME = l;