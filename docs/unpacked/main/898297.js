Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlertScreen = undefined;
exports.getNewsletterAlertScreenType = function (e, t) {
  const n = (e || []).length > 0;
  const r = (t || []).length > 0;
  if (n && r) {
    return a.MULTIPLE_ALERTS_LIST_SCREEN;
  }
  if (n) {
    return a.VIOLATING_MESSAGES_SCREEN;
  }
  if (r) {
    if ((t == null ? undefined : t.length) === 1) {
      return a.GEOSUSPENDED_COUNTRY_DETAILED_SCREEN;
    } else {
      return a.MULTIPLE_ALERTS_LIST_SCREEN;
    }
  }
  return a.NO_ALERTS_SCREEN;
};
const a = require("../vendor/76672.js").Mirrored(["VIOLATING_MESSAGES_SCREEN", "GEOSUSPENDED_COUNTRY_DETAILED_SCREEN", "MULTIPLE_ALERTS_LIST_SCREEN", "NO_ALERTS_SCREEN"]);
exports.AlertScreen = a;