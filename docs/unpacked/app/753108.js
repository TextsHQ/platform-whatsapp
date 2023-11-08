Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  const e = (0, r.getStorage)();
  const {
    addColumn: t,
    addUserDefinedPrimaryKey: n
  } = (0, a.columnBuilder)(e.config);
  e.add("user-prefs").version((0, i.userPrefsCreateTable)(), [n("key"), t("value")]).view(e => e);
};
exports.getUserPrefsTable = function () {
  return (0, r.getStorage)().table("user-prefs");
};
var r = require("./732011.js");
var i = require("./612975.js");
var a = require("./322511.js");