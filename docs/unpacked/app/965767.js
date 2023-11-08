Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  const e = (0, r.getStorage)();
  const {
    addUserDefinedPrimaryKey: t
  } = (0, a.columnBuilder)(e.config);
  e.add("fts-indexing-queue").version((0, i.ftsIndexingQueueCreateTable)(), [t("id")]).view(e => e);
};
exports.getFtsIndexingQueueTable = function () {
  return (0, r.getStorage)().table("fts-indexing-queue");
};
var r = require("./732011.js");
var i = require("./612975.js");
var a = require("./322511.js");