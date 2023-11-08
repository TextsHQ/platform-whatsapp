var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPermutations = exports.WOMEN_HOLDING_HANDS = exports.WOMAN_AND_MAN_HOLDING_HANDS = exports.PEOPLE_HOLDING_HANDS = exports.OPEN_BOX_CHAR = exports.MEN_HOLDING_HANDS = exports.KISS_WOMAN_WOMAN = exports.KISS_WOMAN_MAN = exports.KISS_PERSON_PERSON = exports.KISS_MAN_MAN = exports.KISS = exports.HANDSHAKE = exports.EmojiUtil = exports.COUPLE_WITH_HEART_WOMAN_WOMAN = exports.COUPLE_WITH_HEART_WOMAN_MAN = exports.COUPLE_WITH_HEART_PERSON_PERSON = exports.COUPLE_WITH_HEART_MAN_MAN = exports.COUPLE_WITH_HEART = undefined;
exports.isBaseMultiSkinToneEmoji = function (e) {
  return D.has(e);
};
var i = r(require("../vendor/288306.js"));
var a = r(require("./296129.js"));
var o = r(require("./670983.js"));
var s = r(require("./360970.js"));
var l = r(require("./176477.js"));
var u = require("./708733.js");
var c = require("./821940.js");
var d = require("./918802.js");
var p = require("./97858.js");
var f = r(require("../vendor/441143.js"));
var _ = r(require("./257008.js"));
exports.OPEN_BOX_CHAR = "□";
const g = ["🏻", "🏼", "🏽", "🏾", "🏿"];
const m = new RegExp(g.join("|"), "g");
const h = "🧑‍🤝‍🧑";
exports.PEOPLE_HOLDING_HANDS = h;
const y = "👭";
exports.WOMEN_HOLDING_HANDS = y;
const E = "👬";
exports.MEN_HOLDING_HANDS = E;
const S = "👫";
exports.WOMAN_AND_MAN_HOLDING_HANDS = S;
const v = String.fromCodePoint(128105, 8205, 10084, 65039, 8205, 128139, 8205, 128104);
exports.KISS_WOMAN_MAN = v;
const T = String.fromCodePoint(128105, 8205, 10084, 65039, 8205, 128139, 8205, 128105);
exports.KISS_WOMAN_WOMAN = T;
const M = String.fromCodePoint(128104, 8205, 10084, 65039, 8205, 128139, 8205, 128104);
exports.KISS_MAN_MAN = M;
const A = String.fromCodePoint(129489, 8205, 10084, 65039, 8205, 128139, 8205, 129489);
exports.KISS_PERSON_PERSON = A;
const b = String.fromCodePoint(128143);
exports.KISS = b;
const C = String.fromCodePoint(128105, 8205, 10084, 65039, 8205, 128104);
exports.COUPLE_WITH_HEART_WOMAN_MAN = C;
const P = String.fromCodePoint(128105, 8205, 10084, 65039, 8205, 128105);
exports.COUPLE_WITH_HEART_WOMAN_WOMAN = P;
const O = String.fromCodePoint(128104, 8205, 10084, 65039, 8205, 128104);
exports.COUPLE_WITH_HEART_MAN_MAN = O;
const I = String.fromCodePoint(129489, 8205, 10084, 65039, 8205, 129489);
exports.COUPLE_WITH_HEART_PERSON_PERSON = I;
const R = String.fromCodePoint(128145);
exports.COUPLE_WITH_HEART = R;
const N = String.fromCodePoint(129309);
exports.HANDSHAKE = N;
const D = new Set([h, y, E, S, v, T, M, b, C, P, O, R, N]);
const w = u.HEART_EMOJIS.map(e => e);
const L = new Set(["︀", "︁", "︂", "︃", "︄", "︅", "︆", "︇", "︈", "︉", "︊", "︋", "︌", "︍", "︎", "️"]);
const k = e => e.replace(/\uFE0F/g, "");
const G = (0, i.default)((e, t) => function n() {
  let r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  if (r.length === t) {
    return [r];
  }
  let i = [];
  for (let t = 0; t < e.length; t++) {
    const a = [...r];
    a.push(e[t]);
    i = i.concat(n(a));
  }
  return i;
}(), (e, t) => e.toString() + t);
exports.getPermutations = G;
function U(e) {
  if (e.every(t => t === e[0])) {
    return e[0];
  } else {
    return e.join("");
  }
}
const x = new class {
  constructor() {
    var e = this;
    this.skinToneVariations = g;
    this.emojiRegex = () => {
      const e = this._createEmojiRegexIfNeeded();
      e.lastIndex = 0;
      return e;
    };
    this._createEmojiRegexIfNeeded = (0, s.default)(() => {
      const e = this._getEmojiRegexSource();
      return new RegExp("(" + e + ")", "g");
    });
    this.onlyEmojiRegex = () => {
      const e = this._createOnlyEmojiRegexIfNeeded();
      e.lastIndex = 0;
      return e;
    };
    this._createOnlyEmojiRegexIfNeeded = (0, s.default)(() => {
      const e = this._getEmojiRegexSource();
      return new RegExp("^(" + e + ")+$", "g");
    });
    this.splitEmojis = e => this.containsOnlyEmoji(e) === false ? null : e.split(this.emojiRegex()).filter(Boolean);
    this.extractAllEmojis = e => this.containsEmoji(e) === false ? null : Array.from(e.matchAll(this.emojiRegex())).filter(Boolean).map(e => e[1]);
    this.containsEmoji = e => this.emojiRegex().test(e);
    this.containsOnlyEmoji = e => this.onlyEmojiRegex().test(e);
    this.matchLargeEmojiPattern = e => {
      if (e == null) {
        return;
      }
      if (e.length > 50 || e.includes(" ")) {
        return null;
      }
      const t = this._getLargeEmojisRegex().exec(e);
      if (t) {
        return t.filter(Boolean).slice(1);
      } else {
        return null;
      }
    };
    this.normalizeEmojiFromString = e => this.normalizeEmoji(e);
    this.normalizeEmoji = e => {
      const t = k(e);
      const {
        unqualifiedToNormalizedEmoji: n
      } = this._getDerivedMaps();
      return n.get(t);
    };
    this.normalizeAllEmojis = (0, i.default)(e => e ? e.replace(this.emojiRegex(), (e, t) => {
      var n;
      if (L.has(t)) {
        return "";
      } else if ((n = this.normalizeEmoji(t)) !== null && n !== undefined) {
        return n;
      } else {
        return "□";
      }
    }) : "");
    this.getSkinToneVariant = (e, t) => {
      const n = this._getBaseToSkinToneEmojis().get(e);
      if (n == null) {
        return null;
      }
      const r = U(t);
      return n.get(r);
    };
    this._getDerivedMaps = (0, s.default)(() => {
      const {
        orderedEmojis: e,
        legacyToEmoji: t
      } = this._getConfig();
      const n = new Map();
      const r = new Map();
      const i = new Map();
      let a = 0;
      e.forEach((e, t) => {
        if (e === "" || e == null) {
          return;
        }
        (Array.isArray(e) ? e : [e]).forEach(e => {
          r.set(e, t);
          const n = k(e);
          i.set(n, e);
        });
        n.set(t, a);
        a++;
      });
      (0, _.default)(t).forEach(e => {
        let [t, n] = e;
        r.set(t, n);
        const a = k(t);
        i.set(a, t);
      });
      return {
        emojiToGlyphId: r,
        glyphIdToIndex: n,
        unqualifiedToNormalizedEmoji: i
      };
    });
    this._getBaseToSkinToneEmojis = (0, s.default)(() => {
      const {
        emojiToGlyphId: e
      } = this._getDerivedMaps();
      const t = new Map();
      for (const n of e.keys()) {
        let e;
        const r = n.replace(m, t => {
          if (e == null) {
            e = [];
          }
          e.push(t);
          return "";
        });
        if (e == null) {
          continue;
        }
        const i = e;
        let a;
        a = r === "👩‍🤝‍👩" ? y : r === "👨‍🤝‍👨" ? E : r === "👩‍🤝‍👨" ? S : r === I ? R : r === A ? b : r === String.fromCodePoint(129777, 8205, 129778) ? N : r;
        const o = this.normalizeEmoji(a);
        if (o == null) {
          continue;
        }
        let s = t.get(o);
        if (s == null) {
          s = new Map();
          s.set("", o);
          t.set(o, s);
        }
        const l = U(i);
        s.set(l, n);
      }
      return t;
    });
    this._getSkinToneEmojisToBase = (0, s.default)(() => {
      const e = new Map();
      for (const [t, n] of this._getBaseToSkinToneEmojis().entries()) {
        for (const r of n.values()) {
          e.set(r, t);
        }
      }
      return e;
    });
    this._getEmojiRegexSource = (0, s.default)(() => {
      const {
        emojiToGlyphId: e
      } = this._getDerivedMaps();
      return (0, l.default)([...Array.from(e.keys()), ...Array.from(L)].filter(Boolean));
    });
    this._createLargeEmojisRegexIfNeeded = (0, s.default)(() => {
      const e = this._getEmojiRegexSource();
      return new RegExp(`^(${e})(${e})?(${e})?$`);
    });
    this.getEmojisInCategory = e => {
      var t;
      if ((t = this._getConfig().categorizedEmojis[e]) !== null && t !== undefined) {
        return t;
      } else {
        return [];
      }
    };
    this._getEmojiToCategory = (0, s.default)(() => {
      const {
        categorizedEmojis: e
      } = this._getConfig();
      const t = new Map();
      Object.keys(e).forEach(n => {
        const r = u.CATEGORY_ORDERING.indexOf(n);
        e[n].forEach(e => {
          const n = this.normalizeEmoji(e);
          if (n != null) {
            t.set(n, r);
          }
        });
      });
      return t;
    });
    this.getGlyphId = e => {
      const t = this.normalizeEmoji(e);
      if (t == null) {
        return null;
      }
      const {
        emojiToGlyphId: n
      } = this._getDerivedMaps();
      return n.get(t);
    };
    this.getGlyphPath = (e, t) => {
      const n = this.normalizeEmojiFromString(e);
      if (n == null) {
        return null;
      }
      const {
        emojiToGlyphId: r
      } = this._getDerivedMaps();
      const i = r.get(n);
      if (i == null) {
        return null;
      }
      if ((0, p.experimentalEmojiAPIEnabled)()) {
        return (0, d.getGlyphExperimentalPath)(n, this._getConfig().emojiType, t);
      }
      let a;
      a = t > 40 ? 64 : 40;
      return (0, c.getGlyphPath)(this._getConfig().emojiType, i, a);
    };
    this.getSpritesPath = (e, t, n, r) => (0, p.experimentalEmojiAPIEnabled)() ? (0, d.getEmojiSpritesExperimentalPath)(e, t, n, r) : (0, c.getEmojiSpritesPath)(e, t, n, r);
    this.isGlyphCached = e => {
      const t = this._getGlyphIndex(e);
      return this._getCachedGlyphs().get(t);
    };
    this.markGlyphCached = e => {
      const t = this._getGlyphIndex(e);
      this._getCachedGlyphs().set(t);
    };
    this._getCachedGlyphs = (0, s.default)(() => new a.default(this._getGlyphCount()));
    this.getCssClasses = function (t) {
      let n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "small";
      return [`b${e.getBucket(t)}`, n === "small" ? "emoji" : "emojik", e._getConfig().emojiType === u.EMOJI_TYPE.APPLE ? "apple" : "wa"].join(" ");
    };
    this.getStyle = function (t) {
      let n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "small";
      const {
        xpos: r,
        ypos: i
      } = e._getCoordinates(t, n);
      return {
        backgroundPosition: `-${r}px -${i}px`
      };
    };
    this.getBucket = e => {
      const t = this._getGlyphIndex(e);
      return `${Math.floor(t / u.BUCKET_SIZE)}`;
    };
    this.getHeartEmojis = (0, s.default)(() => w.map(this.normalizeEmoji).filter(Boolean));
    this.getAnimatedEmojisToAssetMap = (0, s.default)(() => {
      const e = new Map();
      Array.from(u.ANIMATED_EMOJIS_STRING_TO_LOTTIE_ASSET_MAP).forEach(t => {
        let [n, r] = t;
        const i = this.normalizeEmoji(n);
        if (i != null) {
          e.set(i, r);
        }
      });
      return e;
    });
    this._getLastBucketId = (0, s.default)(() => {
      const e = this._getGlyphCount();
      return e - e % u.BUCKET_SIZE;
    });
    this._getLastBucketCols = (0, s.default)(() => Math.floor(Math.sqrt(this._getGlyphCount() - this._getLastBucketId())));
  }
  configure(e) {
    if (e !== this._config) {
      this._config = e;
      this.getHeartEmojis.reset();
      this._createEmojiRegexIfNeeded.reset();
      this._createLargeEmojisRegexIfNeeded.reset();
      this._createOnlyEmojiRegexIfNeeded.reset();
      this._getEmojiRegexSource.reset();
      this._getCachedGlyphs.reset();
      this._getSkinToneEmojisToBase.reset();
      this._getBaseToSkinToneEmojis.reset();
      this._getEmojiToCategory.reset();
      this._getLastBucketId.reset();
      this._getLastBucketCols.reset();
      this._getDerivedMaps.reset();
      this.getAnimatedEmojisToAssetMap.reset();
    }
  }
  _getConfig() {
    (0, f.default)(this._config != null, "Attempt to use EmojiUtil before it's been configured");
    return this._config;
  }
  isEmoji(e) {
    return this.normalizeEmoji(e) != null;
  }
  getSkinToneBase(e) {
    var t;
    const n = this.normalizeEmoji(e);
    if (n == null) {
      return null;
    } else if ((t = this._getSkinToneEmojisToBase().get(n)) !== null && t !== undefined) {
      return t;
    } else {
      return null;
    }
  }
  _getLargeEmojisRegex() {
    const e = this._createLargeEmojisRegexIfNeeded();
    e.lastIndex = 0;
    return e;
  }
  getAssetIdForAnimatedEmoji(e) {
    const t = this.getAnimatedEmojisToAssetMap();
    const n = this.normalizeEmojiFromString(e);
    if (n != null) {
      return t.get(n);
    } else {
      return null;
    }
  }
  _getGlyphCount() {
    const {
      glyphIdToIndex: e
    } = this._getDerivedMaps();
    return e.size;
  }
  _getCoordinates(e, t) {
    const n = this._getGlyphIndex(e);
    const r = n % u.BUCKET_SIZE;
    const i = n >= this._getLastBucketId() ? this._getLastBucketCols() : Math.floor(Math.sqrt(u.BUCKET_SIZE));
    const a = u.EMOJI_WIDTH[t];
    const o = Math.floor(r / i);
    return {
      xpos: Math.floor(r % i) * a,
      ypos: o * a,
      width: a
    };
  }
  _getGlyphIndex(e) {
    const {
      glyphIdToIndex: t
    } = this._getDerivedMaps();
    return (0, o.default)(t.get(e), "glyphIdToIndex.get(glyphId)");
  }
  getEmojiAggregate(e) {
    const t = this.getNormalizedOrTofu(e);
    const n = this.getSkinToneBase(t);
    if (n != null) {
      return n;
    } else {
      return k(t);
    }
  }
  getNormalizedOrTofu(e) {
    if (this.normalizeEmojiFromString(e)) {
      return e;
    } else {
      return "□";
    }
  }
}();
exports.EmojiUtil = x;