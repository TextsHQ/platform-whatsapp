var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FIELDS = exports.DEFAULT_METADATA = undefined;
exports.toRawWebpMetadata = function (e) {
  const t = {};
  if (e.isFirstParty != null) {
    t[a.isFirstParty] = e.isFirstParty ? 1 : 0;
  }
  if (e.isFromStickerMaker != null) {
    t[a.isFromStickerMaker] = e.isFromStickerMaker ? 1 : 0;
  }
  if (e.emojis != null) {
    t[a.emojis] = e.emojis;
  }
  if (e.stickerPackId != null) {
    t[a.stickerPackId] = e.stickerPackId;
  }
  if (e.stickerPackName != null) {
    t[a.stickerPackName] = e.stickerPackName;
  }
  if (e.stickerPackPublisher != null) {
    t[a.stickerPackPublisher] = e.stickerPackPublisher;
  }
  if (e.stickerPackPlayStoreLink != null) {
    t[a.stickerPackPlayStoreLink] = e.stickerPackPlayStoreLink;
  }
  if (e.stickerPackAppleStoreLink != null) {
    t[a.stickerPackAppleStoreLink] = e.stickerPackAppleStoreLink;
  }
  if (e.isAvatar != null) {
    t[a.isAvatar] = e.isAvatar ? 1 : 0;
  }
  if (e.isAiSticker != null) {
    t[a.isAiSticker] = e.isAiSticker ? 1 : 0;
  }
  return t;
};
exports.toWebpMetadata = function (e) {
  const t = e[a.isFirstParty];
  const n = e[a.isFromStickerMaker];
  const r = e[a.emojis];
  const s = e[a.stickerPackId];
  const l = e[a.stickerPackName];
  const u = e[a.stickerPackPublisher];
  const c = e[a.stickerPackPlayStoreLink];
  const d = e[a.stickerPackAppleStoreLink];
  const p = e[a.isAvatar];
  const f = e[a.isAiSticker];
  const _ = (0, i.default)({}, o);
  if (t != null) {
    _.isFirstParty = t === 1;
  }
  if (n != null) {
    _.isFromStickerMaker = n === 1;
  }
  if (r != null && Array.isArray(r)) {
    _.emojis = r;
  }
  if (s != null) {
    _.stickerPackId = s;
  }
  if (l != null) {
    _.stickerPackName = l;
  }
  if (u != null) {
    _.stickerPackPublisher = u;
  }
  if (c != null) {
    _.stickerPackPlayStoreLink = c;
  }
  if (d != null) {
    _.stickerPackAppleStoreLink = d;
  }
  if (p != null) {
    _.isAvatar = p === 1;
  }
  if (f != null) {
    _.isAiSticker = f === 1;
  }
  return _;
};
var i = r(require("../vendor/81109.js"));
const a = {
  isFirstParty: "is-first-party-sticker",
  isFromStickerMaker: "is-from-sticker-maker",
  emojis: "emojis",
  stickerPackId: "sticker-pack-id",
  stickerPackName: "sticker-pack-name",
  stickerPackPublisher: "sticker-pack-publisher",
  stickerPackPlayStoreLink: "android-app-store-link",
  stickerPackAppleStoreLink: "ios-app-store-link",
  isAvatar: "is-avatar-sticker",
  isAiSticker: "is-ai-sticker"
};
exports.FIELDS = a;
const o = {
  isFirstParty: false,
  isFromStickerMaker: false,
  emojis: [],
  stickerPackId: null,
  stickerPackName: null,
  stickerPackPublisher: null,
  stickerPackPlayStoreLink: null,
  stickerPackAppleStoreLink: null,
  isAvatar: false,
  isAiSticker: false
};
exports.DEFAULT_METADATA = o;