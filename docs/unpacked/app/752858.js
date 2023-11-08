var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("./517557.js"));
var a = r(require("./793951.js"));
var o = r(require("../vendor/667294.js"));
const s = (0, a.default)(/^(\w*)\b/g);
exports.default = class extends s {
  static jsx(e, t, n) {
    let {
      selectable: r = false
    } = n;
    return o.default.createElement(i.default, {
      selectable: r
    }, e);
  }
};