var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requireBundle = exports.ForwardMessageModalLoadable = undefined;
var r = a(require("../vendor/348926.js"));
var o = a(require("./114945.js"));
var l = a(require("../app/97359.js"));
var i = a(require("../app/932325.js"));
var u = a(require("./205106.js"));
var s = a(require("./261724.js"));
var c = a(require("../vendor/667294.js"));
const d = (0, u.default)((0, r.default)(function* () {
  const e = yield Promise.all([require.e(8295), require.e(1702), require.e(9488), require.e(2790), require.e(275)]).then(require.bind(require, 699285));
  return (0, l.default)(e);
}), "ForwardMessageModal");
exports.requireBundle = d;
const f = (0, o.default)({
  loader: d,
  loading: e => c.default.createElement(s.default, {
    title: i.default.t(61, {
      _plural: 1
    }),
    error: Boolean(e.error)
  })
});
exports.ForwardMessageModalLoadable = f;