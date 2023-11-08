var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.copyUserPrefValuesToCacheStorage = function () {
  const e = [];
  const t = o.default.getItemFromLocalStorage(a.MD_KEYS.NOISE_INFO);
  if (t != null) {
    e.push({
      key: a.MD_NOISE_KEYS.NOISE_INFO,
      value: t
    });
  }
  const n = o.default.getItemFromLocalStorage(a.MD_KEYS.NOISE_INFO_IV);
  if (n != null) {
    e.push({
      key: a.MD_NOISE_KEYS.NOISE_INFO_IV,
      value: n
    });
  }
  const r = o.default.getItemFromLocalStorage(a.MD_KEYS.WEB_ENC_SALT);
  if (r != null) {
    e.push({
      key: a.MD_NOISE_KEYS.WEB_ENC_SALT,
      value: r
    });
    o.default.setItemToLocalStorage(a.MD_NOISE_KEYS.WEB_ENC_SALT, r);
  }
  const s = o.default.getItemFromLocalStorage(a.MD_KEYS.COLUMN_PACKING_ENABLED);
  if (s != null) {
    e.push({
      key: a.MD_KEYS.COLUMN_PACKING_ENABLED,
      value: s
    });
  }
  return i.userPrefsCacheStorage.bulkSetItemsToCacheStorage(e);
};
var i = require("./840928.js");
var a = require("./94872.js");
var o = r(require("./98165.js"));