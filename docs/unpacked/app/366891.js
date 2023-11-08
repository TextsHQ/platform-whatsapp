var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.STORAGE_QUOTA_UNAVAILABLE = exports.MdSyncFieldStatsMeta = undefined;
var i = r(require("../vendor/348926.js"));
var a = r(require("./495976.js"));
var o = require("./162371.js");
exports.STORAGE_QUOTA_UNAVAILABLE = -1;
const s = new class {
  constructor() {
    this._storageEstimation = {
      mdStorageQuotaBytes: -2,
      mdStorageQuotaUsedBytes: -2
    };
    this._mdSessionId = null;
  }
  getStorageEstimation() {
    var e = this;
    return (0, i.default)(function* () {
      if (e._storageEstimation.mdStorageQuotaBytes !== -2) {
        return Promise.resolve(e._storageEstimation);
      }
      const t = yield (0, a.default)();
      e._storageEstimation = {
        mdStorageQuotaBytes: t ? t.quota : -1,
        mdStorageQuotaUsedBytes: t ? t.usage : -1
      };
      return e._storageEstimation;
    })();
  }
  getMdSessionId() {
    var e = this;
    return (0, i.default)(function* () {
      if (!(e._mdSessionId != null)) {
        e._mdSessionId = yield (0, o.genCurrentSessionId)();
      }
      return e._mdSessionId;
    })();
  }
}();
exports.MdSyncFieldStatsMeta = s;