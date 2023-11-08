var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeCodeBlocks = exports.isInsideCodeBlock = exports.Code = undefined;
var i = r(require("./758287.js"));
var a = r(require("./793951.js"));
var o = r(require("../vendor/667294.js"));
const s = /```([\s\S]*?\S[\s\S]*?)```/g;
const l = (0, a.default)(s, 1);
class u extends l {
  static jsx(e, t, n) {
    let {
      selectable: r = false
    } = n;
    return o.default.createElement(i.default, {
      selectable: r
    }, e);
  }
}
exports.Code = u;
u.format = false;
exports.isInsideCodeBlock = e => {
  const t = e.split(s).pop();
  return /```/.test(t);
};
exports.removeCodeBlocks = e => e.replace(s, " ");