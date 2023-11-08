Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.promiseProps = function (e) {
  const t = Object.keys(e);
  return Promise.all(t.map(t => e[t])).then(function (e) {
    const n = {};
    for (let r = 0; r < e.length; r++) {
      n[t[r]] = e[r];
    }
    return n;
  });
};