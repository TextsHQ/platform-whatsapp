Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStickerSuggestionsFromEmoji = function (e) {
  const t = new Map();
  [i.RecentStickerCollectionMd, r.FavoriteStickerCollection, a.StickerSearchCollection].forEach(n => {
    var r;
    ((r = n.getSuggestionsFromEmoji(e)) !== null && r !== undefined ? r : []).forEach(e => {
      if (!t.has(e.filehash)) {
        t.set(e.filehash, e);
      }
    });
  });
  return Array.from(t.values());
};
exports.stickerMatchEmoji = function (e, t) {
  var n;
  var r;
  if ((n = e.mediaData) === null || n === undefined || (r = n.emojis) === null || r === undefined) {
    return undefined;
  } else {
    return r.includes(t);
  }
};
var r = require("./788788.js");
var i = require("./951220.js");
var a = require("./441051.js");