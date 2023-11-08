function t(e, t, n, r, i, a, o) {
  try {
    var s = e[a](o);
    var u = s.value;
  } catch (e) {
    return void n(e);
  }
  if (s.done) {
    t(u);
  } else {
    Promise.resolve(u).then(r, i);
  }
}
module.exports = function (e) {
  return function () {
    var n = this;
    var r = arguments;
    return new Promise(function (i, a) {
      var o = e.apply(n, r);
      function s(e) {
        t(o, i, a, s, u, "next", e);
      }
      function u(e) {
        t(o, i, a, s, u, "throw", e);
      }
      s(undefined);
    });
  };
};
module.exports.default = module.exports;
module.exports.__esModule = true;