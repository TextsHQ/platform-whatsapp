Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const [t, n] = (0, o.useState)(() => (0, r.shouldShowNUX)(e));
  (0, o.useEffect)(() => {
    if ((0, r.getNUX)(e) == null) {
      (0, r.setNUX)(e, {
        views: 0
      });
      n((0, r.shouldShowNUX)(e));
    }
  }, [e]);
  const i = (0, o.useCallback)(() => {
    (0, a.viewNux)(e);
    n((0, r.shouldShowNUX)(e));
  }, [e]);
  const u = (0, o.useCallback)(() => {
    (0, a.dismissNux)(e);
    n((0, r.shouldShowNUX)(e));
  }, [e]);
  const s = (0, o.useCallback)(() => {
    (0, a.resetNux)(e);
    n((0, r.shouldShowNUX)(e));
  }, [e]);
  (0, l.useListener)(r.NuxPrefsEvent, e, () => {
    n((0, r.shouldShowNUX)(e));
  });
  return [t, i, u, s];
};
var a = require("../app/763219.js");
var r = require("../app/377773.js");
var o = require("../vendor/667294.js");
var l = require("../app/808446.js");