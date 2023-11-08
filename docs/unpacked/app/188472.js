var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteEncKeysAndCache = function () {
  return d.apply(this, arguments);
};
exports.generateFinalDbEncryptionAndFtsKeyForInvoker = function (e) {
  return (0, s.get)().generateFinalDbEncryptionAndFtsKey(e);
};
exports.initEncSalt = function () {
  return u.apply(this, arguments);
};
exports.initEncSaltForInvoker = function () {
  return c.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./780549.js");
var o = require("./659102.js");
var s = require("./542137.js");
let l = null;
function u() {
  return (u = (0, i.default)(function* () {
    if (l == null) {
      const e = require("./47405.js").nx;
      l = e();
    }
    const e = yield l;
    if (e && e.constructor === Uint8Array) {
      return o.DbEncKeyStore.init(e);
    }
  })).apply(this, arguments);
}
function c() {
  return (c = (0, i.default)(function* () {
    if (l == null) {
      const e = require("./47405.js").nx;
      l = e();
    }
    const e = yield l;
    if (e && e.constructor === Uint8Array) {
      (0, s.get)().initDatabaseEncnKey(e);
    }
  })).apply(this, arguments);
}
function d() {
  return (d = (0, i.default)(function* () {
    yield Promise.all([o.DbEncKeyStore.deleteKeys(), (0, s.get)().deleteDbEncKeyCache()]);
  })).apply(this, arguments);
}
a.Cmd.on("logout", () => {
  l = Promise.resolve(null);
});