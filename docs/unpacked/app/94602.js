var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PLATFORMS = undefined;
exports.getMobilePlatform = function () {
  if (s == null) {
    __LOG__(4, undefined, new Error())`Failed to get primary platform`;
  }
  return s;
};
exports.isSMB = function () {
  return s === o.SMBA || s === o.SMBI;
};
exports.setMobilePlatform = function () {
  return l.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./757453.js");
const o = {
  ANDROID: "android",
  IPAD: "ipad",
  IPHONE: "iphone",
  SMBA: "smba",
  SMBI: "smbi"
};
let s;
function l() {
  return (l = (0, i.default)(function* (e) {
    let t = !(arguments.length > 1 && arguments[1] !== undefined) || arguments[1];
    if (t) {
      yield (0, a.setLastMobilePlatform)(e);
    }
    s = e;
    __LOG__(2)`Successfully writes platform to UserPrefs, platform: ${e}`;
  })).apply(this, arguments);
}
exports.PLATFORMS = o;