Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = (0, r.useRef)();
  const n = (0, r.useRef)(false);
  if (!n.current) {
    t.current = e();
    n.current = true;
  }
  return t;
};
var r = require("../vendor/667294.js");