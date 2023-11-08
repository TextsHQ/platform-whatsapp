var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConsumerTransparencyInfoIconModel = undefined;
var i = r(require("./983254.js"));
var a = require("./724976.js");
var o = require("./94872.js");
var s = r(require("./53575.js"));
const l = e => {
  var t;
  const n = ((t = s.default.getMe()) !== null && t !== undefined ? t : "").toString();
  const r = e.toString();
  return (0, i.default)(`${n}-${r}`);
};
const u = new class {
  constructor() {
    this.chatIds = new Set();
    const e = s.default.getUser(o.KEYS.CTWA_CONSUMER_TRANSPARENCY_INFO_ICON);
    if (e instanceof Array) {
      this.chatIds = new Set(e.filter(a.isString));
    }
  }
  add(e) {
    this.chatIds.add(l(e));
    s.default.setUser(o.KEYS.CTWA_CONSUMER_TRANSPARENCY_INFO_ICON, Array.from(this.chatIds));
  }
  shouldShowIcon(e) {
    return this.chatIds.has(l(e));
  }
}();
exports.ConsumerTransparencyInfoIconModel = u;