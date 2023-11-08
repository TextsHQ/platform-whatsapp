var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return a.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
function a() {
  return (a = (0, i.default)(function* () {
    const e = navigator.storage;
    if ((e == null ? undefined : e.estimate) == null) {
      return null;
    }
    const t = yield e.estimate();
    let {
      usage: n,
      quota: r,
      usageDetails: i
    } = t;
    if (!Number.isFinite(n)) {
      n = 0;
    }
    if (!Number.isFinite(r)) {
      r = 0;
    }
    return {
      usage: n,
      quota: r,
      available: r - n,
      caches: i == null ? undefined : i.caches
    };
  })).apply(this, arguments);
}