Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  const {
    index: n
  } = e;
  const [r] = e;
  const i = n + r.length - 1;
  const a = [n, n, i, i, e];
  if (t) {
    var o;
    const i = (o = e[t]) !== null && o !== undefined ? o : "";
    a[1] = n + r.indexOf(i);
    a[2] = a[1] + i.length - 1;
  }
  return a;
};