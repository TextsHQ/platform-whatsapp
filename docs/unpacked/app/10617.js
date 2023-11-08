var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  let n = arguments.length > 2 ? arguments[2] : undefined;
  const {
    immediate: r = false
  } = n != null ? n : {};
  const o = (0, a.default)(e);
  const s = (0, i.useRef)();
  const l = (0, i.useCallback)(() => {
    if (s.current) {
      self.clearInterval(s.current);
    }
  }, []);
  const u = (0, i.useCallback)(() => {
    l();
    s.current = self.setInterval(o, t);
  }, [l, t, o]);
  (0, i.useEffect)(() => {
    if (r) {
      u();
    }
    return l;
  }, [r, u, l]);
  return [u, l];
};
var i = require("../vendor/667294.js");
var a = r(require("./17533.js"));