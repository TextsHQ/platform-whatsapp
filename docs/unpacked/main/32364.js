Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StickerSuggestions = undefined;
var a = require("../app/70354.js");
var r = require("../main-chunk/251922.js");
var o = require("./692996.js");
var l = require("./204875.js");
var i = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = u(t);
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
}(require("../vendor/667294.js"));
function u(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (u = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const s = (0, i.forwardRef)((e, t) => {
  let {
    editor: n,
    onSelect: u,
    onDismiss: s
  } = e;
  const [c, d] = (0, i.useState)();
  const [f, p] = (0, i.useState)(false);
  (0, i.useEffect)(() => {
    const e = () => {
      if (n == null) {
        return;
      }
      const e = (0, r.getTextContent)(n);
      if (a.EmojiUtil.isEmoji(e)) {
        const t = a.EmojiUtil.normalizeEmojiFromString(e);
        d(t);
      } else {
        d(null);
      }
    };
    const t = n == null ? undefined : n.registerUpdateListener(() => {
      if (!(n == null ? undefined : n.isComposing())) {
        e();
      }
    });
    e();
    return t;
  }, [n]);
  (0, i.useImperativeHandle)(t, () => ({
    forceHide: e => {
      p(e);
    }
  }));
  if (c == null || n == null || f) {
    return null;
  } else {
    return i.default.createElement(o.StickerSuggestionsPanel, {
      emojiPrompt: c,
      kind: l.SuggestionsPanelKind.ComposeBox,
      editor: n,
      onSelect: e => {
        (0, r.setTextContent)(n, "");
        d(null);
        if (!(u == null)) {
          u(e);
        }
      },
      onDismiss: () => {
        d(null);
        if (!(s == null)) {
          s();
        }
      }
    });
  }
});
exports.StickerSuggestions = s;
s.displayName = "StickerSuggestions";