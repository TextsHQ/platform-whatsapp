Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertTabToMood = exports.ValidMoods = exports.StickerTabs = exports.SCROLL_THROTTLE_TIME = exports.SCROLL_CLICK_TIME_GAP = exports.MINIMUM_LOADING_TIME = exports.INPUT_SHOW_POINT = exports.INPUT_HIDE_POINT = exports.INPUT_BAR_TOTAL_HEIGHT = exports.INPUT_BAR_SCROLL_SENSITIVITY = exports.INPUT_BAR_SCROLL_FAST = undefined;
exports.SCROLL_CLICK_TIME_GAP = 1000;
exports.SCROLL_THROTTLE_TIME = 100;
exports.INPUT_BAR_TOTAL_HEIGHT = 63;
exports.INPUT_BAR_SCROLL_SENSITIVITY = 5;
exports.INPUT_BAR_SCROLL_FAST = 15;
exports.INPUT_HIDE_POINT = 44.099999999999994;
exports.INPUT_SHOW_POINT = 94.5;
const a = require("../vendor/76672.js").Mirrored(["LOVE", "GREETINGS", "HAPPY", "SAD", "ANGRY", "CELEBRATE"]);
exports.ValidMoods = a;
const r = require("../vendor/76672.js").Mirrored(["RECENTS", "FAVORITES", "LOVE", "GREETINGS", "HAPPY", "SAD", "ANGRY", "CELEBRATE", "STORE"]);
exports.StickerTabs = r;
exports.convertTabToMood = e => {
  const t = e;
  if (a.isValid(t)) {
    return a.cast(t);
  } else {
    return null;
  }
};
exports.MINIMUM_LOADING_TIME = 1500;