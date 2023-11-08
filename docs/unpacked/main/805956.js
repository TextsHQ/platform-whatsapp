var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t) {
  const {
    active: n = false,
    delay: a = 0
  } = t != null ? t : {};
  const l = (0, o.useRef)(e);
  l.current = e;
  const i = (0, o.useRef)();
  (0, o.useEffect)(() => {
    const e = e => l.current(e);
    const t = () => {
      var e;
      if ((e = i.current) === null || e === undefined) {
        return undefined;
      } else {
        return e.call(i);
      }
    };
    t();
    if (n) {
      i.current = (0, r.default)(e, {
        delay: a
      });
    }
    return t;
  }, [n, a]);
};
var r = a(require("./927519.js"));
var o = require("../vendor/667294.js");