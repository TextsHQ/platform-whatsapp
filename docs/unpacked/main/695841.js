Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  const [e, t] = (0, r.useState)(null);
  const [n, l] = (0, r.useState)(o);
  (0, r.useLayoutEffect)(() => {
    if (e) {
      return (0, a.observe)(e, l);
    }
  }, [e]);
  return [t, n];
};
var a = require("./599456.js");
var r = require("../vendor/667294.js");
const o = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0
};