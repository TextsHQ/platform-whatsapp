Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SMB_DATA_SHARING_ALLOWED_SOURCE = undefined;
exports.getCTWAEligibilityFromConversion = function (e) {
  let {
    conversionData: t,
    conversionSource: n
  } = e;
  const a = (n || "").toLocaleLowerCase();
  if (t != null && a === i) {
    try {
      return {
        data: (0, r.arrayBufferToString)(t),
        source: i
      };
    } catch (e) {
      return null;
    }
  }
  return null;
};
var r = require("./459617.js");
const i = "fb_ads";
exports.SMB_DATA_SHARING_ALLOWED_SOURCE = i;