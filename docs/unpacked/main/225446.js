Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addStickerMsgsToFavorites = function (e) {
  const t = e.filter(e => e.type === i.MSG_TYPE.STICKER).map(e => new u.StickerModel({
    id: e.filehash,
    mimetype: e.mimetype,
    width: e.width,
    height: e.height,
    filehash: e.filehash,
    encFilehash: e.encFilehash,
    directPath: e.directPath,
    mediaKey: e.mediaKey,
    mediaKeyTimestamp: e.mediaKeyTimestamp
  }));
  __LOG__(2)`Favorite Stickers: add favorite sticker by starring msgs.`;
  (0, o.sendFavoriteStickerMutation)(t, true, (0, a.unixTimeMs)());
};
exports.addStickerToFavorites = function (e) {
  if ((0, l.isFavoriteStickersEnabled)()) {
    (0, o.sendFavoriteStickerMutation)([e], true, (0, a.unixTimeMs)());
  } else {
    r.FavoriteStickerCollection.addOrUpdateStickers([new u.StickerModel({
      id: e.id,
      mimetype: e.mimetype,
      width: e.width,
      height: e.height,
      filehash: e.filehash,
      encFilehash: e.encFilehash,
      directPath: e.directPath,
      mediaKey: e.mediaKey,
      mediaKeyTimestamp: e.mediaKeyTimestamp
    })], (0, a.unixTimeMs)());
  }
};
exports.isStickerFilehashFavorited = function (e) {
  return r.FavoriteStickerCollection.get(e) != null;
};
exports.removeStickerFromFavorites = function (e) {
  if ((0, l.isFavoriteStickersEnabled)()) {
    (0, o.sendFavoriteStickerMutation)([e], false, (0, a.unixTimeMs)());
  } else {
    r.FavoriteStickerCollection.removeAndSave(e.filehash);
  }
};
exports.removeStickerMsgFromFavorites = function (e) {
  const t = new u.StickerModel({
    id: e.filehash,
    mimetype: e.mimetype,
    width: e.width,
    height: e.height,
    filehash: e.filehash,
    encFilehash: e.encFilehash,
    directPath: e.directPath,
    mediaKey: e.mediaKey,
    mediaKeyTimestamp: e.mediaKeyTimestamp
  });
  __LOG__(2)`Favorite Stickers: remove favorite sticker with msg.`;
  (0, o.sendFavoriteStickerMutation)([t], false, (0, a.unixTimeMs)());
};
var a = require("../app/632157.js");
var r = require("../app/788788.js");
var o = require("./121087.js");
var l = require("../app/97858.js");
var i = require("../app/373070.js");
var u = require("../app/164832.js");