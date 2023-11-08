Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t) {
  const n = [];
  let a = 0;
  for (; e.length > a;) {
    n.push(e.slice(a, a + t));
    a += t;
  }
  return n;
};