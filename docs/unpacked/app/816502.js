Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TABLE_NAME = exports.ManifestKeys = undefined;
exports.addTable = function () {
  (0, r.getStorage)().add(o).version((0, i.manifestCreateTable)(), [u("key"), l("tokenizerVersion"), l("schemaVersion"), l("isCurrent"), l("lastMsgKeyViaFullIndexer"), l("isFullIndexingComplete")]).view(e => e || null);
};
exports.getTable = function () {
  return (0, r.getStorage)().table(o);
};
var r = require("./965363.js");
var i = require("./131736.js");
var a = require("./322511.js");
const o = "manifest";
exports.TABLE_NAME = o;
const s = Object.freeze({
  PREV_VERSION: "prev.version",
  CURR_VERSION: "curr.version",
  NEXT_VERSION: "next.version"
});
exports.ManifestKeys = s;
const {
  addColumn: l,
  addUserDefinedPrimaryKey: u
} = (0, a.columnBuilder)();