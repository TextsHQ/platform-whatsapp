Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.concatTypedArrays = function (e, t) {
  let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  const r = t.reduce((e, t) => e + t.length, n);
  const i = new e(r);
  let a = 0;
  t.forEach(e => {
    i.set(e, a);
    a += e.length;
  });
  return i;
};