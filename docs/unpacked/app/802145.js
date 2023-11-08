var r = require("./530066.js").default;
var i = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t) {
  const n = (0, o.default)(e);
  const [i, s] = (0, a.useState)(true);
  const [l, u] = (0, a.useState)(null);
  const [c, d] = (0, a.useState)(null);
  (0, a.useEffect)(() => {
    const e = new r();
    s(true);
    n().then(t => {
      if (!e.signal.aborted) {
        u(() => t);
        s(false);
        d(null);
      }
    }).catch(e => {
      s(false);
      d(e);
    });
    return () => {
      e.abort();
    };
  }, [n, ...t]);
  if (i) {
    return {
      loading: true,
      error: null,
      value: null
    };
  }
  if (c) {
    return {
      loading: false,
      error: c,
      value: null
    };
  }
  return {
    loading: false,
    error: null,
    value: l
  };
};
var a = require("../vendor/667294.js");
var o = i(require("./17533.js"));