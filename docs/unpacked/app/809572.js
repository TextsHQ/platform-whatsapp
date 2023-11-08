var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "GET";
  let n = arguments.length > 2 ? arguments[2] : undefined;
  let r = arguments.length > 3 ? arguments[3] : undefined;
  let a = arguments.length > 4 ? arguments[4] : undefined;
  return i.default.request(e, t, n, a, r).then(e => e.status && e.status < 12000 ? e : null).catch(() => null);
};
var i = r(require("./794938.js"));