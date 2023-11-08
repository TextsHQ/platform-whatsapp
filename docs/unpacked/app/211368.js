Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTable = function () {
  const e = (0, r.getStorage)();
  const {
    addColumn: t,
    addUserDefinedPrimaryKey: n
  } = (0, a.columnBuilder)(e.config);
  e.add("favorite-stickers").version((0, i.favoriteStickersCreateTable)(), [n("id"), t("timestamp"), t("sticker"), t("stickerHashWithoutMeta"), t("isFavorite"), t("deviceId")]).view(e => e);
};
exports.getFavoriteStickersTable = function () {
  return (0, r.getStorage)().table("favorite-stickers");
};
var r = require("./732011.js");
var i = require("./612975.js");
var a = require("./322511.js");