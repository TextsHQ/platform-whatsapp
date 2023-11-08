Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logMessageCounts = function (e, t) {
  e.webcMessageCount += t.length;
  for (let n = 0, i = t[n]; n < t.length; ++n, i = t[n]) {
    switch (i.type) {
      case r.MSG_TYPE.CHAT:
      case r.MSG_TYPE.LOCATION:
      case r.MSG_TYPE.PAYMENT:
      case r.MSG_TYPE.VCARD:
      case r.MSG_TYPE.CIPHERTEXT:
      case r.MSG_TYPE.MULTI_VCARD:
      case r.MSG_TYPE.REVOKED:
      case r.MSG_TYPE.OVERSIZED:
        e.webcTextMessageCount += 1;
        break;
      case r.MSG_TYPE.IMAGE:
      case r.MSG_TYPE.PRODUCT:
        e.webcPhotoMessageCount += 1;
        break;
      case r.MSG_TYPE.VIDEO:
        e.webcVideoMessageCount += 1;
        break;
      case r.MSG_TYPE.AUDIO:
        e.webcAudioMessageCount += 1;
        break;
      case r.MSG_TYPE.PTT:
        e.webcPttMessageCount += 1;
        break;
      case r.MSG_TYPE.STICKER:
        e.webcStickerMessageCount += 1;
        break;
      case r.MSG_TYPE.DOCUMENT:
        e.webcDocumentMessageCount += 1;
        break;
      default:
        e.webcOtherMessageCount += 1;
    }
  }
};
exports.newMessageQueryEvent = function (e) {
  return new i.WebcMessageQueryWamEvent({
    webcResponseBytes: 0,
    webcMessageCount: 0,
    webcTextMessageCount: 0,
    webcVideoMessageCount: 0,
    webcPhotoMessageCount: 0,
    webcAudioMessageCount: 0,
    webcPttMessageCount: 0,
    webcStickerMessageCount: 0,
    webcDocumentMessageCount: 0,
    webcOtherMessageCount: 0,
    webcMessageQueryTrigger: e
  });
};
var r = require("./373070.js");
var i = require("./326290.js");