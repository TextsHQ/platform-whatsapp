var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = require("./477689.js");
var a = require("./122583.js");
var o = require("./434517.js");
var s = r(require("./721698.js"));
var l = require("./344611.js");
var u = require("./755985.js");
var c = require("./368170.js");
var d = require("./617178.js");
var p = require("./75492.js");
var f = r(require("./556869.js"));
const _ = {
  ERROR: "error",
  OPENING: "opening",
  BLOCKED: "blocked",
  OPEN: "open",
  CLOSED: "closed",
  FAILED: "failed"
};
let g = false;
let m = null;
function h() {
  this._dbName = l.WEB_IDB_DB_NAMES.wawc;
  this._db = new s.default(this._dbName, {
    chromeTransactionDurability: "relaxed",
    addons: []
  });
  this._db.on("versionchange", e => {
    this._db.close();
    __LOG__(2)`db: close db due to versionchange`;
    if (e && e.newVersion != null && e.newVersion !== e.oldVersion) {
      g = true;
      if (m) {
        m();
      }
    }
  });
  (0, d.applyVersions)(this._db);
  this.openAttempt = 0;
  this.openDB().catch(e => {
    __LOG__(3)`openDB failed: ${e}`;
  });
  this._dbState = _.OPENING;
}
h.prototype.loadUserIdb = function () {
  return this.idb().then(e => e.transaction("rw", e.user, () => e.user.toArray().then(e => e.forEach(e => {
    this.permanentStorage.dataStore[e.key] = e.value;
  })))).catch(e => {
    __LOG__(3)`db:loadUserIdb:Error ${e}`;
  });
};
h.prototype.openDB = function () {
  if (this._db.isOpen()) {
    this._db.close();
    __LOG__(2)`db: close db due to duplicate openDB`;
  }
  const e = (0, o.promiseTimeout)(Promise.resolve(this._db.open()), 10000).then(() => {
    if ((0, u.isWorker)()) {
      __LOG__(2)`db: Successfully opened db in worker thread`;
    } else {
      __LOG__(2)`db: Successfully opened db in main thread`;
    }
    new p.WebcDbOpenWamEvent({
      webcDbName: this._dbName,
      webcDbOpenWasSuccess: true,
      webcDbOpenNumAttempts: this.openAttempt
    }).commit();
    this._dbState = _.OPEN;
    return _.OPEN;
  }).catch((0, a.filteredCatch)(i.TimeoutError, () => {
    __LOG__(2)`db:openDB blocked in ${(0, u.isWorker)() ? "worker" : "main"} thread`;
    new p.WebcDbOpenWamEvent({
      webcDbName: this._dbName,
      webcDbOpenWasSuccess: false,
      webcDbOpenNumAttempts: this.openAttempt
    }).commit();
    this._dbState = _.BLOCKED;
    return _.BLOCKED;
  })).catch(e => {
    __LOG__(3)`db:openDB:Error ${e}`;
    if (this.openAttempt > 1 || c.UA.isSafari) {
      this.opening = undefined;
      this._dbState = _.ERROR;
      new p.WebcDbOpenWamEvent({
        webcDbName: this._dbName,
        webcDbOpenWasSuccess: false,
        webcDbOpenNumAttempts: this.openAttempt
      }).commit();
      throw _.ERROR;
    }
    this.openAttempt += 1;
    return this._db.delete().catch(e => {
      __LOG__(3)`db:deleteDB:Error ${e}`;
      this.opening = undefined;
      this._dbState = _.ERROR;
      throw _.ERROR;
    }).then(() => this.openDB());
  }).then(e => {
    this.opening = undefined;
    if (e === _.BLOCKED) {
      throw _.BLOCKED;
    }
    return this._db;
  });
  if (!this.opening) {
    this.opening = e;
  }
  return e;
};
h.prototype.idb = function () {
  if (this._db.isOpen()) {
    return Promise.resolve(this._db);
  } else if (this._db.hasFailed()) {
    __LOG__(3)`Dexie: database failed to open, hasClosed ${this._db.hasBeenClosed()}`;
    return Promise.reject((0, f.default)(_.FAILED));
  } else if (this._dbState === _.BLOCKED) {
    __LOG__(3)`Dexie: database is blocked`;
    return Promise.reject((0, f.default)(_.BLOCKED));
  } else if (this.opening) {
    return this.opening;
  } else {
    __LOG__(3)`Dexie: database is closed`;
    return Promise.reject((0, f.default)(_.CLOSED));
  }
};
h.prototype.onVersionChange = function (e) {
  m = e;
  if (g) {
    m();
  }
};
h.prototype.State = _;
var y = new h();
exports.default = y;