Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compatPrefix = function (e, t) {
  let n;
  const s = (0, r.getModernizr)();
  if (e.indexOf(i) === 0) {
    n = e.substring(i.length);
    return o(s ? s.prefixed(i) : i, i, n);
  }
  if (e.indexOf(a) === 0) {
    n = e.substring(a.length);
    return o(s ? s.prefixed(a) : a, a, n);
  }
  return s.prefixed(e, t, false) || e;
};
var r = require("./223713.js");
const i = "animation";
const a = "transition";
function o(e, t, n) {
  const r = e.toLowerCase().indexOf(t);
  const i = e.slice(0, r).toLowerCase();
  if (e.indexOf(t) === 0) {
    return i + e.slice(r) + n.toLowerCase();
  } else {
    return i + e.slice(r) + n;
  }
}