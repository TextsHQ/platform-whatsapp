var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tabScale = exports.ReactionEmoji = undefined;
var r = require("../app/70354.js");
var o = a(require("../app/225148.js"));
var l = a(require("../vendor/667294.js"));
var i = a(require("../app/156720.js"));
const u = {
  tofu: {
    color: "tviruh8d"
  },
  listScale: {
    transform: "hda1r0l0"
  },
  imageRendering: {
    imageRendering: "bd96tnyg"
  },
  bubbleScale: {
    transform: "p83aruvr"
  },
  bubbleScale1PxSmaller: {
    transform: "eipqoq80"
  },
  reactionCellDetailThumbScale: {
    transform: "slzs0jzd"
  },
  tabScale: {
    transform: "rbxsf3hm"
  },
  tray: {
    transform: "lidvm163"
  },
  trayScale2PxSmaller: {
    transform: "mob44t3l"
  }
};
const s = u.tabScale;
exports.tabScale = s;
exports.ReactionEmoji = e => {
  let {
    reaction: t,
    size: n,
    scale: a
  } = e;
  const s = r.EmojiUtil.normalizeEmojiFromString(t);
  const c = r.EmojiUtil.getHeartEmojis().some(e => r.EmojiUtil.normalizeEmoji(e) === s);
  if (s) {
    return l.default.createElement(o.default, {
      className: (0, i.default)(a !== "tray" && u.imageRendering, a === "list" && u.listScale, a === "bubble" && u.bubbleScale, a === "tray" && u.tray, a === "reactionCellDetailThumb" && u.reactionCellDetailThumbScale, c && a === "tray" && u.trayScale2PxSmaller, c && a === "bubble" && u.bubbleScale1PxSmaller),
      size: n,
      key: "low-res",
      emoji: s
    });
  } else {
    return l.default.createElement("span", {
      className: (0, i.default)(u.tofu)
    }, r.OPEN_BOX_CHAR);
  }
};