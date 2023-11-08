var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addMissingKeys = function () {
  return M.apply(this, arguments);
};
exports.hasExpiredKeys = E;
exports.setMissingKeyTimeoutInTransaction = _;
exports.updateMissingKeyDevices = function () {
  return f.apply(this, arguments);
};
exports.updateMissingKeys = function (e, t) {
  const n = [];
  const r = [];
  e.forEach(e => {
    const t = e.keyData;
    const i = (0, u.syncKeyIdToHex)(e.keyId);
    if (t) {
      n.push(i);
    } else {
      r.push(i);
    }
  });
  __LOG__(2)`syncd: updateMissingKeys from device ${t}
\tkeys with keyData: ${n}
\tkeys without keyData: ${r}`;
  return (0, o.runInTransaction)({
    MissingKeyStore: true
  }, function () {
    var e = (0, i.default)(function* (e) {
      let {
        MissingKeyStore: i
      } = e;
      if (n.length > 0) {
        yield i.bulkRemove(n);
        yield g({
          MissingKeyStore: i
        });
      }
      if (r.length > 0) {
        const e = (yield i.bulkGet(r)).filter(Boolean);
        e.forEach(e => e.deviceResponses.set(t, false));
        __LOG__(2)`syncd: updateMissingKeys: begin updating missing keys from device ${t}
\tmissingKeys: [${r}]`;
        yield i.bulkUpdate(e);
        __LOG__(2)`syncd: updateMissingKeys: finish updating missing keys from device ${t}`;
        yield v({
          MissingKeyStore: i
        });
      }
    });
    return function () {
      return e.apply(this, arguments);
    };
  }());
};
var i = r(require("../vendor/311504.js"));
var a = require("./138291.js");
var o = require("./819416.js");
var s = require("./822144.js");
var l = require("./522815.js");
var u = require("./405057.js");
var c = require("./787685.js");
var d = require("./632157.js");
let p;
function f() {
  return (f = (0, i.default)(function* () {
    const e = (yield (0, o.getDbImpls)().getDeviceFingerprint()).deviceIndexes;
    return (0, o.runInTransaction)({
      MissingKeyStore: true
    }, function () {
      var t = (0, i.default)(function* (t) {
        let {
          MissingKeyStore: n
        } = t;
        const r = yield n.getAll();
        if (r.length === 0) {
          return Promise.resolve();
        }
        r.forEach(t => {
          t.deviceResponses.forEach((n, r) => {
            if (!e.includes(r)) {
              t.deviceResponses.delete(r);
            }
          });
        });
        yield n.bulkUpdate(r);
        yield v({
          MissingKeyStore: n
        });
      });
      return function () {
        return t.apply(this, arguments);
      };
    }());
  })).apply(this, arguments);
}
function _() {
  return (0, o.runInTransaction)({
    MissingKeyStore: true
  }, e => {
    let {
      MissingKeyStore: t
    } = e;
    return g({
      MissingKeyStore: t
    });
  });
}
function g() {
  return m.apply(this, arguments);
}
function m() {
  return (m = (0, i.default)(function* (e) {
    let {
      MissingKeyStore: t
    } = e;
    clearTimeout(p);
    p = null;
    const n = yield t.getAll();
    if (n.length === 0) {
      return;
    }
    __LOG__(2)`syncd: _setMissingKeyTimeout: missing keys: ${n.map(e => (0, u.syncKeyIdToHex)(e.keyId))}`;
    const r = n.reduce((e, t) => e.timestamp < t.timestamp ? e : t);
    const i = (0, o.getConfig)().syncdWaitForKeyTimeoutDays() * d.DAY_MILLISECONDS - (-r.timestamp + (0, d.unixTimeMs)());
    __LOG__(2)`syncd: earliest missing key: ${(0, u.syncKeyIdToHex)(r.keyId)}, timestamp=${r.timestamp}, timeoutMs=${i}`;
    p = setTimeout(h, i);
  })).apply(this, arguments);
}
function h() {
  return y.apply(this, arguments);
}
function y() {
  return (y = (0, i.default)(function* () {
    __LOG__(2)`syncd: _timeoutWhileWaitingForMissingKey`;
    if (yield E()) {
      (0, c.reportSyncdFatalError)(c.SyncdFatalErrorType.TIMEOUT_WHILE_WAITING_FOR_MISSING_KEY);
      __LOG__(4, undefined, new Error(), true)`syncd: fatal error: timeout while waiting for missing key`;
      SEND_LOGS("syncd fatal error: timeout while waiting for missing key");
      (0, o.getDbImpls)().handleSyncdFatal();
    } else {
      __LOG__(2)`syncd: _timeoutWhileWaitingForMissingKey: no expired keys`;
    }
  })).apply(this, arguments);
}
function E() {
  return S.apply(this, arguments);
}
function S() {
  return (S = (0, i.default)(function* () {
    __LOG__(2)`syncd: check if has expired keys`;
    const e = (yield (0, l.getAllSyncKeysInTransaction)()).map(e => (0, u.syncKeyIdToHex)(e.keyId));
    __LOG__(2)`syncd: all keys: ${e}`;
    const t = yield (0, s.getAllMissingKeysInTransaction)();
    __LOG__(2)`syncd: missing keys: ${t.map(e => (0, u.syncKeyIdToHex)(e.keyId))}`;
    const n = t.filter(t => !e.includes(t.keyHex));
    __LOG__(2)`syncd: actually missing keys: ${t.map(e => (0, u.syncKeyIdToHex)(e.keyId))}`;
    const r = n.filter(e => (0, o.getConfig)().syncdWaitForKeyTimeoutDays() * d.DAY_MILLISECONDS < (0, d.unixTimeMs)() - e.timestamp);
    __LOG__(2)`syncd: expired keys: ${r.map(e => (0, u.syncKeyIdToHex)(e.keyId))}`;
    return r.length > 0;
  })).apply(this, arguments);
}
function v() {
  return T.apply(this, arguments);
}
function T() {
  return (T = (0, i.default)(function* (e) {
    let {
      MissingKeyStore: t
    } = e;
    const n = yield t.getAll();
    for (const e of n) {
      let t = true;
      for (const n of e.deviceResponses.values()) {
        if (n == null) {
          t = false;
          break;
        }
      }
      if (t) {
        __LOG__(4, undefined, new Error(), true)`syncd: fatal error: missing key on all clients`;
        SEND_LOGS("syncd: fatal error: missing key on all clients");
        (0, c.reportSyncdFatalError)(c.SyncdFatalErrorType.MISSING_KEY_ON_ALL_CLIENTS);
        yield (0, a.asyncSleep)(5000);
        return void (0, o.getDbImpls)().handleSyncdFatal();
      }
    }
  })).apply(this, arguments);
}
function M() {
  return (M = (0, i.default)(function* (e, t) {
    const n = () => {
      const e = new Map();
      t.forEach(t => e.set(t, null));
      return e;
    };
    const r = e.map(e => ({
      keyHex: (0, u.syncKeyIdToHex)(e),
      keyId: e,
      timestamp: (0, d.unixTimeMs)(),
      deviceResponses: n()
    }));
    yield (0, s.bulkUpdateMissingKeysInTransaction)(r);
    yield _();
  })).apply(this, arguments);
}