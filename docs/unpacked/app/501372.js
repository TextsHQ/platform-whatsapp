Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StickerSendWamEvent = undefined;
var r = require("./901032.js");
var i = require("./71677.js");
var a = require("./120902.js");
var o = require("./843534.js");
const {
  BOOLEAN: s
} = r.TYPES;
const l = (0, r.defineEvents)({
  StickerSend: [1840, {
    stickerIsAi: [7, s],
    stickerIsAnimated: [3, s],
    stickerIsAvatar: [6, s],
    stickerIsFirstParty: [2, s],
    stickerIsFromStickerMaker: [5, s],
    stickerMakerSourceType: [8, i.STICKER_MAKER_SOURCE_TYPE],
    stickerSendMessageType: [4, a.STICKER_SEND_MESSAGE_TYPE],
    stickerSendOrigin: [1, o.STICKER_SEND_ORIGIN_TYPE]
  }, [1, 1, 1], "regular"]
});
exports.StickerSendWamEvent = l;