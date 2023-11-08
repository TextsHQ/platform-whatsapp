Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.associateMediaWithMsg = function (e, t) {
  e.addMsg(t);
};
exports.associateMediaWithSticker = function (e, t) {
  e.addSticker(t);
};
exports.associateMediaWithStickerPack = function (e, t) {
  e.addStickerPack(t);
};
exports.clearMediaForChat = function () {};
exports.delistAndDeleteAllMedia = function () {
  const e = s;
  s = {};
  for (const t in e) {
    e[t].delete();
  }
};
exports.disassociateMediaFromMsg = function (e, t) {
  t.mediaObject = null;
  e.removeMsg(t);
  if (e.hasAssociatedMsgsOrStickers()) {
    return;
  }
  const {
    filehash: n
  } = e;
  if (n) {
    delete s[n];
  }
  if (n && (0, r.shouldUseLruMediaStore)((0, o.getMsgMediaType)(t))) {
    a.LruMediaStore.del(n);
  }
  e.delete();
};
exports.disassociateMediaFromSticker = function (e, t) {
  t.mediaObject = null;
  e.removeSticker(t);
  if (e.hasAssociatedMsgsOrStickers()) {
    return;
  }
  const {
    filehash: n
  } = e;
  if (n) {
    delete s[n];
  }
  if (n) {
    a.LruMediaStore.del(n);
  }
  e.delete();
};
exports.disassociateMediaFromStickerPack = function (e, t) {
  t.mediaObject = null;
  e.removeStickerPack(t);
  if (e.hasAssociatedMsgsOrStickers()) {
    return;
  }
  const {
    filehash: n
  } = e;
  if (n) {
    delete s[n];
  }
  if (n) {
    a.LruMediaStore.del(n);
  }
  e.delete();
};
exports.getOrCreateMediaObject = function (e) {
  if (s.hasOwnProperty(e)) {
    return s[e];
  }
  return s[e] = new i.MediaObject();
};
var r = require("./232294.js");
var i = require("./189123.js");
var a = require("./719621.js");
var o = require("./708761.js");
let s = {};