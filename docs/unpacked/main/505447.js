Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const [t, n] = (0, a.useState)(e);
  return {
    value: t,
    set: n,
    toggle: (0, a.useCallback)(() => n(e => !e), []),
    setTrue: (0, a.useCallback)(() => n(true), []),
    setFalse: (0, a.useCallback)(() => n(false), [])
  };
};
var a = require("../vendor/667294.js");