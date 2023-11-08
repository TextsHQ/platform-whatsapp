var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/348926.js"));
var a = r(require("./670983.js"));
var o = require("./557063.js");
var s = r(require("./721698.js"));
var l = require("./287461.js");
var u = require("./659102.js");
var c = require("./691935.js");
var d = require("./918720.js");
var p = r(require("./556869.js"));
var f = r(require("../vendor/441143.js"));
function _() {
  return (_ = (0, i.default)(function* (e, t, n, r) {
    if (!u.DbEncKeyStore) {
      throw (0, p.default)("feature is not yet implemented");
    }
    const i = r ? u.DbEncKeyStore.getDbMsgEncKeys({
      tableName: t.tableName
    }) : u.DbEncKeyStore.getEncKeys();
    const a = i[i.length - 1];
    const o = new Uint8Array(16);
    let l;
    self.crypto.getRandomValues(o);
    if (typeof e == "string") {
      (0, f.default)(n === d.ENCRYPTED_VALUE_TYPE.STRING, `Expected a string for ENCRYPTED_VALUE_TYPE (${t.tableName}-${t.columnName}) but got ${typeof e}`);
      l = new TextEncoder().encode(e);
    } else {
      l = e;
    }
    try {
      const e = self.crypto.subtle.encrypt({
        iv: o,
        name: u.DB_ENCRYPTION_CIPHER
      }, a.key, l);
      const t = s.default.currentTransaction == null ? e : s.default.waitFor(e);
      return {
        _data: yield (0, c.dexieCastToPromise)(t),
        iv: o,
        _keyId: a.id,
        _scheme: r ? 1 : 0
      };
    } catch (e) {
      A(e, "encryptDbMaterial", null, t.columnName);
      throw e;
    }
  })).apply(this, arguments);
}
s.default.Promise.PSD.onunhandled = () => {};
s.default.Promise.PSD.txRelaxedDurabilityEnabled = true;
const g = ["poll-votes", "chat", "sync-keys", "orphan-tc-token"];
function m(e, t, n) {
  const {
    _keyId: r,
    _scheme: i
  } = e;
  const a = n && !g.includes(t);
  const o = g.includes(t) && i === 1;
  if (a || o) {
    return u.DbEncKeyStore.getDbMsgEncKeys({
      tableName: t
    }).filter(e => e.id === r)[0];
  } else {
    return u.DbEncKeyStore.getEncKeys().filter(e => e.id === r)[0];
  }
}
function h() {
  return (h = (0, i.default)(function* (e, t, n, r) {
    if (!u.DbEncKeyStore) {
      throw (0, p.default)("feature is not yet implemented");
    }
    const {
      _data: i,
      iv: a
    } = e;
    let o = null;
    o = m(e, t.tableName, r);
    (0, f.default)(o != null, "Encryption key id not found");
    if (i == null) {
      return i;
    }
    try {
      const e = self.crypto.subtle.decrypt({
        iv: a,
        name: u.DB_ENCRYPTION_CIPHER
      }, o.key, i);
      const t = s.default.currentTransaction == null ? e : s.default.waitFor(e);
      const r = yield (0, c.dexieCastToPromise)(t);
      if (n === d.ENCRYPTED_VALUE_TYPE.STRING) {
        return new TextDecoder("utf-8").decode(r);
      } else {
        return r;
      }
    } catch (e) {
      A(e, "decryptDbMaterial", null, t.columnName);
      throw e;
    }
  })).apply(this, arguments);
}
class y {
  constructor(e, t, n, r, i, a, o) {
    this.table = e;
    this.view = n;
    this.db = t;
    this.propFilter = r;
    this.tableColumns = i;
    this.tableEncryptedColumns = new Map(Object.keys(a).map(e => [e, a[e]]));
    this.shouldUseDbMsgEncKeyForEncryptedCol = o.shouldUseDbMsgEncKeyForEncryptedCol;
    this.packColumns = o.packColumns;
  }
  asyncView(e) {
    var t = this;
    let n = !(arguments.length > 1 && arguments[1] !== undefined) || arguments[1];
    return (0, i.default)(function* () {
      const r = t._deserializeColumns(e);
      const i = t._hasEncryptedColumn() && n ? yield t._decryptColumns(r) : r;
      return t.view(i);
    })();
  }
  _deserializeColumns(e) {
    if ((0, l.getABPropConfigValue)("column_serialization_perf_impact_test")) {
      const t = {};
      this.tableColumns.forEach(n => {
        if (e[n.packedName] !== undefined) {
          t[n.name] = e[n.packedName];
        }
      });
      return e;
    }
    return e;
  }
  _serializeColumns(e) {
    let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    if ((0, l.getABPropConfigValue)("column_serialization_perf_impact_test")) {
      const n = Object.keys(e);
      const r = {};
      this.tableColumns.forEach(i => {
        if ((t || e[i.name] !== undefined) && n.includes(i.name)) {
          r[i.packedName] = e[i.name];
        }
      });
      return e;
    }
    return e;
  }
  _decryptColumns(e) {
    var t = this;
    return (0, i.default)(function* () {
      (0, f.default)(typeof e == "object", "Called `_decryptColumns` with primitive value");
      const n = Array.from(t.tableEncryptedColumns.entries()).map(n => {
        let [r, i] = n;
        const a = e[r];
        if ((a == null ? undefined : a._data) && (a == null ? undefined : a.iv)) {
          return function () {
            return h.apply(this, arguments);
          }(a, {
            tableName: t.table.name,
            columnName: r
          }, i, t.shouldUseDbMsgEncKeyForEncryptedCol).then(t => {
            e[r] = t;
          });
        } else {
          return a;
        }
      });
      yield Promise.all(n);
      return e;
    })();
  }
  _encryptColumns(e) {
    const t = Array.from(this.tableEncryptedColumns.entries()).map(t => {
      let [n, r] = t;
      const i = e[n];
      if (i == null) {
        return i;
      } else {
        return function () {
          return _.apply(this, arguments);
        }(i, {
          tableName: this.table.name,
          columnName: n
        }, r, this.shouldUseDbMsgEncKeyForEncryptedCol).then(t => {
          e[n] = t;
        });
      }
    });
    return Promise.all(t).then(() => e);
  }
  _encryptAndSerialize(e) {
    var t = this;
    let n = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    return (0, i.default)(function* () {
      const r = yield t._encryptSingleUpdate(e);
      return t._serializeColumns(r, n);
    })();
  }
  _bulkEncryptAndSerialize(e) {
    var t = this;
    return (0, i.default)(function* () {
      return (yield t._encryptBulkUpdates(e)).map(e => t._serializeColumns(e));
    })();
  }
  _encryptSerializeAndAdd(e) {
    var t = this;
    return (0, i.default)(function* () {
      const n = yield t._encryptAndSerialize(e);
      return t.table.add(n);
    })();
  }
  _encryptSerializeAndPut(e) {
    var t = this;
    return (0, i.default)(function* () {
      const n = yield t._encryptAndSerialize(e);
      return t.table.put(n);
    })();
  }
  _encryptSerializeAndBulkAdd(e) {
    var t = this;
    return (0, i.default)(function* () {
      const n = yield t._bulkEncryptAndSerialize(e);
      return t.table.bulkAdd(n);
    })();
  }
  _encryptSerializeAndBulkPut(e) {
    if (this._hasEncryptedColumn()) {
      return s.default.waitFor(this._encryptBulkUpdates(e)).then(e => {
        const t = e.map(e => this._serializeColumns(e));
        return this.table.bulkPut(t);
      });
    }
    const t = e.map(e => this._serializeColumns(e));
    return this.table.bulkPut(t);
  }
  _encryptBulkUpdates(e) {
    if (this._hasEncryptedColumn()) {
      const t = [];
      const n = e.map((e, n) => this._encryptColumns(e).then(e => {
        t[n] = e;
      }));
      return Promise.all(n).then(() => t);
    }
    return Promise.resolve(e);
  }
  _encryptSingleUpdate(e) {
    var t = this;
    return (0, i.default)(function* () {
      if (t._hasEncryptedColumn()) {
        return yield t._encryptColumns(e);
      }
      return e;
    })();
  }
  asyncViewMap(e) {
    let t = !(arguments.length > 1 && arguments[1] !== undefined) || arguments[1];
    if (!this._hasEncryptedColumn() || !t) {
      return Promise.resolve(e.map(e => e ? this.view(this._deserializeColumns(e)) : null));
    }
    const n = e.map(e => e != null ? this.asyncView(e, t) : Promise.resolve(null));
    return (0, c.dexieCastToPromise)(s.default.currentTransaction == null ? Promise.all(n) : s.default.waitFor(Promise.all(n)));
  }
  preflightEncryptSingleRecord(e) {
    Object.keys(e).forEach(t => {
      if (!this.tableEncryptedColumns.has(t)) {
        delete e[t];
      }
    });
    return this._encryptColumns(e);
  }
  postflightDecryptSingleRecord(e) {
    var t = this;
    return (0, i.default)(function* () {
      const n = yield t._decryptColumns(e);
      return t.view(n);
    })();
  }
  bulkCreateWith_ALREADY_ENCRYPTED_RECORDS_ONLY(e) {
    if (e.length === 0) {
      return (0, c.dexieCastToPromise)();
    }
    const t = e.map(e => this.propFilter(e));
    b(t, this.tableEncryptedColumns);
    const n = t.map(e => this._serializeColumns(e));
    return (0, c.dexieCastToPromise)(this.table.bulkAdd(n)).catch(e => {
      A(e, "bulkCreateWith_ALREADY_ENCRYPTED_RECORDS_ONLY", this.table.name);
      throw e;
    });
  }
  bulkCreateOrReplace_ALREADY_ENCRYPTED_RECORDS_ONLY(e) {
    if (e.length === 0) {
      return (0, c.dexieCastToPromise)();
    }
    const t = e.map(e => this.propFilter(e));
    b(t, this.tableEncryptedColumns);
    const n = t.map(e => this._serializeColumns(e));
    return (0, c.dexieCastToPromise)(this.table.bulkPut(n)).catch(e => {
      A(e, "bulkCreateOrReplace", this.table.name);
      throw e;
    });
  }
  create(e) {
    const t = this.propFilter(e);
    return (0, c.dexieCastToPromise)(this._encryptSerializeAndAdd(t)).catch(e => {
      A(e, "create", this.table.name);
      throw e;
    });
  }
  createOrReplace(e) {
    const t = this.propFilter(e);
    return (0, c.dexieCastToPromise)(this._encryptSerializeAndPut(t)).catch(e => {
      A(e, "createOrReplace", this.table.name);
      throw e;
    });
  }
  createOrMerge(e, t) {
    var n = this;
    return (0, i.default)(function* () {
      const r = n.propFilter(t);
      const i = yield n._encryptAndSerialize(r, true);
      return (0, c.dexieCastToPromise)(n.db.transaction("rw", n.table, () => n.table.where(":id").equals(e).modify(e => {
        Object.assign(e, i);
      }).then(e => {
        if (e !== 1) {
          return n.table.add(i);
        }
      })).then(() => {})).catch(e => {
        A(e, "createOrMerge", n.table.name);
        throw e;
      });
    })();
  }
  get(e) {
    let t = !(arguments.length > 1 && arguments[1] !== undefined) || arguments[1];
    return (0, c.dexieCastToPromise)(this.table.get(e)).then(e => e ? this.asyncView(e, t) : null).catch(e => {
      A(e, "get", this.table.name);
      throw e;
    });
  }
  merge(e, t) {
    var n = this;
    return (0, i.default)(function* () {
      const r = n.propFilter(t);
      const i = yield n._encryptAndSerialize(r, true);
      try {
        yield (0, c.dexieCastToPromise)(n.table.update(e, i));
      } catch (e) {
        A(e, "merge", n.table.name);
        throw e;
      }
    })();
  }
  remove(e) {
    var t = this;
    return (0, i.default)(function* () {
      try {
        yield (0, c.dexieCastToPromise)(t.table.delete(e));
      } catch (e) {
        A(e, "remove", t.table.name);
        throw e;
      }
    })();
  }
  bulkCreate(e) {
    if (e.length === 0) {
      return (0, c.dexieCastToPromise)();
    }
    const t = e.map(e => this.propFilter(e));
    if (this._hasEncryptedColumn()) {
      return (0, c.dexieCastToPromise)(this.db.transaction("rw", this.table, () => this._encryptSerializeAndBulkAdd(t))).catch(e => {
        A(e, "bulkCreate", this.table.name);
        throw e;
      });
    }
    const n = t.map(e => this._serializeColumns(e));
    return (0, c.dexieCastToPromise)(this.table.bulkAdd(n));
  }
  bulkCreateOrReplace(e) {
    if (e.length === 0) {
      return (0, c.dexieCastToPromise)();
    }
    const t = e.map(e => this.propFilter(e));
    if (this._hasEncryptedColumn()) {
      return (0, c.dexieCastToPromise)(this.db.transaction("rw", this.table, () => this._encryptSerializeAndBulkPut(t))).catch(e => {
        A(e, "bulkCreateOrReplace", this.table.name);
        throw e;
      });
    }
    const n = t.map(e => this._serializeColumns(e));
    return (0, c.dexieCastToPromise)(this.table.bulkPut(n));
  }
  bulkCreateOrMerge(e) {
    var t = this;
    return (0, i.default)(function* () {
      if (e.length === 0) {
        return (0, c.dexieCastToPromise)();
      }
      const n = new Map();
      const r = t._primaryKey();
      function a() {
        return (a = (0, i.default)(function* (e) {
          const n = t.table.where(":id").anyOf(Array.from(e.keys()));
          yield n.modify(t => {
            Object.assign(t, e.get(t[r]));
            e.delete(t[r]);
          });
          return Array.from(e.values());
        })).apply(this, arguments);
      }
      (yield t._encryptBulkUpdates(e)).forEach(e => {
        const i = t.propFilter(e);
        const a = t._serializeColumns(i, true);
        (0, f.default)(r in a, "Called `bulkCreateOrMerge` with item(s) not including the primary key");
        n.set(a[r], a);
      });
      return (0, c.dexieCastToPromise)(t.db.transaction("rw", t.table, () => function () {
        return a.apply(this, arguments);
      }(n).then(e => e.length === 0 ? (0, c.dexieCastToPromise)() : t.table.bulkPut(e)))).catch(e => {
        A(e, "bulkCreateOrMerge", t.table.name);
        throw e;
      });
    })();
  }
  bulkGet(e) {
    let t = !(arguments.length > 1 && arguments[1] !== undefined) || arguments[1];
    if (e.length === 0) {
      return Promise.resolve([]);
    } else {
      return (0, c.dexieCastToPromise)(this.db.transaction("r", this.table, () => {
        const t = e.map(e => this.table.get(e));
        return s.default.Promise.all(t);
      })).then(e => this.asyncViewMap(e, t)).catch(e => {
        A(e, "bulkGet", this.table.name);
        throw e;
      });
    }
  }
  bulkRemove(e) {
    if (e.length === 0) {
      return Promise.resolve();
    } else {
      return (0, c.dexieCastToPromise)(this.db.transaction("rw", this.table, () => this.table.bulkDelete(e))).catch(e => {
        A(e, "bulkRemove", this.table.name);
        throw e;
      });
    }
  }
  bulkRemoveByIndex(e, t) {
    if (t.length === 0) {
      return Promise.resolve();
    } else {
      return (0, c.dexieCastToPromise)(this.table.where(v(e, this.tableColumns)).anyOf(t).delete()).catch(e => {
        A(e, "bulkRemoveByIndex", this.table.name);
        throw e;
      });
    }
  }
  all(e, t) {
    let n = T(this.table.orderBy((e == null ? undefined : e.index) ? v(e.index, this.tableColumns) : ":id"), e);
    if (t) {
      n = n.until(e => t(this._deserializeColumns(e)));
    }
    let r = null;
    switch (e == null ? undefined : e.returnKeyType) {
      case "keys":
        r = (0, c.dexieCastToPromise)(n.keys());
        break;
      case "primary_key":
        r = (0, c.dexieCastToPromise)(n.primaryKeys());
        break;
      default:
        r = (0, c.dexieCastToPromise)(n.toArray()).then(t => this.asyncViewMap(t, e == null ? undefined : e.shouldDecrypt));
    }
    return r.catch(e => {
      A(e, "all", this.table.name);
      throw e;
    });
  }
  count() {
    return (0, c.dexieCastToPromise)(this.table.count()).catch(e => {
      A(e, "count", this.table.name);
      throw e;
    });
  }
  bulkDeleteRange(e, t, n, r) {
    return T(this.table.where(v(e, this.tableColumns)).between(t, n, !!(r == null ? undefined : r.lowerInclusive), !!(r == null ? undefined : r.upperInclusive)), r).delete().catch(e => {
      A(e, "bulkDeleteRange", this.table.name);
      throw e;
    });
  }
  equals(e, t, n) {
    return (0, c.dexieCastToPromise)(T(this.table.where(v(e, this.tableColumns)).equals(t), n).toArray()).then(e => this.asyncViewMap(e, n == null ? undefined : n.shouldDecrypt)).catch(e => {
      A(e, "equals", this.table.name);
      throw e;
    });
  }
  anyOf(e, t, n) {
    if (t.length === 0) {
      return Promise.resolve([]);
    } else {
      return (0, c.dexieCastToPromise)(T(this.table.where(v(e, this.tableColumns)).anyOf(t), n).distinct().toArray()).then(e => this.asyncViewMap(e, n == null ? undefined : n.shouldDecrypt)).catch(e => {
        A(e, "anyOf", this.table.name);
        throw e;
      });
    }
  }
  startsWithAnyOf(e, t, n) {
    if (t.length === 0) {
      return Promise.resolve([]);
    } else {
      return (0, c.dexieCastToPromise)(T(this.table.where(v(e, this.tableColumns)).startsWithAnyOf(t), n).distinct().toArray()).then(e => this.asyncViewMap(e, n == null ? undefined : n.shouldDecrypt)).catch(e => {
        A(e, "startsWithAnyOf", this.table.name);
        throw e;
      });
    }
  }
  greaterThan(e, t, n) {
    const r = (n == null ? undefined : n.inclusive) === true ? this.table.where(v(e, this.tableColumns)).aboveOrEqual(t) : this.table.where(v(e, this.tableColumns)).above(t);
    return (0, c.dexieCastToPromise)(T(r, n).toArray()).then(e => this.asyncViewMap(e, n == null ? undefined : n.shouldDecrypt)).catch(e => {
      A(e, "greaterThan", this.table.name);
      throw e;
    });
  }
  lessThan(e, t, n) {
    const r = (n == null ? undefined : n.inclusive) === true ? this.table.where(v(e, this.tableColumns)).belowOrEqual(t) : this.table.where(v(e, this.tableColumns)).below(t);
    return (0, c.dexieCastToPromise)(T(r, n).toArray()).then(e => this.asyncViewMap(e, n == null ? undefined : n.shouldDecrypt)).catch(e => {
      A(e, "lessThan", this.table.name);
      throw e;
    });
  }
  between(e, t, n, r, i) {
    const a = T(this.table.where(v(e, this.tableColumns)).between(t, n, !!(r == null ? undefined : r.lowerInclusive), !!(r == null ? undefined : r.upperInclusive)), r);
    let o = null;
    switch (r == null ? undefined : r.returnKeyType) {
      case "keys":
        o = (0, c.dexieCastToPromise)(a.keys());
        break;
      case "primary_key":
        o = (0, c.dexieCastToPromise)(a.primaryKeys());
        break;
      default:
        o = i ? (0, c.dexieCastToPromise)(a.until(e => i(this._deserializeColumns(e))).toArray()).then(e => this.asyncViewMap(e, r == null ? undefined : r.shouldDecrypt)) : (0, c.dexieCastToPromise)(a.toArray()).then(e => this.asyncViewMap(e, r == null ? undefined : r.shouldDecrypt));
    }
    return o.catch(e => {
      A(e, "between", this.table.name);
      throw e;
    });
  }
  forEachSortedBy(e, t) {
    var n = this;
    return this.table.orderBy(e).each(function () {
      var e = (0, i.default)(function* (e) {
        const r = n._deserializeColumns(e);
        const i = yield n._decryptColumns(r);
        return t(i);
      });
      return function () {
        return e.apply(this, arguments);
      };
    }()).catch(e => {
      A(e, "forEachSortedBy", this.table.name);
      throw e;
    });
  }
  forEach(e) {
    var t = this;
    return this.table.each(function () {
      var n = (0, i.default)(function* (n) {
        const r = t._deserializeColumns(n);
        const i = yield t._decryptColumns(r);
        return e(i);
      });
      return function () {
        return n.apply(this, arguments);
      };
    }()).catch(e => {
      A(e, "forEach", this.table.name);
      throw e;
    });
  }
  clear() {
    return (0, c.dexieCastToPromise)(this.table.clear()).catch(e => {
      A(e, "clear", this.table.name);
      throw e;
    });
  }
  _primaryKey() {
    return this.table.schema.primKey.name;
  }
  _hasEncryptedColumn() {
    return this.tableEncryptedColumns.size > 0;
  }
}
function E(e) {
  if (e.length > 1) {
    e.forEach(e => {
      (0, f.default)(e.primaryKey && e.primaryKey === d.PRIMARY_KEY_TYPE.COMPOSITE, "Invalid column passed to `formatPrimaryKey`");
    });
    return `[${e.map(e => e.packedName).join("+")}]`;
  }
  const t = e[0];
  (0, f.default)(t.primaryKey && t.primaryKey !== d.PRIMARY_KEY_TYPE.COMPOSITE, "Invalid column passed to `formatPrimaryKey`");
  if (t.primaryKey === d.PRIMARY_KEY_TYPE.AUTO_INCREMENT) {
    return `${t.packedName}++`;
  } else {
    return t.packedName;
  }
}
function S(e) {
  switch (e.type) {
    case d.INDEX_TYPE.SIMPLE:
      return e.column;
    case d.INDEX_TYPE.COMPOSITE:
      return `[${e.columns.join("+")}]`;
    case d.INDEX_TYPE.ARRAY:
      return `*${e.column}`;
    case d.INDEX_TYPE.UNIQUE:
      return `&${e.column}`;
  }
  throw (0, p.default)(`Cannot format index of type "${e.type}"`);
}
function v(e, t) {
  const n = e.map(n => {
    const r = t.get(n);
    if (r == null) {
      __LOG__(4, undefined, new Error())`[storage] trying to query with a non-existing column ${n} in index ${e.join(",")}`;
      throw (0, p.default)("format-query-index-nonexistent-column");
    }
    return r.packedName;
  });
  if (n.length === 1) {
    return n[0];
  } else {
    return `[${n.join("+")}]`;
  }
}
function T(e, t) {
  let n = e;
  if ((t == null ? undefined : t.reverse) === true) {
    n = n.reverse();
  }
  if ((t == null ? undefined : t.offset) != null) {
    n = n.offset(t.offset);
  }
  if ((t == null ? undefined : t.limit) != null && t.limit !== 0) {
    n = n.limit(t.limit);
  }
  return n;
}
function M(e) {
  return Promise.resolve(e);
}
function A(e, t, n) {
  __LOG__(3, true, undefined, true)`idb failed to do Operation: ${t} on Table: ${n}. Failed with error ${e}`;
  SEND_LOGS("storage-error", 0);
}
function b(e, t) {
  const n = Array.from(t.entries());
  e.forEach(e => {
    n.forEach(t => {
      let [n, r] = t;
      if (e[n]) {
        if (!(e[n]._keyId && e[n]._data && e[n].iv)) {
          __LOG__(2)`[CRITICAL] Records contain unencrypted field`;
        }
      }
    });
  });
}
exports.default = class {
  constructor(e, t) {
    this.tableNames = new Map();
    this.tableColumns = new Map();
    this.tableEncryptedColumns = new Map();
    this.errorHandlers = new Map();
    this.name = e;
    this.db = new s.default(this.name, {
      chromeTransactionDurability: "relaxed",
      addons: []
    });
    this.transformSchema = (t == null ? undefined : t.transformSchema) || M;
    this.packColumns = !!(t == null ? undefined : t.packColumns);
  }
  initialize(e, t, n, r) {
    if (r) {
      this.errorHandlers = r;
    }
    return function (e, t, n, r, i) {
      return (0, o.promiseReduce)(e, (e, a) => i((0, d.cloneSchema)(a)).then(i => {
        (0, f.default)(!(i.name in e), "Multiple tables resulted in the same transformed name");
        if (i.deleted === true) {
          e[i.name] = null;
          return e;
        }
        t.set(a.name, i.name);
        n.set(a.name, i.columns.reduce((e, t) => {
          e.set(t.name, t);
          return e;
        }, new Map()));
        r.set(a.name, i.encryptedColumns || {});
        const o = i.columns.filter(e => e.primaryKey);
        (0, f.default)(o.length >= 1, `No primary key was defined for "${a.name}"`);
        const s = [E(o)].concat(i.indexes.map(S)).join(", ");
        e[i.name] = s;
        return e;
      }), {});
    }(t, this.tableNames, this.tableColumns, this.tableEncryptedColumns, this.transformSchema).then(t => {
      this.db.version(e + 1).stores(t).upgrade(e => {
        var t;
        if (n) {
          if ((t = e[n.name]) === null || t === undefined) {
            return undefined;
          } else {
            return t.toCollection().modify(n.callback);
          }
        }
      });
    });
  }
  open() {
    var e = this;
    return (0, i.default)(function* () {
      yield (0, c.dexieCastToPromise)(e.db.open());
    })();
  }
  transact(e, t) {
    let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "rw";
    return (0, c.dexieCastToPromise)(this.db.transaction(n, e, () => t())).catch(e => {
      const t = this.errorHandlers.get(e.name);
      if (!t) {
        throw e;
      }
      t(e);
    });
  }
  close() {
    this.db.close();
    return (0, c.dexieCastToPromise)();
  }
  view(e, t, n, r) {
    (0, f.default)(this.tableNames.has(e), `Attempted to get view for uninitialized table "${e}"`);
    (0, f.default)(this.tableColumns.has(e), `Attempted to get columns for uninitialized table "${e}"`);
    const i = n ? function (e) {
      if (!e) {
        return e => e;
      }
      return t => {
        const n = {};
        e.forEach(e => {
          const r = e.name;
          if (t.hasOwnProperty(r)) {
            n[r] = t[r];
          }
        });
        return n;
      };
    }(this.tableColumns.get(e)) : e => e;
    return new y(this.db.table(this.tableNames.get(e)), this.db, t, i, (0, a.default)(this.tableColumns.get(e), "this.tableColumns.get(table)"), (0, a.default)(this.tableEncryptedColumns.get(e), "this.tableEncryptedColumns.get(table)"), {
      shouldUseDbMsgEncKeyForEncryptedCol: r,
      packColumns: this.packColumns
    });
  }
  available() {
    return Promise.resolve(true);
  }
  reset() {
    this.tableNames = new Map();
    return (0, c.dexieCastToPromise)(this.db.delete());
  }
  getDbName() {
    return this.name;
  }
};