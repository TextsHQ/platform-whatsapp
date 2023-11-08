var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LIST_ITEM_DELIMITER = exports.HyphenListItemWithEmpty = exports.HyphenListItem = exports.BulletedListItemWithEmpty = exports.BulletedListItem = undefined;
var i = r(require("./35099.js"));
var a = r(require("./668513.js"));
var o = r(require("./793951.js"));
var s = r(require("../vendor/667294.js"));
exports.LIST_ITEM_DELIMITER = "* ";
const l = new Set([i.default]);
function u(e, t) {
  var n;
  const r = (0, o.default)(e, 1);
  (n = class extends r {
    static jsx(e, n, r) {
      let {
        selectable: i = false,
        inline: o
      } = r;
      const l = n[1];
      return s.default.createElement(a.default, {
        inline: o,
        selectable: i,
        text: l,
        symbol: t
      }, e);
    }
  }).nestable = e => l.has(e);
  n.unformatDecorations = {
    pre: t
  };
  return n;
}
const c = u(/(?:^)\*( (?! +)[^\n]+(?:$))/gm, "*");
exports.BulletedListItem = c;
const d = u(/(?:^)\-( (?! +)[^\n]+(?:$))/gm, "-");
exports.HyphenListItem = d;
const p = u(/(?:^)\*( (?! +)[^\n]*(?:$))/gm, "*");
exports.BulletedListItemWithEmpty = p;
const f = u(/(?:^)\-( (?! +)[^\n]*(?:$))/gm, "-");
exports.HyphenListItemWithEmpty = f;