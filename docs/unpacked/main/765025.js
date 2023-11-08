var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requireBundle = exports.CreatePollModalLoadable = undefined;
var r = a(require("../vendor/348926.js"));
var o = a(require("./114945.js"));
var l = a(require("./205106.js"));
var i = a(require("./261724.js"));
var u = require("../vendor/548360.js");
var s = a(require("../vendor/667294.js"));
const c = (0, l.default)((0, r.default)(function* () {
  return (yield Promise.all([require.e(8295), require.e(1702), require.e(9488), require.e(2790), require.e(275)]).then(require.bind(require, 317726))).CreatePollModal;
}), "CreatePollModal");
exports.requireBundle = c;
const d = (0, o.default)({
  loader: c,
  loading: e => s.default.createElement(i.default, {
    title: u.fbt._("Poll", null, {
      hk: "1PlYYp"
    }),
    error: Boolean(e.error)
  })
});
exports.CreatePollModalLoadable = d;