var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../vendor/348926.js"));
var o = a(require("../app/97359.js"));
var l = a(require("./205106.js"));
var i = a(require("./918546.js"));
var u = a(require("./544142.js"));
var s = a(require("../vendor/667294.js"));
const c = (0, l.default)((0, r.default)(function* () {
  const e = yield Promise.all([require.e(2790), require.e(1761)]).then(require.bind(require, 31761));
  return (0, o.default)(e);
}), "OrderCreationFlow");
var d = (0, i.default)({
  loader: c,
  loading: e => s.default.createElement(u.default, {
    error: Boolean(e.error)
  })
});
exports.default = d;