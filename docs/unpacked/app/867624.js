Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.b64Equal = function (e, t) {
  const n = e.length;
  const r = t.length;
  switch (n - r) {
    case -2:
      return t.charCodeAt(n) === 61 && t.charCodeAt(n + 1) === 61 && t.substr(0, n) === e;
    case -1:
      return t.charCodeAt(n) === 61 && t.substr(0, n) === e;
    case 0:
      return e === t;
    case 1:
      return e.charCodeAt(r) === 61 && e.substr(0, r) === t;
    case 2:
      return e.charCodeAt(r) === 61 && e.charCodeAt(r + 1) === 61 && e.substr(0, r) === t;
    default:
      return false;
  }
};