var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleMissingKeysInPatches = function () {
  return _.apply(this, arguments);
};
exports.handleMissingKeysInSnapshot = function () {
  return f.apply(this, arguments);
};
exports.requestAllMissingKeys = function () {
  return h.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
var a = require("./819416.js");
var o = require("./822144.js");
var s = require("./522815.js");
var l = require("./405057.js");
var u = require("./256764.js");
var c = require("./347197.js");
var d = require("./2893.js");
const p = (0, c.toSyncKeyId)(new ArrayBuffer(0));
function f() {
  return (f = (0, i.default)(function* (e, t) {
    const n = new Set();
    const r = (yield (0, s.getAllSyncKeysInTransaction)()).map(e => (0, l.syncKeyIdToHex)(e.keyId));
    t.records.forEach(e => {
      const t = e.keyId.id;
      if ((0, l.syncKeyIdsEqual)(t, p)) {
        throw new u.SyncdFatalError("snapshot has empty key");
      }
      const i = (0, l.syncKeyIdToHex)(t);
      if (!r.includes(i)) {
        n.add(i);
      }
    });
    __LOG__(2)`syncd: collection ${e}'s snapshot has missing keys ${Array.from(n)}`;
    yield g(n);
  })).apply(this, arguments);
}
function _() {
  return (_ = (0, i.default)(function* (e, t) {
    const n = new Set();
    const r = (yield (0, s.getAllSyncKeysInTransaction)()).map(e => (0, l.syncKeyIdToHex)(e.keyId));
    t.forEach(e => {
      const t = e.keyId.id;
      if ((0, l.syncKeyIdsEqual)(t, p)) {
        throw new u.SyncdFatalError("syncd: patch has empty key. patch device id: ${p.deviceIndex}");
      }
      const i = (0, l.syncKeyIdToHex)(t);
      if (!r.includes(i)) {
        __LOG__(2)`syncd: handleMissingKeysInPatches: missing key: keyId: ${i}, patch version: ${e.version.version}, patch device id: ${e.deviceIndex}`;
        n.add(i);
      }
    });
    __LOG__(2)`syncd: collection ${e}'s patches has missing keys ${Array.from(n)}`;
    yield g(n);
  })).apply(this, arguments);
}
function g() {
  return m.apply(this, arguments);
}
function m() {
  return (m = (0, i.default)(function* (e) {
    if ((0, a.getConfig)().offlineProcessingState() !== "idle") {
      return void __LOG__(2)`syncd: _handleMissingKeys: skipping due to resume from restart in progress`;
    }
    const t = Array.from(e);
    __LOG__(2)`syncd: _handleMissingKeys: missing keys [${t}]`;
    const n = new Set((yield (0, o.bulkGetMissingKeysInTransaction)(t)).filter(Boolean).map(e => e.keyHex));
    const r = t.filter(e => !n.has(e));
    __LOG__(2)`syncd: _handleMissingKeys: missing keys after filter: [${r}]`;
    if (r.length === 0) {
      return Promise.resolve();
    }
    const i = r.map(e => (0, c.toSyncKeyId)((0, l.hexToUint8Array)(e).buffer));
    const s = yield (0, a.getDbImpls)().sendSyncdKeyRequest(i);
    yield (0, d.addMissingKeys)(i, s);
  })).apply(this, arguments);
}
function h() {
  return (h = (0, i.default)(function* () {
    const e = yield (0, o.getAllMissingKeysInTransaction)();
    __LOG__(2)`syncd: requestAllMissingKeys: missing keys: [${e.map(e => e.keyHex)}]`;
    if (e.length !== 0) {
      yield (0, a.getDbImpls)().sendSyncdKeyRequest(e.map(e => e.keyId));
    }
  })).apply(this, arguments);
}