Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let t = n;
  const r = function () {
    if (t === n) {
      for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) {
        i[a] = arguments[a];
      }
      t = e.call(this, ...i);
    }
    return t;
  };
  r.reset = () => {
    t = n;
  };
  return r;
};
const n = {};