var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDebouncedChanges = function (e) {
  let {
    value: t,
    debounceMs: n,
    shouldDebounce: a
  } = e;
  const [l, i] = (0, r.useState)(t);
  const u = (0, o.default)(e => {
    i(e);
  }, n);
  (0, r.useEffect)(() => {
    if (a) {
      u(t);
    } else {
      u.cancel();
      i(t);
    }
  }, [t, a, u]);
  return l;
};
var r = require("../vendor/667294.js");
var o = a(require("../app/710629.js"));