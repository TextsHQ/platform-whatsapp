var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useValues = function (e, t, n) {
  var r;
  const u = (0, o.useMemo)(() => (0, a.computedForComponent)(t), t);
  const [c, d] = (0, o.useState)(() => u(e));
  const p = (0, s.default)(() => {
    d(t => {
      const n = u(e);
      if ((0, i.default)(t, n)) {
        return t;
      } else {
        return n;
      }
    });
  });
  const f = (0, o.useRef)(e);
  const _ = f.current;
  if (e !== _) {
    f.current = e;
    p();
  }
  const g = (r = n == null ? undefined : n.subscribe) !== null && r !== undefined ? r : l;
  (0, o.useEffect)(() => g(() => {
    p();
  }), [g, p]);
  return c;
};
var i = r(require("./98017.js"));
var a = require("./197472.js");
var o = require("../vendor/667294.js");
var s = r(require("./17533.js"));
const l = () => () => {};