Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trimStart = exports.trimEnd = exports.trim = undefined;
const n = new Set(["\0", "\t", "\n", "", "\f", "\r", " ", "", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "​", "\u2028", "\u2029", " ", " ", "　"]);
exports.trim = e => a(e, true, true);
exports.trimStart = e => a(e, true, false);
function a(e, t, a) {
  let r = 0;
  let o = e.length;
  if (t) {
    for (; r < o && n.has(e.charAt(r));) {
      r++;
    }
  }
  if (a) {
    const a = t ? r : -1;
    for (; o - 1 > a && n.has(e.charAt(o - 1));) {
      o--;
    }
  }
  if (r === o) {
    return "";
  } else if (r === 0 && o === e.length) {
    return e;
  } else {
    return e.slice(r, o);
  }
}
exports.trimEnd = e => a(e, false, true);