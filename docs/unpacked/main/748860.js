Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkIsWithinEligibilityWindow = function (e, t) {
  const n = (0, a.castUnixTimeToMillisTime)(e);
  return (0, a.millisTime)() - n <= t;
};
exports.convertFilterParametersIntoMap = function (e) {
  const t = new Map();
  e.forEach(e => {
    const {
      key: n,
      value: a
    } = e;
    if (n != null && a != null) {
      t.set(n, a);
    }
  });
  return t;
};
var a = require("../app/632157.js");