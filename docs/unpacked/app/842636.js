var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEVICE_PLATFORM = undefined;
exports.getCompanionWebClientFromBrowser = s;
var i = r(require("./524173.js"));
const a = require("../vendor/76672.js")({
  UNKNOWN: 0,
  CHROME: 1,
  EDGE: 2,
  FIREFOX: 3,
  IE: 4,
  OPERA: 5,
  SAFARI: 6,
  ELECTRON: 7,
  UWP: 8,
  OTHER_WEB_CLIENT: 9
});
const o = String(s());
function s() {
  const e = i.default.info().name;
  if (!e) {
    return a.UNKNOWN;
  }
  switch (e) {
    case "Chrome":
      return a.CHROME;
    case "Firefox":
      return a.FIREFOX;
    case "IE":
      return a.IE;
    case "Opera":
      return a.OPERA;
    case "Safari":
      return a.SAFARI;
    case "Edge":
      return a.EDGE;
    case "electron":
      return a.ELECTRON;
    default:
      return a.OTHER_WEB_CLIENT;
  }
}
exports.DEVICE_PLATFORM = o;