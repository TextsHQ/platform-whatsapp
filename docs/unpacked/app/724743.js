var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MAX_LOOPS = exports.MAX_DURATION = undefined;
exports.getTotalAnimationDuration = l;
exports.parseWebp = function (e) {
  const t = new Uint8Array(e);
  if (!(0, s.isExtendedFile)(t)) {
    __LOG__(2)`Sticker file not extended format.`;
    return u;
  }
  const {
    emojis: n,
    isFirstParty: r,
    isFromStickerMaker: c,
    stickerPackId: d,
    stickerPackName: p,
    stickerPackPublisher: f,
    isAvatar: _,
    isAiSticker: g
  } = (0, o.getWebpMetadata)(e);
  const m = (0, i.default)((0, i.default)({}, u), {}, {
    emojis: n,
    isFirstParty: r,
    isFromStickerMaker: c,
    stickerPackId: d,
    stickerPackName: p,
    stickerPackPublisher: f,
    isAvatar: _,
    isAiSticker: g
  });
  if (!(0, s.isAnimatedWebp)(t)) {
    return m;
  }
  let h;
  let y = 0;
  let E = 44;
  for (; (0, a.default)(t.slice(E, E + 4), (0, s.stringToUint8)(s.Chunk.ANMF));) {
    const e = E + 20;
    const n = t.slice(e, e + 3);
    if (n.length !== 3) {
      return m;
    }
    y += (0, s.littleEndianToNumber)(n);
    const r = E + 4;
    const i = t.slice(r, r + 4);
    if (i.length !== 4) {
      return m;
    }
    E += 8 + (0, s.littleEndianToNumber)(i);
    if (h == null) {
      h = E;
    }
  }
  const S = l(y);
  return (0, i.default)((0, i.default)({}, m), {}, {
    animationDuration: S,
    firstFrameLength: h,
    singleLoopDuration: y
  });
};
var i = r(require("../vendor/81109.js"));
var a = r(require("./735821.js"));
var o = require("./428118.js");
var s = require("./176819.js");
exports.MAX_LOOPS = 3;
function l(e) {
  if (e === 0) {
    return 0;
  }
  const t = Math.min(Math.floor(5000 / e), 3);
  return Math.max(t, 1) * e;
}
exports.MAX_DURATION = 5000;
const u = {
  animationDuration: 0,
  singleLoopDuration: 0,
  emojis: [],
  isFirstParty: false,
  isFromStickerMaker: false,
  stickerPackId: null,
  stickerPackName: null,
  stickerPackPublisher: null,
  isAvatar: false,
  isAiSticker: false
};