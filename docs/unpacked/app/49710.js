Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = (0, r.useRef)();
  (0, r.useEffect)(() => {
    t.current = e;
  });
  return t.current;
};
var r = require("../vendor/667294.js");