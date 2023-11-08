var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useRollerCounter = function (e, t) {
  const [n, a] = (0, r.useState)(t);
  const [l, i] = (0, r.useState)(null);
  const u = (0, r.useRef)(null);
  if (u.current == null) {
    u.current = e;
  }
  const s = (0, o.default)(() => {
    if (u.current != null && u.current !== t) {
      a(t);
      i(u.current);
    }
    u.current = null;
  }, 50);
  if (t != null) {
    s();
  }
  return {
    currentValueProp: n,
    previousValueProp: l
  };
};
var r = require("../vendor/667294.js");
var o = a(require("../app/710629.js"));