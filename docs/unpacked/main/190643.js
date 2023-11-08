var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    isOutgoingMsg: t,
    displayType: n,
    bubbleType: a,
    children: s
  } = e;
  const c = (0, o.isWideDisplay)(n);
  const d = t && !c;
  const f = !d;
  return l.default.createElement("div", {
    className: (0, i.default)([u.container, f && u.startAlign, d && u.endAlign, a === r.AddOnBubbleType.STICKER_LIKE_MSG && u.sticker, a === r.AddOnBubbleType.STICKER_LIKE_MSG && c && u.wideSticker, a === r.AddOnBubbleType.IMAGE_MSG && u.image, a === r.AddOnBubbleType.MEDIA_VIEWER && f && u.startAlignMediaViewer, a === r.AddOnBubbleType.MEDIA_VIEWER && d && u.endAlignMediaViewer])
  }, s);
};
var r = require("./980518.js");
var o = require("../app/356097.js");
var l = a(require("../vendor/667294.js"));
var i = a(require("../app/156720.js"));
const u = {
  container: {
    display: "p357zi0d",
    position: "g0rxnol2",
    bottom: "blj1rie1",
    zIndex: "px10qoeu",
    width: "ltyqj8pj"
  },
  startAlign: {
    start: "okbql4zm",
    alignSelf: "ex3gcxaf"
  },
  endAlign: {
    end: "b4u6kxhc",
    alignSelf: "rwlvdxyg"
  },
  startAlignMediaViewer: {
    position: "lhggkp7q",
    start: "rpx5kzhc",
    end: "mkwewc5k",
    bottom: "cogk65jn"
  },
  endAlignMediaViewer: {
    position: "lhggkp7q",
    start: "d97pnxop",
    end: "eo7hedw6",
    bottom: "cogk65jn"
  },
  sticker: {
    start: "d97pnxop",
    end: "eo7hedw6"
  },
  image: {
    bottom: "cvsrm5e1"
  },
  wideSticker: {
    bottom: "k6irn68d",
    start: "okbql4zm",
    end: "mkwewc5k"
  }
};