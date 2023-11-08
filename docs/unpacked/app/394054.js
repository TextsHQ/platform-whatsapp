Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeepLinkConversionWamEvent = undefined;
var r = require("./901032.js");
var i = require("./741381.js");
var a = require("./34131.js");
var o = require("./67749.js");
var s = require("./797345.js");
const {
  BOOLEAN: l,
  STRING: u
} = r.TYPES;
const c = (0, r.defineEvents)({
  DeepLinkConversion: [1432, {
    callInitiator: [8, i.CALL_INITIATOR_TYPE],
    ctwaChatCreationMode: [4, a.CTWA_CHAT_CREATION_MODE],
    ctwaConversionType: [3, o.CTWA_CONVERSION_TYPE],
    deepLinkConversionData: [2, u],
    deepLinkConversionSource: [1, u],
    isPriority: [7, l],
    trustBannerAction: [5, s.TRUST_BANNER_ACTION],
    trustBannerType: [6, u]
  }, [1, 1, 1], "regular"]
});
exports.DeepLinkConversionWamEvent = c;