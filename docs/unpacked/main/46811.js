var a = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getKeysForKeyRequest = function () {
  return l.apply(this, arguments);
};
var r = a(require("../vendor/311504.js"));
var o = require("../app/522815.js");
function l() {
  return (l = (0, r.default)(function* (e) {
    const t = [];
    const n = [];
    yield Promise.all(e.map(function () {
      var e = (0, r.default)(function* (e) {
        const a = yield (0, o.getSyncKeyInTransaction_DO_NOT_USE)(e);
        if (a) {
          t.push(a);
        } else {
          n.push(e);
        }
      });
      return function () {
        return e.apply(this, arguments);
      };
    }()));
    return {
      keys: t,
      orphanKeys: n
    };
  })).apply(this, arguments);
}