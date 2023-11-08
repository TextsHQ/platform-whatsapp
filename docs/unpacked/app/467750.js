Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  const e = (0, r.getStorage)();
  const {
    addUserDefinedPrimaryKey: t
  } = (0, a.columnBuilder)(e.config);
  e.add("blocklist").version((0, i.blocklistCreateTable)(), [t("id")]).view(e => ({
    id: e.id
  }));
};
exports.getBlocklistTable = function () {
  return (0, r.getStorage)().table("blocklist");
};
var r = require("./732011.js");
var i = require("./612975.js");
var a = require("./322511.js");