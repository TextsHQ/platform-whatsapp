Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrayMoveMutate = exports.arrayMove = undefined;
const n = function (e, t, n) {
  const r = n < 0 ? e.length + n : n;
  const i = e.splice(t, 1)[0];
  e.splice(r, 0, i);
};
exports.arrayMoveMutate = n;
exports.arrayMove = function (e, t, r) {
  const i = e.slice();
  n(i, t, r);
  return i;
};