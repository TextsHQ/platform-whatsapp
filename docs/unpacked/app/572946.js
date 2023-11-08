var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isWeb = exports.isOSWin = exports.isOSRTL = exports.isOSMac = exports.isOSLTR = exports.isNative = exports.hasSafariFix = exports.hasFontFix = exports.hasFirefoxFix = exports.hasEmoji = undefined;
var i = r(require("./932325.js"));
var a = require("./368170.js");
if (window.Native != null) {
  i.default.isRTL(window.Native.appGetLocale());
}
exports.isNative = false;
exports.isWeb = true;
const o = a.UA.isSafari;
exports.hasSafariFix = o;
const s = a.UA.isGecko;
exports.hasFirefoxFix = s;
const l = a.UA.hasEmoji;
exports.hasEmoji = l;
const u = a.UA.browser === a.BROWSER_TYPE.CHROME || a.UA.browser === a.BROWSER_TYPE.OPERA;
exports.hasFontFix = u;
exports.isOSLTR = false;
exports.isOSRTL = false;
const c = a.UA.os === a.OS_TYPE.MAC;
exports.isOSMac = c;
const d = a.UA.os === a.OS_TYPE.WINDOWS;
exports.isOSWin = d;