var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e, t) {
  if (e.size !== t.size) {
    return false;
  }
  return (0, i.default)(e, e => t.has(e));
};
var i = r(require("./896608.js"));