Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  var n;
  let u = 0;
  if (!e) {
    return u;
  }
  if ((0, l.getIsBotPluginCarouselMsg)(e)) {
    return 10;
  }
  if (e.quotedMsg) {
    u += 54;
  }
  if (e.caption) {
    u += 31;
  }
  switch (e.type) {
    case i.MSG_TYPE.NOTIFICATION:
    case i.MSG_TYPE.GP2:
    case i.MSG_TYPE.BROADCAST_NOTIFICATION:
    case i.MSG_TYPE.E2E_NOTIFICATION:
    case i.MSG_TYPE.CALL_LOG:
    case i.MSG_TYPE.CIPHERTEXT:
    case i.MSG_TYPE.REVOKED:
    case i.MSG_TYPE.CHAT:
      {
        var s;
        if ((0, l.getLinkPreview)(e)) {
          u += 53;
        }
        const t = (0, a.numCodepoints)((s = e.body) === null || s === undefined ? undefined : s.toString());
        return u + Math.ceil(t / 100) * 19 + 13;
      }
    case i.MSG_TYPE.IMAGE:
      if (u + (((t = e.mediaData) === null || t === undefined ? undefined : t.fullWidth) && ((n = e.mediaData) === null || n === undefined ? undefined : n.fullHeight) || 0)) {
        return Math.floor(Math.min(330 / e.mediaData.fullWidth * e.mediaData.fullHeight, 330));
      } else {
        return 330;
      }
    case i.MSG_TYPE.VIDEO:
    case i.MSG_TYPE.AUDIO:
      if (e.isGif) {
        return u + 137;
      } else {
        return u + 166;
      }
    case i.MSG_TYPE.LOCATION:
      if (u + e.isLive) {
        return r.MSG_HEIGHT;
      } else {
        return o.PREVIEW_HEIGHT;
      }
    case i.MSG_TYPE.PTT:
      return u + 67;
    case i.MSG_TYPE.VCARD:
      return u + 74;
    case i.MSG_TYPE.DOCUMENT:
      return u + 188;
    case i.MSG_TYPE.STICKER:
      return u + 125;
    case i.MSG_TYPE.UNKNOWN:
    default:
      return u;
  }
};
var a = require("../app/370257.js");
var r = require("./293815.js");
var o = require("./443465.js");
var l = require("../app/787742.js");
var i = require("../app/373070.js");