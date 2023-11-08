var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPromiseTimer = function (e) {
  const t = a(e);
  return function (e) {
    return new Promise(n => {
      const r = t();
      if (r > 0) {
        setTimeout(n, r, e);
      } else {
        n(e);
      }
    });
  };
};
exports.createTimer = a;
exports.getDelay = function (e, t) {
  if (e === 0) {
    return 0;
  }
  const n = s(t.algo);
  for (let t = 1; t < e; t++) {
    n();
  }
  return o(t, n());
};
var i = r(require("./415227.js"));
function a(e) {
  const {
    relativeDelay: t = false
  } = e;
  let n = null;
  const r = s(e.algo);
  return function () {
    const i = n;
    if (i == null) {
      n = t ? Date.now() : 0;
      return 0;
    }
    let a = o(e, r());
    if (t) {
      const e = Date.now();
      const t = e - i;
      if (t > 0) {
        a = Math.max(0, a - t);
      }
      n = e;
    }
    return a;
  };
}
function o(e, t) {
  let {
    max: n,
    min: r,
    jitter: i = 0.1
  } = e;
  let a = t;
  if (n != null && a > n) {
    a = n;
  }
  if (r != null && a < r) {
    a = r;
  }
  if (i !== 0) {
    a = Math.ceil(a * (1 + i * Math.random()));
  }
  return a;
}
function s(e) {
  switch (e.type) {
    case "fibonacci":
      return function (e) {
        let t = e.second - e.first;
        let n = e.first - t;
        return function () {
          const e = t + n;
          n = t;
          t = e;
          return e;
        };
      }(e);
    case "exponential":
      return function (e) {
        const {
          base: t = 2
        } = e;
        let n = e.first;
        return function () {
          const e = n;
          n *= t;
          return e;
        };
      }(e);
    case "constant":
      return function (e) {
        const t = e.delay;
        return function () {
          return t;
        };
      }(e);
    case "adjust":
      return function (e) {
        const {
          toMs: t,
          backoff: n
        } = e;
        const r = s(n);
        return function () {
          return t(r());
        };
      }(e);
    default:
      throw (0, i.default)(`makeTimeFunc unrecognized backoff ${e.type}`);
  }
}