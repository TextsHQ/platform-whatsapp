Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrivacyHighlightDailyWamEvent = undefined;
var r = require("./901032.js");
var i = require("./475163.js");
var a = require("./521394.js");
const {
  INTEGER: o
} = r.TYPES;
const s = (0, r.defineEvents)({
  PrivacyHighlightDaily: [3522, {
    dialogAppearCount: [1, o],
    dialogSelectCount: [2, o],
    narrativeAppearCount: [3, o],
    privacyHighlightCategory: [4, i.PRIVACY_HIGHLIGHT_CATEGORY_ENUM],
    privacyHighlightSurface: [5, a.PRIVACY_HIGHLIGHT_SURFACE_ENUM]
  }, [1, 1, 1], "regular"]
});
exports.PrivacyHighlightDailyWamEvent = s;