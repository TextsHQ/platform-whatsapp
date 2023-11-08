var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStickerSuggestions = function (e) {
  const [t, n] = (0, s.useState)(e != null ? (0, u.getStickerSuggestionsFromEmoji)(e.toString()) : []);
  const a = () => {
    if (e != null) {
      const t = e.toString();
      n((0, u.getStickerSuggestionsFromEmoji)(t));
    }
  };
  (0, s.useEffect)(() => {
    (0, r.default)(function* () {
      if (e != null) {
        yield i.StickerSearchCollection.search(e.toString());
        a();
      }
    })();
  }, [e]);
  (0, c.useListener)(l.RecentStickerCollectionMd, "add remove change sort", a);
  (0, c.useListener)(o.FavoriteStickerCollection, "add remove change sort", a);
  (0, c.useListener)(i.StickerSearchCollection, "add remove change", a);
  return t;
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/788788.js");
var l = require("../app/951220.js");
var i = require("../app/441051.js");
var u = require("../app/364382.js");
var s = require("../vendor/667294.js");
var c = require("../app/808446.js");