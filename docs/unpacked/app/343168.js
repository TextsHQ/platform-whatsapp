var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.emojiAssetMapCreator = function (e) {
  return t => c(t, e);
};
exports.getEmojiTypeFromPlatform = d;
var i = r(require("../vendor/252628.js"));
var a = r(require("../vendor/944908.js"));
var o = r(require("../vendor/288306.js"));
var s = require("./70354.js");
var l = require("./708733.js");
var u = require("./94602.js");
const c = (0, o.default)((e, t) => {
  const n = new Map();
  const r = d(e);
  const o = t[r];
  const u = o.SELECTOR;
  const c = Math.ceil((0, a.default)((0, i.default)(o.UNICODE_TO_EMOJI)).length / l.BUCKET_SIZE);
  for (let e = 0; e < c; e += 1) {
    const t = `emoji-${u}-b${e}`;
    const i = 40;
    n.set(t, {
      id: t,
      selectors: [`.emoji.${u}.b${e}`, `.emojik.${u}.b${e}`],
      low: {
        webp: s.EmojiUtil.getSpritesPath(r, e, i, "webp"),
        default: s.EmojiUtil.getSpritesPath(r, e, 40, "png")
      },
      high: {
        default: s.EmojiUtil.getSpritesPath(r, e, 64, "png"),
        webp: s.EmojiUtil.getSpritesPath(r, e, 64, "webp")
      }
    });
  }
  return n;
});
function d(e) {
  switch (e) {
    case u.PLATFORMS.IPHONE:
    case u.PLATFORMS.SMBI:
    case u.PLATFORMS.IPAD:
      return l.EMOJI_TYPE.APPLE;
    default:
      return l.EMOJI_TYPE.WHATSAPP;
  }
}