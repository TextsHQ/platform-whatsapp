var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    base: t,
    unicode: n,
    action: a,
    preVariant: g
  } = e;
  const E = (0, l.isBaseMultiSkinToneEmoji)(t);
  const v = (0, f.multiSkinToneEmojiPickerEnabled)() && !(r.Conn.platform === p.PLATFORMS.IPHONE && l.HANDSHAKE === t);
  const _ = (E ? (0, l.getPermutations)(u.SKIN_TONE_VARIATIONS.slice(1), 2) : u.SKIN_TONE_VARIATIONS.map(e => [e])).reduce((e, n) => {
    const a = l.EmojiUtil.getSkinToneVariant(t, n);
    if (a) {
      e.push(a);
      return e;
    } else {
      return e;
    }
  }, []);
  const y = _.filter(e => l.EmojiUtil.isEmoji(e)).map((e, t) => h.default.createElement(o.DropdownItem, {
    type: E ? "emoji-grid" : "emoji",
    key: e + t,
    testid: "mi-emoji-variant",
    action: t => a(t, n, e)
  }, h.default.createElement(c.EmojiText, {
    text: e,
    formatters: d.LargeEmojiOnly(),
    tabIndex: "-1"
  })));
  if (E) {
    if (v) {
      return h.default.createElement(m.default, {
        base: t,
        action: a,
        unicode: n,
        preVariant: g
      }, _);
    } else {
      return h.default.createElement(i.default, {
        base: t,
        action: a,
        unicode: n
      }, y);
    }
  }
  return h.default.createElement(s.default, null, y);
};
var r = require("../app/445729.js");
var o = require("../app/675085.js");
var l = require("../app/70354.js");
var i = a(require("./791743.js"));
var u = require("./822201.js");
var s = a(require("./223873.js"));
var c = require("../app/305521.js");
var d = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = g(t);
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
var f = require("../app/97858.js");
var p = require("../app/94602.js");
var m = a(require("./741103.js"));
var h = a(require("../vendor/667294.js"));
function g(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (g = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}