Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BannerEventWamEvent = undefined;
var a = require("../app/901032.js");
var r = require("./493885.js");
var o = require("./403602.js");
const {
  STRING: l
} = a.TYPES;
const i = (0, a.defineEvents)({
  BannerEvent: [1578, {
    bannerId: [3, l],
    bannerOperation: [2, r.BANNER_OPERATIONS],
    bannerType: [1, o.BANNER_TYPES]
  }, [1, 1, 1], "regular"]
});
exports.BannerEventWamEvent = i;