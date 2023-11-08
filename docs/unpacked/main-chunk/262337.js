var o = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$createEmojiNode = function (e, t) {
  let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : d.Small;
  return new f(e, t, n).setMode("token");
};
exports.$isEmojiNode = function (e) {
  return e instanceof f;
};
exports.EmojiSize = exports.EmojiNode = undefined;
var r = require("./14544.js");
var a = require("../app/396574.js");
var l = require("../app/70354.js");
var i = require("../app/572946.js");
var s = o(require("../app/556869.js"));
var u = o(require("../app/156720.js"));
const d = require("../vendor/76672.js").Mirrored(["Small", "Medium", "Large"]);
exports.EmojiSize = d;
const c = {
  emoji: {
    fontSize: "cqiun4t2",
    fontFamily: "khvhiq1o",
    lineHeight: "r5qsrrlp",
    paddingTop: "i5tg98hk",
    paddingEnd: "iqx13udk",
    paddingBottom: "przvwfww",
    paddingStart: "qiohso4h",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    color: "nz2484kf",
    caretColor: "svot0ezm",
    backgroundSize: "dcnh1tix",
    backgroundRepeat: "sxl192xd",
    backgroundPosition: "t3g6t33p"
  },
  emojiWin: {
    fontSize: "fe5nidar",
    paddingTop: "i5tg98hk",
    paddingEnd: "f9ovudaz",
    paddingBottom: "przvwfww",
    paddingStart: "gx1rr48f"
  },
  emojiSafari: {
    paddingTop: "i5tg98hk",
    paddingEnd: "folpon7g",
    paddingBottom: "przvwfww",
    paddingStart: "snweb893",
    fontSize: "f8jlpxt4",
    marginTop: "tt8xd2xn",
    marginEnd: "hjr9v96k",
    marginBottom: "mpdn4nr2",
    marginStart: "l3dnfgho",
    fontFamily: "b1iopwm6"
  },
  emojiFirefox: {
    fontSize: "fe5nidar",
    paddingTop: "i5tg98hk",
    paddingEnd: "fhfm09ip",
    paddingBottom: "przvwfww",
    paddingStart: "mjn2akup"
  },
  emojiLarge: {
    fontSize: "igko4ipq",
    backgroundSize: "fpadw33j"
  },
  emojiMedium: {
    fontSize: "lymqd4c5",
    backgroundSize: "a5b3uz75"
  },
  innerWin: {
    "::selection": {
      backgroundColor: "mpj7bzys",
      color: "xzlurrtv"
    }
  }
};
class f extends r.TextNode {
  static clone(e) {
    return new f(e.__text, e.__textEmoji, e.__emojiSize, e.__key);
  }
  static getType() {
    return "emoji";
  }
  static importJSON() {
    throw (0, s.default)("Deserialization of EmojiNode is unsupported");
  }
  constructor(e, t, n, o) {
    super(e, o);
    this.__textEmoji = t;
    this.__emojiSize = n;
  }
  emoji() {
    return this.__text;
  }
  textEmoji() {
    return this.__textEmoji;
  }
  createDOM() {
    const e = this.__text;
    const t = document.createElement("span");
    const n = i.hasSafariFix && c.emojiSafari;
    const o = i.hasFirefoxFix && c.emojiFirefox;
    const r = i.isOSWin && c.emojiWin;
    let s = null;
    let f = null;
    switch (this.__emojiSize) {
      case d.Small:
        f = l.EmojiUtil.getGlyphPath(e, 40);
        break;
      case d.Medium:
        f = l.EmojiUtil.getGlyphPath(e, 64);
        s = c.emojiMedium;
        break;
      case d.Large:
        f = l.EmojiUtil.getGlyphPath(e, 64);
        s = c.emojiLarge;
    }
    t.className = (0, a.classnamesConvertMeToStylexPlease)(t.className, (0, u.default)(c.emoji, n, o, r, s));
    if (f != null) {
      t.style.backgroundImage = `url('${f}')`;
    }
    const m = document.createElement("span");
    m.textContent = e;
    const p = i.isOSWin && c.innerWin;
    m.className = (0, u.default)(p);
    t.appendChild(m);
    return t;
  }
  updateDOM(e, t) {
    const n = t.firstChild;
    if (n == null) {
      return true;
    }
    const o = this.__text;
    if (n.textContent !== o) {
      n.textContent = o;
    }
    return false;
  }
  exportJSON() {
    throw (0, s.default)("Serialization of EmojiNode is unsupported");
  }
}
exports.EmojiNode = f;