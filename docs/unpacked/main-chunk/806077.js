Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const [t, n] = (0, r.useState)(() => (0, o.isInitializedAndFeatureFlagEnabled)(e));
  (0, r.useEffect)(() => (0, o.listen)(e, (e, t) => {
    if (t) {
      n(Boolean(e && !e.isDeactivated));
    }
  }), []);
  return t;
};
var o = require("../app/146254.js");
var r = require("../vendor/667294.js");