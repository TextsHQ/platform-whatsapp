var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._waitUntilSchemaVersionsReady = exports.DatabaseNames = undefined;
exports.clearSchemaVersions = function () {
  p = null;
};
exports.convertDBName = f;
exports.getLoaderType = _;
exports.getSchemaVersions = function (e) {
  if (p == null) {
    const t = {
      webDbLoader: _()
    };
    if (e != null) {
      t.webDbName = f(e);
    }
    new l.WebDbLoadFromVersionFailureNonAnonymousWamEvent(t).commitAndWaitForFlush(true);
    __LOG__(4, undefined, new Error(), true)`db: Schema versions not initialized`;
    SEND_LOGS("db: Schema versions not initialized");
    throw (0, u.default)("Schema versions not initialized");
  }
  return p;
};
exports.hasSchemaVersions = function () {
  return p != null;
};
exports.setSchemaVersions = function (e) {
  __LOG__(2)`db: set schema versions: ${Array.from(e)}. is worker? ${(0, a.isWorker)()}`;
  p = e;
  d.resolve();
};
exports.waitUntilSchemaVersionsReady = function () {
  return d.promise;
};
var i = require("./950376.js");
var a = require("./755985.js");
var o = require("./9354.js");
var s = require("./119077.js");
var l = require("./427578.js");
var u = r(require("./556869.js"));
const c = require("../vendor/76672.js")({
  ModelStorage: "model-storage",
  FtsStorage: "fts-storage",
  JobsStorage: "jobs-storage",
  LruMediaStorage: "lru-media-storage-idb",
  OffdStorage: "offd-storage",
  QplStorage: "qpl-storage",
  SignalStorage: "signal-storage",
  WorkerStorage: "worker-storage",
  SW: "sw",
  WAWC: "wawc",
  WAWCDBEnc: "wawc_db_enc"
});
exports.DatabaseNames = c;
const d = new i.Resolvable();
exports._waitUntilSchemaVersionsReady = d;
let p = null;
function f(e) {
  switch (e) {
    case c.ModelStorage:
      return s.WEB_DB_NAME_TYPE.MODEL_STORAGE;
    case c.FtsStorage:
      return s.WEB_DB_NAME_TYPE.FTS_STORAGE;
    case c.JobsStorage:
      return s.WEB_DB_NAME_TYPE.JOBS_STORAGE;
    case c.LruMediaStorage:
      return s.WEB_DB_NAME_TYPE.LRU_MEDIA_STORAGE_IDB;
    case c.OffdStorage:
      return s.WEB_DB_NAME_TYPE.OFFD_STORAGE;
    case c.QplStorage:
      return s.WEB_DB_NAME_TYPE.QPL_STORAGE;
    case c.SignalStorage:
      return s.WEB_DB_NAME_TYPE.SIGNAL_STORAGE;
    case c.WorkerStorage:
      return s.WEB_DB_NAME_TYPE.WORKER_STORAGE;
    case c.SW:
      return s.WEB_DB_NAME_TYPE.SW;
    case c.WAWC:
      return s.WEB_DB_NAME_TYPE.WAWC;
    case c.WAWCDBEnc:
      return s.WEB_DB_NAME_TYPE.WAWC_DB_ENC;
  }
}
function _() {
  if ((0, a.isServiceWorker)()) {
    return o.WEB_DB_LOADER_TYPE.SERVICE_WORKER;
  } else if ((0, a.isWorker)()) {
    return o.WEB_DB_LOADER_TYPE.WEB_WORKER;
  } else {
    return o.WEB_DB_LOADER_TYPE.MAIN;
  }
}