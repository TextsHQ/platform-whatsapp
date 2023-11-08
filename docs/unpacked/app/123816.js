Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebcMediaRmrWamEvent = undefined;
var r = require("./901032.js");
var i = require("./684290.js");
var a = require("./212376.js");
var o = require("./885313.js");
const {
  BOOLEAN: s,
  INTEGER: l,
  STRING: u,
  TIMER: c
} = r.TYPES;
const d = (0, r.defineEvents)({
  WebcMediaRmr: [1906, {
    messageMediaType: [10, i.MEDIA_TYPE],
    webcBrowserNetworkType: [2, u],
    webcBrowserStorageQuotaBytes: [11, l],
    webcBrowserStorageQuotaUsedBytes: [12, l],
    webcChatPosition: [1, l],
    webcChatType: [9, a.WEBC_CHAT_TYPE],
    webcMediaRmrError: [8, s],
    webcMediaRmrT: [6, c],
    webcMediaSize: [7, l],
    webcMessageIndex: [3, l],
    webcMessageT: [5, c],
    webcRmrReason: [14, o.WEBC_RMR_REASON_CODE],
    webcRmrStatusCode: [13, l]
  }, [1, 1, 1], "regular"]
});
exports.WebcMediaRmrWamEvent = d;