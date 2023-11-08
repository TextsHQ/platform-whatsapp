var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    action: t = () => false,
    emoji: n,
    base: a,
    leftEmojiVariation: f = false,
    rightEmojiVariation: y = false,
    showBaseEmoji: C = false,
    selected: b = false,
    testid: M
  } = e;
  const S = v.has(a);
  const T = _.has(a);
  const w = !(r.Conn.platform !== s.PLATFORMS.ANDROID && r.Conn.platform !== s.PLATFORMS.SMBA || a !== l.KISS_WOMAN_WOMAN && a !== l.COUPLE_WITH_HEART_WOMAN_WOMAN);
  const A = r.Conn.platform === s.PLATFORMS.ANDROID || r.Conn.platform === s.PLATFORMS.SMBA ? g : p;
  const P = a === n;
  let O;
  if (P || !f && !y) {
    O = c.default.createElement(o.DropdownItem, {
      action: t,
      type: "emoji-preview"
    }, c.default.createElement("div", {
      className: (0, d.default)(E.optionContainer)
    }, c.default.createElement("div", {
      className: (0, d.default)(E.previewHeight, P && !C && E.silhouettes)
    }, c.default.createElement(i.EmojiText, {
      text: n,
      formatters: u.LargeEmojiOnly(),
      tabIndex: "-1"
    })), P && !C && S && c.default.createElement("img", {
      src: A,
      alt: "Heart",
      className: (0, d.default)(E.innerHeart)
    })));
  } else if (T || S) {
    O = c.default.createElement(o.DropdownItem, {
      action: t,
      type: "emoji-preview"
    }, c.default.createElement("div", {
      className: (0, d.default)(E.optionContainer, b && E.selectedOption)
    }, c.default.createElement("div", {
      className: (0, d.default)(E.innerEmoji, E.innerEmojiClipper, S && E.innerEmojiWithHeartClipper, w && E.innerWomenAndWomenEmojiClipper, f && E.silhouettes)
    }, c.default.createElement(i.EmojiText, {
      text: n,
      formatters: u.LargeEmojiOnly(),
      tabIndex: "-1"
    })), c.default.createElement("div", {
      className: (0, d.default)(E.innerEmojibelow, E.innerEmojiBelowClipper, S && E.innerBelowEmojiWithHeartClipper, w && E.innerBelowWomenEmojiClipper, y && E.silhouettes)
    }, c.default.createElement(i.EmojiText, {
      text: n,
      formatters: u.LargeEmojiOnly(),
      tabIndex: "-1"
    })), S && c.default.createElement("img", {
      src: A,
      alt: "Heart",
      className: (0, d.default)(E.innerHeart)
    })));
  } else if (l.HANDSHAKE === a) {
    O = c.default.createElement(o.DropdownItem, {
      action: t,
      type: "emoji-preview"
    }, c.default.createElement("div", {
      className: (0, d.default)(E.optionContainer, b && E.selectedOption)
    }, c.default.createElement("div", {
      className: (0, d.default)(E.innerEmoji)
    }, c.default.createElement(i.EmojiText, {
      text: n,
      formatters: u.LargeEmojiOnly(),
      tabIndex: "-1"
    })), c.default.createElement("img", {
      src: f ? h : m,
      alt: (f ? "Right" : "Left") + " shake hand silhouette",
      className: (0, d.default)(f ? E.shakeHandRight : E.shakeHandLeft, E.silhouettes)
    })));
  }
  return c.default.createElement("div", {
    className: (0, d.default)(E.container)
  }, O);
};
var r = require("../app/445729.js");
var o = require("../app/675085.js");
var l = require("../app/70354.js");
var i = require("../app/305521.js");
var u = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = f(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var a = {};
  var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e) {
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
      if (l && (l.get || l.set)) {
        Object.defineProperty(a, o, l);
      } else {
        a[o] = e[o];
      }
    }
  }
  a.default = e;
  if (n) {
    n.set(e, a);
  }
  return a;
}(require("../app/675886.js"));
var s = require("../app/94602.js");
var c = a(require("../vendor/667294.js"));
var d = a(require("../app/156720.js"));
function f(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (f = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const p = require("./108068.js");
const m = require("./3392.js");
const h = require("./865655.js");
const g = require("./987383.js");
const E = {
  silhouettes: {
    filter: "ha4ip43m"
  },
  selectedOption: {
    backgroundColor: "qrhr4x0p",
    borderTopStartRadius: "boajuire",
    borderTopEndRadius: "o93wvyfv",
    borderBottomEndRadius: "i5w8n1e6",
    borderBottomStartRadius: "cnpay6qi"
  },
  container: {
    marginBottom: "dblt22a0"
  },
  optionContainer: {
    position: "g0rxnol2",
    height: "jbxl65f1"
  },
  previewHeight: {
    height: "jbxl65f1"
  },
  innerEmoji: {
    position: "g0rxnol2"
  },
  innerEmojibelow: {
    position: "lhggkp7q",
    top: "qq0sjtgm",
    start: "tkdu00h0"
  },
  innerHeart: {
    height: "sai7fuui",
    width: "tknnhhou",
    position: "g0rxnol2",
    top: "opbtbchl"
  },
  shakeHandRight: {
    height: "o1dusru6",
    width: "e4a3aln8",
    position: "g0rxnol2",
    top: "opbtbchl",
    marginBottom: "en8d0ozt"
  },
  shakeHandLeft: {
    height: "o1dusru6",
    width: "e4a3aln8",
    position: "g0rxnol2",
    top: "opbtbchl",
    marginBottom: "en8d0ozt",
    clipPath: "tdpsya9q"
  },
  innerEmojiClipper: {
    clipPath: "jv6unooo"
  },
  innerEmojiBelowClipper: {
    clipPath: "lhsttmr3"
  },
  innerEmojiWithHeartClipper: {
    clipPath: "vhqtnu57"
  },
  innerBelowEmojiWithHeartClipper: {
    clipPath: "dfw30kuc"
  },
  innerWomenAndWomenEmojiClipper: {
    clipPath: "i1lv5eai"
  },
  innerBelowWomenEmojiClipper: {
    clipPath: "swltuhs1"
  }
};
const v = new Set([l.KISS_WOMAN_MAN, l.KISS_WOMAN_WOMAN, l.KISS_MAN_MAN, l.KISS, l.COUPLE_WITH_HEART_WOMAN_MAN, l.COUPLE_WITH_HEART_WOMAN_WOMAN, l.COUPLE_WITH_HEART_MAN_MAN, l.COUPLE_WITH_HEART]);
const _ = new Set([l.PEOPLE_HOLDING_HANDS, l.WOMEN_HOLDING_HANDS, l.MEN_HOLDING_HANDS, l.WOMAN_AND_MAN_HOLDING_HANDS]);