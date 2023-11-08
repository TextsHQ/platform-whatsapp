var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEmojiSpritesPath = function (e, t, n, r) {
  const a = (0, i.default)(s.default[e][t], "emojiSpriteHashes[emojiType][bucketId]");
  return `${u}/emoji-${t}-${n}_${a}.${r}`;
};
exports.getGlyphPath = function (e, t, n) {
  return function (e, t) {
    let n = null;
    n = l;
    return `${n}/${o.emojiPrefixHash}_${t.toLowerCase().slice(0, 1)}_${e}`;
  }(`${t}-${n}.png`, e);
};
var i = r(require("./670983.js"));
var a = require("./508247.js");
var o = require("./730094.js");
var s = r(require("./838314.js"));
const l = `${a.WEB_PUBLIC_PATH}img`;
const u = `${a.WEB_PUBLIC_PATH}img`;