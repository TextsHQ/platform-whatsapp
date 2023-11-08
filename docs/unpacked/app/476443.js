var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadSchemaVersions = function () {
  return _.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./177414.js");
var o = require("./430252.js");
var s = require("./755985.js");
var l = require("./309998.js");
var u = r(require("./835119.js"));
var c = require("./505849.js");
var d = require("./365343.js");
function p() {
  return f.apply(this, arguments);
}
function f() {
  return (f = (0, i.default)(function* () {
    const e = new Map();
    const t = Array.from(l.DatabaseNames.members()).map(function () {
      var t = (0, i.default)(function* (t) {
        let n = null;
        switch (t) {
          case l.DatabaseNames.ModelStorage:
            n = o.Killswitch.DB_ROLLOUT_VERSION_MODEL_STORAGE;
            break;
          case l.DatabaseNames.FtsStorage:
            n = o.Killswitch.DB_ROLLOUT_VERSION_FTS_STORAGE;
            break;
          case l.DatabaseNames.JobsStorage:
            n = o.Killswitch.DB_ROLLOUT_VERSION_JOBS_STORAGE;
            break;
          case l.DatabaseNames.LruMediaStorage:
            n = o.Killswitch.DB_ROLLOUT_VERSION_LRU_MEDIA_STORAGE;
            break;
          case l.DatabaseNames.OffdStorage:
            n = o.Killswitch.DB_ROLLOUT_VERSION_OFFD_STORAGE;
            break;
          case l.DatabaseNames.QplStorage:
            n = o.Killswitch.DB_ROLLOUT_VERSION_QPL_STORAGE;
            break;
          case l.DatabaseNames.SignalStorage:
            n = o.Killswitch.DB_ROLLOUT_VERSION_SIGNAL_STORAGE;
            break;
          case l.DatabaseNames.WorkerStorage:
            n = o.Killswitch.DB_ROLLOUT_VERSION_WORKER_STORAGE;
            break;
          case l.DatabaseNames.SW:
            n = o.Killswitch.DB_ROLLOUT_VERSION_SW;
            break;
          case l.DatabaseNames.WAWC:
            n = o.Killswitch.WAWC;
            break;
          case l.DatabaseNames.WAWCDBEnc:
            n = o.Killswitch.DB_ROLLOUT_VERSION_WAWC_DB_ENC;
        }
        if (n != null) {
          const r = yield (0, o.getKillswitchValue)(n);
          if (typeof r == "number") {
            e.set(t, r);
          }
        }
      });
      return function () {
        return t.apply(this, arguments);
      };
    }());
    yield Promise.all(t);
    return e;
  })).apply(this, arguments);
}
function _() {
  return (_ = (0, i.default)(function* () {
    if ((0, s.isWorker)() && !(0, s.isServiceWorker)()) {
      return;
    }
    if ((0, l.hasSchemaVersions)()) {
      return;
    }
    let e;
    __LOG__(2)`db: start load schema versions`;
    let t;
    if (yield (0, o.fetchKillswitchValuesAtLeastOnce)()) {
      const n = yield (0, o.getKillswitchValue)("wa_web/db_rollout_version:db_rollout_killswitch");
      if (n != null && n) {
        __LOG__(2)`db: db versioning killswitch on, enabling all versions`;
        return void (0, l.setSchemaVersions)(new Map());
      }
      __LOG__(2)`db: using versions from killswitch`;
      e = yield p();
      t = c.WEB_DB_VERSION_SOURCE_TYPE.KNOB;
      const r = yield (0, a.getLocalSchemaVersions)();
      __LOG__(2)`db: found ${r.size} local versions`;
      r.forEach((n, r) => {
        var i;
        const a = (i = e) === null || i === undefined ? undefined : i.get(r);
        var o;
        if (a != null && n > a) {
          __LOG__(4, undefined, new Error(), true)`db: overriding ks version ${a} with localVersion ${n} for db ${r}`;
          SEND_LOGS("db: overriding ks version with local version");
          if (!((o = e) === null || o === undefined)) {
            o.set(r, n);
          }
          t = c.WEB_DB_VERSION_SOURCE_TYPE.KNOB_WITH_LOCAL_OVERRIDE;
        }
      });
    } else {
      const n = yield (0, a.getLocalSchemaVersions)();
      __LOG__(2)`db: found ${n.size} local versions`;
      t = n.size > 0 ? c.WEB_DB_VERSION_SOURCE_TYPE.LOCAL : c.WEB_DB_VERSION_SOURCE_TYPE.STATIC;
      const r = new Map();
      u.default.forEach((e, t) => {
        r.set(t, e);
      });
      n.forEach((e, t) => {
        r.set(t, e);
      });
      e = r;
      __LOG__(2)`db: using local and static versions`;
    }
    new d.WebDbVersionsSourceWamEvent({
      webDbVersionSource: t,
      webSchemaInitiator: (0, l.getLoaderType)()
    }).commit();
    if (!(0, l.hasSchemaVersions)()) {
      (0, l.setSchemaVersions)(e);
    }
  })).apply(this, arguments);
}