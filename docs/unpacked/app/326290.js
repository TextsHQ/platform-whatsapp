Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebcMessageQueryWamEvent = undefined;
var r = require("./901032.js");
var i = require("./212376.js");
var a = require("./54614.js");
var o = require("./780898.js");
const {
  INTEGER: s,
  STRING: l,
  TIMER: u
} = r.TYPES;
const c = (0, r.defineEvents)({
  WebcMessageQuery: [1876, {
    webcAudioMessageCount: [14, s],
    webcBrowserNetworkType: [1, l],
    webcBrowserStorageQuotaBytes: [20, s],
    webcBrowserStorageQuotaUsedBytes: [21, s],
    webcChatPosition: [2, s],
    webcChatType: [13, i.WEBC_CHAT_TYPE],
    webcDocumentMessageCount: [16, s],
    webcEarliestMessageIndex: [11, s],
    webcEarliestMessageT: [12, u],
    webcMessageCount: [4, s],
    webcMessageQueryTrigger: [19, o.WEBC_QUERY_TRIGGER_TYPE],
    webcMessageQueryType: [3, a.WEBC_MESSAGE_QUERY_DIRECTION],
    webcOtherMessageCount: [18, s],
    webcPhotoMessageCount: [7, s],
    webcPttMessageCount: [15, s],
    webcQueryT: [9, u],
    webcResponseBytes: [10, s],
    webcStickerMessageCount: [17, s],
    webcTextMessageCount: [5, s],
    webcVideoMessageCount: [6, s]
  }, [1, 1, 1], "regular"]
});
exports.WebcMessageQueryWamEvent = c;