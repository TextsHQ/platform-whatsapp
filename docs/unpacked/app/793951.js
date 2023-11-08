var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  let n = arguments.length > 2 ? arguments[2] : undefined;
  return class extends a.default {
    static match(r) {
      return (0, i.default)(r, e, t, n);
    }
  };
};
var i = r(require("./84652.js"));
var a = r(require("./496964.js"));