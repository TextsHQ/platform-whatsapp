var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("./793951.js"));
var a = r(require("./821723.js"));
var o = r(require("../vendor/667294.js"));
const s = (0, i.default)(/((?:^)(?:(\d{1,2})\. (?! +)(?:[^\n]+)(?:\n(?:(\d{1,2})\. [^\n]+)){0,})(?:\n|$))/gm, 0);
class l extends s {
  static jsx(e, t, n) {
    let {
      inline: r
    } = n;
    return o.default.createElement(a.default, {
      inline: r
    }, e);
  }
}
exports.default = l;
l.nestable = () => false;