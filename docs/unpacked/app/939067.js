var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : i.default;
  let n = null;
  const r = function (r) {
    if (n != null && t(n.params, r)) {
      n.params = r;
    } else {
      n = {
        params: r,
        result: e.call(this, r)
      };
    }
    return n.result;
  };
  r.clear = () => {
    n = null;
  };
  return r;
};
var i = r(require("./408662.js"));