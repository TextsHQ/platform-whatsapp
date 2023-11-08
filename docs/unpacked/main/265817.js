Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  return (0, a.useMemo)(() => function (e) {
    return t => {
      if (e) {
        if (typeof e == "function") {
          e(t);
        } else {
          e.current = t;
        }
      }
    };
  }(e), [e]);
};
var a = require("../vendor/667294.js");