Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t) {
  let n;
  let r = false;
  for (n = 0; n < e.length; n++) {
    if (e[n] === t) {
      r = true;
      break;
    }
  }
  if (r) {
    const t = e[n];
    e.splice(n, 1);
    e.unshift(t);
  }
};