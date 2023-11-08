var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DATABASE_NAME = undefined;
exports.createStorage = function (e) {
  const t = new o.default(c, {
    packColumns: e.packColumns
  });
  d = new s.Storage(t, e);
};
exports.destroyStorage = function () {
  if (d == null) {
    return Promise.reject((0, l.default)("[model-storage] Storage should be created first before being destroyed"));
  }
  return d.purge().then(() => {
    d = null;
  }).catch(e => {
    d = null;
    throw e;
  });
};
exports.getStorage = function () {
  (0, u.default)(d != null, "[model-storage] Storage should be created first before being accessed");
  return d;
};
exports.storageExists = function () {
  return (0, a.dexieCastToPromise)(i.default.exists(c));
};
var i = r(require("./721698.js"));
var a = require("./691935.js");
var o = r(require("./53993.js"));
var s = require("./964978.js");
var l = r(require("./556869.js"));
var u = r(require("../vendor/441143.js"));
const c = "model-storage";
exports.DATABASE_NAME = c;
let d = null;