Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTimedCacheItem = function (e) {
  return {
    timestamp: (0, a.unixTimeMs)(),
    value: e
  };
};
exports.getTimedCacheItemValue = function (e, t) {
  if (e == null) {
    return null;
  }
  const n = (0, a.unixTimeMs)();
  const {
    timestamp: r,
    value: o
  } = e;
  if (n - r < t) {
    return o;
  } else {
    return null;
  }
};
var a = require("../app/632157.js");