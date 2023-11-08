var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("./542817.js"));
var a = require("./288057.js");
r(require("./840841.js"));
exports.default = class {
  constructor(e, t) {
    this.errorHandlers = new Map();
    this._view = e;
    if (t) {
      this.errorHandlers = t;
    }
  }
  _maybeHandleError(e) {
    const t = this.errorHandlers.get(e.name);
    if (t) {
      t(e);
    }
  }
  _read(e) {
    if (i.default.isLogoutInProgress) {
      return Promise.reject(new a.DbOnLogoutAbort("dropping db read operation due to logout"));
    }
    return e(this._view()).catch(e => {
      this._maybeHandleError(e);
      throw e;
    });
  }
  _write(e) {
    if (!(arguments.length > 1 && arguments[1] !== undefined && arguments[1]) && i.default.isLogoutInProgress) {
      return Promise.reject(new a.DbOnLogoutAbort("dropping db write operation due to logout"));
    }
    return e(this._view()).catch(e => {
      this._maybeHandleError(e);
      throw e;
    });
  }
  create(e) {
    return this._write(t => t.create(e));
  }
  preflightEncryptSingleRecord(e) {
    return this._write(t => t.preflightEncryptSingleRecord(e), false, true);
  }
  postflightDecryptSingleRecord(e) {
    return this._write(t => t.postflightDecryptSingleRecord(e), false, true);
  }
  bulkCreateWith_ALREADY_ENCRYPTED_RECORDS_ONLY(e) {
    return this._write(t => t.bulkCreateWith_ALREADY_ENCRYPTED_RECORDS_ONLY(e));
  }
  bulkCreateOrReplace_ALREADY_ENCRYPTED_RECORDS_ONLY(e) {
    return this._write(t => t.bulkCreateOrReplace_ALREADY_ENCRYPTED_RECORDS_ONLY(e));
  }
  createOrReplace(e) {
    return this._write(t => t.createOrReplace(e));
  }
  createOrMerge(e, t) {
    return this._write(n => n.createOrMerge(e, t));
  }
  get(e, t) {
    return this._read(n => n.get(e, t));
  }
  merge(e, t) {
    return this._write(n => n.merge(e, t));
  }
  remove(e) {
    return this._write(t => t.remove(e));
  }
  bulkCreate(e) {
    return this._write(t => t.bulkCreate(e));
  }
  bulkCreateOrReplace(e) {
    return this._write(t => t.bulkCreateOrReplace(e));
  }
  bulkCreateOrMerge(e) {
    return this._write(t => t.bulkCreateOrMerge(e));
  }
  bulkGet(e, t) {
    return this._read(n => n.bulkGet(e, t));
  }
  bulkRemoveByIndex(e, t) {
    return this._write(n => n.bulkRemoveByIndex(e, t));
  }
  bulkRemove(e) {
    return this._write(t => t.bulkRemove(e));
  }
  bulkDeleteRange(e, t, n) {
    return this._write(r => r.bulkDeleteRange(e, t, n));
  }
  all(e, t) {
    return this._read(n => n.all(e, t));
  }
  count() {
    return this._read(e => e.count());
  }
  equals(e, t, n) {
    return this._read(r => r.equals(e, t, n));
  }
  anyOf(e, t, n) {
    return this._read(r => r.anyOf(e, t, n));
  }
  startsWithAnyOf(e, t, n) {
    return this._read(r => r.startsWithAnyOf(e, t, n));
  }
  greaterThan(e, t, n) {
    return this._read(r => r.greaterThan(e, t, n));
  }
  lessThan(e, t, n) {
    return this._read(r => r.lessThan(e, t, n));
  }
  between(e, t, n, r, i) {
    return this._read(a => a.between(e, t, n, r, i));
  }
  forEachSortedBy(e, t) {
    return this._read(n => n.forEachSortedBy(e, t));
  }
  forEach(e) {
    return this._read(t => t.forEach(e));
  }
  clear() {
    let e = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
    return this._write(e => e.clear(), e);
  }
};