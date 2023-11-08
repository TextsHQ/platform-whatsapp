Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CtwaActionBannerUnderstandWamEvent = undefined;
var r = require("./901032.js");
var i = require("./907737.js");
const {
  BOOLEAN: a,
  STRING: o
} = r.TYPES;
const s = (0, r.defineEvents)({
  CtwaActionBannerUnderstand: [3586, {
    bannerIdentifier: [1, o],
    bannerLocale: [2, o],
    clientLocale: [3, o],
    hasLocalLink: [4, a],
    hasUniversalLink: [5, a],
    invalidLink: [6, o],
    lwiFlowIdentifier: [7, o],
    preferredLink: [8, i.PREFERRED_LINK_TYPE],
    validLocale: [9, a],
    validNotification: [10, a]
  }, [1, 1, 1], "private", 0]
});
exports.CtwaActionBannerUnderstandWamEvent = s;