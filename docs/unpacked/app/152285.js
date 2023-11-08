var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmojiVariantCollectionImpl = exports.EmojiVariantCollection = undefined;
var i = require("./997853.js");
var a = require("./392125.js");
var o = require("./70354.js");
var s = r(require("./670832.js"));
var l = require("./94872.js");
var u = r(require("./556869.js"));
class c extends a.BaseCollection {
  setVariant(e, t) {
    const n = o.EmojiUtil.getSkinToneBase(e);
    if (!n) {
      throw (0, u.default)("attempt to store variantless emoji");
    }
    this.gadd({
      id: n,
      variant: t
    });
  }
  getVariant(e) {
    if (o.EmojiUtil.getSkinToneBase(e)) {
      const t = this.get(e);
      if (t) {
        return o.EmojiUtil.normalizeEmoji(t.variant);
      } else {
        return null;
      }
    }
    throw (0, u.default)("attempt to get variantless emoji");
  }
  getVariantIfExists(e) {
    if (o.EmojiUtil.getSkinToneBase(e)) {
      const t = this.get(e);
      if (t) {
        return o.EmojiUtil.normalizeEmoji(t.variant);
      } else {
        return null;
      }
    }
    return null;
  }
}
exports.EmojiVariantCollectionImpl = c;
c.model = s.default;
c.cachePolicy = {
  id: l.COLLECTIONS_KEYS.EMOJI_VARIANT_COLLECTION,
  policy: i.CACHE_POLICY.LOAD,
  delay: 1000
};
const d = new c();
exports.EmojiVariantCollection = d;