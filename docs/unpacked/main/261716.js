var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
  const [t, n] = (0, r.useState)("");
  const a = (0, o.default)(e => {
    n(e);
  }, e);
  return [t, a];
};
var r = require("../vendor/667294.js");
var o = a(require("../app/710629.js"));