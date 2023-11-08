var r = require("./530066.js").default;
var i = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t) {
  const {
    value: n,
    loading: i,
    error: l
  } = (0, s.default)(e, []);
  const [u, c] = (0, o.useState)(0);
  const d = (0, o.useRef)(null);
  (0, o.useEffect)(() => {
    if (!(i || n == null)) {
      c(n);
    }
  }, [i, n]);
  const p = (0, o.useCallback)(function () {
    var e = (0, a.default)(function* (e) {
      var n;
      if (!((n = d.current) === null || n === undefined)) {
        n.abort();
      }
      d.current = new r();
      try {
        yield t(e, d.current.signal);
      } catch (e) {
        __LOG__(4, undefined, new Error())`useWAWebPersistentCounterAsync: ${e}`;
      }
      d.current = null;
    });
    return function () {
      return e.apply(this, arguments);
    };
  }(), [t]);
  const f = (0, o.useCallback)(() => {
    c(e => {
      const t = e + 1;
      p(t);
      return t;
    });
  }, [p]);
  const _ = (0, o.useCallback)(() => {
    c(0);
    p(0);
  }, [p]);
  if (i) {
    return [{
      loading: true,
      error: null,
      count: null
    }, f, _];
  }
  if (l) {
    return [{
      loading: false,
      error: l,
      count: null
    }, f, _];
  }
  return [{
    loading: false,
    error: null,
    count: u
  }, f, _];
};
var a = i(require("../vendor/348926.js"));
var o = require("../vendor/667294.js");
var s = i(require("./802145.js"));