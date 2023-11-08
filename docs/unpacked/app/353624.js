var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlockQuoteWithEmpty = exports.BlockQuote = undefined;
var i = r(require("./679555.js"));
var a = r(require("./793951.js"));
var o = r(require("../vendor/667294.js"));
const s = (0, a.default)(/(?:^)\>(\s(?! +)[^\n]+(?:$))/gm, 1);
const l = (0, a.default)(/(?:^)\>(\s(?! +)[^\n]*(?:$))/gm, 1);
exports.BlockQuote = class extends s {
  static jsx(e, t, n) {
    let {
      selectable: r = false,
      inline: a = false,
      quoted: s = false
    } = n;
    const l = t[1];
    return o.default.createElement(i.default, {
      selectable: r,
      inline: a,
      text: l,
      quoted: s
    }, e);
  }
};
exports.BlockQuoteWithEmpty = class extends l {};