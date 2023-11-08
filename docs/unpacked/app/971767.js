var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storeQuotaManager = exports.storeConfigs = exports.StoreQuotaManager = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./287461.js");
var o = r(require("./495976.js"));
const s = 1073741824;
const l = new Map([["lru-media-store", {
  getQuota: e => e <= (0, a.getABPropConfigValue)("web_browser_quota_threshold") * s ? Math.min(e * 0.2, (0, a.getABPropConfigValue)("web_browser_min_storage_quota") * s) : e * 0.2
}]]);
exports.storeConfigs = l;
class u {
  constructor(e) {
    this._storeConfigs = e;
  }
  getQuotaForStore(e) {
    var t = this;
    return (0, i.default)(function* () {
      var n;
      var r;
      const i = yield (0, o.default)();
      if (i == null) {
        return 0;
      }
      const {
        quota: a
      } = i;
      return Math.floor((n = (r = t._storeConfigs.get(e)) === null || r === undefined ? undefined : r.getQuota(a)) !== null && n !== undefined ? n : 0);
    })();
  }
}
exports.StoreQuotaManager = u;
const c = new u(l);
exports.storeQuotaManager = c;