var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Storage = exports.NotInitializedError = exports.NoSuchTableError = exports.NoSuchDatabaseError = exports.NoFallbackError = exports.DuplicateTableError = exports.DuplicateDatabaseError = exports.AlreadyInitializedError = undefined;
var i = r(require("../vendor/348926.js"));
var a = r(require("./721698.js"));
var o = r(require("./542817.js"));
var s = r(require("./299840.js"));
var l = require("./288057.js");
r(require("./840841.js"));
var u = require("./309998.js");
var c = require("./894076.js");
var d = r(require("./286222.js"));
var p = require("./103712.js");
var f = r(require("./556869.js"));
const _ = {
  packColumns: false
};
class g extends Error {
  constructor() {
    super(...arguments);
    this.name = "AlreadyInitializedError";
  }
}
exports.AlreadyInitializedError = g;
class m extends Error {
  constructor() {
    super(...arguments);
    this.name = "DuplicateDatabaseError";
  }
}
exports.DuplicateDatabaseError = m;
class h extends Error {
  constructor() {
    super(...arguments);
    this.name = "DuplicateTableError";
  }
}
exports.DuplicateTableError = h;
class y extends Error {
  constructor() {
    super(...arguments);
    this.name = "NoFallbackError";
  }
}
exports.NoFallbackError = y;
class E extends Error {
  constructor() {
    super(...arguments);
    this.name = "NoSuchDatabaseError";
  }
}
exports.NoSuchDatabaseError = E;
class S extends Error {
  constructor() {
    super(...arguments);
    this.name = "NoSuchTableError";
  }
}
exports.NoSuchTableError = S;
class v extends Error {
  constructor() {
    super(...arguments);
    this.name = "NotInitializedError";
  }
}
exports.NotInitializedError = v;
exports.Storage = class {
  constructor(e, t) {
    this.tables = new Map();
    this.views = new Map();
    this.state = 1;
    this.versions = new p.StorageVersionManager();
    this.errorHandlers = new Map();
    this._database = e;
    this.config = t != null ? t : _;
    this._registerCommonErrorHandlers();
  }
  addErrorHandler(e, t) {
    const n = new e().name;
    this.errorHandlers.set(n, t);
  }
  add(e) {
    if (this.tables.has(e)) {
      throw new h(`Table "${e}" already added. Reuse the definition.`);
    }
    const t = u.DatabaseNames.cast(this._database.getDbName());
    if (t === undefined) {
      __LOG__(4, undefined, new Error(), true)`db: unknown database name: ${this._database.getDbName()}`;
      SEND_LOGS("db: unknown database name");
      throw (0, f.default)(`unknown database name: ${this._database.getDbName()}`);
    }
    const n = t === u.DatabaseNames.LruMediaStorage ? null : (0, u.getSchemaVersions)(t).get(t);
    const r = new d.default(e, this.versions, n);
    this.tables.set(e, r);
    return r;
  }
  _registerCommonErrorHandlers() {
    this.addErrorHandler(a.default.DatabaseClosedError, e => {
      if (o.default.takeOver && e.message.includes("DatabaseClosedError")) {
        throw new l.DbClosedOnTakeover(e.message);
      }
    });
    this.addErrorHandler(a.default.NoSuchDatabaseError, e => {
      if (o.default.takeOver && e.message.includes("NoSuchDatabaseError")) {
        throw new l.DbNotFoundOnTakeover(e.message);
      }
    });
    this.addErrorHandler(a.default.AbortError, e => {
      if (e.message.includes("QuotaExceededError")) {
        c.StorageCmd.trigger("storage_not_enough_space");
      }
    });
  }
  _getBackingDB() {
    return this._database;
  }
  _unsafeGetOrCreateView(e) {
    if (this.views.has(e)) {
      return this.views.get(e);
    }
    const t = this._database.view(e.name, e.rowview, e.shouldEnablePropFilter, e.shouldUseDbMsgEncKeyForEncryptedCol);
    this.views.set(e, t);
    return t;
  }
  _guardInitializedThunk(e) {
    return () => {
      if (this.state & 3) {
        throw new v("Storage must be initialized before accessing a table!");
      }
      return e();
    };
  }
  table(e) {
    const t = this.tables.get(e);
    if (!t || !t.tableExists()) {
      throw new S(`Unknown table ${e} requested, ensure table is defined!`);
    }
    if (!this._getBackingDB()) {
      throw new E(`Unable to find associated database with table "${e}"`);
    }
    return new s.default(this._guardInitializedThunk(() => this._unsafeGetOrCreateView(t)), this.errorHandlers);
  }
  lock(e, t) {
    if (this.state & 3) {
      return Promise.reject(new v("Initialize storage before attempting to lock tables!"));
    }
    for (let t = 0; t < e.length; ++t) {
      var n;
      if (!this.tables.has(e[t]) || !((n = this.tables.get(e[t])) === null || n === undefined ? undefined : n.tableExists())) {
        return Promise.reject(new S(`Requested lock of unknown table "${e[t]}"`));
      }
    }
    const r = e.map(e => {
      const t = this.tables.get(e);
      if (t) {
        return t;
      }
      throw new S(`Requested lock of unknown table "${e}"`);
    }).map(e => this._unsafeGetOrCreateView(e));
    return this._getBackingDB().transact(e, (0, i.default)(function* () {
      return t(r);
    })).finally(() => {});
  }
  _getUpgraderForCurrentVersion(e, t) {
    for (let n = 0; n < e.length; n++) {
      if (e[n].maxVersion === t) {
        const r = e[n].upgraders.get(t);
        if (r) {
          return {
            name: e[n].name,
            callback: r
          };
        }
      }
    }
  }
  _applyDatabaseVersion(e, t, n) {
    const r = t;
    const i = n.map(e => e.schema(r)).filter(Boolean);
    return e.initialize(t, i, this._getUpgraderForCurrentVersion(n, r), this.errorHandlers);
  }
  initialize() {
    var e = this;
    return (0, i.default)(function* () {
      if (e.state & 4) {
        throw new g("Storage instance has already been initialized");
      }
      e.versions.validate();
      if (!e._database) {
        throw new E(`"${e._database.constructor.name}" failed availability check!`);
      }
      yield e._database.available();
      const t = Array.from(e.tables.values());
      const n = e._getBackingDB();
      if (t && n) {
        for (let r = 0; r <= e.versions.getMax(); r++) {
          yield e._applyDatabaseVersion(n, r, t);
        }
        yield n.open();
        e.state = 4;
      }
    })();
  }
  purge() {
    this.state = 2;
    this.views = new Map();
    return this._getBackingDB().reset().then(() => {});
  }
  doesLocalSchemaIncludeVersion(e) {
    return e <= this.versions.getMax();
  }
  getExistingTables() {
    const e = new Map();
    this.tables.forEach((t, n) => {
      if (t.tableExists()) {
        e.set(n, t);
      }
    });
    return e;
  }
};