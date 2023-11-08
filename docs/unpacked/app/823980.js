var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOptionLocalIdMap = function () {
  return s.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./390934.js");
var o = r(require("./670983.js"));
function s() {
  return (s = (0, i.default)(function* (e) {
    const t = yield Promise.all(e.map(function () {
      var e = (0, i.default)(function* (e) {
        const t = yield l(e);
        return {
          hash: t,
          hexHash: (0, a.toHex)(new Uint8Array(t)),
          localId: e.localId
        };
      });
      return function () {
        return e.apply(this, arguments);
      };
    }()));
    const n = new Map();
    const r = new Map();
    for (const {
      hash: e,
      hexHash: i,
      localId: a
    } of t) {
      n.set(i, a);
      r.set(a, e);
    }
    return {
      getLocalIdForHexHash: e => (0, o.default)(n.get(e), "hexHashesToLocalIds.get(hexHash)"),
      getLocalIdForHash: e => (0, o.default)(n.get((0, a.toHex)(new Uint8Array(e))), "hexHashesToLocalIds.get(toHex(new Uint8Array(hash)))"),
      getHashForLocalId: e => (0, o.default)(r.get(e), "localIdsToHexHashes.get(localId)"),
      includesHashes: e => e.every(e => n.has((0, a.toHex)(new Uint8Array(e))))
    };
  })).apply(this, arguments);
}
function l(e) {
  return self.crypto.subtle.digest("SHA-256", new TextEncoder().encode(e.name));
}