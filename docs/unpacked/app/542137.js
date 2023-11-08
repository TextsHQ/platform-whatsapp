var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = o;
exports.sendLogs = function (e, t) {
  return o().sendLogs(e, t);
};
exports.set = function (e) {
  a = e;
};
var i = r(require("./670983.js"));
let a;
function o() {
  return (0, i.default)(a, "InvocationInterface was not inited");
}