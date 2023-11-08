var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  var n;
  if ((t = (n = e.templateParams[0]) === null || n === undefined ? undefined : n.toString()) !== null && t !== undefined) {
    return t;
  } else {
    return (0, r.default)(e.id.remote);
  }
};
var r = a(require("../app/151502.js"));