var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WEB_IDB_DB_NAMES = undefined;
exports.deleteAllIdb = function () {
  return l.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./434517.js");
var o = r(require("./721698.js"));
const s = {
  __dbnames: "__dbnames",
  fts_storage: "fts-storage",
  fts_loadgen_metadata: "loadgen-storage",
  _hsm_storage_DEPRECATED: "hsm-storage",
  jobs_storage: "jobs-storage",
  lru_media_storage_idb: "lru-media-storage-idb",
  model_storage: "model-storage",
  offd_storage: "offd-storage",
  pb_detect: "pb_detect",
  signal_storage: "signal-storage",
  sw: "sw",
  wawc: "wawc",
  wawc_db_enc: "wawc_db_enc",
  qpl_storage: "qpl-storage",
  worker_storage: "worker-storage"
};
function l() {
  return (l = (0, i.default)(function* () {
    const e = Object.keys(s).map(e => s[e]);
    let t = false;
    const n = e.map(function () {
      var e = (0, i.default)(function* (e) {
        if (e !== "__dbnames" && e !== "sw" && e !== "pb_detect") {
          try {
            yield (0, a.promiseTimeout)(Promise.resolve(o.default.delete(e)), 7000);
          } catch (e) {
            t = true;
          }
        }
      });
      return function () {
        return e.apply(this, arguments);
      };
    }());
    yield Promise.all(n);
    return t;
  })).apply(this, arguments);
}
exports.WEB_IDB_DB_NAMES = s;