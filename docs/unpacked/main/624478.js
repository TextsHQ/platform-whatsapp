Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeepLinkMsgSentWamEvent = undefined;
var a = require("../app/901032.js");
var r = require("./801542.js");
const {
  STRING: o
} = a.TYPES;
const l = (0, a.defineEvents)({
  DeepLinkMsgSent: [3198, {
    deepLinkAction: [1, r.DEEP_LINK_ACTION],
    deepLinkSessionId: [2, o]
  }, [1, 1, 1], "regular"]
});
exports.DeepLinkMsgSentWamEvent = l;