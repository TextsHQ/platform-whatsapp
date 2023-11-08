Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  const e = (0, r.getStorage)();
  const {
    addColumn: t,
    addUserDefinedPrimaryKey: n
  } = (0, a.columnBuilder)(e.config);
  e.add("recent-stickers").version((0, i.recentStickersCreateTable)(), [n("id"), t("timestamp"), t("sticker"), t("msgId"), t("weight"), t("isNewSticker")]).view(e => e);
};
exports.getRecentStickersTable = function () {
  return (0, r.getStorage)().table("recent-stickers");
};
var r = require("./732011.js");
var i = require("./612975.js");
var a = require("./322511.js");