var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTimeLeftMs = function (e, t) {
  let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1000;
  const a = (0, o.default)(() => Date.now());
  const u = (0, r.useRef)(0);
  const s = (0, r.useRef)(0);
  const c = (0, l.default)(() => {
    if (a.current == null || u.current == null || t == null || e == null) {
      return null;
    }
    const n = Date.now();
    const r = e - u.current;
    const o = n - a.current;
    u.current = e;
    a.current = n;
    if (o === 0) {
      return null;
    }
    const l = r / o;
    s.current = s.current === 0 ? l : l * i + s.current * 0.99;
    return (t - e) / s.current;
  }, n, {
    trailing: false,
    leading: true
  });
  return c();
};
var r = require("../vendor/667294.js");
var o = a(require("../app/637660.js"));
var l = a(require("./286481.js"));
const i = 0.01;