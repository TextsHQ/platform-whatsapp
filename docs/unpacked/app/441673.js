var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAlarm = function (e, t, n) {
  const {
    immediate: r = false,
    isGlobal: l = false
  } = n != null ? n : {};
  const [u, c] = function (e) {
    const t = (0, s.default)(e);
    const n = (0, o.useRef)();
    const r = (0, o.useCallback)(() => {
      if (n.current != null) {
        a.default.clearTimeout(n.current);
      }
    }, []);
    const l = (0, o.useCallback)((e, r) => {
      n.current = r ? a.default.setGlobalTimeout(t, (0, i.castUnixTimeToMillisTime)(e), n.current) : a.default.setLocalTimeout(t, (0, i.castUnixTimeToMillisTime)(e), n.current);
    }, [t]);
    (0, o.useEffect)(() => r, [r]);
    return [l, r];
  }(e);
  const d = (0, o.useCallback)(() => u(t, l), [u, t, l]);
  (0, o.useEffect)(() => {
    if (r) {
      d();
    }
  }, [r, d]);
  return [d, c];
};
exports.useManualTimeout = l;
exports.useTimeout = function (e) {
  let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  let n = arguments.length > 2 ? arguments[2] : undefined;
  const {
    immediate: r = false
  } = n != null ? n : {};
  const [i, a] = l(e);
  const s = (0, o.useCallback)(() => i(t), [i, t]);
  (0, o.useEffect)(() => {
    if (r) {
      s();
    }
  }, [r, s]);
  return [s, a];
};
var i = require("./632157.js");
var a = r(require("./164325.js"));
var o = require("../vendor/667294.js");
var s = r(require("./17533.js"));
function l(e) {
  const t = (0, s.default)(e);
  const n = (0, o.useRef)();
  const r = (0, o.useCallback)(() => {
    if (n.current) {
      self.clearTimeout(n.current);
    }
  }, []);
  const i = (0, o.useCallback)(e => {
    r();
    n.current = self.setTimeout(t, e);
  }, [r, t]);
  (0, o.useEffect)(() => r, [r]);
  return [i, r];
}