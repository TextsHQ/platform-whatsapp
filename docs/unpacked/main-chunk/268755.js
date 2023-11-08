var o = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.simpleSearch = function (e, t) {
  if (e == null || e === "") {
    return false;
  }
  const n = l(e);
  const o = t.map(l).flat();
  return n.every(e => o.some(t => t == null ? undefined : t.startsWith(e)));
};
var r = o(require("../app/932325.js"));
var a = require("../app/317259.js");
function l(e) {
  var t;
  if (e == null) {
    return [];
  }
  return (0, a.toProductionString)(r.default.accentFold((t = e.toLocaleLowerCase("en")) === null || t === undefined ? undefined : t.normalize("NFKD"))).split(" ");
}