var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  return o(null, a.default.fromForwardsStrings(e.sort((e, t) => t.length - e.length).map(e => `${e}${s}`)), null, 0);
};
var i = r(require("../vendor/103522.js"));
var a = r(require("./43312.js"));
function o(e, t, n, r, a) {
  const u = [];
  let c = false;
  let d = a;
  if (d == null) {
    if (e && r === 1) {
      if (l.has(e)) {
        d = true;
      }
    } else if (e && n && r === 2) {
      d = l.has(n + e);
    }
  }
  t.getChildren().forEach(t => {
    if (t.prefix !== s) {
      u.push(o(t.prefix, t.node, e, r + 1, d));
    } else {
      c = true;
    }
  });
  const p = e !== String.fromCodePoint(65039) || n == null || d ? (0, i.default)(e || "") : `${String.fromCodePoint(65039)}?`;
  let f = u.length === 0 ? "" : `(?:${u.join("|")})`;
  if (f && c) {
    f += "?";
  }
  return `${p}${f}`;
}
const s = "\n";
const l = new Set([String.fromCodePoint(169), String.fromCodePoint(174), String.fromCodePoint(8482), String.fromCodePoint(9823), String.fromCodePoint(9854), String.fromCodePoint(12336)]);