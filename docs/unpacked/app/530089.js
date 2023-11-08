var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getColumnPackingValueFromStorage = function () {
  return l.apply(this, arguments);
};
exports.setColumnPackingValueToStorage = function () {
  return s.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./840928.js");
var o = require("./94872.js");
function s() {
  return (s = (0, i.default)(function* (e) {
    if (e != null) {
      yield a.userPrefsCacheStorage.setItemToCacheStorage(o.MD_KEYS.COLUMN_PACKING_ENABLED, e);
    } else {
      yield a.userPrefsCacheStorage.removeItemFromCacheStorage(o.MD_KEYS.COLUMN_PACKING_ENABLED);
    }
  })).apply(this, arguments);
}
function l() {
  return (l = (0, i.default)(function* () {
    return yield a.userPrefsCacheStorage.getItemFromCacheStorage(o.MD_KEYS.COLUMN_PACKING_ENABLED);
  })).apply(this, arguments);
}