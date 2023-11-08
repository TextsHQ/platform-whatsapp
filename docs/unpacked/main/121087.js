var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendFavoriteStickerMutation = function (e, t, n) {
  const a = e.map(e => o.default.generateFavoriteSyncMutation(e, t, n));
  return (0, l.lockForSync)([], a, () => Promise.resolve()).then(() => {
    if (t) {
      r.FavoriteStickerCollection.addOrUpdateStickers(e, n);
    } else {
      r.FavoriteStickerCollection.removeAndSave(e.map(e => e.filehash));
    }
  });
};
var r = require("../app/788788.js");
var o = a(require("../app/932444.js"));
var l = require("../app/480313.js");