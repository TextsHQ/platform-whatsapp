Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OfflineCountTooHighWamEvent = undefined;
var r = require("./901032.js");
var i = require("./111138.js");
var a = require("./684290.js");
var o = require("./718451.js");
var s = require("./86736.js");
const {
  INTEGER: l,
  STRING: u
} = r.TYPES;
const c = (0, r.defineEvents)({
  OfflineCountTooHigh: [2638, {
    callStanzaType: [7, i.CALL_STANZA_TYPE],
    mediaType: [3, a.MEDIA_TYPE],
    messageType: [4, o.MESSAGE_TYPE],
    notificationStanzaType: [6, u],
    offlineCount: [2, l],
    receiptStanzaType: [5, u],
    stanzaType: [1, s.STANZA_TYPE]
  }, [1, 1, 1], "regular"]
});
exports.OfflineCountTooHighWamEvent = c;