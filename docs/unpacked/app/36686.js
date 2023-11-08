var r = require("../vendor/307914.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearSyncKeysCache = function () {
  l = new Map();
};
exports.getKeyData = function () {
  return u.apply(this, arguments);
};
var i = r(require("../vendor/311504.js"));
var a = require("./417405.js");
var o = require("./522815.js");
var s = require("./347197.js");
let l = new Map();
function u() {
  return (u = (0, i.default)(function* (e) {
    var t;
    const n = (0, a.encodeB64)((0, s.fromSyncKeyId)(e));
    let r = l.get(n);
    if (r) {
      return r.keyData;
    } else {
      r = yield (0, o.getSyncKeyInTransaction_DO_NOT_USE)(e);
      if (r) {
        l.set(n, r);
      }
      if ((t = r) === null || t === undefined) {
        return undefined;
      } else {
        return t.keyData;
      }
    }
  })).apply(this, arguments);
}