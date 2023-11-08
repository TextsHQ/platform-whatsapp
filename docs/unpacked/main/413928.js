var a = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleKeyShare = function () {
  return s.apply(this, arguments);
};
var r = a(require("../vendor/311504.js"));
var o = require("../app/522815.js");
var l = require("../app/280015.js");
var i = require("../app/405057.js");
var u = require("../app/2893.js");
function s() {
  return (s = (0, r.default)(function* (e, t) {
    if (!t.some(e => e.fullKey != null)) {
      __LOG__(2)`syncd: key share from device ${e} has no keys with keydata.`;
    }
    yield Promise.all(t.map(function () {
      var t = (0, r.default)(function* (t) {
        let {
          keyId: n,
          fullKey: a
        } = t;
        if (a == null) {
          return;
        }
        if (!(yield (0, o.getSyncKeyInTransaction_DO_NOT_USE)(n))) {
          yield (0, o.setSyncKeyInTransaction)(a);
          __LOG__(2)`syncd: stored key share key id ${(0, i.syncKeyIdToHex)(n)} from device ${e}`;
        }
      });
      return function () {
        return t.apply(this, arguments);
      };
    }()));
    yield (0, u.updateMissingKeys)(t.map(e => {
      let {
        keyId: t,
        fullKey: n
      } = e;
      return {
        keyId: t,
        keyData: n == null ? undefined : n.keyData
      };
    }), e);
    return (0, l.syncBlockedCollections)();
  })).apply(this, arguments);
}