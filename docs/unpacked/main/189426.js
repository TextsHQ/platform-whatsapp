Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebcLoginWamEvent = undefined;
var a = require("../app/901032.js");
const {
  BOOLEAN: r,
  INTEGER: o,
  STRING: l,
  TIMER: i
} = a.TYPES;
const u = (0, a.defineEvents)({
  WebcLogin: [1664, {
    webcBrowserNetworkType: [14, l],
    webcBrowserStorageQuotaBytes: [15, o],
    webcBrowserStorageQuotaUsedBytes: [16, o],
    webcLoginT: [3, i],
    webcPersistentLoginEnabled: [17, r],
    webcQrCodes: [1, o],
    webcQrLoadT: [2, i],
    webcSyncChatCount: [8, o],
    webcSyncChatSize: [10, o],
    webcSyncChatT: [9, i],
    webcSyncContactCount: [11, o],
    webcSyncContactSize: [13, o],
    webcSyncContactT: [12, i],
    webcSyncMessageCount: [5, o],
    webcSyncMessageSize: [7, o],
    webcSyncMessageT: [6, i],
    webcSyncT: [4, i]
  }, [1, 1, 1], "regular"]
});
exports.WebcLoginWamEvent = u;