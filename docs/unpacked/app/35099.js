var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("./264437.js"));
var a = r(require("./793951.js"));
var o = r(require("../vendor/667294.js"));
const s = (0, a.default)(/((?:^)(?:[\*\-] (?! +)(?:[^\n]+)(?:\n(?:[\*\-] (?! +)[^\n]+)){0,})(?:\n|$))/gm, 0);
class l extends s {
  static jsx(e, t, n) {
    let {
      inline: r
    } = n;
    return o.default.createElement(i.default, {
      inline: r
    }, e);
  }
}
exports.default = l;
l.nestable = () => false;