Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = (0, r.useRef)(e);
  t.current = e;
  return (0, r.useCallback)(function () {
    for (var e, n = arguments.length, r = new Array(n), i = 0; i < n; i++) {
      r[i] = arguments[i];
    }
    if ((e = t.current) === null || e === undefined) {
      return undefined;
    } else {
      return e.call(t, ...r);
    }
  }, []);
};
var r = require("../vendor/667294.js");