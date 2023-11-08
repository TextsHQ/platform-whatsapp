var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isStickerIdInRecent = function (e) {
  return o.RecentStickerCollectionMd.get(e.id) != null;
};
exports.removeStickerFromRecent = function (e) {
  (0, l.sendRemoveStickerFromRecent)((0, r.default)(o.RecentStickerCollectionMd.get(e.id), "RecentStickerCollectionMd.get(sticker.id)"));
};
var r = a(require("../app/670983.js"));
var o = require("../app/951220.js");
var l = require("./496979.js");