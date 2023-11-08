var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumberedListItemWithEmpty = exports.NumberedListItem = undefined;
var i = r(require("./793951.js"));
var a = r(require("./517125.js"));
var o = r(require("./860690.js"));
var s = r(require("../vendor/667294.js"));
const l = new Set([a.default]);
function u(e) {
  var t;
  const n = (0, i.default)(e, 2);
  (t = class extends n {
    static jsx(e, t, n) {
      let {
        selectable: r = false,
        inline: i
      } = n;
      const a = t[1];
      const l = t[2];
      return s.default.createElement(o.default, {
        inline: i,
        selectable: r,
        text: l,
        numbering: a
      }, e);
    }
  }).nestable = e => l.has(e);
  t.unformatDecorations = {
    pre: e => e[1]
  };
  return t;
}
const c = u(/(?:^)(\d{1,2}\.)( (?! +)[^\n]+(?:$))/gm);
exports.NumberedListItem = c;
const d = u(/(?:^)(\d{1,2}\.)( (?! +)[^\n]*(?:$))/gm);
exports.NumberedListItemWithEmpty = d;