Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmojisPlugin = function (e) {
  const {
    emojiSize: t
  } = e;
  const [n] = (0, r.useLexicalComposerContext)();
  (0, d.useEffect)(() => {
    const e = n.registerNodeTransform(o.TextNode, e => {
      !function (e, t) {
        if (!e.isSimpleText()) {
          return;
        }
        const n = e.getTextContent();
        let o = e;
        for (const {
          emoji: e,
          index: r,
          lastIndex: i
        } of function* (e) {
          const t = a.EmojiUtil.emojiRegex();
          let n = 0;
          for (;;) {
            const o = t.exec(e);
            if (!o) {
              break;
            }
            const r = o[0];
            const a = o.index;
            const l = n;
            n = t.lastIndex;
            yield {
              emoji: r,
              index: a,
              lastIndex: l
            };
          }
        }(n)) {
          const n = r - i;
          let a;
          let s;
          if (n === 0) {
            [a, s] = o.splitText(e.length);
          } else {
            [, a, s] = o.splitText(n, n + e.length);
          }
          o = s;
          const u = (0, l.$createEmojiNode)(e, null, t);
          a.replace(u);
        }
      }(e, t);
    });
    const r = n.registerNodeTransform(o.TextNode, e => {
      !function (e, t) {
        if (!e.isSimpleText()) {
          return;
        }
        const n = (0, u.$getRangeSelection)();
        const r = (0, u.$getPreviousRangeSelection)();
        const s = r && (0, o.$getNodeByKey)(r.anchor.key);
        if (!n || !n.isCollapsed() || n.anchor.getNode() !== e || s && s !== e) {
          return;
        }
        const d = n.anchor.offset;
        const c = e.getTextContent();
        let f;
        let m;
        let p;
        for (let e = 2; e <= 3; e++) {
          f = c.slice(d - e, d);
          m = y[f];
          if (m == null) {
            continue;
          }
          const t = a.EmojiUtil.getSkinToneBase(m) && i.EmojiVariantCollection.getVariant(m);
          m = t != null ? t : m;
          break;
        }
        if (!f || !m) {
          return;
        }
        const h = d - f.length;
        if (h === 0) {
          [p] = e.splitText(f.length);
        } else {
          [, p] = e.splitText(h, h + f.length);
        }
        const E = (0, l.$createEmojiNode)(m, f, t);
        p.replace(E);
      }(e, t);
    });
    return () => {
      e();
      r();
    };
  }, [n, t]);
  (0, d.useEffect)(() => {
    n.update(() => {
      const e = [];
      for (const t of (0, u.textNodesIterator)((0, o.$getRoot)())) {
        if ((0, l.$isEmojiNode)(t)) {
          e.push(t);
        }
      }
      e.forEach(e => {
        e.replace((0, l.$createEmojiNode)(e.emoji(), e.textEmoji(), t));
      });
    });
  }, [n, t]);
  (0, c.useLexicalCommandListener)(n, o.KEY_BACKSPACE_COMMAND, () => {
    let e;
    n.update(() => {
      const t = (0, u.$getPreviousRangeSelection)();
      if (!t || !t.isCollapsed()) {
        return;
      }
      const n = t.anchor.getNode();
      if (n instanceof l.EmojiNode) {
        e = n.textEmoji();
      }
    }, {
      onUpdate: () => {
        if (e != null) {
          n.update(() => {
            if (e != null) {
              (0, u.$insertText)(e);
            }
          }, {
            skipTransforms: true
          });
        }
      }
    });
    return false;
  });
  (0, d.useEffect)(() => {
    s.FontLoader.load(s.Font.NOTO_EMOJI);
  }, []);
  return null;
};
exports.TEXT_TO_EMOJI_HASH = undefined;
var o = require("./14544.js");
var r = require("./71671.js");
var a = require("../app/70354.js");
var l = require("./262337.js");
var i = require("../app/152285.js");
var s = require("./393542.js");
var u = require("./251922.js");
var d = require("../vendor/667294.js");
var c = require("./16188.js");
const f = String.fromCodePoint(128077);
const m = String.fromCodePoint(128078);
const p = String.fromCodePoint(128578);
const h = String.fromCodePoint(128577);
const E = String.fromCodePoint(128539);
const g = String.fromCodePoint(128528);
const C = String.fromCodePoint(128533);
const _ = String.fromCodePoint(128512);
const T = String.fromCodePoint(128536);
const S = String.fromCodePoint(128558);
const N = String.fromCodePoint(10084, 65039);
const v = String.fromCodePoint(128513);
const b = String.fromCodePoint(128518);
const y = {
  "(y)": f,
  "(Y)": f,
  "(n)": m,
  "(N)": m,
  ":-)": p,
  ":-(": h,
  ":-p": E,
  ":-P": E,
  ":-\\": C,
  ":-D": _,
  ":-o": S,
  ";-)": String.fromCodePoint(128521),
  ":-*": T,
  ":-|": g,
  ":'(": String.fromCodePoint(128546),
  "^_^": v,
  "<3": N,
  ">_<": b
};
exports.TEXT_TO_EMOJI_HASH = y;